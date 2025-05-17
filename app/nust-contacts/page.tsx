import { Card, CardContent } from "@/components/ui/card";
import { MailIcon, PhoneIcon, SchoolIcon } from "lucide-react";

const coordinators = [
  {
    id: 1,
    school: "School of Electrical Engineering & Computer Science (SEECS)",
    members: [
      {
        name: "Dr. Madiha Khalid",
        position: "Assistant Professor",
        phone: "0333-5519362",
        email: "madiha.khalid@seecs.edu.pk",
      },
      {
        name: "Dr. Abdullah Mughees",
        position: "Assistant Professor",
        phone: "0300-8621036",
        email: "abdullah.mughees@seecs.edu.pk",
      },
    ],
  },
  {
    id: 2,
    school: "School of Mechanical & Manufacturing Engineering (SMME)",
    members: [
      {
        name: "Dr. Asad Javed",
        position: "Assistant Professor",
        phone: "0334-7676787",
        email: "asad.javed@smme.nust.edu.pk",
      },
    ],
  },
  {
    id: 3,
    school: "U.S. Pakistan Center for Advanced Studies in Energy (USPCAS-E)",
    members: [
      {
        name: "Mr. Bilal Mehmood Bhutta",
        position: "ILO",
        phone: "0322-5000018",
        email: "ilo@uspcase.nust.edu.pk",
      },
    ],
  },
  {
    id: 4,
    school: "Atta-ur-Rahman School of Applied Bio-Sciences (ASAB)",
    members: [
      {
        name: "Prof. Dr. Saira Justin",
        position: "Professor",
        phone: "0346-5390861",
        email: "sjustin@asab.nust.edu.pk",
      },
    ],
  },
  {
    id: 5,
    school: "School of Chemical & Materials Engineering (SCME)",
    members: [
      {
        name: "Dr. Nabeel Ahmed",
        position: "Assistant Professor",
        phone: "0321-5806813",
        email: "nabeel.ahmed@scme.nust.edu.pk",
      },
    ],
  },
  {
    id: 6,
    school: "NUST Business School (NBS)",
    members: [
      {
        name: "Dr. Hassan Waqar Raja",
        position: "Assistant Professor",
        phone: "0321-5010333",
        email: "hassan.raja@nbs.nust.edu.pk",
      },
    ],
  },
];

export default function CoordinatorsPage() {
  return (
    <div>
         <div className="pb-5 bg-white">
             <div className="relative h-20 sm:h-24 w-full bg-gradient-to-b from-[#3BB0A1] to-[#00547E] flex items-center justify-center mb-5">
        <h1 className="text-xl font-semibold tracking-widest text-white sm:text-4xl">
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
