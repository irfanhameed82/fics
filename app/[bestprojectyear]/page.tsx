import { notFound } from "next/navigation";
import { projectData } from "@/app/data/project";
import { ProjectCard } from "@/components/project-card";

interface BestProjectPageProps {
  // Next.js passes params as a Promise in v15+
  params: Promise<{ bestprojectyear: string }>;
  // Likewise for searchParams (even if you don’t use it)
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function BestProjectPage({
  params,
  searchParams,
}: BestProjectPageProps) {
  // Await the incoming params promise
  const { bestprojectyear } = await params;
  // If you need any query strings:
  // const queries = await searchParams;

  // Parse out the year from your slug, e.g. "bestproject-2024"
  const year = bestprojectyear.split("-")[1];
  const data = projectData[year];

  if (!data) {
    return notFound();
  }

  return (
    <div className="min-h-screen pb-16 bg-slate-50">
      <div className="relative h-20 sm:h-24 w-full bg-gradient-to-b from-[#3BB0A1] to-[#00547E] flex items-center justify-center mb-10">
        <h1 className="text-xl font-semibold tracking-widest text-white sm:text-4xl">
          BEST PROJECTS {year}
        </h1>
      </div>

      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}