"use client"

import { FocalPerson } from "./CountryCard"

interface FocalPersonsProps {
  focalPersons: FocalPerson[]
}

export function FocalPersons({ focalPersons }: FocalPersonsProps) {
  return (
    <div className="bg-green-50 p-4 rounded-lg">
      <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
        👥 Contact Persons
      </h4>
      <div className="space-y-3">
        {focalPersons.map((person, personIndex) => (
          <div key={personIndex} className="bg-white p-3 rounded border-l-4 border-green-400">
            <h5 className="font-medium text-gray-900">{person.name}</h5>
            <p className="text-sm text-gray-600 mb-2">{person.position}</p>
            <div className="space-y-1">
              <p className="text-sm text-green-700">✉️ {person.email}</p>
              <p className="text-sm text-green-700">📞 {person.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}