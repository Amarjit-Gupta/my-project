
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import ProgressStepper from "../components/ProgressStepper";
import FlightInfo from "../components/FlightInfo";
import PassengerSelector from "../components/PassengerSelector";
import PassengerList from "../components/PassengerList";
import SeatMap from "../components/SeatMap";
import SeatLegend from "../components/SeatLegend";
import PriceSummary from "../components/PriceSummary";

const SeatSelectionPage = () => {
  const navigate = useNavigate();

  const [passengerCount, setPassengerCount] = useState(2);
  const [selectedPassengerId, setSelectedPassengerId] = useState("p1");
  const [layoutType, setLayoutType] = useState("3-2");

  const [seatAssignments, setSeatAssignments] = useState({});

  // Generate passengers dynamically
  const passengers = Array.from(
    { length: passengerCount },
    (_, index) => ({
      id: `p${index + 1}`,
      name: `Passenger ${index + 1}`,
    })
  );

  // Seat configuration
  const seatLetters = {
    "3-2": ["A", "B", "C", "D", "E"],
    "2-3-2": ["A", "B", "D", "E", "F", "G", "H"],
  };

  // Generate aircraft seats
  const seats = Array.from({ length: 6 }, (_, rowIndex) => {
    const row = rowIndex + 1;

    return seatLetters[layoutType].map((letter, index) => {
      const id = `${row}${letter}`;

      const isOccupied = id === "2C" || id === "3D";

      let price = 0;
      let category = "Standard";

      if (index === 0 && row <= 2) {
        price = 350;
        category = "Extra Legroom";
      } else if (index === 1 && row <= 2) {
        price = 250;
        category = "Premium";
      }

      return {
        id,
        price,
        category,
        status: isOccupied ? "occupied" : "available",
      };
    });
  }).flat();

  // Handle passenger count
  const handlePassengerCountChange = (count) => {
    setPassengerCount(count);

    setSeatAssignments((prev) =>
      Object.fromEntries(
        Object.entries(prev).filter(
          ([passengerId]) =>
            Number(passengerId.replace("p", "")) <= count
        )
      )
    );

    if (Number(selectedPassengerId.replace("p", "")) > count) {
      setSelectedPassengerId(`p${count}`);
    }
  };

  // Handle seat selection
  const handleSeatSelect = (seat) => {
    setSeatAssignments((prev) => {
      const updated = { ...prev };

      // Remove previous seat of active passenger
      delete updated[selectedPassengerId];

      // Assign new seat
      updated[selectedPassengerId] = seat.id;

      return updated;
    });
  };

  // Handle seat removal
  const handleRemoveSeat = () => {
    setSeatAssignments((prev) => {
      const updated = { ...prev };
      delete updated[selectedPassengerId];
      return updated;
    });
  };

  // Change aircraft layout
  const handleLayoutChange = (type) => {
    setLayoutType(type);
    setSeatAssignments({});
  };

  // Continue to summary
  const handleContinue = () => {
    navigate("/summary", {
      state: {
        passengers,
        seats,
        seatAssignments,
        layoutType,
        flight: {
          from: "BOM",
          fromCity: "Mumbai",
          to: "DEL",
          toCity: "New Delhi",
          duration: "2h 10m",
          date: "24 Apr 2025",
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <ProgressStepper activeStep={2} />

      <main className="mx-auto max-w-[1440px] space-y-6 px-4 py-6 sm:px-6 lg:px-8">

        {/* Page Heading */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Select Your Seats
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Choose comfortable seats for all your passengers.
          </p>
        </div>

        {/* Flight Information */}
        <FlightInfo
          flight={{
            from: "BOM",
            fromCity: "Mumbai",
            to: "DEL",
            toCity: "New Delhi",
            duration: "2h 10m",
            date: "24 Apr 2025",
          }}
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_320px]">

          <div className="space-y-6">

            {/* Passenger Selection */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[260px_1fr]">

              <PassengerSelector
                passengerCount={passengerCount}
                onPassengerCountChange={handlePassengerCountChange}
              />

              <PassengerList
                passengers={passengers}
                selectedPassengerId={selectedPassengerId}
                seatAssignments={seatAssignments}
                onSelectPassenger={setSelectedPassengerId}
              />

            </div>

            {/* Seat Map */}
            <SeatMap
              layoutType={layoutType}
              onLayoutChange={handleLayoutChange}
              seats={seats}
              seatAssignments={seatAssignments}
              selectedPassengerId={selectedPassengerId}
              onSeatSelect={handleSeatSelect}
            />

            {/* Seat Legend */}
            <SeatLegend />

            {/* Remove Current Passenger Seat */}
            {seatAssignments[selectedPassengerId] && (
              <button
                type="button"
                onClick={handleRemoveSeat}
                className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                Remove Selected Passenger Seat
              </button>
            )}

          </div>

          {/* Price Summary */}
          <div className="lg:sticky lg:top-24">
            <PriceSummary
              passengers={passengers}
              seats={seats}
              seatAssignments={seatAssignments}
              onContinue={handleContinue}
            />
          </div>

        </div>

      </main>
    </div>
  );
};

export default SeatSelectionPage;
