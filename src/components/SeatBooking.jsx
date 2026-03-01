import React, { useContext } from "react";
import SeatCategory from "./SeatCategory";
import { SeatArrangementContext } from "../utils/SeatArrangementContext";

const SeatBooking = () => {
  const { seatArrangement } = useContext(SeatArrangementContext);

  if (!seatArrangement) return null;

  return (
    <div>
      {seatArrangement.map((category) => {
        return <SeatCategory key={category.categoryName} category={category} />;
      })}
    </div>
  );
};

export default SeatBooking;
