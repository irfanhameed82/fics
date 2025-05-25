import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/dbconfig";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { projectDetail, supervisorDetail, teamMembers } = body;

  // Validate required project fields
  const requiredProjectFields = [
    "idea_name",
    "slogan",
    "startup_domain",
    "abstract",
    "unmet_need",
    "how_solution_works",
    "who_are_competitors",
    "interschool_idea",
    "need_expertises",
    "previously_applied_in_fics",
    "project_is_fyp",
  ];

  for (const field of requiredProjectFields) {
    if (
      projectDetail[field] === undefined ||
      projectDetail[field] === null ||
      (typeof projectDetail[field] === "string" && projectDetail[field].trim() === "")
    ) {
      return NextResponse.json(
        { error: `Missing required project field: ${field}` },
        { status: 400 }
      );
    }
  }

  // Validate required supervisor fields
  const requiredSupervisorFields = [
    "name_of_supervisor",
    "supervisor_email",
    "supervisor_designation",
    "supervisor_uni",
    "supervisor_department",
  ];

  for (const field of requiredSupervisorFields) {
    if (
      supervisorDetail[field] === undefined ||
      supervisorDetail[field] === null ||
      (typeof supervisorDetail[field] === "string" && supervisorDetail[field].trim() === "")
    ) {
      return NextResponse.json(
        { error: `Missing required supervisor field: ${field}` },
        { status: 400 }
      );
    }
  }

  // Validate team members: array with minimum 2 members
  if (!Array.isArray(teamMembers) || teamMembers.length < 2) {
    return NextResponse.json(
      { error: "At least two team members are required (leader and member)" },
      { status: 400 }
    );
  }

  const requiredMemberFields = [
    "name",
    "email",
    "gender",
    "university",
    "degree",
    "year",
    "school",
  ];

  for (const [i, member] of teamMembers.entries()) {
    for (const field of requiredMemberFields) {
      if (
        member[field] === undefined ||
        member[field] === null ||
        (typeof member[field] === "string" && member[field].trim() === "")
      ) {
        return NextResponse.json(
          { error: `Missing required field '${field}' for team member at index ${i}` },
          { status: 400 }
        );
      }
    }

    // International student must be 'no'
    if (member.international_student !== "no") {
      return NextResponse.json(
        {
          error: `Team member at index ${i} must be a national student (international_student = 'no')`,
        },
        { status: 400 }
      );
    }
  }

  const conn = await db.getConnection();

  try {
    await conn.beginTransaction();

    // Insert project details
    const [projectResult] = await conn.execute(
      `INSERT INTO domestic_applications (
        idea_name, slogan, startup_domain, startup_domain_other, abstract, unmet_need,
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
        projectDetail.startup_domain,
        projectDetail.startup_domain_other ?? null,
        projectDetail.abstract,
        projectDetail.unmet_need,
        projectDetail.benefit ?? null,
        projectDetail.how_solution_works,
        projectDetail.who_are_competitors,
        projectDetail.entry_date ?? new Date().toISOString().split("T")[0],
        projectDetail.entry_time ?? new Date().toTimeString().split(" ")[0],
        projectDetail.status_of_project ?? "new",
        projectDetail.publish ?? false,
        projectDetail.shortlist ?? false,
        projectDetail.shortlist_stage2 ?? false,
        projectDetail.display_stage2 ?? false,
        projectDetail.shortlist_stage3 ?? false,
        projectDetail.display_stage3 ?? false,
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
      ]
    );

    const projectId = (projectResult as any).insertId;

    // Insert supervisor details
    const [supervisorResult] = await conn.execute(
      `INSERT INTO domestic_supervisors (
        application_id, name_of_supervisor, supervisor_email, supervisor_contact_number,
        supervisor_designation, supervisor_uni, supervisor_uni_school,
        supervisor_department, expertises_detail
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        projectId,
        supervisorDetail.name_of_supervisor,
        supervisorDetail.supervisor_email,
        supervisorDetail.supervisor_contact_number ?? null,
        supervisorDetail.supervisor_designation,
        supervisorDetail.supervisor_uni,
        supervisorDetail.supervisor_uni_school ?? supervisorDetail.supervisor_department,
        supervisorDetail.supervisor_department,
        supervisorDetail.expertises_detail ?? null,
      ]
    );

    const supervisorId = (supervisorResult as any).insertId;

    // Insert team members
    for (const member of teamMembers) {
      await conn.execute(
        `INSERT INTO domestic_team_members (
          application_id, supervisor_id, name, university, school, year, degree, email,
          mobile, gender, province, cgpa, other_uni, other_nust_school,
          international_student, internationalcountry, country
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          projectId,
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
          member.internationalcountry ?? null,
          member.country ?? "Pakistan",
        ]
      );
    }

    await conn.commit();

    return NextResponse.json({
      success: true,
      message: "Domestic application submitted successfully",
      applicationId: projectId,
      supervisorId: supervisorId,
    });
  } catch (error: any) {
    await conn.rollback();
    console.error("Error creating domestic application:", error);
    return NextResponse.json(
      {
        error: "Server error during submission",
        details: error.message,
      },
      { status: 500 }
    );
  } finally {
    conn.release();
  }
}
