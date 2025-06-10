import { Card, CardContent } from "@/components/ui/card";
import { MailIcon, PhoneIcon, SchoolIcon } from "lucide-react";

const coordinators = [
  {
    id: 1,
    school: "Azerbaijan Technical University (AzTU)",
    members: [
      {
        name: "Mr. Orkhan Vatankhah",
        position: "Head of International Relations Department",
        phone: "+9294125391348",
        email: "international@aztu.edu.az",
      }
    ],
    },
    {
    id: 2,
    school: "Chiang Mai University (CMU) Thailand",
    members: [
      {
        name: "Mr. Praeploy Soonthornpruek",
        position: "Focal Person",
        phone: "+66-93-137-5227",
        email: "praeploy@iagency.co.th",
      }
    ],
  },
  
  
];

export default function CoordinatorsPage() {
  return (
         <div className="pb-5 bg-white">
             <div className="relative  h-20 sm:h-24 w-full bg-gradient-to-b from-[#3BB0A1] to-[#00547E] flex flex-col items-center justify-center mb-5">
        <h1 className="text-xl font-semibold tracking-widest text-white sm:text-4xl">
International Contacts
</h1>
      </div>
      <div className="container px-4 mx-auto">
        <p className="flex justify-center items-center mb-6 text-lg text-gray-900">
    
  Connect with regional coordinators and partner universities worldwide who can assist international participants.

        </p>
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
