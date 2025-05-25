import { db } from "@/lib/dbconfig"
import type { RowDataPacket, ResultSetHeader } from "mysql2"

// Types for our data structures
export interface ProjectDetail {
  idea_name: string
  slogan: string
  startup_domain: string
  startup_domain_other?: string
  abstract: string
  unmet_need: string
  benefit?: string
  how_solution_works: string
  who_are_competitors: string
  entry_date?: string
  entry_time?: string
  status_of_project?: string
  publish?: boolean
  shortlist?: boolean
  shortlist_stage2?: boolean
  display_stage2?: boolean
  shortlist_stage3?: boolean
  display_stage3?: boolean
  interschool_idea: string
  need_expertises: string
  project_is_fyp: string
  previously_applied_in_fics: string
  previously_participating_year?: string
  previously_applied_project_title?: string
  previously_stage_reached?: string
  participate_in_other_competition?: string
  name_of_competition?: string
  prize_won?: string
  beneficiary?: string
  panel?: string
}

export interface SupervisorDetail {
  name_of_supervisor: string
  supervisor_email: string
  supervisor_contact_number?: string
  supervisor_designation: string
  supervisor_uni: string
  supervisor_uni_school?: string
  supervisor_department: string
  expertises_detail?: string
}

export interface TeamMember {
  name: string
  university: string
  school: string
  year: string
  degree: string
  email: string
  mobile?: string
  gender: string
  province?: string
  cgpa?: string
  other_uni?: string
  other_nust_school?: string
  international_student: string
  internationalcountry?: string
  country?: string
}

export class DatabaseService {
  // Get or create startup domain ID
  static async getOrCreateStartupDomain(domainName: string): Promise<number> {
    const conn = await db.getConnection()
    try {
      // First, try to find existing domain
      const [rows] = await conn.execute<RowDataPacket[]>("SELECT id FROM startup_domains WHERE name = ?", [domainName])

      if (rows.length > 0) {
        return rows[0].id
      }

      // If not found, create new domain
      const [result] = await conn.execute<ResultSetHeader>("INSERT INTO startup_domains (name) VALUES (?)", [
        domainName,
      ])

      return result.insertId
    } finally {
      conn.release()
    }
  }

