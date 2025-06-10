import { Card, CardContent } from "@/components/ui/card";
import { MailIcon, PhoneIcon, SchoolIcon } from "lucide-react";
interface Coordinator {
  id: number;
  school: string;
  members: {
    name: string;
    position: string;
    phone: string;
    email: string;
  }[];
}
const coordinators:Coordinator[] = [
  {
    id: 1,
    school: "School of Electrical Engineering & Computer Science (SEECS)",
    members: [
      { name: "Dr. Madiha Khalid", position: "Assistant Professor", phone: "0333-5519362", email: "madiha.khalid@seecs.edu.pk" },
      { name: "Dr. Abdullah Mughees", position: "Assistant Professor", phone: "0300-8621036", email: "abdullah.mughees@seecs.edu.pk" },
    ],
  },
  {
    id: 2,
    school: "School of Mechanical & Manufacturing Engineering (SMME)",
    members: [
      { name: "Dr. Asad Javed", position: "Assistant Professor", phone: "0334-7676787", email: "asad.javed@smme.nust.edu.pk" },
    ],
  },
  {
    id: 3,
    school: "U.S. Pakistan Center for Advanced Studies in Energy (USPCAS-E)",
    members: [
      { name: "Mr. Bilal Mehmood Bhutta", position: "Industry Liaison Officer (ILO)", phone: "0322-5000018", email: "ilo@uspcase.nust.edu.pk" },
    ],
  },
  {
    id: 4,
    school: "Atta-ur-Rahman School of Applied Bio-Sciences (ASAB)",
    members: [
      { name: "Prof. Dr. Saira Justin", position: "Professor", phone: "0346-5390861", email: "sjustin@asab.nust.edu.pk" },
    ],
  },
  {
    id: 5,
    school: "School of Chemical & Materials Engineering (SCME)",
    members: [
      { name: "Dr. Nabeel Ahmed", position: "Assistant Professor", phone: "0321-5806813", email: "nabeel.ahmed@scme.nust.edu.pk" },
    ],
  },
  {
    id: 6,
    school: "NUST Business School (NBS)",
    members: [
      { name: "Dr. Hassan Waqar Raja", position: "Assistant Professor", phone: "0321-5010333", email: "hassan.raja@nbs.nust.edu.pk" },
    ],
  },
  {
    id: 7,
    school: "School of Civil & Environmental Engineering (SCEE)",
    members: [
      { name: "Dr. Zafar Iqbal", position: "Assistant Professor", phone: "0336-5008882", email: "zafar.ahlsome.nust.edu.pk" },
    ],
  },
  {
    id: 8,
    school: "Military College of Signals (MCS)",
    members: [
      { name: "Dr. Alina Mirza", position: "Assistant Professor", phone: "0332-5193943", email: "alina.mirza@mcs.edu.pk" },
    ],
  },
  {
    id: 9,
    school: "College of Electrical & Mechanical Engineering (CEME)",
    members: [
      { name: "Prof. Dr. Usman Akram", position: "Professor", phone: "0333-6913321", email: "usman.akram@ceme.nust.edu.pk" },
    ],
  },
  {
    id: 10,
    school: "Military College of Engineering (MCE)",
    members: [
      { name: "Dr. Awais Muhammad Butt", position: "Assistant Professor", phone: "0328-1555021", email: "ambutt@mce.nust.edu.pk" },
    ],
  },
  {
    id: 11,
    school: "College of Aeronautical Engineering (CAE)",
    members: [
      { name: "Dr. Taimur Ali Shams", position: "Head of Research", phone: "", email: "hodresearch@cae.nust.edu.pk" },
    ],
  },
  {
    id: 12,
    school: "School of Social Sciences & Humanities (SSH)",
    members: [
      { name: "Mr. Ahsan Zafar", position: "Industry Liaison Officer (ILO)", phone: "0345-9166420", email: "ilo@ssh.nust.edu.pk" },
    ],
  },
  {
    id: 13,
    school: "School of Art, Design & Architecture (SADA)",
    members: [
      { name: "Dr. Raja Mubashir Karim", position: "Head of Research", phone: "0312-6793971", email: "mubashir.karim@sada.nust.edu.pk" },
    ],
  },
  {
    id: 14,
    school: "School of Natural Sciences (SNS)",
    members: [
      { name: "Dr. Faisal Munir Bhutta", position: "Assistant Professor", phone: "0345-5346577", email: "faisal.munir@sns.nust.edu.pk" },
    ],
  },
  {
    id: 15,
    school: "NUST Balochistan Campus (NBC)",
    members: [
      { name: "Dr. Muhammad Sohail", position: "Assistant Professor", phone: "0331-3348921", email: "sohail@nbc.nust.edu.pk" },
    ],
  },
  {
    id: 16,
    school: "Karachi Institute of Economics & Technology (KIET)",
    members: [
      { name: "Mr. Prakash Lohani", position: "Director ORIC", phone: "0300-2807440", email: "oric@kiet.edu.pk" },
    ],
  },
  {
    id: 17,
    school: "Quaid-e-Azam University (QAU)",
    members: [
      { name: "Prof. Dr. M. Zaman", position: "Professor", phone: "0335-8709924", email: "zaman@qau.edu.pk" },
    ],
  },
  {
    id: 18,
    school: "Sir Syed University of Engineering & Technology (SSUET)",
    members: [
      { name: "Ms. Huma Anwar", position: "Manager Operations & Admin (ORIC)", phone: "0332-3103313", email: "huma.anwar@ssuet.edu.pk" },
    ],
  },
  {
    id: 19,
    school: "National University of Technology (NUTECH)",
    members: [
      { name: "Ms. Hira Ayub", position: "Assistant Director (NORIC)", phone: "0304-5577444", email: "hira.ayub@nutech.edu.pk" },
    ],
  },
  {
    id: 20,
    school: "University of Agriculture, Faisalabad (UAF)",
    members: [
      { name: "Dr. Iftikhar Ahmad", position: "Director, Business Incubation Center (BIC)", phone: "0741-616564", email: "director.bic@uaf.edu.pk" },
    ],
  },
  {
    id: 21,
    school: "Jinnah University for Women (JUW)",
    members: [
      { name: "Ms. Asma Hashmi", position: "Startup Support Executive, Chemistry Department", phone: "0306-2808455", email: "hashmi.asma@gmail.com" },
    ],
  },
  {
    id: 22,
    school: "University of Engineering & Technology Taxila (UET Taxila)",
    members: [
      { name: "Dr. Noshina Ishaque", position: "Lecturer, Computer Engineering", phone: "0336-4800662", email: "noshina.ishaque@uetaxila.edu.pk" },
         ],
},
];

export default function CoordinatorsPage() {
  return (
    <div>
         <div className="pb-5 bg-white">
             <div className=" h-20 sm:h-24 w-full bg-gradient-to-b from-[#3BB0A1] to-[#00547E] flex items-center justify-center mb-5">
        <h1 className="text-xl flex justify-center  items-center font-semibold tracking-widest text-white sm:text-4xl">
Points of Contact at NUST and Other Universities</h1>
      </div>
      </div>
    
    <div className="container grid grid-cols-1 gap-6 p-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
      {coordinators.map((coord) => (
        <Card key={coord.id} className="transition-shadow shadow-md rounded-xl hover:shadow-sm">
          <CardContent className="p-4">
            <h2 className="flex items-center mb-2 text-xl font-semibold text-[#248ABD]">
              
              {coord.school}
            </h2>
            <div className="space-y-4">
              {coord.members.map((member, index) => (
                <div key={index} className="pt-2 border-t">
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <PhoneIcon className="w-4 h-4" />
                    {member.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MailIcon className="w-4 h-4" />
                    <a href={`mailto:${member.email}`} className="text-blue-600 underline">
                      {member.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
}
