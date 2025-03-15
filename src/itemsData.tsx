import {
  DirectionsBoat,
  DirectionsWalk,
  Flight,
  TimeToLeave,
  Train,
} from "@mui/icons-material";
import React from "react";

export interface VehicleCardData {
  title: string;
  icon: React.ReactNode;
  literalContent: string;
  allegoricalContent: string;
}

export const itemsData: VehicleCardData[] = [
  {
    title: "Cars",
    icon: <TimeToLeave />,
    literalContent:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    allegoricalContent:
      "On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.",
  },
  {
    title: "Trains",
    icon: <Train />,
    literalContent: "RAF Spitfire pilots scramble for their planes",
    allegoricalContent:
      "fter France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.",
  },
  {
    title: "Planes",
    icon: <Flight />,
    literalContent: "Lorem ipsum.",
    allegoricalContent: "Dolar sit amet.",
  },
  {
    title: "Ships/Boats",
    icon: <DirectionsBoat />,
    literalContent: "Lorem ipsum.",
    allegoricalContent: "Dolar sit amet.",
  },
  {
    title: "On Foot",
    icon: <DirectionsWalk />,
    literalContent: "Lorem ipsum.",
    allegoricalContent: "Dolar sit amet.",
  },
];
