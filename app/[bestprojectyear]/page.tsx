import { projectData } from "@/app/data/project"
import { ProjectCard } from "@/components/project-card"

type Props = {
  params: {
    bestprojectyear: string
  }
}

export default function BestProjectPage({ params }: Props) {
  const { bestprojectyear } = params

  // Extract year from slug e.g., bestproject-2023 → 2023
  const year = bestprojectyear.split("-")[1]

  const data = projectData[year]

  if (!data) {
    return (
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <div className="p-6 text-center text-red-600 border border-red-200 rounded-lg bg-red-50">
          No projects found for year {year}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-16 bg-slate-50">
      <div className="relative h-52 w-full bg-[#248ABD] flex items-center justify-center mb-10">
        <div className="text-center">
          <h1 className="text-xl font-semibold tracking-widest text-white sm:text-4xl">BEST PROJECTS {year}</h1>
        </div>
      </div>

      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
