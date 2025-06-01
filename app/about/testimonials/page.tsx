"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const industryTestimonials = [
  {
    name: "Khalid Khan",
    testimonial: 
      "The quality and impact of the projects displayed at FICS have improved over time. The majority of the projects that I see now are oriented towards solving the challenges of society. This program provides a very good opportunity for students and also has a positive impact on the branding of the university. FICS is doing a great job. I wish them all the best.",
  },
  {
    name: "Muneeb Ahsan Malik",
    testimonial: 
      "We became associated with FICS because of its extensive work with the SDGs. Going through the projects amazed us; the outstanding work which had been done by the students without any monetary motivation was commendable. An idea can be taken to a milestone if a certain level of innovation is added into it. I wish you guys the best of luck.",
  },
  {
    name: "Sayeed Ahmad Masud",
    testimonial: 
      "I have been affiliated with FICS almost from the very start. The goal of FICS is to employ the ability, creativity, and imagination of students to find solutions for social problems. If expanded to other universities and executed properly, initiatives like FICS can bring tangible benefits to society.",
  },
];

const studentTestimonials = [
  {
    name: "Saif Khattak",
    testimonial: 
      "I started off in FICS as the Director Publications. My ideas were both welcomed and encouraged leading to the inception of POSTFICS - the front page of FICS which both inspires idea generation through the numerous articles published on it and keeps participants updated. When I became the VP Media in my junior year, my abilities as a leader were put to the test due to time constraints. However, with the capacity-building we had done through FICS and its nurturing environment, we were able to successfully complete our mission and uphold the image of this platform as one which enables students to make something out of their ideas, pursue practicality, and connect with the industry.",
  },
  {
    name: "Saad Rafiq",
    testimonial: 
      "Our society, just like all societies, is riddled with its own problems. FICS provides a platform for young minds to think of solutions to existing problems in an innovative way. This is one of those events that truly makes a difference around us and cultivates a much-needed innovative mindset in our society. Working with a team of like-minded and determined individuals to make this event a success was a wholesome experience for me. I am sure that this event will pave the way for future thinkers to become problem solvers and provide them with the resources and mentorship to turn their ideas into reality.",
  },
  {
    name: "Rehan Zafar",
    testimonial: 
      "FICS has been very close to my heart ever since I first became a part of it. I served as VP Operations in FICS'18 and initiated the Training and Organizational Development project because I believe that the core principle of FICS is to empower people and ignite the drive in them to do better. FICS, at its core, aims to empower young people and provide them with the motivation and platform to flourish their ideas into practical projects beneficial to society as well as themselves.",
  },
];

const TestimonialsPage: React.FC = () => {
  return (
    <div className="w-full">
      <div className="relative h-20 sm:h-24 w-full bg-gradient-to-b from-[#3BB0A1] to-[#00547E] flex items-center justify-center mb-10">
        <h1 className="text-xl font-semibold tracking-widest text-white sm:text-4xl">
          Testimonials
        </h1>
      </div>

      {/* Industry Section */}
      <section className="mb-16 relative max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">What the Industry Says</h2>
        <p className="text-gray-700 mb-6">
          FICS has emerged as a dynamic platform that bridges the gap between academia and industry.
          Industry leaders and partners recognize FICS as a source of fresh ideas, innovative solutions,
          and socially-driven tech talent. Through mentorship, collaboration, and project evaluation,
          they’ve seen the potential of student-led innovations to address real-world challenges and drive
          sustainable impact.
        </p>

        <Carousel  className="relative">
          <CarouselContent>
            {industryTestimonials.map(({ name, testimonial }, idx) => (
              <CarouselItem key={idx} className="px-4">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <blockquote className="italic text-lg text-gray-800 mb-4">“{testimonial}”</blockquote>
                  <p className="text-right font-medium">— {name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2">
            <ChevronLeft size={24} />
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2">
            <ChevronRight size={24} />
          </CarouselNext>
        </Carousel>
      </section>

      {/* Student Section */}
      <section className="relative max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">What our Students Say?</h2>
        <p className="text-gray-700 mb-6">
          FICS is a journey of discovery, growth, and real-world impact. For students, it's more than just a
          competition — it's an opportunity to turn ideas into action, solve meaningful problems, and experience
          entrepreneurship first-hand. From gaining mentorship and industry exposure to building startups that
          make a difference, FICS has empowered thousands of students to dream big and lead with purpose.
          Hear directly from our students about how FICS transformed their academic experience into a launchpad
          for innovation and social change.
        </p>

        <Carousel  className="relative">
          <CarouselContent>
            {studentTestimonials.map(({ name, testimonial }, idx) => (
              <CarouselItem key={idx} className="px-4">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <blockquote className="italic text-lg text-gray-800 mb-4">“{testimonial}”</blockquote>
                  <p className="text-right font-medium">— {name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2">
            <ChevronLeft size={24} />
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2">
            <ChevronRight size={24} />
          </CarouselNext>
        </Carousel>
      </section>
    </div>
  );
};

export default TestimonialsPage;