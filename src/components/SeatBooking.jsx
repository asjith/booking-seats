import React, { useContext } from "react";
import SeatCategory from "./SeatCategory";
import { SeatArrangementContext } from "../utils/SeatArrangementContext";

const SeatBooking = () => {
  const { seatArrangement, handleBookSeats } = useContext(
    SeatArrangementContext
  );

  if (!seatArrangement) return null;

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
          onClick={handleBookSeats}
        >
          Book Seat
        </button>
      </div>
    </div>
  );
};

export default SeatBooking;
