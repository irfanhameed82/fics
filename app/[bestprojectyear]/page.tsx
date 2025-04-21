// app/[bestprojectyear]/page.tsx
import { projectData } from "@/app/data/project"
import { ProjectCard } from "@/components/project-card"
import { notFound } from "next/navigation"

interface ProjectPageParams {
  params: {
    bestprojectyear: string
  }
}

export default async function BestProjectPage({ params }: ProjectPageParams) {
  const slug = params.bestprojectyear
  const year = slug.split("-")[1]

  const data = projectData[year]

  if (!data) {
    notFound()
  }

  return (
    <div className="min-h-screen pb-16 bg-slate-50">
      <div className="relative h-52 w-full bg-[#248ABD] flex items-center justify-center mb-10">
        <div className="text-center">
          <h1 className="text-xl font-semibold tracking-widest text-white sm:text-4xl">
            BEST PROJECTS {year}
          </h1>
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
