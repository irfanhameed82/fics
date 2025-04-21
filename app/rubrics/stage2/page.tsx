import React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InfoIcon } from "lucide-react"

export default function StageTwoRubric() {
  const rubricData = [
    {
      id: 1,
      category: "Need for the Solution & Target Market Identification",
      weight: 40,
      ratingFactor: 4,
      score: 4,
      criteria: [
        "Which need the solution will fulfill or what problem it will solve and how the impact on the society will be measured.",
        "Is the need currently being met by some other solution? How is this solution better than any existing solution / alternative?",
        "Which segment(s) of society will benefit from the solution? Is the target market clearly identified?",
      ],
    },
    {
      id: 2,
      category: "Technical Viability & Novelty / Impact of the Solution",
      weight: 40,
      ratingFactor: 4,
      score: 4,
      criteria: [
        "What is the working principle of the product / solution proposed by the team? Is it explained in good enough detail for the judge to make a judgment if the solution will work?",
        "Is it a technically viable solution?",
        'Is the solution innovative and novel? How? The "how" aspect has to be clearly shown; the team should be able to show the Unique Selling Proposition (USP) of the solution.',
        "Is it a simple enough solution to be easily adopted and used by the target market? (Parameters for this may include factors such as good user interface, minimum user training required, low cost, easy to manufacture, easy to deploy, easy to replicate, ease of manufacturing and deploying in the conditions / environment it is going to be used in, etc.)",
      ],
    },
    {
      id: 3,
      category: "Sustainability / Business Aspects of the Solution",
      weight: 15,
      ratingFactor: 1.5,
      score: 1.5,
      criteria: [
        "Size of the target market and existing competition, if any (local / international).",
        "Does the solution have the potential to be commercialized / mass-deployed?",
        "Does the team show cost of solution (including development and implementation costs) and expected revenue, which would show if the solution is financially viable?",
      ],
    },
    {
      id: 4,
      category: "Additional Marks",
      weight: 5,
      ratingFactor: 0.5,
      score: 0.5,
      criteria: [
        "Multidisciplinary teams: Does the team have the necessary expertise needed for implementing the solution? Is the team composition adequate with respect to the proposed solution?",
        "Industry / Mentor Interest: Projects that have an interest from industry or any Mentor to be given additional marks. This parameter covers 2 scenarios: if students submitted the idea & industry showed interest, or if students picked an idea submitted by industry).",
      ],
    },
  ]

  const totalScore = rubricData.reduce((sum, item) => sum + item.score, 0)
  const maxScore = 10.0

  return (
    <div className="space-y-6">
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
            <span>Stage 2 Assessment Rubric</span>
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
                  <TableHead className="w-[100px] text-center">
                    Rating
                    <br />
                    <span className="text-xs">(From 1 to 10)</span>
                  </TableHead>
                  <TableHead className="w-[100px] text-center">Score</TableHead>
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
                    Total Score (out of 10.0)
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
