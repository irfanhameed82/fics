import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, School, Target } from "lucide-react"

type ProjectProps = {
  projectTitle: string
  SDG?: number | null
  position?: string | null
  prizeMoney?: string | null
  description: string
  school: string
}

export function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-md">
      <CardHeader >
        <div className="flex flex-wrap items-start justify-between gap-2">
          <CardTitle className="text-xl font-semibold text-[#248ABD]">{project.projectTitle}</CardTitle>
          {project.position && <Badge className="bg-cyan-600 hover:bg-cyan-700">{project.position}</Badge>}
        </div>
        {project.SDG !== null && project.SDG !== undefined && (
          <div className="flex items-center gap-1.5 mt-1">
            <Target className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-cyan-700">SDG {project.SDG}</span>
          </div>
        )}
      </CardHeader>

      <CardContent className="pb-2">
        <p className="text-sm leading-relaxed text-slate-600">{project.description}</p>
{/* 
        {project.prizeMoney && (
          <div className="flex items-center gap-2 mt-4 text-amber-700">
            <Award className="w-5 h-5" />
            <p className="font-medium">{project.prizeMoney}</p>
          </div>
        )} */}
      </CardContent>

      <CardFooter className="pt-0 mt-auto border-t ">
        <div className="flex items-center gap-2 text-slate-600">
          <School className="w-4 h-4" />
          <p className="text-sm">{project.school}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
