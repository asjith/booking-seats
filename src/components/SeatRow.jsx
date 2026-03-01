import React from "react";
import Seat from "./Seat";

const SeatRow = ({ row }) => {
  return (
    <div className="row">
      <div>
        <span>{row.rowId}</span>
      </div>
      <div className="seat-row">
        {row.seats.map((seat) => {
          return <Seat key={seat.seatId} seat={seat} />;
        })}
      </div>
    </div>
  );
};

export default SeatRow;
