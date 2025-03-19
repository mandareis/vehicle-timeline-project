import { itemsData, VehicleCardData } from "./itemsData";
import styled from "styled-components";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";

interface FilterControlsProps {
  showLiteral: boolean;
  setShowLiteral: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  showLiteral,
  setShowLiteral,
}) => {
  return (
    <div>
      <ButtonGroup
        style={{ marginBottom: "1em" }}
        variant="contained"
        aria-label="Basic button group"
      >
        <Button
          onClick={() => setShowLiteral(true)}
          className={showLiteral ? "Mui-focusVisible" : ""}
        >
          <span>Physical</span>
        </Button>
        <Button
          onClick={() => setShowLiteral(false)}
          className={!showLiteral ? "Mui-focusVisible" : ""}
        >
          <span> Cultural</span>
        </Button>
      </ButtonGroup>
    </div>
  );
};
const getFilteredItems = (items: VehicleCardData[], showLiteral: boolean) => {
  return items.filter((d) => d.literal === showLiteral);
};

const SplitContent = ({ data }: { data: VehicleCardData }) => {
  enum ContentType {
    Symbolic,
    Literal,
  }
  const [which, setWhich] = useState<ContentType>(ContentType.Literal);

  return (
    <SplitContainer>
      <ButtonGroup
        style={{ marginBottom: "1em" }}
        variant="contained"
        aria-label="Basic button group"
      >
        <Button
          className={which === ContentType.Literal ? "Mui-focusVisible" : ""}
          onClick={() => {
            setWhich(ContentType.Literal);
          }}
        >
          <span>Literal</span>
        </Button>
        <Button
          className={which === ContentType.Symbolic ? "Mui-focusVisible" : ""}
          onClick={() => {
            setWhich(ContentType.Symbolic);
          }}
        >
          <span> Symbolic</span>
        </Button>
      </ButtonGroup>
      <div>
        {which === ContentType.Literal ? (
          <div className="img-container">{data.imageLiteral} </div>
        ) : null}

        {which === ContentType.Symbolic && <>{data.symbolicContent}</>}
        {which === ContentType.Literal && <>{data.literalContent}</>}
      </div>
    </SplitContainer>
  );
};

const SplitContainer = styled.div`
  width: 100%;
`;

const Timeline = () => {
  const [showLiteral, setShowLiteral] = useState(true);

  const filteredItems = getFilteredItems(itemsData, showLiteral);

  return (
    <>
      <div className="introduction-container">
        <p>
          Throughout history, waves of human migration have been driven by
          economic necessity, political upheaval, or simply the promise of
          better living conditions. Whether looking at it through the lens of
          emigration or immigration, a migrant’s life is divided—caught between
          geographical and psychological distance. Their identities begin to
          reshape as early as the emigration process: reasons for departure,
          parting ways with all one has known, and the memories one carries
          across country lines. This duality proves challenging, as it involves
          adapting to new cultures and languages while trying to preserve their
          heritage and “original” identity. The various vehicles through which
          immigrants express and navigate this complex reality serve as literal
          transport and powerful metaphors for their journey—bridging their
          worlds and allowing them to exist in this limbo of displacement while
          providing a way to exist as both their old and new selves.
        </p>
      </div>
      <FilterControls
        showLiteral={showLiteral}
        setShowLiteral={setShowLiteral}
      />
      <VerticalTimeline>
        {filteredItems.map((d, i) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            icon={d.icon}
            contentStyle={{ background: "#D4DF9E", color: "#12100E" }}
            contentArrowStyle={{ borderRight: "7px solid #D4DF9E" }}
            key={i}
          >
            <Typography variant="h4">{d.title}</Typography>
            <SplitContent data={d} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