  // Create international application
  static async createInternationalApplication(
    projectDetail: ProjectDetail,
    supervisorDetail: SupervisorDetail,
    teamMembers: TeamMember[],
  ): Promise<{ applicationId: number; supervisorId: number }> {
    const conn = await db.getConnection()
    try {
      await conn.beginTransaction()

      // Get startup domain ID
      const startupDomainId = await this.getOrCreateStartupDomain(projectDetail.startup_domain)

      // Insert international application
      const [applicationResult] = await conn.execute<ResultSetHeader>(
        `INSERT INTO international_applications (
          idea_name, slogan, startup_domain_id, startup_domain_other, abstract, unmet_need,
          benefit, how_solution_works, who_are_competitors, entry_date, entry_time,
          status_of_project, publish, shortlist, shortlist_stage2, display_stage2,
          shortlist_stage3, display_stage3, interschool_idea, need_expertises,
          project_is_fyp, previously_applied_in_fics, previously_participating_year,
          previously_applied_project_title, previously_stage_reached,
          participate_in_other_competition, name_of_competition, prize_won,
          beneficiary, panel
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          projectDetail.idea_name,
          projectDetail.slogan,
          startupDomainId,
          projectDetail.startup_domain_other ?? null,
          projectDetail.abstract,
          projectDetail.unmet_need,
          projectDetail.benefit ?? null,
          projectDetail.how_solution_works,
          projectDetail.who_are_competitors,
          projectDetail.entry_date ?? null,
          projectDetail.entry_time ?? null,
          projectDetail.status_of_project ?? null,
          projectDetail.publish ?? false,
          projectDetail.shortlist ?? false,
          projectDetail.shortlist_stage2 ?? null,
          projectDetail.display_stage2 ?? null,
          projectDetail.shortlist_stage3 ?? null,
          projectDetail.display_stage3 ?? null,
          projectDetail.interschool_idea,
          projectDetail.need_expertises,
          projectDetail.project_is_fyp,
          projectDetail.previously_applied_in_fics,
          projectDetail.previously_participating_year ?? null,
          projectDetail.previously_applied_project_title ?? null,
          projectDetail.previously_stage_reached ?? null,
          projectDetail.participate_in_other_competition ?? null,
          projectDetail.name_of_competition ?? null,
          projectDetail.prize_won ?? null,
          projectDetail.beneficiary ?? null,
          projectDetail.panel ?? null,
        ],
      )

      const applicationId = applicationResult.insertId

      // Insert supervisor
      const [supervisorResult] = await conn.execute<ResultSetHeader>(
        `INSERT INTO international_supervisors (
          application_id, name_of_supervisor, supervisor_email, supervisor_contact_number,
          supervisor_designation, supervisor_uni, supervisor_uni_school,
          supervisor_department, expertises_detail
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          applicationId,
          supervisorDetail.name_of_supervisor,
          supervisorDetail.supervisor_email,
          supervisorDetail.supervisor_contact_number ?? null,
          supervisorDetail.supervisor_designation,
          supervisorDetail.supervisor_uni,
          supervisorDetail.supervisor_uni_school,
          supervisorDetail.supervisor_department,
          supervisorDetail.expertises_detail ?? null,
        ],
      )

      const supervisorId = supervisorResult.insertId

      // Insert team members
      for (const member of teamMembers) {
        await conn.execute(
          `INSERT INTO international_team_members (
            application_id, supervisor_id, name, university, school, year, degree, email,
            mobile, gender, province, cgpa, other_uni, other_nust_school,
            international_student, international_country, country
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            applicationId,
            supervisorId,
            member.name,
            member.university,
            member.school,
            member.year,
            member.degree,
            member.email,
            member.mobile ?? null,
            member.gender,
            member.province ?? null,
            member.cgpa ?? null,
            member.other_uni ?? null,
            member.other_nust_school ?? null,
            "yes",
            member.internationalcountry ?? null,
            member.country ?? null,
          ],
        )
      }

      await conn.commit()
      return { applicationId, supervisorId }
    } catch (error) {
      await conn.rollback()
      throw error
    } finally {
      conn.release()
    }
  }

  // Create domestic application
  static async createDomesticApplication(
    projectDetail: ProjectDetail,
    supervisorDetail: SupervisorDetail,
    teamMembers: TeamMember[],
  ): Promise<{ applicationId: number; supervisorId: number }> {
    const conn = await db.getConnection()
    try {
      await conn.beginTransaction()

      // Get startup domain ID
      const startupDomainId = await this.getOrCreateStartupDomain(projectDetail.startup_domain)

      // Insert domestic application
      const [applicationResult] = await conn.execute<ResultSetHeader>(
        `INSERT INTO domestic_applications (
          idea_name, slogan, startup_domain_id, startup_domain_other, abstract, unmet_need,
          benefit, how_solution_works, who_are_competitors, entry_date, entry_time,
          status_of_project, publish, shortlist, shortlist_stage2, display_stage2,
          shortlist_stage3, display_stage3, interschool_idea, need_expertises,
          project_is_fyp, previously_applied_in_fics, previously_participating_year,
          previously_applied_project_title, previously_stage_reached,
          participate_in_other_competition, name_of_competition, prize_won,
          beneficiary, panel
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          projectDetail.idea_name,
          projectDetail.slogan,
          startupDomainId,
          projectDetail.startup_domain_other ?? null,
          projectDetail.abstract,
          projectDetail.unmet_need,
          projectDetail.benefit ?? null,
          projectDetail.how_solution_works,
          projectDetail.who_are_competitors,
          projectDetail.entry_date ?? new Date().toISOString().split("T")[0],
          projectDetail.entry_time ?? new Date().toTimeString().split(" ")[0],
          projectDetail.status_of_project ?? null,
          projectDetail.publish ?? false,
          projectDetail.shortlist ?? false,
          projectDetail.shortlist_stage2 ?? null,
          projectDetail.display_stage2 ?? null,
          projectDetail.shortlist_stage3 ?? null,
          projectDetail.display_stage3 ?? null,
          projectDetail.interschool_idea,
          projectDetail.need_expertises,
          projectDetail.project_is_fyp,
          projectDetail.previously_applied_in_fics,
          projectDetail.previously_participating_year ?? null,
          projectDetail.previously_applied_project_title ?? null,
          projectDetail.previously_stage_reached ?? null,
          projectDetail.participate_in_other_competition ?? null,
          projectDetail.name_of_competition ?? null,
          projectDetail.prize_won ?? null,
          projectDetail.beneficiary ?? null,
          projectDetail.panel ?? null,
        ],
      )

      const applicationId = applicationResult.insertId

      // Insert supervisor
      const [supervisorResult] = await conn.execute<ResultSetHeader>(
        `INSERT INTO domestic_supervisors (
          application_id, name_of_supervisor, supervisor_email, supervisor_contact_number,
          supervisor_designation, supervisor_uni, supervisor_uni_school,
          supervisor_department, expertises_detail
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          applicationId,
          supervisorDetail.name_of_supervisor,
          supervisorDetail.supervisor_email,
          supervisorDetail.supervisor_contact_number ?? null,
          supervisorDetail.supervisor_designation,
          supervisorDetail.supervisor_uni,
          supervisorDetail.supervisor_uni_school ?? supervisorDetail.supervisor_department,
          supervisorDetail.supervisor_department,
          supervisorDetail.expertises_detail ?? null,
        ],
      )

      const supervisorId = supervisorResult.insertId

      // Insert team members
      for (const member of teamMembers) {
        await conn.execute(
          `INSERT INTO domestic_team_members (
            application_id, supervisor_id, name, university, school, year, degree, email,
            mobile, gender, province, cgpa, other_uni, other_nust_school,
            international_student, international_country, country
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            applicationId,
            supervisorId,
            member.name,
            member.university,
            member.school,
            member.year,
            member.degree,
            member.email,
            member.mobile ?? null,
            member.gender,
            member.province ?? null,
            member.cgpa ?? null,
            member.other_uni ?? null,
            member.other_nust_school ?? null,
            "no",
            null,
            member.country ?? "Pakistan",
          ],
        )
      }

      await conn.commit()
      return { applicationId, supervisorId }
    } catch (error) {
      await conn.rollback()
      throw error
    } finally {
      conn.release()
    }
  }

