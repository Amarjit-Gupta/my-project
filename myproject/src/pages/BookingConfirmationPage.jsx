
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   CheckCircle2,
//   Plane,
//   Armchair,
//   UtensilsCrossed,
//   Users,
//   IndianRupee,
//   ArrowLeft,
// } from "lucide-react";

// import Navbar from "../components/Navbar";
// import ProgressStepper from "../components/ProgressStepper";

// const BookingConfirmationPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const booking = location.state;

//   // Handle missing data
//   if (!booking) {
//     return (
//       <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4">
//         <h2 className="text-xl font-bold text-slate-900">
//           Confirmation details not found
//         </h2>

//         <button
//           onClick={() => navigate("/")}
//           className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
//         >
//           Back to Home
//         </button>
//       </div>
//     );
//   }

//   const {
//     passengers,
//     seats,
//     seatAssignments,
//     selectedMeals = {},
//     flight,
//     layoutType,
//     seatTotal,
//     mealTotal,
//     grandTotal,
//   } = booking;

//   const mealNames = {
//     veg: "Vegetarian Meal",
//     standard: "Standard Meal",
//     premium: "Premium Meal",
//   };

//   const mealPrices = {
//     veg: 0,
//     standard: 150,
//     premium: 250,
//   };

//   const formatPrice = (price) =>
//     `₹${(price || 0).toLocaleString("en-IN")}`;

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <Navbar />

//       <ProgressStepper activeStep={3} />

//       <main className="mx-auto max-w-[850px] space-y-6 px-4 py-8 sm:px-6">

//         {/* Success Header */}
//         <section className="rounded-2xl border border-green-200 bg-white px-5 py-8 text-center shadow-sm">

//           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
//             <CheckCircle2
//               size={38}
//               className="text-green-600"
//             />
//           </div>

//           <h1 className="mt-4 text-2xl font-bold text-slate-900">
//             Selection Confirmed!
//           </h1>

//           <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
//             Your passenger-wise seat and meal selections have been successfully completed.
//           </p>

//           <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">
//             <CheckCircle2 size={15} />
//             Selection Complete
//           </div>

//         </section>

//         {/* Flight Information */}
//         <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

//           <div className="mb-5 flex items-center gap-2">
//             <Plane size={19} className="text-blue-600" />

//             <h2 className="text-base font-bold text-slate-900">
//               Flight Information
//             </h2>
//           </div>

//           <div className="flex items-center justify-between gap-3">

//             <div>
//               <p className="text-2xl font-bold text-slate-900">
//                 {flight.from}
//               </p>
//               <p className="text-xs text-slate-500">
//                 {flight.fromCity}
//               </p>
//             </div>

//             <div className="flex flex-1 flex-col items-center gap-2">
//               <Plane size={20} className="rotate-90 text-blue-600" />
//               <div className="h-px w-full bg-slate-200" />
//               <span className="text-[10px] text-slate-500">
//                 {flight.duration}
//               </span>
//             </div>

//             <div className="text-right">
//               <p className="text-2xl font-bold text-slate-900">
//                 {flight.to}
//               </p>
//               <p className="text-xs text-slate-500">
//                 {flight.toCity}
//               </p>
//             </div>

//           </div>

//           <div className="mt-5 border-t border-slate-100 pt-4 text-xs text-slate-500">
//             Travel Date: <span className="font-semibold text-slate-800">{flight.date}</span>
//             <span className="mx-2">•</span>
//             Layout: <span className="font-semibold text-slate-800">{layoutType}</span>
//           </div>

//         </section>

//         {/* Passenger Details */}
//         <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

//           <div className="mb-5 flex items-center gap-2">
//             <Users size={19} className="text-blue-600" />

//             <h2 className="text-base font-bold text-slate-900">
//               Passenger Selections
//             </h2>
//           </div>

//           <div className="space-y-3">

//             {passengers.map((passenger) => {

//               const seatId = seatAssignments[passenger.id];

//               const seat = seats.find(
//                 (item) => item.id === seatId
//               );

//               const mealId = selectedMeals[passenger.id];

//               return (
//                 <div
//                   key={passenger.id}
//                   className="rounded-xl border border-slate-200 p-4"
//                 >

//                   <div className="flex flex-wrap items-center justify-between gap-3">

//                     <div>
//                       <p className="text-sm font-bold text-slate-900">
//                         {passenger.name}
//                       </p>

//                       <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
//                         <Armchair size={14} />
//                         Seat {seat?.id || "Not assigned"}
//                       </p>
//                     </div>

//                     <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
//                       {seat?.category || "No Seat"}
//                     </span>

//                   </div>

//                   <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">

//                     <div className="flex items-center gap-2 text-xs text-slate-500">
//                       <UtensilsCrossed size={14} />
//                       {mealId
//                         ? mealNames[mealId]
//                         : "No meal selected"}
//                     </div>

//                     <span className="text-xs font-semibold text-slate-700">
//                       Seat: {formatPrice(seat?.price)}
//                     </span>

//                   </div>

