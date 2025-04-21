import React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InfoIcon } from "lucide-react"

export default function StageThreeRubric() {
  const rubricData = [
    {
      id: 1,
      category: "Unique Selling Proposition",
      weight: 20,
      ratingFactor: 2,
      score: 2,
      criteria: [
        "What is the key benefit from using the product and how does it address the identified consumer need?",
        "What is the existing competition, if any (local / international)?",
      ],
    },
    {
      id: 2,
      category: "Target Market Profile",
      weight: 15,
      ratingFactor: 1.5,
      score: 1.5,
      criteria: [
        "Is the target market clearly identified and well-known?",
        "Has the team segmented the target market on the basis of demographic and/or psychographic factors? If the basis of segmentation is not clear, ask.",
        "What is the size of the target market?",
        "Has the team tweaked their product design to cater to different target segments' behaviors and needs?",
      ],
    },
    {
      id: 3,
      category: "Technical Viability & Minor Development",
      weight: 25,
      ratingFactor: 2.5,
      score: 2.5,
      criteria: [
        "What is the quality of technical implementation?",
        "What is the quality of user interface design? (if applicable)",
        "Does the team have clarity on what the Minimum Viable Product (MVP) should look like?",
        "Has the team done any user testing?",
        "Did the team get validation from potential customers and users? (functioning proof of early should? IMPORTANT)",
        "Has the team considered scalability in their design and implementation? (for when the usage increases, servers, applications, dimensions, like number of users, storage, network speed, etc. can the design, architecture and implementation support it?)",
        "Does it need significant refinement to make it commercializable?",
        "Have the key barriers to commercialization / or scaling been identified by the team? How will they overcome these barriers?",
      ],
    },
    {
      id: 4,
      category: "Commercial Viability & Business Plan",
      weight: 25,
      ratingFactor: 2.5,
      score: 2.5,
      criteria: [
        "Have the costs of taking the product to market been identified? (manufacturing, marketing, distribution, etc.)",
        "Have they identified the basis / assumptions of the costs been mentioned?",
        "Have they calculated the revenue it could to be earned, along with the key assumptions and basis of the forecast?",
        "Do they have a clear business model and does it seem a viable business proposition?",
        "Are their financial numbers realistic?",
        "Have they identified what their product's market share / penetration will be?",
      ],
    },
    {
      id: 5,
      category: "Team Composition",
      weight: 10,
      ratingFactor: 1.0,
      score: 1.0,
      criteria: [
        "Have the roles been clearly defined by the team members?",
        "Have all the skills and expertise relevant and are required to take the product to the market?",
        "Have all technical skills and roles been clearly defined and assigned to team members?",
        "Does the team follow a particular development or project management methodology or process?",
      ],
    },
    {
      id: 6,
      category: "Industry Mentoring",
      weight: 5,
      ratingFactor: 0.5,
      score: 0.5,
      criteria: [
        "Projects that have an interest from Industry or any Mentor to be given additional marks. This parameter covers 2 scenarios: if students submitted the idea & industry showed interest, or if students have made an effort to bring in industry expertise for their respective project.",
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
        Evaluation for Stage - 3
        </h1>
      </div>
      </div>
    
        <div className="m-3 sm:m-5">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Stage 3 Assessment Rubric</span>
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
