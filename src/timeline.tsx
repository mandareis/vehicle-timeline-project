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
    Allegorical,
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
          Literal
        </Button>
        <Button
          className={
            which === ContentType.Allegorical ? "Mui-focusVisible" : ""
          }
          onClick={() => {
            setWhich(ContentType.Allegorical);
          }}
        >
          Allegorical
        </Button>
      </ButtonGroup>
      <div>
        {which === ContentType.Literal ? <div>{data.imageLiteral} </div> : null}

        {which === ContentType.Allegorical && <>{data.allegoricalContent}</>}
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