//                   {mealId && (
//                     <p className="mt-2 text-right text-xs text-slate-500">
//                       Meal: {formatPrice(mealPrices[mealId])}
//                     </p>
//                   )}

//                 </div>
//               );
//             })}

//           </div>

//         </section>

//         {/* Final Amount */}
//         <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

//           <div className="mb-4 flex items-center gap-2">
//             <IndianRupee size={19} className="text-blue-600" />

//             <h2 className="text-base font-bold text-slate-900">
//               Final Price Summary
//             </h2>
//           </div>

//           <div className="space-y-3">

//             <div className="flex justify-between text-sm text-slate-600">
//               <span>Seat Charges</span>
//               <span>{formatPrice(seatTotal)}</span>
//             </div>

//             <div className="flex justify-between text-sm text-slate-600">
//               <span>Meal Charges</span>
//               <span>{formatPrice(mealTotal)}</span>
//             </div>

//             <div className="flex justify-between border-t border-slate-200 pt-4">
//               <span className="font-bold text-slate-900">
//                 Total Amount
//               </span>

//               <span className="text-xl font-bold text-blue-600">
//                 {formatPrice(grandTotal)}
//               </span>
//             </div>

//           </div>

//         </section>

//         {/* Back Button */}
//         <button
//           type="button"
//           onClick={() => navigate("/")}
//           className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
//         >
//           <ArrowLeft size={17} />
//           Back to Seat Selection
//         </button>

//       </main>
//     </div>
//   );
// };

// export default BookingConfirmationPage;




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

