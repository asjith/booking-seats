import React, { useContext } from "react";
import { SeatArrangementContext } from "../utils/SeatArrangementContext";
import { SEAT_STATUS } from "../utils/constants";

const Seat = ({ seat }) => {
  const { seatArrangment, setSeatArrangment } = useContext(
    SeatArrangementContext
  );

  const handleClick = (id) => {
    const newSeatArrangment = seatArrangment.map((category) => ({
      ...category,
      rows: category.rows.map((row) => ({
        ...row,
        seats: row.seats.map((seat) => {
          return seat.seatId === id
            ? seat.status === SEAT_STATUS.SELECTED
              ? { ...seat, status: SEAT_STATUS.AVAILABLE }
              : { ...seat, status: SEAT_STATUS.SELECTED }
            : seat;
        })
      }))
    }));
    setSeatArrangment(newSeatArrangment);
  };

  const seatVisibiltyStyle = `seat ${seat.status === SEAT_STATUS.NO_SEAT ? "no-seat" : ""}`;
  const seatStyle = seat.status === SEAT_STATUS.SELECTED ? "seat-selected" : "";

  return (
    <div
      className={`${seatVisibiltyStyle} ${seatStyle}`}
      onClick={() => handleClick(seat.seatId)}
    ></div>
  );
};

export default Seat;
