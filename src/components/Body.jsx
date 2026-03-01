import React, { useState } from "react";
import SeatBooking from "./SeatBooking";
import { SEAT_ARRANGEMENT } from "../utils/constants";
import { SeatArrangementContext } from "../utils/SeatArrangementContext";

const Body = () => {
  const [seatArrangment, setSeatArrangment] = useState(SEAT_ARRANGEMENT);
  return (
    <SeatArrangementContext.Provider
      value={{ seatArrangment, setSeatArrangment }}
    >
      <SeatBooking />
    </SeatArrangementContext.Provider>
  );
};

export default Body;