const BookingConfirmationPage = ({ darkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const booking = location.state;

  // Theme classes stored in variables
  const theme = {
    page: darkMode ? "bg-[#020617]" : "bg-[#F8FAFC]",
    card: darkMode ? "bg-[#0F172A]" : "bg-white",
    border: darkMode ? "border-[#1E293B]" : "border-slate-200",
    heading: darkMode ? "text-slate-100" : "text-slate-900",
    text: darkMode ? "text-slate-300" : "text-slate-700",
    muted: darkMode ? "text-slate-400" : "text-slate-500",
    primary: darkMode ? "text-emerald-400" : "text-emerald-600",
    primaryBg: darkMode ? "bg-emerald-950/60" : "bg-emerald-50",
    primaryBorder: darkMode ? "border-emerald-900" : "border-emerald-200",
    sectionBorder: darkMode ? "border-[#1E293B]" : "border-slate-100",
    passengerCard: darkMode
      ? "bg-slate-800/30 border-[#1E293B]"
      : "bg-slate-50/70 border-slate-200",
    successBorder: darkMode
      ? "border-emerald-900"
      : "border-emerald-200",
    totalBorder: darkMode
      ? "border-emerald-900/50"
      : "border-emerald-100",
    backButton: darkMode
      ? "bg-[#0F172A] text-slate-300 border-[#1E293B] hover:bg-slate-800 hover:text-white"
      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900",
  };

  // Handle missing booking data
  if (!booking) {
    return (
      <div
        className={`flex min-h-screen flex-col items-center justify-center px-4 ${theme.page}`}
      >
        <div
          className={`w-full max-w-md rounded-2xl border p-8 text-center shadow-sm ${theme.card} ${theme.border}`}
        >
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${theme.primaryBg}`}
          >
            <CheckCircle2 size={34} className={theme.primary} />
          </div>

          <h2 className={`mt-5 text-xl font-bold ${theme.heading}`}>
            Confirmation details not found
          </h2>

          <p className={`mt-2 text-sm ${theme.muted}`}>
            Please return to the home page and complete your booking selection.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Back to Home
          </button>
        </div>
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
    <div
      className={`min-h-screen transition-colors duration-300 ${theme.page}`}
    >
      {/* <Navbar darkMode={darkMode} /> */}

      <ProgressStepper activeStep={3} darkMode={darkMode} />

      <main className="mx-auto max-w-[1440px] space-y-6 px-4 py-8 sm:px-6">

        {/* Success Header */}
        <div
          className={`rounded-lg border px-5 py-9 text-center shadow-sm ${theme.card} ${theme.successBorder}`}
        >
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${theme.primaryBg}`}
          >
            <CheckCircle2
              size={38}
              strokeWidth={2}
              className={theme.primary}
            />
          </div>

          <h1 className={`mt-5 text-2xl font-bold tracking-tight ${theme.heading}`}>
            Selection Confirmed!
          </h1>

          <p className={`mx-auto mt-2 max-w-md text-sm ${theme.muted}`}>
            Your passenger-wise seat and meal selections have been successfully completed.
          </p>
        </div>

        {/* Flight Information */}
        <div
          className={`rounded-lg border p-5 shadow-sm sm:p-6 ${theme.card} ${theme.border}`}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className={`rounded-xl p-2.5 ${theme.primaryBg}`}>
              <Plane size={20} className={theme.primary} />
            </div>

            <h2 className={`text-base font-bold ${theme.heading}`}>
              Flight Information
            </h2>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div>
              <p className={`text-2xl font-bold tracking-tight sm:text-3xl ${theme.heading}`}>
                {flight.from}
              </p>

              <p className={`mt-1 text-xs ${theme.muted}`}>
                {flight.fromCity}
              </p>
            </div>

            <div className="flex flex-1 flex-col items-center gap-2 px-2">
              <Plane
                size={20}
                className={`rotate-90 ${theme.primary}`}
              />

              <div
                className={`relative h-px w-full ${darkMode ? "bg-slate-700" : "bg-slate-200"}`}
              >
                <span
                  className={`absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${darkMode ? "bg-emerald-400" : "bg-emerald-600"}`}
                />
              </div>

              <span className={`text-[10px] font-medium ${theme.muted}`}>
                {flight.duration}
              </span>
            </div>

            <div className="text-right">
              <p className={`text-2xl font-bold tracking-tight sm:text-3xl ${theme.heading}`}>
                {flight.to}
              </p>

              <p className={`mt-1 text-xs ${theme.muted}`}>
                {flight.toCity}
              </p>
            </div>
          </div>

          <div
            className={`mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t pt-4 text-xs ${theme.sectionBorder} ${theme.muted}`}
          >
            <p>
              Travel Date:
              <span className={`ml-1.5 font-semibold ${theme.heading}`}>
                {new Date().toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }).toLowerCase() || flight.date}
              </span>
            </p>

            <p>
              Layout:
              <span className={`ml-1.5 font-semibold ${theme.heading}`}>
                {layoutType}
              </span>
            </p>
          </div>
        </div>

        {/* Passenger Details */}
        <div
          className={`rounded-lg border p-5 shadow-sm sm:p-6 ${theme.card} ${theme.border}`}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className={`rounded-xl p-2.5 ${theme.primaryBg}`}>
              <Users size={20} className={theme.primary} />
            </div>

            <div>
              <h2 className={`text-base font-bold ${theme.heading}`}>
                Passenger Selections
              </h2>

              <p className={`mt-0.5 text-xs ${theme.muted}`}>
                Seat and meal details for each passenger
              </p>
            </div>
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
                  className={`rounded-xl border p-4 transition-colors ${theme.passengerCard}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className={`text-sm font-bold ${theme.heading}`}>
                        {passenger.name}
                      </p>

                      <p className={`mt-1.5 flex items-center gap-1.5 text-xs ${theme.muted}`}>
                        <Armchair size={14} className={theme.primary} />
                        Seat {seat?.id || "Not assigned"}
                      </p>
                    </div>

                    <span
                      className={`rounded-lg border px-3 py-1.5 text-xs font-bold ${theme.primaryBg} ${theme.primary} ${theme.primaryBorder}`}
                    >
                      {seat?.category || "No Seat"}
                    </span>
                  </div>

                  <div
                    className={`mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-3 ${theme.sectionBorder}`}
                  >
                    <div className={`flex items-center gap-2 text-xs ${theme.muted}`}>
                      <UtensilsCrossed size={14} className={theme.primary} />

                      {mealId
                        ? mealNames[mealId]
                        : "No meal selected"}
                    </div>

                    <span className={`text-xs font-semibold ${theme.text}`}>
                      Seat: {formatPrice(seat?.price)}
                    </span>
                  </div>

                  {mealId && (
                    <p className={`mt-2 text-right text-xs ${theme.muted}`}>
                      Meal: {formatPrice(mealPrices[mealId])}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Price Summary */}
        <div
          className={`rounded-lg border p-5 shadow-sm sm:p-6 ${theme.card} ${theme.border}`}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className={`rounded-xl p-2.5 ${theme.primaryBg}`}>
              <IndianRupee size={20} className={theme.primary} />
            </div>

            <h2 className={`text-base font-bold ${theme.heading}`}>
              Final Price Summary
            </h2>
          </div>

          <div className="space-y-4">
            <div className={`flex justify-between text-sm ${theme.muted}`}>
              <span>Seat Charges</span>

              <span className={`font-medium ${theme.text}`}>
                {formatPrice(seatTotal)}
              </span>
            </div>

            <div className={`flex justify-between text-sm ${theme.muted}`}>
              <span>Meal Charges</span>

              <span className={`font-medium ${theme.text}`}>
                {formatPrice(mealTotal)}
              </span>
            </div>

            <div
              className={`flex items-center justify-between gap-3 border-t pt-5 ${theme.totalBorder}`}
            >
              <div>
                <p className={`text-sm font-bold ${theme.heading}`}>
                  Total Amount
                </p>

                <p className={`mt-1 text-xs ${theme.muted}`}>
                  Including all selected services
                </p>
              </div>

              <span className={`text-2xl font-bold tracking-tight ${theme.primary}`}>
                {formatPrice(grandTotal)}
              </span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border px-5 py-3.5 text-sm font-semibold transition-all duration-200 ${theme.backButton}`}
        >
          <ArrowLeft size={17} />
          Back to Seat Selection
        </button>

      </main>
    </div>
  );
};

export default BookingConfirmationPage;
