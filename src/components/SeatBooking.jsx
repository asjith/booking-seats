import React from "react";
import SeatCategory from "./SeatCategory";

const SeatBooking = ({ seatArrangment }) => {
  return (
    <div>
      {seatArrangment.map((category) => {
        return <SeatCategory key={category.categoryName} category={category} />;
      })}
    </div>
  );
};

export default SeatBooking;
