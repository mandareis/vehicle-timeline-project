import {
  AutoStories,
  DirectionsBoat,
  DirectionsWalk,
  Flight,
  TimeToLeave,
  Train,
} from "@mui/icons-material";
import React from "react";
import GermanCar from "./assets/nazi-german-car.jpg";
import Trains from "./assets/train-evacuees.jpeg";
import Plane from "./assets/iran-revolution.jpg";
import Ship from "./assets/ships-portugal.jpg";
import OnFoot from "./assets/ww2-on-foot.webp";
import PrintingPress from "./assets/printing-press-ww2.jpg";
export interface VehicleCardData {
  title: string;
  imageLiteral: React.ReactNode;
  icon: React.ReactNode;
  literalContent: string;
  allegoricalContent: string;
}

export const itemsData: VehicleCardData[] = [
  {
    title: "Cars",
    icon: <TimeToLeave className="icons" />,
    literalContent:
      "While cars are not ideal for mass waves of emigration, as it can get stopped at every country border, they are a convenient mode of transportation for smaller groups. Cars can represent quicker mobility as it doesn't depend on a scheduled route. It also allows individuals to bring their posessions more easily. In the life of an immigrant,  a car can also signify can signify economic progression, as it might allow them to have a more stable life by having a wider range of employment options regardless of their address.",
    imageLiteral: (
      <img
        src={GermanCar}
        className="vehicle-image"
        alt="German Car During World War II"
      />
    ),
    allegoricalContent:
      "Persepolis' family car the meaning of the nice car and what it means as a sanctuary.",
  },
  {
    title: "Trains",
    imageLiteral: (
      <img
        src={Trains}
        className="vehicle-image"
        alt="German Car During World War II"
      />
    ),
    icon: <Train />,
    literalContent:
      "The intense train border crossing and checking of documents for Schwartz's experience of it.",
    allegoricalContent:
      "The significance of the train going through the pension in Mary, the meaning of memories coming back from a previous life.",
  },
  {
    title: "Planes",
    imageLiteral: (
      <img
        src={Plane}
        className="vehicle-image"
        alt="German Car During World War II"
      />
    ),
    icon: <Flight />,
    literalContent:
      "In Persepolis, Marjane's flight from Tehran to Vienna, depicting a transition between worlds.",
    allegoricalContent:
      "Explore how in the same novel, what her flight back home symbolizes.",
  },
  {
    title: "Ships/Boats",
    imageLiteral: (
      <img
        src={Ship}
        className="vehicle-image"
        alt="German Car During World War II"
      />
    ),
    icon: <DirectionsBoat />,
    literalContent:
      "A Night in Lisbon, The ship to America described at the port of Lisbon, representing the last final physical vehicle of espace that refugees had.",
    allegoricalContent:
      "The same ship serves as a symbol of salvation and rebirth; at a port of a melting pot of cultural backgrounds.",
  },
  {
    title: "On Foot",
    imageLiteral: (
      <img
        src={OnFoot}
        className="vehicle-image"
        alt="German Car During World War II"
      />
    ),
    icon: <DirectionsWalk />,
    literalContent:
      "The literal walk of Schwartz through the Pyrenees and the physical hardship.",
    allegoricalContent:
      "In Persepolis, Marjane's walking through Vienna streets as a homeless teen; representing her isolation as an immigrants.",
  },
  {
    title: "Books/Printing Press",
    imageLiteral: (
      <img
        src={PrintingPress}
        className="vehicle-image"
        alt="German Car During World War II"
      />
    ),
    icon: <AutoStories />,
    literalContent:
      "The free Russian Press and what it stands for and what it entails of.",
    allegoricalContent:
      "Thomas Mann's 'The Exiled Writer's Relation to his Homeland' - Mann articulates how the written word becomes a vehicle for maintaining a relationship with the homeland despite physical banishment. ",
  },
];
