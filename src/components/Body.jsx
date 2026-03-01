import React from "react";
import SeatBooking from "./SeatBooking";
import { SEAT_ARRANGMENT } from "../utils/constants";

const Body = () => {
  return (
    <div>
      <SeatBooking seatArrangment={SEAT_ARRANGMENT} />
    </div>
  );
};

export default Body;
