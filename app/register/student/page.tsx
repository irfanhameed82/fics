"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NationalRegistrationForm from "@/components/registration/national-registration--form"
import InternationalRegistrationForm from "@/components/registration/international-registration-form"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative py-8 bg-[#2980b9] flex items-center justify-center mb-5">
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">Registration</h1>
      </div>

      {/* Tabs Section */}
      <div className="container px-4 pb-16 mx-auto">
        <Tabs defaultValue="National" className="w-full">
          <TabsList className="flex w-full mb-8 bg-white rounded-md shadow-sm">
            <TabsTrigger
              value="National"
              className="flex-1 py-3 data-[state=active]:bg-[#248ABD] data-[state=active]:text-white"
            >
              National Registration
            </TabsTrigger>
            <TabsTrigger
              value="International"
              className="flex-1 py-3 data-[state=active]:bg-[#248ABD] data-[state=active]:text-white"
            >
              International Registration
            </TabsTrigger>
          </TabsList>

          {/* National Registration Form */}
          <TabsContent value="National">
            <NationalRegistrationForm />
          </TabsContent>

          {/* International Registration Form */}
          <TabsContent value="International">
            <InternationalRegistrationForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
