"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Event card data
const events = [
  {
    id: 1,
    image: "/ficsimage.jpg",
    title: "FICS 2024 Grand Finale",
    month: "Aug",
    date: "27",
    description:
      "On August 27, 2024, FICS held its Grand Finale event in Islamabad, Pakistan.",
    details: `Finding Innovative & Creative Solutions (FICS '24) concludes at NUST - August 27, 2024.

Grand Finale & Prize Distribution Ceremony of Finding Innovative & Creative Solutions (FICS 2024), a flagship initiative of NUST towards fostering social entrepreneurship, was held at the university's main campus. The 11th edition of FICS expanded its international footprint to Turkiye and Azerbaijan in partnership with Azerbaijan Technical University and Altinbas University, Turkiye. The robust competition witnessed as many as 800 project submissions from over 30 NUST Schools & Colleges, and national and international institutions. Mr Mohyuddin Ahmed Wani, Secretary Ministry of Federal Education & Professional Training, graced the event as chief guest. Prominent amongst others were Lt Gen (Retd) Engr Javed Mahmood Bukhari, Rector NUST, and Ambassadors and esteemed educationists from Azerbaijan, Turkiye and Brunei Darussalam.  

The overall national winner of FICS '24 was Team Harassment Defender. It is an indigenous, female-led initiative that seamlessly integrates hardware and app capabilities to address women's safety concerns. The winning team was awarded a cash prize of PKR 500,000. In addition, 1st and 2nd runner-ups were awarded cash prizes of PKR 300,000 and PKR 150,000, respectively. Meanwhile, the Global Champion Award of USD 5000 was conferred upon an international team ABC (Amyotrophic Brain Cube) from Azerbaijan State Oil & Industry University. The team stood out amongst international contestants. A Special Award was also bestowed upon team Plastigate from NUST School of Civil & Environmental Engineering in the category of SDG 11 (Sustainable Cities & Communities). In addition, a Social Impact Award was won by team Visionary from Azerbaijan Technical University (AzTU), Azerbaijan.

The chief guest, Mr Mohyuddin Ahmed Wani, Secretary Ministry of Federal Education & Professional Training, complimented the finalists of FICS '24 and their mentors, particularly the winners for their ingenious ideas and solutions to address challenges facing the country and beyond. He stressed the need for figuring out the real issues, and subsequently conceiving and materialising innovative ideas for poverty alleviation, disaster risk reduction, and fighting illiteracy in the far-reaches of the country. The Federal Secretary also emphasised promotion of cost-efficient technology-driven solutions for catering to the educational needs of the underprivileged segments of the society, highlighting that NUST provides the perfect entrepreneurial ecosystem and a launching pad for innovative startups to thrive, succeed and contribute to the national development.   

In his address, Lt Gen (Retd) Engr Javed Mahmood Bukhari, Rector NUST, highlighted that FICS is the university's flagship project that leverages upon NUST's comprehensive startup ecosystem towards developing sustainable businesses, while manifesting 4th generation entrepreneurial character of the university. The initiative, he maintained, is aimed at providing brilliant young minds with a chance to convert societal challenges into entrepreneurial opportunities. He further said, "Our faculty, in collaboration with our industrial partners, mentor the participants in refining their ideas while creating prototypes, systems, products and devices." He also highlighted that after a rigorous three-stage competition, the successful entrepreneurial ventures are offered free incubation services at the National Science & Technology Park (NSTP) based at NUST.  He made special mention of FICS '24 marking a historic moment in the relationship between Pakistan, Turkiye, and Azerbaijan, paving the way for enhanced tripartite cooperation in youth entrepreneurship and innovation.

FICS is fortunate to have the patronage of diverse industrial partners providing seed fund and cash prizes for promising projects. The sponsors of FICS '24 included National Radio Telecommunication Company (NRTC), Crescent Steel & Allied Products Ltd (CSAPL), Allied Bank Limited (ABL), Askari Bank Limited, and Central Asian Cellular Forum (CACF) and Alfoze Technologies Pvt. Ltd. Knowledge Partners for FICS 2024 included Intellectual Property Office (IPO) Pakistan, Pakistan Software Houses Association for IT and ITES (P@SHA), Change Mechanics Pvt. Ltd., Sustainable Development Policy Institute (SDPI), etc.`
  },
  {
    id: 2,
    image: "/ficsimage.jpg",
    title: "FICS 2025 Islamabad Pitching Event",
    month: "Apr ",
    date: "24",
    description:
      "On April 23-24, 2025, FICS held a pitching event in Islamabad, Pakistan.",
    details: `Finding Innovative & Creative Solutions (FICS '25) is a flagship initiative of NUST towards fostering social entrepreneurship. The 12th edition of FICS expanded its international footprint to Turkiye and Azerbaijan in partnership with Azerbaijan Technical University and Altinbas University, Turkiye. The robust competition witnessed as many as 800 project submissions from over 30 NUST Schools & Colleges, and national and international institutions. Mr Mohyuddin Ahmed Wani, Secretary Ministry of Federal Education & Professional Training, graced the event as chief guest. Prominent amongst others were Lt Gen (Retd) Engr Javed Mahmood Bukhari, Rector NUST, and Ambassadors and esteemed educationists from Azerbaijan, Turkiye and Brunei Darussalam.
 .`
  },
  

  {
    id: 3,
    image: "/ficsimage.jpg",
    title: "FICS 2025 Karachi Pitching Event",
    month: "Apr",
    date: "28",
    description:
      "On April 28, 2025, FICS held a pitching event in Karachi, Pakistan.",
    details: `Finding Innovative & Creative Solutions (FICS '25) is a flagship initiative of NUST towards fostering social entrepreneurship. The 12th edition of FICS expanded its international footprint to Turkiye and Azerbaijan in partnership with Azerbaijan Technical University and Altinbas University, Turkiye. The robust competition witnessed as many as 800 project submissions from over 30 NUST Schools & Colleges, and national and international institutions. Mr Mohyuddin Ahmed Wani, Secretary Ministry of Federal Education & Professional Training, graced the event as chief guest. Prominent amongst others were Lt Gen (Retd) Engr Javed Mahmood Bukhari, Rector NUST, and Ambassadors and esteemed educationists from Azerbaijan, Turkiye and Brunei Darussalam.`
  },
]

