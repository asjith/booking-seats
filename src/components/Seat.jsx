import React, { useContext } from "react";
import { SeatArrangementContext } from "../utils/SeatArrangementContext";
import { SEAT_STATUS } from "../utils/constants";

const Seat = ({ seat }) => {
  const { handleSeatClick } = useContext(SeatArrangementContext);

  const seatVisibiltyStyle = `seat ${seat.status === SEAT_STATUS.NO_SEAT ? "no-seat" : ""}`;
  const seatStyle =
    seat.status === SEAT_STATUS.SELECTED
      ? "seat-selected"
      : seat.status === SEAT_STATUS.BOOKED
        ? "seat-booked"
        : "";

  return (
    <button
      className={`${seatVisibiltyStyle} ${seatStyle}`}
      type="button"
      disabled={seat.status === SEAT_STATUS.BOOKED}
      onClick={() => handleSeatClick(seat)}
      aria-label={`Seat ${seat.seatId} ${seat.status}`}
      aria-pressed={seat.status === SEAT_STATUS.SELECTED}
    ></button>
  );
};

export default Seat;
