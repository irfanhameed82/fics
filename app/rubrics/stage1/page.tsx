"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InfoIcon } from "lucide-react"

export default function StageOneRubric() {
  const rubricData = [
    {
      id: 1,
      category: "Problem Relevance, Impact & Target Audience / Beneficiaries",
      weight: 25,
      ratingFactor: 1.0,
      score: 1.0,
      criteria: [
        "Is the problem identified relevant and important to our society?",
        "Does it solve a social or community-related problem?",
        "Will the solution have a reasonably high impact on society?",
        "Can the impact be measured through concrete parameters? For example, how many people will benefit from the solution, will it enhance desirable statistics & reduce undesirable ones, etc.",
        "Is there a properly identified target population / beneficiaries for the solution?",
      ],
    },
    {
      id: 2,
      category: "Idea Novelty",
      weight: 20,
      ratingFactor: 0.8,
      score: 0.8,
      criteria: [
        "Is the idea/solution novel and different / innovative?",
        "Is there local competition for the solution? Or international competition?",
      ],
    },
    {
      id: 3,
      category: "Solution Practicability & Ease of Adoption",
      weight: 25,
      ratingFactor: 1.0,
      score: 1.0,
      criteria: [
        "Is the proposed solution practical and implementable?",
        "Does it have the potential to be easily accepted and adopted by the beneficiaries? (Technically simple solutions with a good user interface, and those that can be implemented without much user training and without cost input by beneficiaries are more easily adopted)",
      ],
    },
    {
      id: 4,
      category: "Commercialization Potential / Potential for Mass deployment",
      weight: 20,
      ratingFactor: 0.8,
      score: 0.8,
      criteria: [
        "Is the solution commercializable?",
        "Does it need significant refinement to make it commercializable?",
        "(For ideas and products with a commercial or profit-making intention, judges to assess if the ideas can be easily commercialized given the facilities and expertise available in Pakistan.",
        "For not-for-profit ideas, judges have to assess if the solution has the potential to be mass deployed)",
      ],
    },
  ]

  const totalScore = rubricData.reduce((sum, item) => sum + item.score, 0)
  const maxScore = 4.0

  return (
    <div >
         <div className="pb-5 bg-white">
             <div className="relative h-52 w-full bg-[#248ABD] flex items-center justify-center mb-5">
        <h1 className="text-xl font-semibold tracking-widest text-white sm:text-4xl">
        Evaluation for Stage - 1
        </h1>
      </div>
      </div>
    
        <div className="m-3 sm:m-5">

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Stage 1 Assessment Rubric</span>
            <Badge variant="outline" className="ml-2">
              Total: {totalScore.toFixed(1)} / {maxScore.toFixed(1)}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <InfoIcon className="w-4 h-4" />
              <span>Each category is evaluated based on specific criteria and weighted accordingly.</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">S.No</TableHead>
                  <TableHead className="w-[350px]">Category</TableHead>
                  <TableHead className="w-[100px] text-center">Weight(%)</TableHead>
                  <TableHead className="w-[100px] text-center">Rating Factor</TableHead>
                  <TableHead className="w-[100px] text-center">
                    Score
                    <br />
                    <span className="text-xs">(Rating × Scaling Factor)</span>
                  </TableHead>
                  <TableHead className="hidden md:table-cell">Comments / Rationale</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rubricData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium align-top">{item.id}</TableCell>
                    <TableCell className="align-top">
                      <div>
                        <div className="mb-2 font-medium text-left">{item.category}</div>
                        <ul className="pl-5 space-y-2 text-sm list-disc">
                          {item.criteria.map((criterion, idx) => (
                            <li key={idx} className="break-words whitespace-normal">
                              {criterion}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TableCell>
                    <TableCell className="text-center align-top">{item.weight}%</TableCell>
                    <TableCell className="text-center align-top">{item.ratingFactor.toFixed(1)}</TableCell>
                    <TableCell className="text-center align-top">{item.score.toFixed(1)}</TableCell>
                    <TableCell className="hidden align-top md:table-cell">
                      <div className="w-full h-6 rounded bg-muted/30"></div>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={4} className="font-bold text-right">
                    Total Score (out of 4.0)
                  </TableCell>
                  <TableCell className="font-bold text-center">{totalScore.toFixed(1)}</TableCell>
                  <TableCell className="hidden md:table-cell"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="md:hidden">
        <h3 className="mb-2 text-lg font-medium">Criteria Details</h3>
        {rubricData.map((item) => (
          <Card key={item.id} className="mb-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                {item.id}. {item.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="pl-5 space-y-2 text-sm list-disc">
                {item.criteria.map((criterion, idx) => (
                  <li key={idx} className="break-words">
                    {criterion}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-4 text-sm">
                <span>Weight: {item.weight}%</span>
                <span>Rating: {item.ratingFactor.toFixed(1)}</span>
                <span>Score: {item.score.toFixed(1)}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    </div>
  )
}
