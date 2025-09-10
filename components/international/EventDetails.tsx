"use client"

import { Event } from "./CountryCard"

interface EventDetailsProps {
  events: Event[]
}

export function EventDetails({ events }: EventDetailsProps) {
  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
        🎯 Upcoming Events
      </h4>
      <div className="space-y-3">
        {events.map((event, eventIndex) => (
          <div key={eventIndex} className="bg-white p-3 rounded border-l-4 border-blue-400">
            <h5 className="font-medium text-gray-900 mb-1">{event.title}</h5>
            <p className="text-sm text-gray-600 mb-1">📅 {event.date}</p>
            <p className="text-sm text-gray-600 mb-1">📍 {event.location}</p>
            <p className="text-sm text-blue-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}