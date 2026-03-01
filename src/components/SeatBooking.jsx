import React, { useContext } from "react";
import SeatCategory from "./SeatCategory";
import { SeatArrangementContext } from "../utils/SeatArrangementContext";
import { SEAT_STATUS } from "../utils/constants";

const SeatBooking = () => {
  const { seatArrangement, handleBookSeats } = useContext(
    SeatArrangementContext
  );

  if (!seatArrangement) return null;

  const isSeatSelected = seatArrangement.some((category) => {
    return category.rows.some((row) => {
      return row.seats.some((seat) => {
        return seat.status === SEAT_STATUS.SELECTED;
      });
    });
  });

  return (
    <div>
      <div>
        {seatArrangement.map((category) => {
          return (
            <SeatCategory key={category.categoryName} category={category} />
          );
        })}
      </div>
      <div>
        <button
          className="book-seat-btn"
          type="button"
          disabled={!isSeatSelected}
          onClick={handleBookSeats}
        >
          Book Seat
        </button>
      </div>
    </div>
  );
};

export default SeatBooking;
