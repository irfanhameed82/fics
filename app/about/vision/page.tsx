"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RocketIcon, LightbulbIcon, UsersIcon, ShieldCheckIcon, ZapIcon, BriefcaseIcon, LeafIcon } from "lucide-react";

export default function page() {
  const pillars = [
    {
      id: 1,
      title: "Putting People First; Developing Human and Social Capital",
      description: "A society where every citizen can transform their quality of life through strengthened human and social capital.",
      icon: <UsersIcon className="w-8 h-8" />,
      color: "bg-blue-100 "
    },
    {
      id: 2,
      title: "Democratic Governance & Institutional Reform",
      description: "Modernizing the public sector for efficient service delivery and transparent governance.",
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      color: "bg-green-100 "
    },
    {
      id: 3,
      title: "Energy, Water and Food Security",
      description: "Ensuring reliable, clean and cost-effective availability of essential resources for sustainable growth.",
      icon: <ZapIcon className="w-8 h-8" />,
      color: "bg-yellow-100"
    },
    {
      id: 4,
      title: "Private Sector & Entrepreneurship-led Growth",
      description: "Enabling private investment and entrepreneurship to lead the country's development.",
      icon: <BriefcaseIcon className="w-8 h-8" />,
      color: "bg-purple-100"
    },
    {
      id: 5,
      title: "Developing a Competitive Knowledge Economy",
      description: "Improving competitiveness through innovation, value addition across all sectors.",
      icon: <LightbulbIcon className="w-8 h-8" />,
      color: "bg-red-100 "
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 "></div>
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-[#248ABD] bg-transparent ">
              Pakistan Vision 2025
            </Badge>
            <h1 className="mb-6 text-4xl font-semibold text-gray-900 md:text-5xl ">
              One Nation, <span className="text-[#248ABD]">One Vision</span>
            </h1>
            <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-600 ">
              Transforming Pakistan into one of the top economies through sustainable development and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white ">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-3xl font-semibold text-center text-gray-900 ">
              About <span className="text-[#248ABD]">Pakistan Vision 2025</span>
            </h2>
            <div className="space-y-6 text-gray-600 ">
              <p>
                Pakistan Vision 2025, prepared by the Planning Commission of Pakistan, lays down a foundation to put Pakistan on a fast track of development with the ultimate goal of transforming it to become one of top economies in the world.
              </p>
              <p>
                The vision offers an integrated formula for development and prosperity, recognizing the people of Pakistan as our greatest asset and leveraging their strengths for growth and development.
              </p>
              <p>
                Our biggest priority is to tap the talent, energy, potential skills and the passion of Pakistan's youth (nearly 110 million people below the age of 30) and make them the agents of change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-gray-50 ">
        <div className="container px-4 mx-auto">
          <h2 className="mb-4 text-3xl font-semibold text-center text-gray-900 ">
            The <span className="text-[#248ABD]">7 Pillars</span> of Vision 2025
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600 ">
            The realization of the Vision requires simultaneous attention to these key priority areas.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.id} className="transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className={`${pillar.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                    {pillar.icon}
                  </div>
                  <CardTitle className="text-xl text-[#248ABD]">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{pillar.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}