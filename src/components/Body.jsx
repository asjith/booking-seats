import React from "react";
import SeatBooking from "./SeatBooking";
import { SEAT_ARRANGEMENT } from "../utils/constants";

const Body = () => {
  return (
    <div>
      <SeatBooking seatArrangment={SEAT_ARRANGEMENT} />
    </div>
  );
};

export default Body;
