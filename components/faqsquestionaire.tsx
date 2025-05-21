"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>("item-1")

  const faqs = [
    {
      id: "item-1",
      question: "What is FICS about?",
      answer: `Finding Innovative & Creative Solutions (FICS) is Pakistan's 1st and only international entrepreneurial competition of NUST aimed at promoting social entrepreneurship by encouraging students to identify pressing societal challenges and develop technology-based, innovative solutions. FICS empowers students to become changemakers by translating their technical knowledge into impactful projects that benefit communities.The program welcomes interdisciplinary collaboration across various departments and universities, bringing together diverse expertise to enhance the societal relevance and potential of the proposed solutions. FICS follows a multi-phase journey that begins with idea submission and culminates in a Grand Finale featuring functional prototypes. The process includes local and international pitching sessions hosted in collaboration with partner universities. At each stage, industry experts are engaged as judges and mentors, helping to evaluate, refine, and potentially commercialize the most promising projects.
FICS 2025 is open to both national and international teams and features new award categories including:

National Winner – FICS 2025
Global Champion – FICS 2025
Social Impact Award
Runner-Ups
Winners may also receive cash prizes, long-term mentorship, industry connections, and free incubation space at NUST’s TechOne incubator.`,
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
        `You can submit your idea in any domain aligned with the United Nations Sustainable Development Goals (SDGs). The FICS platform encourages innovative, tech-based solutions that address real-world challenges. The following are the 17 SDGs under which your project may fall:

No Poverty
Zero Hunger
Good Health and Well-being
Quality Education
Gender Equality
Clean Water and Sanitation
Affordable and Clean Energy
Decent Work and Economic Growth
Industry, Innovation and Infrastructure
Reduced Inequalities
Sustainable Cities and Communities
Responsible Consumption and Production
Climate Action
Life Below Water
Life on Land
Peace, Justice and Strong Institutions
Partnerships for the Goals

FICS encourages interdisciplinary collaboration and solutions that offer tangible social impact, regardless of your field of study. Projects that align with one or more SDGs and show potential for scalability and commercialization are highly encouraged.`
    },
    {
      id: "item-4",
      question: "Who can participate in the competition?",
      answer:
        `The competition is open to all students, including both undergraduate (UG) and postgraduate (PG) students. Teams can be formed across different departments and schools to foster interdisciplinary collaboration.Additionally, international students and teams from partner universities worldwide are also encouraged to participate, making FICS a truly global platform for innovation and social impact. We welcome participants from all academic backgrounds who are passionate about developing technology-based solutions to address social challenges.
      `
    },
    {
      id: "item-5",
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
        `There is no entry fee to submit your initial idea or synopsis and participate in the early stages of FICS. The competition is fully sponsored to encourage maximum participation from students with innovative solutions for social impact.
        However, to ensure commitment and support for teams progressing beyond the initial shortlisting, a minimal registration fee will be requested at later stages of the competition.This helps us provide better resources, mentorship, and organizational support to shortlisted teams as they develop their projects further.
        `
    },
    {
      id: "item-9",
      question: "I am from Industry, how can I submit my idea?",
      answer:
        `While FICS primarily targets student participation, industry professionals play a vital role as mentors, judges, and sponsors. If you have an innovative idea and would like to collaborate with student teams, please reach out to our coordination team. We will help connect you with suitable student groups interested in working on your project and provide guidance on how to engage effectively within the competition framework.
        `
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container max-w-5xl px-4 mx-auto">
        <h2 className="mb-10 text-2xl font-semibold text-center md:text-3xl">Frequently Asked Questions (FAQs)</h2>

        <Accordion
          type="single"
          collapsible
          value={openItem || undefined}
          onValueChange={(value) => setOpenItem(value)}
          className="space-y-2"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="overflow-hidden border rounded-md border-slate-200">
              <AccordionTrigger className="px-6 py-4 sm:text-[18px] font-medium text-left hover:bg-slate-50">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-sm sm:text-[16px] leading-relaxed text-slate-800">
                <div className="whitespace-pre-wrap">{faq.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
