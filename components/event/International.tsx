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
    image: "/ficsazerbaijan/azerbaijaan.jpg",
    title: "1st International Azerbaijan Pitching Event 2025",
     month: "May",
    date: "8",
    description:
      "FICS organized its first international pitching event in Azerbaijan, bringing together entrepreneurs and investors from around the world.",
    detail: "FICS organized its first international pitching event in Azerbaijan, bringing together entrepreneurs and investors from around the world."
  },
   {
    id: 2,
    image: "/ficsturkey/turkey9.jpg",
    title: "2nd International Turkiye Pitching Event 2025",
      month: "June",
    date: "12",
    description:
      "FICS organized its second international pitching event in Turkiye, showcasing innovative startups and investment opportunities.",
    detail: "FICS organized its second international pitching event in Turkiye, showcasing innovative startups and investment opportunities."
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
  detail ?: string
}

function EventCard({ image, title, date, description, month, detail }: EventCardProps) {
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
            {detail && (
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
                    <div className="whitespace-pre-line">{detail}</div>
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
