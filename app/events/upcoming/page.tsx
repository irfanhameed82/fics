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

const events = [
  {
    id: 1,
    image: "/upcoming/launchofjuniorfics.png",
    title: "FICS Junior Launch Event 2025",
    month: "May",
    date: "28",
    description:
      "FICS Junior is a program designed to inspire and empower young minds to become innovators and entrepreneurs. The event will be held in Lahore, Pakistan, in collaboration with Crescent Model School, Lahore.",
    details: (
      <>
        FICS Junior is a program designed to inspire and empower young minds to become innovators and entrepreneurs. The event will be held in Lahore, Pakistan, in collaboration with Crescent Model School, Lahore.
        <span className="inline-block">
          FICS Junior 2025{' '}
          <a
            href="https://forms.gle/5wuGkm44KXb8Hi8r7"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline hover:text-blue-400 text-blue-700"
          >
            Register Now
          </a>
        </span>
      </>
    )
  },
  {
    id: 2,
    image: "/upcoming/azerbaijanbanner.jpg",
    title: "2nd FICS International Pitching Event in Azerbaijan",
    month: "May",
    date: "27",
    description:
      "The event is being conducted in collaboration with Azerbaijan Technical Universtiy (AzTU), in Baku Azerbaijan. So, join us for an exciting day of innovation and entrepreneurship.",
    details: (<>The event is being conducted in collaboration with Azerbaijan Technical Universtiy (AzTU), in Baku Azerbaijan. So, join us for an exciting day of innovation and entrepreneurship.</>)
  },
  {
    id: 3,
    image: "/upcoming/thailandbanner.jpg",
    title: "1st International FICS Pitching Event in Thailand",
    month: "June",
    date: "27",
    description:
      "The event is being conducted in collaboration with Chaing Mai University Thailand.So, join us for an exciting day of innovation and entrepreneurship.",
    details:"The event is being conducted in collaboration with Chaing Mail University Thailand.So, join us for an exciting day of innovation and entrepreneurship."
  },
]

export default function UpcomingEventsPage() {
  return (
    <div className="relative flex flex-col w-full px-5 font-sans bg-white min-h-screen">
      {/* Event Heading Section */}
      <div className="relative flex items-center justify-between w-full px-6 mb-5 mt-8">
        {/* Centered Event Text */}
        <div className="flex justify-center flex-1">
          <div className="relative">
            <h2 className="text-3xl font-semibold text-center text-gray-800 md:text-4xl lg:text-5xl">
              Upcoming Events
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#1a9a9a]" />
            </h2>
          </div>
        </div>

        {/* Right-Side Image */}
        <div className="w-12 h-12 rotate-180 mt-15 md:w-16 md:h-16">
          <Image
            src="/fics.png"
            alt="FICS Logo"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
      </div>

      {/* Events Grid */}
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
    </div>
  )
}

interface EventCardProps {
  image: string
  title: string
  date: string
  description: string
  month: string 
  details?: React.ReactNode
}

function EventCard({ image, title, date, description, month, details}: EventCardProps) {
  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="bg-gradient-to-b from-[#3BB0A1] to-[#00547E] text-white p-4 h-full">
        <div className="flex items-start gap-3">
          <div className="text-center">
            <div className="text-sm font-medium">{month}</div>
            <div className="text-2xl font-semi">{date}</div>
          </div>
          <div className="flex-1">
            <h3 className="mb-1 text-lg font-semibold">{title}</h3>
            <p className="mb-3 text-sm">{description}</p>
            {details && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="w-full  cursor-pointer text-gray-800">
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