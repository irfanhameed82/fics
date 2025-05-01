"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { PlusCircle, Trash2 } from "lucide-react"
import { useInternationalFormStore } from "@/lib/stores/international-form-store"

export default function InternationalRegistrationForm() {
  const {
    formData,
    setFormField,
    teamMembers,
    addTeamMember,
    removeTeamMember,
    showPreviousProject,
    setShowPreviousProject,
    showOtherCompetition,
    setShowOtherCompetition,
    showExpertise,
    setShowExpertise,
  } = useInternationalFormStore()

  // Handle text input changes
  const handleInputChange = (field, value) => {
    setFormField(field, value)
  }

  // Handle character count for textareas with limits
  const handleTextAreaChange = (field, value, maxLength) => {
    if (value.length <= maxLength) {
      setFormField(field, value)
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("International form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("International Registration Form Submitted Successfully!")
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
                        value={formData.previousYear}
                        onValueChange={(value) => handleInputChange("previousYear", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          {[...Array(10)].map((_, i) => (
                            <SelectItem key={i} value={`${2023 - i}`}>
                              {2023 - i}
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
                        value={formData.previousTitle}
                        onChange={(e) => handleInputChange("previousTitle", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="int-previous-stage" className="block mb-2">
                        Stage reached*
                      </Label>
                      <Input
                        id="int-previous-stage"
                        value={formData.previousStage}
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
                        value={formData.competitionName}
                        onChange={(e) => handleInputChange("competitionName", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="int-prize-won" className="block mb-2">
                        Prize Won*
                      </Label>
                      <Input
                        id="int-prize-won"
                        value={formData.prizeWon}
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
                    value={formData.expertiseNeeded}
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
                    <SelectItem value="good-health">Good Health and Well-being</SelectItem>
                    <SelectItem value="quality-education">Quality Education</SelectItem>
                    <SelectItem value="gender-equality">Gender Equality</SelectItem>
                    <SelectItem value="clean-water">Clean Water and Sanitation</SelectItem>
                    <SelectItem value="affordable-energy">Affordable and Clean Energy</SelectItem>
                    <SelectItem value="economic-growth">Decent Work and Economic Growth</SelectItem>
                    <SelectItem value="industry-innovation">Industry, Innovation and Infrastructure</SelectItem>
                    <SelectItem value="reduced-inequalities">Reduced Inequalities</SelectItem>
                    <SelectItem value="sustainable-cities">Sustainable Cities and Communities</SelectItem>
                    <SelectItem value="responsible-consumption">Responsible Consumption and Production</SelectItem>
                    <SelectItem value="climate-action">Climate Action</SelectItem>
                    <SelectItem value="life-below-water">Life Below Water</SelectItem>
                    <SelectItem value="life-on-land">Life on Land</SelectItem>
                    <SelectItem value="peace-justice">Peace, Justice and Strong Institutions</SelectItem>
                    <SelectItem value="partnerships">Partnerships for the Goals</SelectItem>
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
                      <Label htmlFor={`int-member${member.id}-name`} className="block mb-2">
                        Name*
                      </Label>
                      <Input
                        id={`int-member${member.id}-name`}
                        value={member.name || ""}
                        onChange={(e) =>
                          setFormField("teamMembers", [
                            ...teamMembers.map((m) => (m.id === member.id ? { ...m, name: e.target.value } : m)),
                          ])
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor={`int-member${member.id}-gender`} className="block mb-2">
                        Gender*
                      </Label>
                      <Select
                        value={member.gender || "female"}
                        onValueChange={(value) =>
                          setFormField("teamMembers", [
                            ...teamMembers.map((m) => (m.id === member.id ? { ...m, gender: value } : m)),
                          ])
                        }
                      >
                        <SelectTrigger>
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
                      <Label htmlFor={`int-member${member.id}-email`} className="block mb-2">
                        Email*
                      </Label>
                      <Input
                        id={`int-member${member.id}-email`}
                        type="email"
                        value={member.email || ""}
                        onChange={(e) =>
                          setFormField("teamMembers", [
                            ...teamMembers.map((m) => (m.id === member.id ? { ...m, email: e.target.value } : m)),
                          ])
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor={`int-member${member.id}-mobile`} className="block mb-2">
                        Mobile #*
                      </Label>
                      <Input
                        id={`int-member${member.id}-mobile`}
                        value={member.mobile || ""}
                        onChange={(e) =>
                          setFormField("teamMembers", [
                            ...teamMembers.map((m) => (m.id === member.id ? { ...m, mobile: e.target.value } : m)),
                          ])
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor={`int-member${member.id}-cgpa`} className="block mb-2">
                        CGPA*
                      </Label>
                      <Input
                        id={`int-member${member.id}-cgpa`}
                        value={member.cgpa || ""}
                        onChange={(e) =>
                          setFormField("teamMembers", [
                            ...teamMembers.map((m) => (m.id === member.id ? { ...m, cgpa: e.target.value } : m)),
                          ])
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor={`int-member${member.id}-university`} className="block mb-2">
                        University Name with City*
                      </Label>
                      <Input
                        id={`int-member${member.id}-university`}
                        value={member.university || ""}
                        onChange={(e) =>
                          setFormField("teamMembers", [
                            ...teamMembers.map((m) => (m.id === member.id ? { ...m, university: e.target.value } : m)),
                          ])
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor={`int-member${member.id}-department`} className="block mb-2">
                        Department/School Name*
                      </Label>
                      <Input
                        id={`int-member${member.id}-department`}
                        value={member.department || ""}
                        onChange={(e) =>
                          setFormField("teamMembers", [
                            ...teamMembers.map((m) => (m.id === member.id ? { ...m, department: e.target.value } : m)),
                          ])
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor={`int-member${member.id}-country`} className="block mb-2">
                        Country*
                      </Label>
                      <Input
                        id={`int-member${member.id}-country`}
                        value={member.country || ""}
                        onChange={(e) =>
                          setFormField("teamMembers", [
                            ...teamMembers.map((m) => (m.id === member.id ? { ...m, country: e.target.value } : m)),
                          ])
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor={`int-member${member.id}-degree`} className="block mb-2">
                        Degree*
                      </Label>
                      <Select
                        value={member.degree || "undergraduate"}
                        onValueChange={(value) =>
                          setFormField("teamMembers", [
                            ...teamMembers.map((m) => (m.id === member.id ? { ...m, degree: value } : m)),
                          ])
                        }
                      >
                        <SelectTrigger>
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
                      <Label htmlFor={`int-member${member.id}-year`} className="block mb-2">
                        Year of Study*
                      </Label>
                      <Select
                        value={member.year || "fourth"}
                        onValueChange={(value) =>
                          setFormField("teamMembers", [
                            ...teamMembers.map((m) => (m.id === member.id ? { ...m, year: value } : m)),
                          ])
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="first">First</SelectItem>
                          <SelectItem value="second">Second</SelectItem>
                          <SelectItem value="third">Third</SelectItem>
                          <SelectItem value="fourth">Fourth</SelectItem>
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
              <Button type="submit" className="bg-[#248ABD] hover:bg-[#1a6d94] px-8 py-2 text-lg">
                Submit Registration
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
