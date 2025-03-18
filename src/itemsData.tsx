import {
  AutoStories,
  DirectionsBoat,
  DirectionsWalk,
  Flight,
  TimeToLeave,
  Language,
  MusicNote,
  CameraAlt,
  Train,
} from "@mui/icons-material";
import React from "react";
import GermanCar from "./assets/nazi-german-car.jpg";
import Trains from "./assets/train-evacuees.jpeg";
import Plane from "./assets/iran-revolution.jpg";
import Ship from "./assets/ships-portugal.jpg";
import OnFoot from "./assets/ww2-on-foot.webp";
import PrintingPress from "./assets/printing-press-ww2.jpg";
import Languages from "./assets/hello-languages.jpg";
import Photograph from "./assets/amalfi-italy.webp";
import Music from "./assets/music-europe.webp";

export interface VehicleCardData {
  title: string;
  imageLiteral: React.ReactNode;
  icon: React.ReactNode;
  literalContent: string;
  symbolicContent: React.ReactNode | string;
  literal: boolean;
}

export const itemsData: VehicleCardData[] = [
  {
    title: "Cars",
    icon: <TimeToLeave className="icons" />,
    literalContent:
      "While cars are not ideal for mass waves of emigration, as they can get stopped at every country border, they are a convenient mode of transportation for smaller groups. Cars can represent quicker mobility as it doesn't depend on a scheduled route. It also allows individuals to bring their possessions more easily. In the life of an immigrant, a car can also signify economic progression, as it might allow them to have a more stable life by having a wider range of employment options regardless of their address.",
    imageLiteral: (
      <img
        src={GermanCar}
        className="vehicle-image"
        alt="German Car During World War II"
      />
    ),
    symbolicContent: (
      <>
        <i>
          'In some inexplicable way the car became a kind of dark mascot; its
          technical perfection even dispelled my horror of it. My need of the
          car made me forget about Georg.' — Josef Schwarz in Erich Maria
          Remarque's The Night in Lisbon, p. 246
        </i>
        <div className="data-paragraph">
          Cars can be seen as a means of escape from reality. This can be
          manifested in a number of ways. While Schwarz, Helen, and the boy
          travel across country borders, they enter an isolated bubble of their
          own reality—a mobile sanctuary separated from the chaos of war.
          Schwarz's views of the car transform significantly; despite its
          description as a "dark mascot," Schwarz knows their survival depends
          on the car. The vehicle provides immediate protection from the
          physical war while creating a psychological sanctuary. It also
          represents liminal space, as they find themselves in-between
          state—neither fully out of the country they've left behind nor in the
          destination ahead, representing a limbo space between past trauma and
          their uncertain future. The car becomes both literal and metaphorical
          transport through this liminal existence.
        </div>
      </>
    ),
    literal: true,
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
      "Trains were the most popular means of mass emigration, given their frequency of departure—making it easy to leave at any time of the day. However, especially during World War II, it became excruciatingly hard to get tickets, even more so for those fleeing and lacking the required documentation. Trains offered both safety and danger for refugees. While one could blend in with other passengers, trains were routinely stopped at borders and thoroughly searched by authorities who knew they were common escape routes.",
    symbolicContent: (
      <>
        <i>
          'For almost a month, I lived at this rhythm: The night prostrate and
          the day letting myself be carried across Vienna by sleep and the
          tramway.' -- Marjane in Persepolis, p. 238
        </i>
        <div className="data-paragraph">
          Trains are the definition to liminal space. Often on train rides, we
          look out the window and ponder back on our lives. We often enter the
          train as a person, and leave as someone new. Riding on a train, as
          with any passage, evokes the idea of passing through time, as the
          wheels on tracks cause that almost hypnotizing sound, a state of
          trance. It is precisely this liminal space that allows Marjane to find
          momentary peace while far from home; her daily tram journeys across
          Vienna become both a routine that grounds her and a metaphor for her
          displacement—constantly in motion yet never truly arriving.
        </div>
      </>
    ),
    literal: true,
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
      "Planes were perhaps less common means of transportation to be used as a form of escape. Planes did become more common for refugees in the latter half of the 20th century; as seen in Persepolis, Marjane's flight from Tehran to Vienna depicts a transition between two worlds.",
    symbolicContent: (
      <>
        <i>
          'I couldn't bear looking at them there behind the glass. Nothing worse
          than saying goodbye. It's a little like dying.' -- Marjane in
          Persepolis, p. 153
        </i>
        <div className="data-paragraph">
          Traveling by airplane shares many of the symbolic qualities with other
          vehicles of migration, however, it also adds alayer of physical
          detachment— of being above the earth, a state incomparable to any
          other form of transport. However, the airport itself emerges as a more
          symbolic immigrant experience. Airports perfectly embody what Foucault
          describes as a "heterotopic space." With their strictly regulated
          systems of open spaces(public terminals) and closed spaces(security
          checkpoints, gates), accessible only with certain permissions, such as
          flight tickets, airports create a system picture of permission and
          exclusion. The airport then represents the national boundary as well
          as the bureaucratic process that stands between the immigrant and
          their new life.
        </div>
      </>
    ),
    literal: true,
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
      "In The Night in Lisbon, the ship to America described at the port of Lisbon represents the last final physical vehicle of escape that refugees had. Ships symbolized hope of the future and escape from persecution. Adding the entire Atlantic ocean between themselves and the war, they represented physical freedom.",
    symbolicContent: (
      <>
        <i>
          "To me, life was the ship that lay down there on the Tagus, and it
          didn't lead to the infinite... it led to America." — Narrator in Erich
          Maria Remarque's The Night in Lisbon, p. 110
        </i>
        <div className="data-paragraph">
          "The same ship serves as a symbol of salvation and rebirth, marking
          the immigrant's journey from their old identity to a new self across
          the vast expanse of the ocean. Given the duration it could take to
          cross the Atlantic, ships also allowed for bonds to form between
          people struggling with the same problems, leading to the building of
          communities. Similar to the liminal space of cars, ships also
          literally and figuratively represented floating between worlds.
          Emphasizing the displacement of an immigrant, once the ship departed,
          it symbolized a point of no return.",
        </div>
      </>
    ),
    literal: true,
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
      "The oldest means of migration is the act of walking to a destination. Schwarz crosses the border back into Germany through Austria on foot. Typically crossing a border on foot involves challenging terrains such as deserts, mountains or dense forests. This method of transportation is often an exhausting one that can lead to dehydration or injury.",
    symbolicContent: (
      <>
        <i>
          'I feel as though I were crossing a high bridge from one side of my
          life to the other, and I knew that the bridge would fade away behind
          me like silvery smoke and that I'd never be able to return. I was
          passing from reason to feeling, from security to adventure, from
          rationality to dream.' — Josef Schwarz in Erich Maria Remarque's The
          Night in Lisbon, p. 23
        </i>
        <div className="data-paragraph">
          We see two distinctly different examples of immigrant experience on
          foot. On one hand, we see Marjane in Persepolis, walking through the
          streets of Vienna, always in constant movement, never feeling like she
          belongs. The physical toll these two months of living on the streets
          take on her body makes her so sick she ends up in the hospital. She
          seems as if invisible to the larger society in Vienna, something
          immigrants often feel when arriving in a new country. Juxtaposed with
          this urban displacement is Schwarz's border crossing into Austria in
          The Night in Lisbon. This experience represents a moment of high
          intensity and significant transformation to the character as he steps
          into the unknown. The physical act of walking across a border each
          step symbolizes the transition from an old to new uncertain life. His
          movement from security to adventure represents the immigrant's
          willingness to embrace whatever is to come.
        </div>
      </>
    ),
    literal: true,
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
      "While we've discussed the physical vehicles of the immigrant life, one must discuss cultural instruments of the immigrant experience. While many immigrants opted to leave their past behind, most couldn't and did not want to. With each wave of immigration came an increase in homeland-inspired art. Some immigrants, like Alexander Herzen, used these creative channels to give voice to those left behind. After his exile to London, Herzen started the Free Russian Press, urging anyone in Russia to provide, if possible, their thoughts on freedom and promising to publish whatever materials they could provide. Herzen's magazines soon began circulating throughout Europe, inspiring many and creating new communication channels.",
    symbolicContent:
      "For immigrant writers like Thomas Mann, the printed word became more than a means of communication and unity—it transformed into a vehicle that preserves their culture, language, and identity when separated from their homeland. Often, books these exiles produced were banned in their home countries, emphasizing how autonomy and individual expression were seen as a threat to authoritarian regimes.  Writers in exile, therefore, used the printing press as a weapon. Through publishing, immigrants created alternate spaces, a safe space of belonging beyond the reach of censors, and spaces where displaced immigrants could feel connected despite geographical distance.",
    literal: false,
  },
  {
    title: "Language",
    imageLiteral: (
      <img
        src={Languages}
        className="vehicle-image"
        alt="German Car During World War II"
      />
    ),
    icon: <Language />,
    literalContent:
      "The free Russian Press and what it stands for and what it entails of.",
    symbolicContent:
      "Thomas Mann's 'The Exiled Writer's Relation to his Homeland' - Mann articulates how the written word becomes a vehicle for maintaining a relationship with the homeland despite physical banishment. ",
    literal: false,
  },
  {
    title: "Photographs",
    imageLiteral: (
      <img
        src={Photograph}
        className="vehicle-image"
        alt="German Car During World War II"
      />
    ),
    icon: <CameraAlt />,
    literalContent:
      "The free Russian Press and what it stands for and what it entails of.",
    symbolicContent:
      "Thomas Mann's 'The Exiled Writer's Relation to his Homeland' - Mann articulates how the written word becomes a vehicle for maintaining a relationship with the homeland despite physical banishment. ",
    literal: false,
  },
  {
    title: "Music & Other Art Forms",
    imageLiteral: (
      <img
        src={Music}
        className="vehicle-image"
        alt="German Car During World War II"
      />
    ),
    icon: <MusicNote />,
    literalContent:
      "The free Russian Press and what it stands for and what it entails of.",
    symbolicContent:
      "Thomas Mann's 'The Exiled Writer's Relation to his Homeland' - Mann articulates how the written word becomes a vehicle for maintaining a relationship with the homeland despite physical banishment. ",
    literal: false,
  },
];
