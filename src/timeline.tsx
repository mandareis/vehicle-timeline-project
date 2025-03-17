import { itemsData, VehicleCardData } from "./itemsData";
import styled from "styled-components";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";

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
  return (
    <>
      <div className="introduction-container">
        <p>
          Throughout history, there have been waves of human migration driven by
          economic necessity, political upheaval, or simply the promise of
          better living conditions. Whether looking at it through the lens of
          emigration(leaving one’s homeland) or immigration(arriving in a new
          country), a migrant’s life exists in a state of division—caught
          between the geographical and psychological distance. While technically
          a migrant becomes an “immigrant” only upon arrival; their identities
          begin to reshape as early as the emigration process: the reason for
          leaving, saying goodbye to all one has known, and the memories crossed
          with one across country lines.
        </p>
        <p>
          This duality is a challenging one—having to adapt to a new life by
          learning a new language and cultural norms while still holding on to a
          sense of identity from their home country. The vehicles through which
          immigrants express and navigate this complex reality—ships crossing
          treacherous waters and planes crossing borders— serve as literal
          transport and powerful metaphors for the immigrant journey. It is a
          bridge between their old and new world, allowing them to exist in this
          limbo of displacement, adaptation, and longing. These vehicles are
          essential to the immigrant experience as they symbolize more than a
          geographical relocation, but also as a way to exist as both your old
          and new self.
        </p>
      </div>

      <VerticalTimeline>
        {itemsData.map((d, i) => (
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
