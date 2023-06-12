import type React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export interface Props {
  name: string;
  imageSrc: string;
  children: React.ReactNode;
}

export default function Project({ name, imageSrc, children }: Props) {
  return (
    <div
      className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-md w-full shadow transition-all duration-300 max-h-max overflow-hidden"
      style={{
        marginBottom: "auto"
      }}
    >
      <img
        src={imageSrc}
        alt="Discord Server Boosting thumbnail"
        className="w-full h-[128px] object-cover object-top rounded-t-md"
      />

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center">
              <div className="w-full">
                <div className="flex items-center space-x-3 h-[50px]">
                  <p className="text-lg font-medium">{name}</p>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent >
            {children}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
