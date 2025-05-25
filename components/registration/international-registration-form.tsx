"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { toast } from "react-toastify"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { PlusCircle, Trash2 } from "lucide-react"
import { useInternationalFormStore } from "@/lib/stores/international-form-store"
import { useState } from "react"

export default function InternationalRegistrationForm() {
  const {
    formData,
    setFormField,
    teamMembers,
    updateTeamMember,
    addTeamMember,
    removeTeamMember,
    showPreviousProject,
    setShowPreviousProject,
    showOtherCompetition,
    setShowOtherCompetition,
    showExpertise,
    setShowExpertise,
  } = useInternationalFormStore()

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle text input changes
  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFormField(field, value)
  }

  // Handle character count for textareas with limits
  const handleTextAreaChange = (field: string, value: string, maxLength: number) => {
    if (value.length <= maxLength) {
      setFormField(field, value)
    }
  }

  // Validate form before submission
  const validateForm = () => {
    const errors: string[] = []

    // Required project fields
    if (!formData.ideaName) errors.push("Idea Name is required")
    if (!formData.slogan) errors.push("Slogan is required")
    if (!formData.applicationDomain) errors.push("Application Domain is required")
    if (!formData.abstract) errors.push("Abstract is required")
    if (!formData.unmetNeed) errors.push("Unmet Need is required")
    if (!formData.solution) errors.push("Solution description is required")
    if (!formData.competitors) errors.push("Competitors information is required")
    if (!formData.multiDiscipline) errors.push("Multi-discipline selection is required")
    if (!formData.needExpertise) errors.push("Expertise need selection is required")
    if (!formData.previouslyApplied) errors.push("Previous FICS application status is required")
    if (!formData.isFYP) errors.push("FYP status is required")

    // Required supervisor fields
    if (!formData.supervisorName) errors.push("Supervisor Name is required")
    if (!formData.supervisorEmail) errors.push("Supervisor Email is required")
    if (!formData.designation) errors.push("Supervisor Designation is required")
    if (!formData.university) errors.push("University is required")
    if (!formData.department) errors.push("Department is required")

    // Validate team members
    if (teamMembers.length < 2) {
      errors.push("At least 2 team members are required")
    }

    teamMembers.forEach((member, index) => {
      if (!member.name) errors.push(`Team member ${index + 1}: Name is required`)
      if (!member.email) errors.push(`Team member ${index + 1}: Email is required`)
      if (!member.gender) errors.push(`Team member ${index + 1}: Gender is required`)
      if (!member.university) errors.push(`Team member ${index + 1}: University is required`)
      if (!member.degree) errors.push(`Team member ${index + 1}: Degree is required`)
      if (!member.year) errors.push(`Team member ${index + 1}: Year is required`)
      if (!member.department) errors.push(`Team member ${index + 1}: Department is required`)
      if (!member.country) errors.push(`Team member ${index + 1}: Country is required`)
    })

    return errors
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate form
    const errors = validateForm()
    if (errors.length > 0) {
      toast.error(`Please fix the following errors:\n${errors.join("\n")}`)
      return
    }

    setIsSubmitting(true)

    try {
      console.log("=== FORM SUBMISSION DEBUG ===")
      console.log("Form Data:", formData)
      console.log("Team Members:", teamMembers)

      // Map form data to API expected format
      const projectDetail = {
        idea_name: formData.ideaName,
        slogan: formData.slogan,
        startup_domain: formData.applicationDomain,
        startup_domain_other: null,
        abstract: formData.abstract,
        unmet_need: formData.unmetNeed,
        benefit: formData.beneficiaries || null,
        how_solution_works: formData.solution,
        who_are_competitors: formData.competitors,
        entry_date: new Date().toISOString().split("T")[0],
        entry_time: new Date().toTimeString().split(" ")[0],
        status_of_project: null,
        publish: false,
        shortlist: false,
        shortlist_stage2: null,
        display_stage2: null,
        shortlist_stage3: null,
        display_stage3: null,
        interschool_idea: formData.multiDiscipline,
        need_expertises: formData.needExpertise,
        project_is_fyp: formData.isFYP,
        previously_applied_in_fics: formData.previouslyApplied,
        previously_participating_year: formData.previousYear || null,
        previously_applied_project_title: formData.previousTitle || null,
        previously_stage_reached: formData.previousStage || null,
        participate_in_other_competition: formData.otherCompetition || null,
        name_of_competition: formData.competitionName || null,
        prize_won: formData.prizeWon || null,
        beneficiary: formData.beneficiaries || null,
        panel: null,
      }

      const supervisorDetail = {
        name_of_supervisor: formData.supervisorName,
        supervisor_email: formData.supervisorEmail,
        supervisor_contact_number: formData.supervisorContact || null,
        supervisor_designation: formData.designation,
        supervisor_uni: formData.university,
        supervisor_uni_school: formData.department,
        supervisor_department: formData.department,
        expertises_detail: null,
      }

      const teamMembersFormatted = teamMembers.map((member) => ({
        name: member.name,
        university: member.university,
        school: member.department,
        year: member.year,
        degree: member.degree,
        email: member.email,
        mobile: member.mobile || null,
        gender: member.gender,
        province: null,
        cgpa: member.cgpa || null,
        other_uni: null,
        other_nust_school: null,
        international_student: "yes",
        internationalcountry: member.country,
        country: member.country,
      }))

      const payload = {
        projectDetail,
        supervisorDetail,
        teamMembers: teamMembersFormatted,
      }

      console.log("=== PAYLOAD TO SEND ===")
      console.log("Project Detail:", projectDetail)
      console.log("Supervisor Detail:", supervisorDetail)
      console.log("Team Members:", teamMembersFormatted)
      console.log("Full Payload:", JSON.stringify(payload, null, 2))

      const response = await fetch("/api/international_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })

      console.log("=== RESPONSE DEBUG ===")
      console.log("Response status:", response.status)
      console.log("Response ok:", response.ok)
      console.log("Response headers:", Object.fromEntries(response.headers.entries()))

      const responseText = await response.text()
      console.log("Raw response text:", responseText)

      let data
      try {
        data = JSON.parse(responseText)
        console.log("Parsed response data:", data)
      } catch (parseError) {
        console.error("Failed to parse response as JSON:", parseError)
        console.error("Response was:", responseText)
        throw new Error(
          `Server returned invalid JSON. Status: ${response.status}. Response: ${responseText.substring(0, 200)}...`,
        )
      }

      if (!response.ok) {
        throw new Error(data.error || `HTTP ${response.status}: ${data.message || "Unknown error"}`)
      }

      toast.success("Form submitted successfully!")
      console.log("=== SUCCESS ===")
      console.log("Success response:", data)

      // Reset form after successful submission
      window.location.reload()
    } catch (error) {
      console.error("=== SUBMISSION ERROR ===")
      console.error("Error details:", error)
      console.error("Error message:", (error as Error).message)
      console.error("Error stack:", (error as Error).stack)
      toast.error(`Error: ${(error as Error).message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-0 shadow-md">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit}>
          {/* Project Details Section */}
          <div className="mb-8">
            <h2 className="pb-2 mb-4 text-xl font-semibold text-gray-800 border-b">Project Details</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label className="block mb-2">Is it a Final Year Project (FYP)?*</Label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="int-fyp"
                        value="yes"
                        className="w-4 h-4"
                        checked={formData.isFYP === "yes"}
                        onChange={() => handleInputChange("isFYP", "yes")}
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="int-fyp"
                        value="no"
                        className="w-4 h-4"
                        checked={formData.isFYP === "no"}
                        onChange={() => handleInputChange("isFYP", "no")}
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <Label className="block mb-2">Have you previously applied for FICS?*</Label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="int-previous"
                        value="yes"
                        className="w-4 h-4"
                        checked={formData.previouslyApplied === "yes"}
                        onChange={() => {
                          handleInputChange("previouslyApplied", "yes")
                          setShowPreviousProject(true)
                        }}
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="int-previous"
                        value="no"
                        className="w-4 h-4"
                        checked={formData.previouslyApplied === "no"}
                        onChange={() => {
                          handleInputChange("previouslyApplied", "no")
                          setShowPreviousProject(false)
                        }}
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>

              {showPreviousProject && (
                <div className="p-4 space-y-4 rounded-md bg-gray-50">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                      <Label htmlFor="int-previous-year" className="block mb-2">
                        Previously participating year
                      </Label>
                      <Select
                        value={formData.previousYear || ""}
                        onValueChange={(value) => handleInputChange("previousYear", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          {[...Array(10)].map((_, i) => (
                            <SelectItem key={i} value={`${2024 - i}`}>
                              {2024 - i}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="int-previous-title" className="block mb-2">
                        Title of Project*
                      </Label>
                      <Input
                        id="int-previous-title"
                        value={formData.previousTitle || ""}
                        onChange={(e) => handleInputChange("previousTitle", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="int-previous-stage" className="block mb-2">
                        Stage reached*
                      </Label>
                      <Input
                        id="int-previous-stage"
                        value={formData.previousStage || ""}
                        onChange={(e) => handleInputChange("previousStage", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label className="block mb-2">Did you participate in any other competition before?*</Label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="int-competition"
                        value="yes"
                        className="w-4 h-4"
                        checked={formData.otherCompetition === "yes"}
                        onChange={() => {
                          handleInputChange("otherCompetition", "yes")
                          setShowOtherCompetition(true)
                        }}
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="int-competition"
                        value="no"
                        className="w-4 h-4"
                        checked={formData.otherCompetition === "no"}
                        onChange={() => {
                          handleInputChange("otherCompetition", "no")
                          setShowOtherCompetition(false)
                        }}
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <Label className="block mb-2">Multi-discipline Idea?*</Label>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="int-multi"
                          value="yes"
                          className="w-4 h-4"
                          checked={formData.multiDiscipline === "yes"}
                          onChange={() => handleInputChange("multiDiscipline", "yes")}
                        />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="int-multi"
                          value="no"
                          className="w-4 h-4"
                          checked={formData.multiDiscipline === "no"}
                          onChange={() => handleInputChange("multiDiscipline", "no")}
                        />
                        <span>No</span>
                      </label>
                    </div>
                    <span className="text-xs text-gray-500">(Select Yes if your team is from different schools)</span>
                  </div>
                </div>
              </div>

              {showOtherCompetition && (
                <div className="p-4 space-y-4 rounded-md bg-gray-50">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="int-competition-name" className="block mb-2">
                        Name of competition*
                      </Label>
                      <Input
                        id="int-competition-name"
                        value={formData.competitionName || ""}
                        onChange={(e) => handleInputChange("competitionName", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="int-prize-won" className="block mb-2">
                        Prize Won*
                      </Label>
                      <Input
                        id="int-prize-won"
                        value={formData.prizeWon || ""}
                        onChange={(e) => handleInputChange("prizeWon", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <Label className="block mb-2">Do you need expertise from another area?*</Label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="int-expertise"
                      value="yes"
                      className="w-4 h-4"
                      checked={formData.needExpertise === "yes"}
                      onChange={() => {
                        handleInputChange("needExpertise", "yes")
                        setShowExpertise(true)
                      }}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="int-expertise"
                      value="no"
                      className="w-4 h-4"
                      checked={formData.needExpertise === "no"}
                      onChange={() => {
                        handleInputChange("needExpertise", "no")
                        setShowExpertise(false)
                      }}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {showExpertise && (
                <div className="p-4 rounded-md bg-gray-50">
                  <Label htmlFor="int-expertise-needed" className="block mb-2">
                    Explain what expertise you need - Only use keywords (Max length: 50)
                  </Label>
                  <Input
                    id="int-expertise-needed"
                    maxLength={50}
                    value={formData.expertiseNeeded || ""}
                    onChange={(e) => handleInputChange("expertiseNeeded", e.target.value)}
                  />
                  <div className="mt-1 text-xs text-right text-gray-500">
                    {formData.expertiseNeeded?.length || 0}/50
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Idea Details Section */}
          <div className="mb-8">
            <h2 className="pb-2 mb-4 text-xl font-semibold text-gray-800 border-b">Idea Details</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="int-idea-name" className="block mb-2">
                    Idea Name (max two words)*
                  </Label>
                  <Input
                    id="int-idea-name"
                    value={formData.ideaName}
                    onChange={(e) => handleInputChange("ideaName", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="int-slogan" className="block mb-2">
                    Slogan (max five words)*
                  </Label>
                  <Input
                    id="int-slogan"
                    value={formData.slogan}
                    onChange={(e) => handleInputChange("slogan", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="int-application-domain" className="block mb-2">
                  Application Domain*
                </Label>
                <Select
                  value={formData.applicationDomain}
                  onValueChange={(value) => handleInputChange("applicationDomain", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-poverty">No Poverty</SelectItem>
                    <SelectItem value="zero-hunger">Zero Hunger</SelectItem>
                    <SelectItem value="good-health-and-well-being">Good Health and Well-being</SelectItem>
                    <SelectItem value="quality-education">Quality Education</SelectItem>
                    <SelectItem value="gender-equality">Gender Equality</SelectItem>
                    <SelectItem value="clean-water-and-sanitation">Clean Water and Sanitation</SelectItem>
                    <SelectItem value="affordable-and-clean-energy">Affordable and Clean Energy</SelectItem>
                    <SelectItem value="decent-work-and-economic-growth">Decent Work and Economic Growth</SelectItem>
                    <SelectItem value="industry-innovation-and-infrastructure">
                      Industry, Innovation and Infrastructure
                    </SelectItem>
                    <SelectItem value="reduced-inequalities">Reduced Inequalities</SelectItem>
                    <SelectItem value="sustainable-cities-and-communities">
                      Sustainable Cities and Communities
                    </SelectItem>
                    <SelectItem value="responsible-consumption-and-production">
                      Responsible Consumption and Production
                    </SelectItem>
                    <SelectItem value="climate-action">Climate Action</SelectItem>
                    <SelectItem value="life-below-water">Life Below Water</SelectItem>
                    <SelectItem value="life-on-land">Life on Land</SelectItem>
                    <SelectItem value="peace-justice-and-strong-institutions">
                      Peace, Justice and Strong Institutions
                    </SelectItem>
                    <SelectItem value="partnerships-for-the-goals">Partnerships for the Goals</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="int-description" className="block mb-2">
                  Brief description*
                </Label>
                <Textarea
                  id="int-description"
                  className="min-h-[80px]"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="int-abstract" className="block mb-2">
                  Abstract (Max 400 Characters)*
                </Label>
                <Textarea
                  id="int-abstract"
                  className="min-h-[80px]"
                  maxLength={400}
                  value={formData.abstract}
                  onChange={(e) => handleTextAreaChange("abstract", e.target.value, 400)}
                />
                <div className="mt-1 text-xs text-right text-gray-500">{formData.abstract?.length || 0}/400</div>
              </div>

              <div>
                <Label htmlFor="int-unmet-need" className="block mb-2">
                  What is the unmet need in society that your idea will fulfill? (Max 300 Characters)*
                </Label>
                <Textarea
                  id="int-unmet-need"
                  className="min-h-[80px]"
                  maxLength={300}
                  value={formData.unmetNeed}
                  onChange={(e) => handleTextAreaChange("unmetNeed", e.target.value, 300)}
                />
                <div className="mt-1 text-xs text-right text-gray-500">{formData.unmetNeed?.length || 0}/300</div>
              </div>

              <div>
                <Label htmlFor="int-beneficiaries" className="block mb-2">
                  Who needs it? How many would benefit? (Max 300 Characters)*
                </Label>
                <Textarea
                  id="int-beneficiaries"
                  className="min-h-[80px]"
                  maxLength={300}
                  value={formData.beneficiaries}
                  onChange={(e) => handleTextAreaChange("beneficiaries", e.target.value, 300)}
                />
                <div className="mt-1 text-xs text-right text-gray-500">{formData.beneficiaries?.length || 0}/300</div>
              </div>

              <div>
                <Label htmlFor="int-solution" className="block mb-2">
                  How will the solution work? Please explain the technical working of your solution (Max 500
                  Characters)*
                </Label>
                <Textarea
                  id="int-solution"
                  className="min-h-[80px]"
                  maxLength={500}
                  value={formData.solution}
                  onChange={(e) => handleTextAreaChange("solution", e.target.value, 500)}
                />
                <div className="mt-1 text-xs text-right text-gray-500">{formData.solution?.length || 0}/500</div>
              </div>

              <div>
                <Label htmlFor="int-adoption" className="block mb-2">
                  Does it have the potential to be easily adopted by the beneficiary? Please explain how? (Max 300
                  Characters)*
                </Label>
                <Textarea
                  id="int-adoption"
                  className="min-h-[80px]"
                  maxLength={300}
                  value={formData.adoption}
                  onChange={(e) => handleTextAreaChange("adoption", e.target.value, 300)}
                />
                <div className="mt-1 text-xs text-right text-gray-500">{formData.adoption?.length || 0}/300</div>
              </div>

              <div>
                <Label htmlFor="int-competitors" className="block mb-2">
                  Who are your competitors? How is your solution different? (Max 300 Characters)*
                </Label>
                <Textarea
                  id="int-competitors"
                  className="min-h-[80px]"
                  maxLength={300}
                  value={formData.competitors}
                  onChange={(e) => handleTextAreaChange("competitors", e.target.value, 300)}
                />
                <div className="mt-1 text-xs text-right text-gray-500">{formData.competitors?.length || 0}/300</div>
              </div>
            </div>
          </div>

          {/* Supervisor Details Section */}
          <div className="mb-8">
            <h2 className="pb-2 mb-2 text-xl font-semibold text-gray-800 border-b">Supervisor Details*</h2>
            <p className="mb-4 text-sm text-red-500">
              Please fill the form carefully, after your form is submitted, no changes can be made
            </p>
            <p className="mb-4 text-sm">
              <span className="font-medium">Note:</span> Having a faculty supervisor is mandatory. In case you don't
              have a supervisor, contact your{" "}
              <a href="#" className="text-blue-600 hover:underline">
                school's representatives for FICS
              </a>{" "}
              or FICS Core Team.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="int-supervisor-name" className="block mb-2">
                    Name of Faculty Supervisor*
                  </Label>
                  <Input
                    id="int-supervisor-name"
                    value={formData.supervisorName}
                    onChange={(e) => handleInputChange("supervisorName", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="int-designation" className="block mb-2">
                    Designation*
                  </Label>
                  <Input
                    id="int-designation"
                    value={formData.designation}
                    onChange={(e) => handleInputChange("designation", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="int-university" className="block mb-2">
                    University Name with City*
                  </Label>
                  <Input
                    id="int-university"
                    value={formData.university}
                    onChange={(e) => handleInputChange("university", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="int-department" className="block mb-2">
                    Department*
                  </Label>
                  <Input
                    id="int-department"
                    value={formData.department}
                    onChange={(e) => handleInputChange("department", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="int-supervisor-contact" className="block mb-2">
                    Contact Number*
                  </Label>
                  <Input
                    id="int-supervisor-contact"
                    value={formData.supervisorContact}
                    onChange={(e) => handleInputChange("supervisorContact", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="int-supervisor-email" className="block mb-2">
                    Email Address*
                  </Label>
                  <Input
                    id="int-supervisor-email"
                    type="email"
                    value={formData.supervisorEmail}
                    onChange={(e) => handleInputChange("supervisorEmail", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Team and Contact Details Section */}
          <div className="mb-8">
            <h2 className="pb-2 mb-4 text-xl font-semibold text-gray-800 border-b">Team and Contact Details</h2>

            <ul className="pl-5 mb-6 space-y-1 text-sm list-disc">
              <li>First entry will be considered as Team Lead and Contact Person</li>
              <li>
                Please mention correct details as mistakes in this regard will be the sole responsibility of the person
                entering data
              </li>
              <li>Add at least 2 members (one leader and one member)</li>
            </ul>

            {/* Dynamic Team Members */}
            {teamMembers.map((member, index) => (
              <div key={member.id} className="p-4 mb-8 rounded-md bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    {index === 0 ? "Team Leader" : `Team Member #${index + 1}`}
                  </h3>
                  {index > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeTeamMember(member.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4 mr-1" /> Remove
                    </Button>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor={`member${member.id}-name`} className="block mb-2">
                        Name*
                      </Label>
                      <Input
                        id={`member${member.id}-name`}
                        value={member.name || ""}
                        onChange={(e) => updateTeamMember(member.id, "name", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor={`member${member.id}-gender`} className="block mb-2">
                        Gender*
                      </Label>
                      <Select
                        value={member.gender || ""}
                        onValueChange={(value) => updateTeamMember(member.id, "gender", value)}
                        required
                      >
                        <SelectTrigger id={`member${member.id}-gender`}>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor={`member${member.id}-email`} className="block mb-2">
                        Email*
                      </Label>
                      <Input
                        id={`member${member.id}-email`}
                        type="email"
                        value={member.email || ""}
                        onChange={(e) => updateTeamMember(member.id, "email", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor={`member${member.id}-mobile`} className="block mb-2">
                        Mobile #*
                      </Label>
                      <Input
                        id={`member${member.id}-mobile`}
                        value={member.mobile || ""}
                        onChange={(e) => updateTeamMember(member.id, "mobile", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor={`member${member.id}-cgpa`} className="block mb-2">
                        CGPA*
                      </Label>
                      <Input
                        id={`member${member.id}-cgpa`}
                        value={member.cgpa || ""}
                        onChange={(e) => updateTeamMember(member.id, "cgpa", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor={`member${member.id}-university`} className="block mb-2">
                        University Name with City*
                      </Label>
                      <Input
                        id={`member${member.id}-university`}
                        value={member.university || ""}
                        onChange={(e) => updateTeamMember(member.id, "university", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor={`member${member.id}-department`} className="block mb-2">
                        Department/School Name*
                      </Label>
                      <Input
                        id={`member${member.id}-department`}
                        value={member.department || ""}
                        onChange={(e) => updateTeamMember(member.id, "department", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor={`member${member.id}-country`} className="block mb-2">
                        Country*
                      </Label>
                      <Input
                        id={`member${member.id}-country`}
                        value={member.country || ""}
                        onChange={(e) => updateTeamMember(member.id, "country", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor={`member${member.id}-degree`} className="block mb-2">
                        Degree*
                      </Label>
                      <Select
                        value={member.degree || ""}
                        onValueChange={(value) => updateTeamMember(member.id, "degree", value)}
                        required
                      >
                        <SelectTrigger id={`member${member.id}-degree`}>
                          <SelectValue placeholder="Select degree" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="undergraduate">Undergraduate</SelectItem>
                          <SelectItem value="graduate">Graduate</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor={`member${member.id}-year`} className="block mb-2">
                        Year of Study*
                      </Label>
                      <Select
                        value={member.year || ""}
                        onValueChange={(value) => updateTeamMember(member.id, "year", value)}
                        required
                      >
                        <SelectTrigger id={`member${member.id}-year`}>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="first">First</SelectItem>
                          <SelectItem value="second">Second</SelectItem>
                          <SelectItem value="third">Third</SelectItem>
                          <SelectItem value="fourth">Fourth</SelectItem>
                          <SelectItem value="final">Final</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Add More Members Button */}
            {teamMembers.length < 5 && (
              <div className="flex justify-center mt-4">
                <Button type="button" variant="outline" onClick={addTeamMember} className="flex items-center gap-1">
                  <PlusCircle className="w-4 h-4" /> Add Team Member
                </Button>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#248ABD] hover:bg-[#1a6d94] px-8 py-2 text-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
