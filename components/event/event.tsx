"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Pakistan from "./pakistan"
import Turkey from "./turkey"
import Azerbaijan from "./azerbaijan"
import Image from "next/image"

export default function Event() {
  return (
    <div className="relative flex flex-col w-full px-5 bg-white">
      {/* Event Heading Section */}
      <div className="relative flex items-center justify-between w-full px-6 mb-5">
        {/* Centered Event Text */}
        <div className="flex justify-center flex-1">
          <div className="relative">
            <h2 className="text-3xl font-semibold text-center text-gray-800 md:text-4xl lg:text-5xl">
              Event
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#248ABD]" />
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
      <TabsList className="flex flex-col justify-center w-full gap-2 my-10 sm:py-1 sm:flex-row ">
            <TabsTrigger
                value="Pakistan"
                className="data-[state=active]:bg-[#248ABD] tracking-widest data-[state=active]:text-white data-[state=active]:shadow-md  text-gray-700 text-xl  hover:bg-[#2a9d8f]/20 transition-all duration-300"
            >
                National Events
            </TabsTrigger>
            <TabsTrigger
                value="Turkey"
                className="data-[state=active]:bg-[#248ABD] tracking-widest data-[state=active]:text-white data-[state=active]:shadow-md  text-gray-700 text-xl  hover:bg-[#2a9d8f]/20 transition-all duration-300"
            >
                International Events
            </TabsTrigger>
            {/* <TabsTrigger
                value="Azerbaijan"
                className="data-[state=active]:bg-[#248ABD] tracking-widest text-xl data-[state=active]:text-white data-[state=active]:shadow-md  text-gray-700 hover:bg-[#2a9d8f]/20 transition-all duration-300"
            >
                Azerbaijan
            </TabsTrigger> */}
        </TabsList>


        <TabsContent value="Pakistan">
        <Azerbaijan />
        </TabsContent>
        <TabsContent value="Turkey">
          <Turkey />
        </TabsContent>
        {/* <TabsContent value="Azerbaijan">
          <Azerbaijan />
        </TabsContent> */}
      </Tabs>
    </div>
  )
}
