export const SEAT_STATUS = {
  NO_SEAT: "NO_SEAT",
  AVAILABLE: "AVAILABLE",
  BOOKED: "BOOKED",
  SELECTED: "SELECTED"
};

export const SEAT_ARRANGEMENT = [
  {
    categoryName: "premium",
    price: 100,
    rows: [
      {
        rowId: "A",
        seats: [
          {
            seatId: "A1",
            status: SEAT_STATUS.NO_SEAT
          },
          {
            seatId: "A2",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "A3",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "A4",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "A5",
            status: SEAT_STATUS.NO_SEAT
          }
        ]
      },
      {
        rowId: "B",
        seats: [
          {
            seatId: "B1",
            status: SEAT_STATUS.NO_SEAT
          },
          {
            seatId: "B2",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "B3",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "B4",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "B5",
            status: SEAT_STATUS.NO_SEAT
          }
        ]
      }
    ]
  },
  {
    categoryName: "regular",
    price: 50,
    rows: [
      {
        rowId: "C",
        seats: [
          {
            seatId: "C1",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "C2",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "C3",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "C4",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "C5",
            status: SEAT_STATUS.AVAILABLE
          }
        ]
      },
      {
        rowId: "D",
        seats: [
          {
            seatId: "D1",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "D2",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "D3",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "D4",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "D5",
            status: SEAT_STATUS.AVAILABLE
          }
        ]
      },
      {
        rowId: "E",
        seats: [
          {
            seatId: "E1",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "E2",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "E3",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "E4",
            status: SEAT_STATUS.AVAILABLE
          },
          {
            seatId: "E5",
            status: SEAT_STATUS.AVAILABLE
          }
        ]
      }
    ]
  }
];
