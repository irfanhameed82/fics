import { create } from "zustand"

// Define the team member type
type TeamMember = {
  id: number
  role?: string
  name?: string
  gender?: string
  email?: string
  mobile?: string
  cgpa?: string
  university?: string
  department?: string
  country?: string
  degree?: string
  year?: string
}

// Define the form data type
type NationalFormData = {
  // Project Details
  isFYP: string
  previouslyApplied: string
  previousYear?: string
  previousTitle?: string
  previousStage?: string
  otherCompetition: string
  competitionName?: string
  prizeWon?: string
  multiDiscipline: string
  needExpertise: string
  expertiseNeeded?: string

  // Idea Details
  ideaName: string
  slogan: string
  applicationDomain: string
  description: string
  abstract: string
  unmetNeed: string
  beneficiaries: string
  solution: string
  adoption: string
  competitors: string

  // Supervisor Details
  supervisorName: string
  designation: string
  university: string
  department: string
  supervisorContact: string
  supervisorEmail: string

  // Team Members
  teamMembers: TeamMember[]
}

// Define the store state
type NationalFormState = {
  formData: NationalFormData
  showPreviousProject: boolean
  showOtherCompetition: boolean
  showExpertise: boolean
  setFormField: <K extends keyof NationalFormData>(field: K, value: NationalFormData[K]) => void
  updateTeamMember: (id: number, field: keyof TeamMember, value: string) => void
  addTeamMember: () => void
  removeTeamMember: (id: number) => void
  setShowPreviousProject: (show: boolean) => void
  setShowOtherCompetition: (show: boolean) => void
  setShowExpertise: (show: boolean) => void
  validateForm: () => { isValid: boolean; errors: string[] }
}

// Create the store
export const useNationalFormStore = create<NationalFormState>((set, get) => ({
  // Initial form data
  formData: {
    // Project Details
    isFYP: "",
    previouslyApplied: "no",
    otherCompetition: "no",
    multiDiscipline: "",
    needExpertise: "no",

    // Idea Details
    ideaName: "",
    slogan: "",
    applicationDomain: "no-poverty",
    description: "",
    abstract: "",
    unmetNeed: "",
    beneficiaries: "",
    solution: "",
    adoption: "",
    competitors: "",

    // Supervisor Details
    supervisorName: "",
    designation: "",
    university: "",
    department: "",
    supervisorContact: "",
    supervisorEmail: "",

    // Team Members
    teamMembers: [
      { id: 1, role: "Team Leader", country: "Pakistan" },
      { id: 2, role: "Team Member" },
    ],
  },

  // UI state
  showPreviousProject: false,
  showOtherCompetition: false,
  showExpertise: false,

  // Set a form field
  setFormField: (field, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
    })),

  // Update a team member field
  updateTeamMember: (id, field, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        teamMembers: state.formData.teamMembers.map((member) =>
          member.id === id ? { ...member, [field]: value } : member,
        ),
      },
    })),

  // Add a new team member
  addTeamMember: () =>
    set((state) => {
      if (state.formData.teamMembers.length >= 5) return state

      const newId = Math.max(...state.formData.teamMembers.map((m) => m.id)) + 1
      return {
        formData: {
          ...state.formData,
          teamMembers: [...state.formData.teamMembers, { id: newId, role: "Team Member", country: "Pakistan" }],
        },
      }
    }),

  // Remove a team member
  removeTeamMember: (id) =>
    set((state) => {
      if (state.formData.teamMembers.length <= 2) return state
      return {
        formData: {
          ...state.formData,
          teamMembers: state.formData.teamMembers.filter((member) => member.id !== id),
        },
      }
    }),

  // Set UI state
  setShowPreviousProject: (show) => set({ showPreviousProject: show }),
  setShowOtherCompetition: (show) => set({ showOtherCompetition: show }),
  setShowExpertise: (show) => set({ showExpertise: show }),

  // Validate form
  validateForm: () => {
    const { formData } = get()
    const errors: string[] = []

    // Required project fields
    if (!formData.ideaName) errors.push("Idea name is required")
    if (!formData.slogan) errors.push("Slogan is required")
    if (!formData.abstract) errors.push("Abstract is required")
    if (!formData.unmetNeed) errors.push("Unmet need is required")
    if (!formData.solution) errors.push("Solution is required")
    if (!formData.competitors) errors.push("Competitors information is required")
    if (!formData.isFYP) errors.push("FYP status is required")
    if (!formData.multiDiscipline) errors.push("Multi-discipline status is required")

    // Supervisor details
    if (!formData.supervisorName) errors.push("Supervisor name is required")
    if (!formData.supervisorEmail) errors.push("Supervisor email is required")
    if (!formData.designation) errors.push("Supervisor designation is required")
    if (!formData.university) errors.push("University name is required")
    if (!formData.department) errors.push("Department is required")

    // Team members
    if (formData.teamMembers.length < 2) {
      errors.push("At least two team members are required")
    }

    formData.teamMembers.forEach((member, index) => {
      if (!member.name) errors.push(`Team member #${index + 1} name is required`)
      if (!member.email) errors.push(`Team member #${index + 1} email is required`)
      if (!member.gender) errors.push(`Team member #${index + 1} gender is required`)
      if (!member.university) errors.push(`Team member #${index + 1} university is required`)
      if (!member.department) errors.push(`Team member #${index + 1} department is required`)
      if (!member.degree) errors.push(`Team member #${index + 1} degree is required`)
      if (!member.year) errors.push(`Team member #${index + 1} year is required`)
    })

    return {
      isValid: errors.length === 0,
      errors,
    }
  },
}))
