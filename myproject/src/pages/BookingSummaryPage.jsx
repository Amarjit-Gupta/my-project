
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Armchair,
  ArrowLeft,
  ArrowRight,
  IndianRupee,
  Users,
} from "lucide-react";

import Navbar from "../components/Navbar";
import ProgressStepper from "../components/ProgressStepper";
import MealSelector from "../components/MealSelector";

const BookingSummaryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const booking = location.state;

  const [selectedMeals, setSelectedMeals] = useState({});

  // Handle missing booking data
  if (!booking) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4">
        <h2 className="text-xl font-bold text-slate-900">
          Booking details not found
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Please select your seats first.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Back to Seat Selection
        </button>
      </div>
    );
  }

  const {
    passengers,
    seats,
    seatAssignments,
    flight,
    layoutType,
  } = booking;

  // Calculate seat price
  const seatTotal = passengers.reduce((total, passenger) => {
    const seatId = seatAssignments[passenger.id];

    const seat = seats.find((item) => item.id === seatId);

    return total + (seat?.price || 0);
  }, 0);

  // Meal options
  const mealPrices = {
    veg: 0,
    standard: 150,
    premium: 250,
  };

  // Calculate meal price
  const mealTotal = Object.values(selectedMeals).reduce(
    (total, mealId) => total + (mealPrices[mealId] || 0),
    0
  );

  const grandTotal = seatTotal + mealTotal;

  const handleMealChange = (passengerId, mealId) => {
    setSelectedMeals((prev) => ({
      ...prev,
      [passengerId]: mealId,
    }));
  };

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN")}`;

  // Continue to confirmation
  const handleConfirm = () => {
    navigate("/confirmation", {
      state: {
        ...booking,
        selectedMeals,
        seatTotal,
        mealTotal,
        grandTotal,
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <ProgressStepper activeStep={3} />

      <main className="mx-auto max-w-[1100px] space-y-6 px-4 py-6 sm:px-6 lg:px-8">

        {/* Heading */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Booking Summary
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Review your passenger and seat details.
          </p>
        </div>

        {/* Flight Details */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-slate-500">
                Flight Route
              </p>

              <h2 className="mt-1 text-lg font-bold text-slate-900">
                {flight.from} ({flight.fromCity}) → {flight.to} ({flight.toCity})
              </h2>
            </div>

            <div className="text-right">
              <p className="text-xs text-slate-500">Travel Date</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                {flight.date}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
            <span>Configuration: {layoutType}</span>
            <span>{passengers.length} Passengers</span>
            <span>Duration: {flight.duration}</span>
          </div>
        </section>

        {/* Passenger Seat Details */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Users size={20} />
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900">
                Passenger Details
              </h2>
              <p className="text-xs text-slate-500">
                Assigned seats and individual charges
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {passengers.map((passenger) => {
              const seatId = seatAssignments[passenger.id];

              const seat = seats.find(
                (item) => item.id === seatId
              );

              return (
                <div
                  key={passenger.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 p-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {passenger.name}
                    </p>

                    <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                      <Armchair size={14} />
                      Seat {seat?.id || "Not assigned"}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-slate-500">
                      {seat?.category || "No seat"}
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-900">
                      {formatPrice(seat?.price || 0)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Optional Meal Selection */}
        <MealSelector
          passengers={passengers}
          selectedMeals={selectedMeals}
          onMealChange={handleMealChange}
        />

        {/* Final Price */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <h2 className="mb-4 text-base font-bold text-slate-900">
            Price Breakdown
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Seat Charges</span>
              <span>{formatPrice(seatTotal)}</span>
            </div>

            <div className="flex justify-between text-slate-600">
              <span>Meal Charges</span>
              <span>{formatPrice(mealTotal)}</span>
            </div>

            <div className="flex justify-between border-t border-slate-200 pt-4 font-bold text-slate-900">
              <span>Grand Total</span>
              <span className="text-xl text-blue-600">
                {formatPrice(grandTotal)}
              </span>
            </div>
          </div>

        </section>

        {/* Navigation */}
        <div className="flex flex-col-reverse justify-between gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate("/", { state: booking })}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft size={17} />
            Back to Seats
          </button>

          <button
            type="button"
            disabled={passengers.some(
              (passenger) => !seatAssignments[passenger.id]
            )}
            onClick={handleConfirm}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Confirm Selection
            <ArrowRight size={17} />
          </button>
        </div>

      </main>
    </div>
  );
};

export default BookingSummaryPage;
