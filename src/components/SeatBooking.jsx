import React, { useContext } from "react";
import SeatCategory from "./SeatCategory";
import { SeatArrangementContext } from "../utils/SeatArrangementContext";

const SeatBooking = () => {
  const { seatArrangment } = useContext(SeatArrangementContext);

  if (!seatArrangment) return null;

  return (
    <div>
      {seatArrangment.map((category) => {
        return <SeatCategory key={category.categoryName} category={category} />;
      })}
    </div>
  );
};

export default SeatBooking;