export default function Pakistan() {
  return (
    <div className="grid grid-cols-1 gap-6 my-5 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard
          key={event.id}
          image={event.image}
          title={event.title}
          date={event.date}
          month={event.month}
          description={event.description}
          details={event.details}
        />
      ))}
    </div>
  )
}

interface EventCardProps {
  image: string
  title: string
  date: string
  month: string
  description: string
  details?: string
}

function EventCard({ image, title, month, date, description, details }: EventCardProps) {
  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
      <div className="relative w-full h-48">
        <Image 
          src={image || "/placeholder.svg"} 
          alt={title} 
          fill 
          className="object-cover" 
        />
      </div>
      <div className="bg-gradient-to-b from-[#3BB0A1] to-[#00547E] text-white p-4">
        <div className="flex items-start gap-3">
          <div className="text-center">
            <div className="text-sm font-normal">{month}</div>
            <div className="text-2xl font-normal">{date}</div>
          </div>
          <div className="flex-1">
            <h3 className="mb-1 text-lg font-semibold">{title}</h3>
            <p className="mb-3 text-sm opacity-90">{description}</p>
            
            {details && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full cursor-pointer text-gray-800">
                    Read more
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[80vh] overflow-auto sm:max-w-2xl rounded-none">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{title}</DialogTitle>
                  </DialogHeader>
                  <div className="relative w-full h-64 my-4">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center gap-4">
                      <div className="px-3 py-2 text-white rounded-lg bg-gradient-to-b from-[#3BB0A1] to-[#00547E]">
                        <div className="text-sm">{month}</div>
                        <div className="text-xl font-bold">{date}</div>
                      </div>
                      <p className="text-sm italic">{description}</p>
                    </div>
                    <div className="whitespace-pre-line">{details}</div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}