
import { useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  Plane,
  Armchair,
  UtensilsCrossed,
  Users,
  IndianRupee,
  ArrowLeft,
} from "lucide-react";

import Navbar from "../components/Navbar";
import ProgressStepper from "../components/ProgressStepper";

const BookingConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const booking = location.state;

  // Handle missing data
  if (!booking) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4">
        <h2 className="text-xl font-bold text-slate-900">
          Confirmation details not found
        </h2>

        <button
          onClick={() => navigate("/")}
          className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const {
    passengers,
    seats,
    seatAssignments,
    selectedMeals = {},
    flight,
    layoutType,
    seatTotal,
    mealTotal,
    grandTotal,
  } = booking;

  const mealNames = {
    veg: "Vegetarian Meal",
    standard: "Standard Meal",
    premium: "Premium Meal",
  };

  const mealPrices = {
    veg: 0,
    standard: 150,
    premium: 250,
  };

  const formatPrice = (price) =>
    `₹${(price || 0).toLocaleString("en-IN")}`;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <ProgressStepper activeStep={3} />

      <main className="mx-auto max-w-[850px] space-y-6 px-4 py-8 sm:px-6">

        {/* Success Header */}
        <section className="rounded-2xl border border-green-200 bg-white px-5 py-8 text-center shadow-sm">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
            <CheckCircle2
              size={38}
              className="text-green-600"
            />
          </div>

          <h1 className="mt-4 text-2xl font-bold text-slate-900">
            Selection Confirmed!
          </h1>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            Your passenger-wise seat and meal selections have been successfully completed.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">
            <CheckCircle2 size={15} />
            Selection Complete
          </div>

        </section>

        {/* Flight Information */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="mb-5 flex items-center gap-2">
            <Plane size={19} className="text-blue-600" />

            <h2 className="text-base font-bold text-slate-900">
              Flight Information
            </h2>
          </div>

          <div className="flex items-center justify-between gap-3">

            <div>
              <p className="text-2xl font-bold text-slate-900">
                {flight.from}
              </p>
              <p className="text-xs text-slate-500">
                {flight.fromCity}
              </p>
            </div>

            <div className="flex flex-1 flex-col items-center gap-2">
              <Plane size={20} className="rotate-90 text-blue-600" />
              <div className="h-px w-full bg-slate-200" />
              <span className="text-[10px] text-slate-500">
                {flight.duration}
              </span>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold text-slate-900">
                {flight.to}
              </p>
              <p className="text-xs text-slate-500">
                {flight.toCity}
              </p>
            </div>

          </div>

          <div className="mt-5 border-t border-slate-100 pt-4 text-xs text-slate-500">
            Travel Date: <span className="font-semibold text-slate-800">{flight.date}</span>
            <span className="mx-2">•</span>
            Layout: <span className="font-semibold text-slate-800">{layoutType}</span>
          </div>

        </section>

        {/* Passenger Details */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="mb-5 flex items-center gap-2">
            <Users size={19} className="text-blue-600" />

            <h2 className="text-base font-bold text-slate-900">
              Passenger Selections
            </h2>
          </div>

          <div className="space-y-3">

            {passengers.map((passenger) => {

              const seatId = seatAssignments[passenger.id];

              const seat = seats.find(
                (item) => item.id === seatId
              );

              const mealId = selectedMeals[passenger.id];

              return (
                <div
                  key={passenger.id}
                  className="rounded-xl border border-slate-200 p-4"
                >

                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {passenger.name}
                      </p>

                      <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                        <Armchair size={14} />
                        Seat {seat?.id || "Not assigned"}
                      </p>
                    </div>

                    <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                      {seat?.category || "No Seat"}
                    </span>

                  </div>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <UtensilsCrossed size={14} />
                      {mealId
                        ? mealNames[mealId]
                        : "No meal selected"}
                    </div>

                    <span className="text-xs font-semibold text-slate-700">
                      Seat: {formatPrice(seat?.price)}
                    </span>

                  </div>

                  {mealId && (
                    <p className="mt-2 text-right text-xs text-slate-500">
                      Meal: {formatPrice(mealPrices[mealId])}
                    </p>
                  )}

                </div>
              );
            })}

          </div>

        </section>

        {/* Final Amount */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="mb-4 flex items-center gap-2">
            <IndianRupee size={19} className="text-blue-600" />

            <h2 className="text-base font-bold text-slate-900">
              Final Price Summary
            </h2>
          </div>

          <div className="space-y-3">

            <div className="flex justify-between text-sm text-slate-600">
              <span>Seat Charges</span>
              <span>{formatPrice(seatTotal)}</span>
            </div>

            <div className="flex justify-between text-sm text-slate-600">
              <span>Meal Charges</span>
              <span>{formatPrice(mealTotal)}</span>
            </div>

            <div className="flex justify-between border-t border-slate-200 pt-4">
              <span className="font-bold text-slate-900">
                Total Amount
              </span>

              <span className="text-xl font-bold text-blue-600">
                {formatPrice(grandTotal)}
              </span>
            </div>

          </div>

        </section>

        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          <ArrowLeft size={17} />
          Back to Seat Selection
        </button>

      </main>
    </div>
  );
};

export default BookingConfirmationPage;
