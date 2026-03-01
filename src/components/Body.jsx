import React, { useState } from "react";
import SeatBooking from "./SeatBooking";
import { SEAT_ARRANGEMENT } from "../utils/constants";
import { SeatArrangementContext } from "../utils/SeatArrangementContext";
import { SEAT_STATUS } from "../utils/constants";

const Body = () => {
  const [seatArrangement, setSeatArrangement] = useState(SEAT_ARRANGEMENT);

  const handleSeatClick = (seatSelected) => {
    const newSeatArrangement = seatArrangement.map((category) => ({
      ...category,
      rows: category.rows.map((row) => ({
        ...row,
        seats: row.seats.map((seat) => {
          return seat.seatId === seatSelected.seatId
            ? seat.status === SEAT_STATUS.SELECTED
              ? { ...seat, status: SEAT_STATUS.AVAILABLE }
              : { ...seat, status: SEAT_STATUS.SELECTED }
            : seat;
        })
      }))
    }));
    setSeatArrangement(newSeatArrangement);
  };

  const handleBookSeats = () => {
    const newSeatArrangement = seatArrangement.map((category) => ({
      ...category,
      rows: category.rows.map((row) => ({
        ...row,
        seats: row.seats.map((seat) => {
          return seat.status === SEAT_STATUS.SELECTED
            ? { ...seat, status: SEAT_STATUS.BOOKED }
            : seat;
        })
      }))
    }));

    setSeatArrangement(newSeatArrangement);
  };

  return (
    <SeatArrangementContext.Provider
      value={{
        seatArrangement,
        setSeatArrangement,
        handleSeatClick,
        handleBookSeats
      }}
    >
      <SeatBooking />
    </SeatArrangementContext.Provider>
  );
};

export default Body;
