import { Chrono } from "react-chrono";
import { itemsData } from "./itemsData";

import {
  DirectionsBoatFilledSharp,
  DirectionsRunSharp,
  Flight,
  TimeToLeave,
  Train,
} from "@mui/icons-material";

const Timeline = () => {
  return (
    <Chrono
      items={itemsData}
      mode="VERTICAL_ALTERNATING"
      scrollable
      toolbarPosition="bottom"
      highlightCardsOnHover="true"
    >
      <div className="chrono-icons">
        <TimeToLeave sx={{ bgcolor: "white" }} />
        <Train sx={{ bgcolor: "white" }} />
        <Flight sx={{ bgcolor: "white" }} />
        <DirectionsBoatFilledSharp sx={{ bgcolor: "white" }} />
        <DirectionsRunSharp sx={{ bgcolor: "white" }} />
      </div>
    </Chrono>
  );
};

export default Timeline;
