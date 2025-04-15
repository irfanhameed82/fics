
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import Pakistan from "./pakistan"
import Turkey from "./turkey"
import Azerbaijan from "./azerbaijan"
export default function Event(){
    return (
        <div className="flex flex-col bg-white ">
        <h1 className="text-4xl font-bold">Event</h1>
        <p className="mt-4 text-lg">Details about the event will be provided here.</p>
        <Tabs defaultValue="Pakistan" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="Pakistan">Pakistan</TabsTrigger>
                <TabsTrigger value="Turkey">Turkey</TabsTrigger>
                <TabsTrigger value="Azerbaijan">Azerbaijan</TabsTrigger>
            </TabsList>
                <TabsContent value="Pakistan">
                    <Pakistan/>
                </TabsContent>
                <TabsContent value="Turkey">
                    <Turkey/>
                </TabsContent>
                <TabsContent value="Azerbaijan">
                    <Azerbaijan/>
                </TabsContent>
        </Tabs>
        </div>
    )
}