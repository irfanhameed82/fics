import Image from "next/image"
import { Button } from "@/components/ui/button"

// Event card data
const events = [
  {
    id: 1,
    image: "/upcoming/launchofjuniorfics.png",
    title: "FICS Junior Launch Event 2025",
    month: "May",
    date: "28",
    description:
      "FICS Junior is a program designed to inspire and empower young minds to become innovators and entrepreneurs. The event will be held in Lahore, Pakistan, in collaboration with Crescent Model School, Lahore.",
  },
  {
    id: 2,
    image: "/upcoming/launchofjuniorfics.png",
    title: "2nd FICS International Pitching Event in Azerbaijan",
    month: "May",
    date: "27",
    description:
      "The event is being conducted in collaboration with Azerbaijan Technical Universtiy (AzTU), in Baku Azerbaijan. So, join us for an exciting day of innovation and entrepreneurship.",
  },
  {
    id: 3,
    image: "/upcoming/launchofjuniorfics.png",
    title: "1st International FICS Pitching Event in Thailand",
    month: "June",
    date: "27",
    description:
      "The event is being conducted in collaboration with Chaing Mail University Thailand.So, join us for an exciting day of innovation and entrepreneurship.",
  },
]

export default function UpcomingEvents() {
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
        />
      ))}
    </div>
  )
}

interface EventCardProps {
  image: string
  title: string
  date: string
  description: string
  month: string 
}

function EventCard({ image, title, date, description , month}: EventCardProps) {
  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
      <div className="relative w-full h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="bg-gradient-to-b from-[#3BB0A1] to-[#00547E] text-white p-4 h-full">
        <div className="flex items-start gap-3">
          <div className="text-center">
            <div className="text-sm font-medium">{month}</div>
            <div className="text-2xl font-semi">{date}</div>
          </div>
          <div className="flex-1">
            <h3 className="mb-1 text-lg font-semibold">{title}</h3>
            <p className="mb-3 text-sm opacity-90">{description}</p>
            
          </div>
        </div>
      </div>
    </div>
  )
}
