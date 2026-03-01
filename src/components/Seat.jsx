import React, { useState } from "react";

const Seat = ({ seat }) => {
  const seatVisibiltyStyle = `seat ${seat.status === "NO_SEAT" ? "no-seat" : ""}`;
  return <div className={seatVisibiltyStyle}></div>;
};

export default Seat;
