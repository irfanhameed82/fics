"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Pakistan from "./pakistan"

import Image from "next/image"
import International from "./International"
import UpcomingEvents from "./upcoming"

export default function Event() {
  return (
    <div className="relative flex flex-col w-full px-5 font-sans bg-white">
      {/* Event Heading Section */}
      <div className="relative flex items-center justify-between w-full px-6 mb-5">
        {/* Centered Event Text */}
        <div className="flex justify-center flex-1">
          <div className="relative">
            <h2 className="text-3xl font-semibold text-center text-gray-800 md:text-4xl lg:text-5xl">
              Events
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

      {/* Tabs Section */}
      <Tabs defaultValue="Pakistan" className="w-full ">
      <TabsList className="flex flex-col justify-center w-full gap-2  bg-white sm:py-1 sm:flex-row ">
            <TabsTrigger
                value="Pakistan"
                className="data-[state=active]:bg-[#1a9a9a]  tracking-widest data-[state=active]:text-white data-[state=active]:shadow-md   text-gray-700 text-xl  hover:bg-[#2a9d8f]/20 transition-all duration-300 rounded-none w-full"
            >
                National Events
            </TabsTrigger>
            <TabsTrigger
                value="International"
                className="data-[state=active]:bg-[#1a9a9a] tracking-widest w-full rounded-none data-[state=active]:text-white data-[state=active]:shadow-md  text-gray-700 text-xl  hover:bg-[#2a9d8f]/20 transition-all duration-300"
            >
                International Events
            </TabsTrigger>
             <TabsTrigger
                value="Upcoming"
                className="data-[state=active]:bg-[#1a9a9a] tracking-widest w-full rounded-none data-[state=active]:text-white data-[state=active]:shadow-md  text-gray-700 text-xl  hover:bg-[#2a9d8f]/20 transition-all duration-300"
            >
                Upcoming Events
            </TabsTrigger>
            
        </TabsList>


        <TabsContent value="Pakistan">
        <Pakistan />
        </TabsContent>
        <TabsContent value="International">
          <International />
        </TabsContent>
          <TabsContent value="Upcoming">
          <UpcomingEvents/>
        </TabsContent>
      </Tabs>
    </div>
  )
}
