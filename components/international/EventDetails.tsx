"use client"

import Image from "next/image"
import { Event } from "./CountryCard"

interface EventDetailsProps {
  events: Event[]
}

export function EventDetails({ events }: EventDetailsProps) {
  return (
    <div className="p-4 rounded-lg bg-blue-50">
      <h4 className="flex items-center gap-2 mb-3 font-semibold text-blue-900">
        🎯Events
      </h4>
      <div className="space-y-3">
        {events.map((event, eventIndex) => (
          <div key={eventIndex} className="p-3 bg-white border-l-4 border-blue-400 rounded">
            <h5 className="mb-1 font-medium text-gray-900">{event.title}</h5>
            <p className="mb-1 text-sm text-gray-600">📅 {event.date}</p>
            <p className="mb-1 text-sm text-gray-600">📍 {event.location}</p>
            
            <div className="grid gap-2 mt-2 sm:grid-cols-3">
            {event.images &&

            event.images.map((img, imgIndex) => (
              <Image
                key={imgIndex}
                width={1000}
                height={1000}
                alt="Event Image"
                src={img}
                className="mt-2 rounded"
              />
            ))}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}