  // Get applications with pagination and filtering
  static async getApplications(
    type: "international" | "domestic" | "all" = "all",
    page = 1,
    limit = 10,
    filters: {
      status?: string
      shortlisted?: boolean
      domain?: string
      search?: string
    } = {},
  ) {
    const conn = await db.getConnection()
    try {
      const offset = (page - 1) * limit
      let query = ""
      let countQuery = ""
      const params: any[] = []

      if (type === "all") {
        query = `
          SELECT * FROM all_applications 
          WHERE 1=1
        `
        countQuery = `SELECT COUNT(*) as total FROM all_applications WHERE 1=1`
      } else {
        const tableName = type === "international" ? "international_applications" : "domestic_applications"
        query = `
          SELECT *, '${type}' as application_type FROM ${tableName} 
          WHERE 1=1
        `
        countQuery = `SELECT COUNT(*) as total FROM ${tableName} WHERE 1=1`
      }

      // Add filters
      if (filters.status) {
        query += " AND status_of_project = ?"
        countQuery += " AND status_of_project = ?"
        params.push(filters.status)
      }

      if (filters.shortlisted !== undefined) {
        query += " AND shortlist = ?"
        countQuery += " AND shortlist = ?"
        params.push(filters.shortlisted)
      }

      if (filters.search) {
        query += " AND (idea_name LIKE ? OR abstract LIKE ?)"
        countQuery += " AND (idea_name LIKE ? OR abstract LIKE ?)"
        params.push(`%${filters.search}%`, `%${filters.search}%`)
      }

      // Add pagination
      query += " ORDER BY created_at DESC LIMIT ? OFFSET ?"
      params.push(limit, offset)

      const [applications] = await conn.execute<RowDataPacket[]>(query, params)
      const [countResult] = await conn.execute<RowDataPacket[]>(countQuery, params.slice(0, -2))

      return {
        applications,
        total: countResult[0].total,
        page,
        limit,
        totalPages: Math.ceil(countResult[0].total / limit),
      }
    } finally {
      conn.release()
    }
  }
}
