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
type InternationalFormData = {
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
}

// Define the store state
type InternationalFormState = {
  formData: InternationalFormData
  teamMembers: TeamMember[]
  showPreviousProject: boolean
  showOtherCompetition: boolean
  showExpertise: boolean
  setFormField: (field: keyof InternationalFormData | string, value: any) => void
  updateTeamMember: (id: number, field: keyof TeamMember, value: string) => void
  addTeamMember: () => void
  removeTeamMember: (id: number) => void
  setShowPreviousProject: (show: boolean) => void
  setShowOtherCompetition: (show: boolean) => void
  setShowExpertise: (show: boolean) => void
}

// Create the store
export const useInternationalFormStore = create<InternationalFormState>((set) => ({
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
  },

  // Initial team members (leader and one member)
  teamMembers: [
    { id: 1, role: "Team Leader" },
    { id: 2, role: "Team Member" },
  ],

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

  // Update team member field
  updateTeamMember: (id, field, value) =>
    set((state) => ({
      teamMembers: state.teamMembers.map((member) => (member.id === id ? { ...member, [field]: value } : member)),
    })),

  // Add a new team member
  addTeamMember: () =>
    set((state) => {
      if (state.teamMembers.length >= 5) return state

      const newId = Math.max(...state.teamMembers.map((m) => m.id)) + 1
      return {
        teamMembers: [...state.teamMembers, { id: newId, role: "Team Member" }],
      }
    }),

  // Remove a team member
  removeTeamMember: (id) =>
    set((state) => {
      if (state.teamMembers.length <= 2) return state
      return {
        teamMembers: state.teamMembers.filter((member) => member.id !== id),
      }
    }),

  // Set UI state
  setShowPreviousProject: (show) => set({ showPreviousProject: show }),
  setShowOtherCompetition: (show) => set({ showOtherCompetition: show }),
  setShowExpertise: (show) => set({ showExpertise: show }),
}))
