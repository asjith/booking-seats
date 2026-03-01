import React from "react";
import SeatRow from "./SeatRow";

const SeatCategory = ({ category }) => {
  return (
    <div>
      <div>
        <h3>
          {category.categoryName} - {" Rs." + category.price}
        </h3>
      </div>
      <div>
        {category.rows.map((row) => {
          return <SeatRow key={row.rowId} row={row} />;
        })}
      </div>
    </div>
  );
};

export default SeatCategory;
