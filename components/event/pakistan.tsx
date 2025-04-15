import Image from "next/image"
import { Button } from "@/components/ui/button"

// Event card data
const events = [
  {
    id: 1,
    image: "/ficsimage.jpg",
    title: "FICS Science Summit 2025",
    date: "Mar 27",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac tortor congue morbi blandit orci pretium molestie tincidunt placerat.",
  },
  {
    id: 2,
    image: "/ficsimage.jpg",
    title: "FICS Science Summit 2025",
    date: "Mar 27",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac tortor congue morbi blandit orci pretium molestie tincidunt placerat.",
  },
  {
    id: 3,
    image: "/ficsimage.jpg",
    title: "FICS Science Summit 2025",
    date: "Mar 27",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac tortor congue morbi blandit orci pretium molestie tincidunt placerat.",
  },
  {
    id: 4,
    image: "/ficsimage.jpg",
    title: "FICS Science Summit 2025",
    date: "Mar 27",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac tortor congue morbi blandit orci pretium molestie tincidunt placerat.",
  },
  {
    id: 5,
    image: "/ficsimage.jpg",
    title: "FICS Science Summit 2025",
    date: "Mar 27",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac tortor congue morbi blandit orci pretium molestie tincidunt placerat.",
  },
  {
    id: 6,
    image: "/ficsimage.jpg",
    title: "FICS Science Summit 2025",
    date: "Mar 27",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac tortor congue morbi blandit orci pretium molestie tincidunt placerat.",
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
}

function EventCard({ image, title, date, description }: EventCardProps) {
  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
      <div className="relative w-full h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="bg-[#0288D1] text-white p-4">
        <div className="flex items-start gap-3">
          <div className="text-center">
            <div className="text-sm font-medium">Mar</div>
            <div className="text-2xl font-bold">27</div>
          </div>
          <div className="flex-1">
            <h3 className="mb-1 text-lg font-bold">{title}</h3>
            <p className="mb-3 text-sm opacity-90">{description}</p>
            
          </div>
        </div>
      </div>
    </div>
  )
}
