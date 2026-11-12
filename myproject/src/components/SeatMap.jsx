
import { Plane, Armchair } from "lucide-react";

const seatLayouts = {
  "3-2": [
    ["A", "B", "C"],
    ["D", "E"],
  ],
  "2-3-2": [
    ["A", "B"],
    ["D", "E", "F"],
    ["G", "H"],
  ],
};

const formatPrice = (price) =>
  price === 0 ? "Free" : `₹${price}`;

const SeatMap = ({
  layoutType = "3-2",
  onLayoutChange,
  seats = [],
  seatAssignments = {},
  selectedPassengerId,
  onSeatSelect,
}) => {

  const layout = seatLayouts[layoutType] || seatLayouts["3-2"];

  const getSeat = (row, column) => {
    return seats.find(
      (seat) => seat.id === `${row}${column}`
    );
  };

  const getAssignedPassenger = (seatId) => {
    return Object.entries(seatAssignments).find(
      ([, assignedSeat]) => assignedSeat === seatId
    )?.[0];
  };

  const getSeatStyle = (seat, isSelected, isOccupied) => {

    if (isSelected) {
      return "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200";
    }

    if (isOccupied) {
      return "cursor-not-allowed border-slate-400 bg-slate-500 text-white opacity-80";
    }

    if (seat.price === 0) {
      return "border-green-500 bg-green-50 text-green-700 hover:bg-green-100";
    }

    if (seat.category === "Premium") {
      return "border-purple-500 bg-purple-50 text-purple-700 hover:bg-purple-100";
    }

    if (seat.category === "Extra Legroom") {
      return "border-orange-500 bg-orange-50 text-orange-700 hover:bg-orange-100";
    }

    return "border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100";
  };

  const handleSeatClick = (seat, isOccupied) => {
    if (!selectedPassengerId) {
      return;
    }

    if (isOccupied) {
      return;
    }

    onSeatSelect(seat);
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">

      {/* Heading */}
      <div className="mb-5">
        <h2 className="text-lg font-bold text-slate-900">
          Choose Your Seats
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          Select a seat for the active passenger
        </p>
      </div>

      {/* Configuration Switch */}
      <div className="mb-6 flex flex-wrap gap-2">

        {Object.keys(seatLayouts).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => onLayoutChange(type)}
            aria-pressed={layoutType === type}
            className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-semibold transition
              ${
                layoutType === type
                  ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
              }`}
          >
            <span className="flex items-center justify-center gap-2">
              <Armchair size={17} />
              {type} Configuration
            </span>
          </button>
        ))}

      </div>

      {/* Aircraft Map */}
      <div className="mx-auto max-w-2xl rounded-[100px_100px_20px_20px] border border-slate-200 bg-slate-50 px-3 pb-5 pt-8 sm:px-6">

        {/* Aircraft Front */}
        <div className="mb-6 flex flex-col items-center gap-2">
          <Plane
            size={30}
            className="rotate-90 text-slate-400"
          />
          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400">
            FRONT OF AIRCRAFT
          </span>
        </div>

        {/* Column Labels */}
        <div className="mb-3 flex items-center justify-center gap-2 sm:gap-3">
          {layout.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`flex flex-1 justify-center gap-1.5 sm:gap-2 ${
                groupIndex > 0
                  ? "border-l border-slate-300 pl-2 sm:pl-3"
                  : ""
              }`}
            >
              {group.map((column) => (
                <div
                  key={column}
                  className="flex h-8 flex-1 items-center justify-center text-xs font-bold text-slate-500"
                >
                  {column}
                </div>
              ))}
            </div>
          ))}
          <div className="w-5 shrink-0 sm:w-7" />
        </div>

        {/* Seat Rows */}
        <div className="space-y-3">

          {[1, 2, 3, 4, 5, 6].map((row) => (
            <div
              key={row}
              className="flex items-center justify-center gap-2 sm:gap-3"
            >

              {/* Seat Groups */}
              {layout.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className={`flex flex-1 justify-center gap-1.5 sm:gap-2 ${
                    groupIndex > 0
                      ? "border-l border-slate-300 pl-2 sm:pl-3"
                      : ""
                  }`}
                >
                  {group.map((column) => {
                    const seat = getSeat(row, column);

                    if (!seat) {
                      return (
                        <div
                          key={column}
                          className="h-9 flex-1"
                        />
                      );
                    }

                    const assignedPassenger =
                      getAssignedPassenger(seat.id);

                    const isSelected =
                      assignedPassenger === selectedPassengerId;

                    const isOccupied =
                      seat.status === "occupied" ||
                      (assignedPassenger &&
                        assignedPassenger !== selectedPassengerId);

                    return (
                      <button
                        key={seat.id}
                        type="button"
                        disabled={isOccupied}
                        onClick={() =>
                          handleSeatClick(seat, isOccupied)
                        }
                        title={`${seat.id} · ${seat.category} · ${formatPrice(seat.price)}`}
                        aria-label={`${seat.id}, ${seat.category}, ${formatPrice(seat.price)}${isOccupied ? ", occupied" : ""}`}
                        className={`flex h-9 min-w-0 flex-1 items-center justify-center rounded-lg border text-[10px] font-bold transition-all duration-200 sm:h-10 sm:text-xs
                          ${getSeatStyle(
                            seat,
                            isSelected,
                            isOccupied
                          )}`}
                      >
                        {seat.id}
                      </button>
                    );
                  })}
                </div>
              ))}

              {/* Row Number */}
              <span className="w-5 shrink-0 text-center text-xs font-bold text-slate-500 sm:w-7">
                {row}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* Seat Legend */}
      <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-3">

        {[
          { color: "bg-green-500", label: "Free (₹0)" },
          { color: "bg-blue-50 border border-blue-400", label: "Available" },
          { color: "bg-slate-500", label: "Occupied" },
          { color: "bg-blue-600", label: "Selected" },
          { color: "bg-orange-500", label: "Extra Legroom" },
          { color: "bg-purple-500", label: "Premium" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2"
          >
            <span
              className={`h-3 w-3 rounded-sm ${item.color}`}
            />
            <span className="text-[11px] font-medium text-slate-500">
              {item.label}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
};

export default SeatMap;
