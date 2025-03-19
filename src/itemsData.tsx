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
      "While not ideal for mass waves of emigration, as they can be stopped at every country border, cars offer a convenient mode of transportation for smaller groups. They offer ease of movement, as they don't depend on scheduled routes. It also allows individuals to bring some of their belongings. In the life of an immigrant, a car also signifies economic progression, as it may allow them to have a more stable life by having a wider range of employment options regardless of their address. The advantage of mobility offered immigrants a sense of control—something they often struggle with when arriving in a new country— allowing them to navigate unfamiliar territory on their own terms.",
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
          Cars can be seen as a means of escape from reality. While Schwarz,
          Helen, and the boy travel across country borders, they enter an
          isolated bubble of their own reality—a mobile sanctuary separated from
          the chaos of war. Schwarz's views of the car transform significantly;
          despite its description as a "dark mascot," he knows their survival
          depends on the car. The vehicle also represents liminal space, as they
          find themselves in-between state—neither fully out of the country
          they've left behind nor in the destination ahead, representing a limbo
          space between past trauma and their uncertain future.
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
      "Trains were the most popular means of mass emigration, given their departure frequency—making it easy to leave at any time of the day. However, especially during World War II, it became excruciatingly hard to get tickets, even more so for those fleeing and lacking the required documentation. Trains offered both safety and danger for refugees - while one could blend in with other passengers, they were routinely stopped at borders and thoroughly searched by authorities. Trains, contrary to cars, though, forced immigrants into a shared experience of fear and anxiety, often leading to silent bonds being created between survivors.",
    symbolicContent: (
      <>
        <i>
          'For almost a month, I lived at this rhythm: The night prostrate and
          the day letting myself be carried across Vienna by sleep and the
          tramway.' -- Marjane in Persepolis, p. 238
        </i>
        <div className="data-paragraph">
          Trains embody the transitional state of immigration itself. As
          travelers gaze out the windows and ponder their lives—they often enter
          the train as one person and leave as someone new. Riding on a train
          evokes the idea of passing through time, as the wheels on the tracks
          create that almost hypnotizing sound, inducing a state of trance. It
          is precisely this space that allows Marjane to find momentary peace
          while far from home; her daily tram journeys across Vienna become both
          a routine that grounds her and a metaphor for her
          displacement—constantly in motion yet never arriving.
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
      "Planes were a less common means of transportation for escape. However, planes did become more common for refugees in the latter half of the 20th century; as seen in Persepolis, Marjane's flight from Tehran to Vienna depicts a transition between two worlds. Planes, however, given their speed, provide immigrants with less time to confront their home's psychological and physical dislocation, abruptly delivering them to a new life without a gradual adjustment period.",
    symbolicContent:
      "Traveling by airplane shares many symbolic qualities with other migration vehicles; however, it also adds a layer of physical detachment, of being above the earth, a state incomparable to any other form of transport. Yet, the airport itself emerges as a more symbolic immigrant experience. Airports perfectly embody what Foucault describes as a 'heterotopic space.' With their strictly regulated systems of open spaces (public terminals) and closed spaces (security checkpoints, gates), accessible only with specific permissions, such as flight tickets, airports create a visible picture of permission and exclusion. The airport then represents the national boundary as well as the bureaucratic process that stands between the immigrant and their new life. ",

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
      "In The Night in Lisbon, the ship to America described at the port of Lisbon represents the final physical vehicle of escape that refugees had. Ships symbolize hope for the future and escape from persecution. Adding the entire Atlantic Ocean between themselves and the war, ships represent physical freedom. The slow journey by ship suspends time for an immigrant, as they are neither here nor there, allowing them to reflect on their experiences or plan for the future.",
    symbolicContent: (
      <>
        <i>
          "To me, life was the ship that lay down there on the Tagus, and it
          didn't lead to the infinite... it led to America." — Narrator in Erich
          Maria Remarque's The Night in Lisbon, p. 110
        </i>
        <div className="data-paragraph">
          The same ship serves as a symbol of salvation and rebirth, marking the
          immigrant's journey from their old identity to a new self across the
          vast expanse of the ocean. Given the duration it could take to cross
          the Atlantic, ships also allowed for bonds to form between people
          struggling with the same problems, leading to the building of
          communities. Similar to the liminal space of cars, ships also
          literally and figuratively represented floating between worlds.
          Emphasizing the displacement of an immigrant, once the ship departed,
          it symbolized a point of no return.
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
      "The oldest means of migration is walking to a destination. Schwarz crosses the border back into Germany through Austria on foot. Typically, crossing a border on foot involves challenging terrains such as deserts, mountains, or dense forests. This method of transportation is often exhausting and can lead to dehydration or injury. What is unique about walking is that it is the only means of transport that involves the traveler’s own body as a means of transport—where their endurance and determination directly reflect their want to reach their destination.",
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
          Two distinctly different examples of the immigrant experience on foot
          emerge in The Night in Lisbon and Persepolis. On the one hand, Marjane
          in Persepolis walks through the streets of Vienna, always in constant
          movement, never feeling like she belongs. Living on the streets for
          two months takes such a physical toll on her body that she ends up in
          the hospital. She seems invisible to the larger society in Vienna, a
          feeling that many immigrants experience when arriving in a new
          country. Juxtaposed with this urban displacement is Schwarz's border
          crossing into Austria in The Night in Lisbon. His experience
          represents a high-intensity moment and a significant character
          transformation as he steps into the unknown. In the physical act of
          walking across a border, each step symbolizes the transition from an
          old to a new, uncertain life. His movement from security to adventure
          represents the immigrant's willingness to embrace whatever comes next.
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
      "Immigrants also relied on cultural instruments to navigate their new reality. While many immigrants choose to leave their past behind, most maintain connections to their homeland through art and literature. With each wave of immigration came an increase in homeland-inspired art. Alexander Herzen chose to give voice to those left behind. After his exile to London, Herzen started the Free Russian Press, urging anyone in Russia to provide their thoughts on freedom and promising to publish whatever materials they could provide. Herzen's magazines soon began circulating throughout Europe, inspiring many and creating new communication channels.",
    symbolicContent:
      "For exiled writers like Thomas Mann, the printed word becomes more than a means of communication and unity—it transforms into a vehicle that preserves their culture, language, and identity when separated from their homeland. Often, books exiled writers produced were banned in their home countries, emphasizing how autonomy and individual expression were seen as a threat to authoritarian regimes. Writers in exile, therefore, used the printing press as a weapon. Through publishing, immigrants created alternate spaces, a safe space of belonging beyond the reach of censors, and spaces where displaced individuals could feel connected despite geographical distance.",
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
      "Language is vital for immigrants to navigate everyday life in their new home. From asking for directions to getting a job, the basic knowledge of a new language determines an immigrant's ability to live independently. Learning a new language often involves taking classes, studying independently via reading books and watching news, and immersing oneself in daily interactions with locals. Many immigrants feel they will only have mastered a language if they have no accents and perfected pronunciations. ",
    symbolicContent:
      "Language, the most valuable connection to their homes, makes it the most immediate vehicle immigrants use. Language can serve as both a bridge to their past and their old selves and a barrier in their new lives. While learning a new language can prove challenging, it is essential to the life of someone in a foreign land—even if it sometimes comes at the cost of being unable to maintain the fluency of their mother tongue. Immigrants develop “code-switching,” moving between the two languages. This split between languages creates a fragmented sense of identity, as sometimes fully expressing themselves becomes difficult in their new language. ",
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
      "Photographs are a unique way of preserving a moment in time. Many immigrants possess photos of loved ones, a special place, or a memory they cherish. Photographs are significant because they often have no monetary value but are irreplaceable for the one who owns them. The further one is from home, and the more time passes,  the more precious photographs become. These photographs become portals that connect one to a specific moment that defines one's identity and journey. ",
    symbolicContent:
      "Photographs are fascinating as they represent a way to return to the past and their homes while being somewhere else, as seen with Ganin in Mary when he is transported to the memory of his love days back home in Russia. They also have the power to freeze time, that memory that one can carry with them forever. Photographs can either comfort these individuals navigating the in-between cultures or bring grief as the physical distance to both a time and the location becomes more apparent. ",
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
    literalContent: "",
    symbolicContent: "",
    literal: false,
  },
];
