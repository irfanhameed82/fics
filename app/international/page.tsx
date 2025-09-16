"use client"

import { motion } from "framer-motion"
import { CountryCard, Country } from "@/components/international/CountryCard"

const partnerUniversities: Country[] = [
  {
    id: 1,
    name: "Azerbaijan Technical University",
    logo: "/azerbajianuniversity.webp",
    country: "Azerbaijan",
    countryFlag: "🇦🇿",
    events: [
      {
        title: "FICS Azerbaijan Innovation Summit 2024",
        date: "October 15-17, 2024",
        description: "International innovation showcase featuring cutting-edge projects from Azerbaijan's top students and researchers. The summit brought together industry leaders, academic experts, and young innovators to explore the future of technology and entrepreneurship in the region.",
        location: "Baku, Azerbaijan",
        images: ["/ficsazerbaijan/azerbaijaan.jpg", "/ficsazerbaijan/azerbaijaan1.jpg", "/ficsazerbaijan/azerbaijaan2.jpg", "/ficsazerbaijan/discussion.jpg"]
      },
      {
        title: "FICS Azerbaijan Research Collaboration Forum",
        date: "December 5-6, 2024",
        description: "Comprehensive forum focused on establishing research partnerships and collaborative projects between international institutions. Featured keynote presentations from prominent researchers and interactive workshops on emerging technologies.",
        location: "Azerbaijan Technical University, Baku",
        images: ["/ficsazerbaijan/azerbaijaan3.jpg", "/ficsazerbaijan/azerbaijaan4.jpg", "/ficsazerbaijan/prorector.jpg", "/ficsazerbaijan/secondazerbaijan.jpg"]
      }
    ],
    focalPersons: [
      {
        name: "Dr. Rashad Aliyev",
        position: "International Relations Director",
        email: "r.aliyev@aztu.edu.az",
        phone: "+994 12 538 39 71"
      },
      {
        name: "Prof. Leyla Mammadova",
        position: "FICS Azerbaijan Coordinator",
        email: "l.mammadova@aztu.edu.az",
        phone: "+994 12 538 39 72"
      }
    ]
  },
  {
    id: 2,
    name: "Istanbul Technical University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Istanbul_Technical_University_logo.svg/1200px-Istanbul_Technical_University_logo.svg.png",
    country: "Turkey",
    countryFlag: "🇹🇷",
    events: [
      {
        title: "FICS Turkey Innovation Week 2024",
        date: "November 20-26, 2024",
        description: "A comprehensive week-long celebration of innovation and technology featuring project exhibitions, startup pitches, industry partnerships, and cultural exchange programs. The event highlighted Turkey's growing role in the global innovation ecosystem.",
        location: "Istanbul, Turkey",
        images: ["/ficsturkey/turkey1.jpg", "/ficsturkey/turkey2.jpg", "/ficsturkey/turkey3.jpg", "/ficsturkey/turkey4.jpg", "/ficsturkey/turkey5.jpg"]
      },
      {
        title: "FICS Turkey Tech Summit 2025",
        date: "March 18-20, 2025",
        description: "Premier technology summit bringing together entrepreneurs, investors, and tech innovators from across Turkey and internationally. Features cutting-edge technology demonstrations, investment opportunities, and networking sessions.",
        location: "Istanbul Technical University",
        images: ["/ficsturkey/turkey6.jpg", "/ficsturkey/turkey7.jpg", "/ficsturkey/turkey8.jpg", "/ficsturkey/turkey9.jpg", "/ficsturkey/turkey10.jpg"]
      }
    ],
    focalPersons: [
      {
        name: "Prof. Dr. Mehmet Özkan",
        position: "International Affairs Coordinator",
        email: "ozkan@itu.edu.tr",
        phone: "+90 212 285 3000"
      },
      {
        name: "Dr. Ayşe Kaya",
        position: "FICS Turkey Program Director",
        email: "a.kaya@itu.edu.tr",
        phone: "+90 212 285 3001"
      }
    ]
  },
  {
    id: 3,
    name: "Chiang Mai University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Chiang_Mai_University.svg/1200px-Chiang_Mai_University.svg.png",
    country: "Thailand",
    countryFlag: "🇹🇭",
    events: [
      {
        title: "FICS ASEAN Innovation Forum 2025",
        date: "January 15-17, 2025",
        description: "Regional forum for innovation and entrepreneurship across ASEAN countries",
        location: "Chiang Mai University"
      }
    ],
    focalPersons: [
      {
        name: "Dr. Siriporn Thanakit",
        position: "International Programs Director",
        email: "siriporn.t@cmu.ac.th",
        phone: "+66 53 943 361"
      }
    ]
  },
  {
    id: 4,
    name: "University of Technology Sydney",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/University_of_Technology_Sydney_logo.svg/1200px-University_of_Technology_Sydney_logo.svg.png",
    country: "Australia",
    countryFlag: "🇦🇺",
    events: [
      {
        title: "FICS Australia Chapter Launch",
        date: "February 10, 2025",
        description: "Official launch of FICS Australia chapter with innovation showcase",
        location: "Sydney, Australia"
      }
    ],
    focalPersons: [
      {
        name: "Prof. Michael Johnson",
        position: "Innovation Hub Director",
        email: "michael.johnson@uts.edu.au",
        phone: "+61 2 9514 2000"
      }
    ]
  }
]

export default function International() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            International Events & Partners
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover our global network of partner universities and exciting international events
            that make FICS a truly worldwide innovation platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 mb-16 lg:grid-cols-2">
          {partnerUniversities.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <CountryCard partner={partner} index={index} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="mb-6 text-2xl font-semibold text-gray-900">
            Global Impact
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="mb-2 text-3xl font-bold text-blue-600">{partnerUniversities.length}</div>
              <div className="text-gray-600">Partner Universities</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="mb-2 text-3xl font-bold text-blue-600">{partnerUniversities.length}</div>
              <div className="text-gray-600">Partner Countries</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="mb-2 text-3xl font-bold text-blue-600">{partnerUniversities.reduce((total, partner) => total + partner.events.length, 0)}</div>
              <div className="text-gray-600">Upcoming Events</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="mb-2 text-3xl font-bold text-blue-600">{partnerUniversities.reduce((total, partner) => total + partner.focalPersons.length, 0)}</div>
              <div className="text-gray-600">Contact Persons</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}