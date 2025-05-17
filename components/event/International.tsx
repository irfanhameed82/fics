import Image from "next/image"
import { Button } from "@/components/ui/button"

// Event card data
const events = [
  {
    id: 1,
    image: "/ficsazerbaijan/prorector.jpg",
    title: "1st International Azerbaijan Pitching Event 2025",
     month: "May",
    date: "8th",
    description:
      "FICS organized its first international pitching event in Azerbaijan, bringing together entrepreneurs and investors from around the world.",
  },
   {
    id: 1,
    image: "/ficsturkey/turkey1.jpg",
    title: "2nd International Turkiye Pitching Event 2025",
      month: "June",
    date: "12nd",
    description:
      "FICS organized its second international pitching event in Turkiye, showcasing innovative startups and investment opportunities.",
  },
  
]

export default function International() {
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
  month: string
  description: string
}

function EventCard({ image, title, date, description, month }: EventCardProps) {
  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
      <div className="relative w-full h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="bg-gradient-to-b from-[#3BB0A1] to-[#00547E] text-white p-4">
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
