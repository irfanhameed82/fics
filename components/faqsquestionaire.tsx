"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>("item-1")

  const faqs = [
    {
      id: "item-1",
      question: "What is FICS about?",
      answer: `FICS is an important component of NUST's overarching goal to bring about a positive, discernible impact in the society by applying scientific knowledge and tools. It has been structured as a 3-stage competition and requires participating teams to utilize their technical expertise and skills in developing projects (products & services) that can help the communities around them. The objective of FICS is to encourage students to identify social problems around them and to develop innovative technology-based solutions to these problems. It aims to encourage Social Entrepreneurship among students, and to involve the Industry as mentors and judges in order to help the best projects to be commercialized.

We welcome project ideas that integrate interdisciplinary strengths from different Schools / departments at NUST. We hope that this integration will lead to projects with large benefits for society, and also bring Industry members from different Sectors on board.`,
    },
    {
      id: "item-2",
      question: "What is the sequence of the competition?",
      answer:
        "The competition follows a structured sequence designed to help teams develop and refine their ideas. It begins with idea submission, followed by evaluation and shortlisting. Selected teams then participate in mentoring sessions before presenting their refined projects to judges in the final stage.",
    },
    {
      id: "item-3",
      question: "What are the domains in which I can submit my idea?",
      answer:
        "You can submit ideas across various domains including but not limited to healthcare, education, environment, agriculture, energy, transportation, and community development. We encourage innovative solutions that address real social challenges regardless of the specific domain.",
    },
    {
      id: "item-4",
      question: "Who can participate in the competition?",
      answer:
        "The competition is open to all students enrolled at NUST. Teams can be formed across different departments and schools to encourage interdisciplinary collaboration. We welcome participants from all academic backgrounds who are passionate about creating social impact.",
    },
    {
      id: "item-5",
      question: "What will happen after I have submitted my idea / synopsis?",
      answer:
        "After submission, your idea will be evaluated by our panel of experts. Shortlisted teams will be notified and invited to the next stage of the competition. All participants will receive feedback on their submissions regardless of selection status.",
    },
    {
      id: "item-6",
      question: "How many team members can a team have?",
      answer:
        "Each team can have between 2 to 5 members. We encourage forming diverse teams with complementary skills to strengthen your project's development and implementation capabilities.",
    },
    {
      id: "item-7",
      question: "Can I submit more than one idea?",
      answer:
        "Yes, you can submit multiple ideas, but each submission must be distinct and complete. Please ensure that you can commit adequate time and resources to develop any idea that gets selected.",
    },
    {
      id: "item-8",
      question: "What is the cost to enter FICS?",
      answer:
        "There is no entry fee to participate in FICS. The competition is fully sponsored to encourage maximum participation from students with innovative ideas for social impact.",
    },
    {
      id: "item-9",
      question: "I am from Industry, how can I submit my idea?",
      answer:
        "Industry professionals can participate as mentors, judges, or sponsors. If you have an idea that requires student collaboration, please contact our coordination team who can help match you with interested student teams.",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container max-w-5xl px-4 mx-auto">
        <h2 className="mb-10 text-2xl font-bold text-center md:text-3xl">Frequently Asked Questions (FAQs)</h2>

        <Accordion
          type="single"
          collapsible
          value={openItem || undefined}
          onValueChange={(value) => setOpenItem(value)}
          className="space-y-2"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="overflow-hidden border rounded-md border-slate-200">
              <AccordionTrigger className="px-6 py-4 font-medium text-left hover:bg-slate-50">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-sm leading-relaxed text-slate-700">
                <div className="whitespace-pre-wrap">{faq.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
