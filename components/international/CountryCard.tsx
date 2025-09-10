"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { EventDetails } from "./EventDetails"
import { FocalPersons } from "./FocalPersons"

export interface Event {
  title: string
  date: string
  description: string
  location: string
}

export interface FocalPerson {
  name: string
  position: string
  email: string
  phone: string
}

export interface Country {
  id: number
  name: string
  logo: string
  country: string
  countryFlag: string
  events: Event[]
  focalPersons: FocalPerson[]
}

interface CountryCardProps {
  partner: Country
  index: number
}

export function CountryCard({ partner, index }: CountryCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 relative flex-shrink-0">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {partner.name}
              </h3>
              <p className="text-lg text-gray-600 flex items-center gap-2">
                <span className="text-2xl">{partner.countryFlag}</span>
                {partner.country}
              </p>
            </div>
          </div>
          
          <EventDetails events={partner.events} />
          <FocalPersons focalPersons={partner.focalPersons} />
        </div>
      </CardContent>
    </Card>
  )
}