
import { IndustryTestimonials } from "@/components/industryTestimonials"
import { StudentTestimonials } from "@/components/studentTestimonials"
const metadata = {
    title: 'Testimonials',
    description: 'Testimonials page of the website',
}

export default function app(){
    return(
        <div className="flex flex-col w-full min-h-screen bg-white ">
           <section className="px-10 py-10 bg-white">
            
                <IndustryTestimonials/>
            </section>
            <section className="px-10 py-10 bg-white">
            <StudentTestimonials/>
            </section>

        </div>
    )
}