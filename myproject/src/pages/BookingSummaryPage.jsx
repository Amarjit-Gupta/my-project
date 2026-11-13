
// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Armchair,
//   ArrowLeft,
//   ArrowRight,
//   IndianRupee,
//   Users,
// } from "lucide-react";

// import Navbar from "../components/Navbar";
// import ProgressStepper from "../components/ProgressStepper";
// import MealSelector from "../components/MealSelector";

// const BookingSummaryPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const booking = location.state;

//   const [selectedMeals, setSelectedMeals] = useState({});

//   // Handle missing booking data
//   if (!booking) {
//     return (
//       <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4">
//         <h2 className="text-xl font-bold text-slate-900">
//           Booking details not found
//         </h2>

//         <p className="mt-2 text-sm text-slate-500">
//           Please select your seats first.
//         </p>

//         <button
//           onClick={() => navigate("/")}
//           className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
//         >
//           Back to Seat Selection
//         </button>
//       </div>
//     );
//   }

//   const {
//     passengers,
//     seats,
//     seatAssignments,
//     flight,
//     layoutType,
//   } = booking;

//   // Calculate seat price
//   const seatTotal = passengers.reduce((total, passenger) => {
//     const seatId = seatAssignments[passenger.id];

//     const seat = seats.find((item) => item.id === seatId);

//     return total + (seat?.price || 0);
//   }, 0);

//   // Meal options
//   const mealPrices = {
//     veg: 0,
//     standard: 150,
//     premium: 250,
//   };

//   // Calculate meal price
//   const mealTotal = Object.values(selectedMeals).reduce(
//     (total, mealId) => total + (mealPrices[mealId] || 0),
//     0
//   );

//   const grandTotal = seatTotal + mealTotal;

//   const handleMealChange = (passengerId, mealId) => {
//     setSelectedMeals((prev) => ({
//       ...prev,
//       [passengerId]: mealId,
//     }));
//   };

//   const formatPrice = (price) =>
//     `₹${price.toLocaleString("en-IN")}`;

//   // Continue to confirmation
//   const handleConfirm = () => {
//     navigate("/confirmation", {
//       state: {
//         ...booking,
//         selectedMeals,
//         seatTotal,
//         mealTotal,
//         grandTotal,
//       },
//     });
//   };

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <Navbar />

//       <ProgressStepper activeStep={3} />

//       <main className="mx-auto max-w-[1100px] space-y-6 px-4 py-6 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div>
//           <h1 className="text-2xl font-bold text-slate-900">
//             Booking Summary
//           </h1>

//           <p className="mt-1 text-sm text-slate-500">
//             Review your passenger and seat details.
//           </p>
//         </div>

//         {/* Flight Details */}
//         <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
//           <div className="flex flex-wrap items-center justify-between gap-3">
//             <div>
//               <p className="text-xs font-medium text-slate-500">
//                 Flight Route
//               </p>

//               <h2 className="mt-1 text-lg font-bold text-slate-900">
//                 {flight.from} ({flight.fromCity}) → {flight.to} ({flight.toCity})
//               </h2>
//             </div>

//             <div className="text-right">
//               <p className="text-xs text-slate-500">Travel Date</p>
//               <p className="mt-1 text-sm font-semibold text-slate-800">
//                 {flight.date}
//               </p>
//             </div>
//           </div>

//           <div className="mt-4 flex flex-wrap gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
//             <span>Configuration: {layoutType}</span>
//             <span>{passengers.length} Passengers</span>
//             <span>Duration: {flight.duration}</span>
//           </div>
//         </section>

//         {/* Passenger Seat Details */}
//         <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

//           <div className="mb-5 flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//               <Users size={20} />
//             </div>

//             <div>
//               <h2 className="text-base font-bold text-slate-900">
//                 Passenger Details
//               </h2>
//               <p className="text-xs text-slate-500">
//                 Assigned seats and individual charges
//               </p>
//             </div>
//           </div>

//           <div className="space-y-3">
//             {passengers.map((passenger) => {
//               const seatId = seatAssignments[passenger.id];

//               const seat = seats.find(
//                 (item) => item.id === seatId
//               );

//               return (
//                 <div
//                   key={passenger.id}
//                   className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 p-4"
//                 >
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       {passenger.name}
//                     </p>

//                     <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
//                       <Armchair size={14} />
//                       Seat {seat?.id || "Not assigned"}
//                     </p>
//                   </div>

//                   <div className="text-right">
//                     <p className="text-xs text-slate-500">
//                       {seat?.category || "No seat"}
//                     </p>

//                     <p className="mt-1 text-sm font-bold text-slate-900">
//                       {formatPrice(seat?.price || 0)}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* Optional Meal Selection */}
//         <MealSelector
//           passengers={passengers}
//           selectedMeals={selectedMeals}
//           onMealChange={handleMealChange}
//         />

//         {/* Final Price */}
//         <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

//           <h2 className="mb-4 text-base font-bold text-slate-900">
//             Price Breakdown
//           </h2>

//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between text-slate-600">
//               <span>Seat Charges</span>
//               <span>{formatPrice(seatTotal)}</span>
//             </div>

//             <div className="flex justify-between text-slate-600">
//               <span>Meal Charges</span>
//               <span>{formatPrice(mealTotal)}</span>
//             </div>

//             <div className="flex justify-between border-t border-slate-200 pt-4 font-bold text-slate-900">
//               <span>Grand Total</span>
//               <span className="text-xl text-blue-600">
//                 {formatPrice(grandTotal)}
//               </span>
//             </div>
//           </div>

//         </section>

//         {/* Navigation */}
//         <div className="flex flex-col-reverse justify-between gap-3 sm:flex-row">
//           <button
//             type="button"
//             onClick={() => navigate("/", { state: booking })}
//             className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
//           >
//             <ArrowLeft size={17} />
//             Back to Seats
//           </button>

//           <button
//             type="button"
//             disabled={passengers.some(
//               (passenger) => !seatAssignments[passenger.id]
//             )}
//             onClick={handleConfirm}
//             className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
//           >
//             Confirm Selection
//             <ArrowRight size={17} />
//           </button>
//         </div>

//       </main>
//     </div>
//   );
// };

// export default BookingSummaryPage;




// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Armchair,
//   ArrowLeft,
//   ArrowRight,
//   IndianRupee,
//   Users,
//   Plane,
// } from "lucide-react";

// import Navbar from "../components/Navbar";
// import ProgressStepper from "../components/ProgressStepper";
// import MealSelector from "../components/MealSelector";

// const BookingSummaryPage = ({ darkMode }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const booking = location.state;

//   const [selectedMeals, setSelectedMeals] = useState({});

//   // Theme Classes
//   const pageBg = darkMode ? "bg-[#020617]" : "bg-[#F8FAFC]";
//   const cardBg = darkMode ? "bg-[#0F172A]" : "bg-white";
//   const borderColor = darkMode ? "border-[#1E293B]" : "border-slate-200";
//   const headingColor = darkMode ? "text-slate-100" : "text-slate-900";
//   const textColor = darkMode ? "text-slate-400" : "text-slate-500";
//   const secondaryText = darkMode ? "text-slate-300" : "text-slate-700";

//   const primaryColor = darkMode ? "text-emerald-400" : "text-emerald-600";
//   const primaryBg = darkMode ? "bg-emerald-950/60" : "bg-emerald-50";
//   const primaryBorder = darkMode ? "border-emerald-900" : "border-emerald-200";

//   // Handle missing booking data
//   if (!booking) {
//     return (
//       <div
//         className={`flex min-h-screen flex-col items-center justify-center px-4 ${pageBg}`}
//       >
//         <div
//           className={`w-full max-w-md rounded-2xl border p-8 text-center shadow-sm ${cardBg} ${borderColor}`}
//         >
//           <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${primaryBg}`}>
//             <Armchair size={34} className={primaryColor} />
//           </div>

//           <h2 className={`mt-5 text-xl font-bold ${headingColor}`}>
//             Booking details not found
//           </h2>

//           <p className={`mt-2 text-sm ${textColor}`}>
//             Please select your seats first.
//           </p>

//           <button
//             onClick={() => navigate("/")}
//             className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
//           >
//             Back to Seat Selection
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const {
//     passengers,
//     seats,
//     seatAssignments,
//     flight,
//     layoutType,
//   } = booking;

//   // Calculate seat price
//   const seatTotal = passengers.reduce((total, passenger) => {
//     const seatId = seatAssignments[passenger.id];

//     const seat = seats.find((item) => item.id === seatId);

//     return total + (seat?.price || 0);
//   }, 0);

//   // Meal options
//   const mealPrices = {
//     veg: 0,
//     standard: 150,
//     premium: 250,
//   };

//   // Calculate meal price
//   const mealTotal = Object.values(selectedMeals).reduce(
//     (total, mealId) => total + (mealPrices[mealId] || 0),
//     0
//   );

//   const grandTotal = seatTotal + mealTotal;

//   const handleMealChange = (passengerId, mealId) => {
//     setSelectedMeals((prev) => ({
//       ...prev,
//       [passengerId]: mealId,
//     }));
//   };

//   const formatPrice = (price) =>
//     `₹${price.toLocaleString("en-IN")}`;

//   // Continue to confirmation
//   const handleConfirm = () => {
//     navigate("/confirmation", {
//       state: {
//         ...booking,
//         selectedMeals,
//         seatTotal,
//         mealTotal,
//         grandTotal,
//       },
//     });
//   };

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${pageBg}`}>
//       <Navbar darkMode={darkMode} />

//       <ProgressStepper activeStep={3} darkMode={darkMode} />

//       <main className="mx-auto max-w-[1100px] space-y-6 px-4 py-8 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div>
//           <h1 className={`text-2xl font-bold tracking-tight ${headingColor}`}>
//             Booking Summary
//           </h1>

//           <p className={`mt-1 text-sm ${textColor}`}>
//             Review your passenger and seat details.
//           </p>
//         </div>

//         {/* Flight Details */}
//         <section
//           className={`rounded-lg border p-5 shadow-sm sm:p-6 ${cardBg} ${borderColor}`}
//         >
//           <div className="mb-5 flex items-center gap-3">
//             <div className={`rounded-xl p-2.5 ${primaryBg}`}>
//               <Plane size={20} className={primaryColor} />
//             </div>

//             <h2 className={`text-base font-bold ${headingColor}`}>
//               Flight Information
//             </h2>
//           </div>

//           <div className="flex flex-wrap items-center justify-between gap-4">
//             <div>
//               <p className={`text-xs font-medium ${textColor}`}>
//                 Flight Route
//               </p>

//               <h2 className={`mt-1 text-lg font-bold ${headingColor}`}>
//                 {flight.from} ({flight.fromCity}) → {flight.to} ({flight.toCity})
//               </h2>
//             </div>

//             <div className="sm:text-right">
//               <p className={`text-xs ${textColor}`}>
//                 Travel Date
//               </p>

//               <p className={`mt-1 text-sm font-semibold ${secondaryText}`}>
//                 {flight.date}
//               </p>
//             </div>
//           </div>

//           <div
//             className={`mt-5 flex flex-wrap gap-x-5 gap-y-3 border-t pt-4 text-xs ${darkMode ? "border-[#1E293B]" : "border-slate-100"} ${textColor}`}
//           >
//             <span>
//               Configuration:
//               <span className={`ml-1 font-semibold ${secondaryText}`}>
//                 {layoutType}
//               </span>
//             </span>

//             <span>
//               {passengers.length} Passengers
//             </span>

//             <span>
//               Duration:
//               <span className={`ml-1 font-semibold ${secondaryText}`}>
//                 {flight.duration}
//               </span>
//             </span>
//           </div>
//         </section>

//         {/* Passenger Seat Details */}
//         <section
//           className={`rounded-2xl border p-5 shadow-sm sm:p-6 ${cardBg} ${borderColor}`}
//         >
//           <div className="mb-6 flex items-center gap-3">
//             <div className={`rounded-xl p-2.5 ${primaryBg}`}>
//               <Users size={20} className={primaryColor} />
//             </div>

//             <div>
//               <h2 className={`text-base font-bold ${headingColor}`}>
//                 Passenger Details
//               </h2>

//               <p className={`mt-0.5 text-xs ${textColor}`}>
//                 Assigned seats and individual charges
//               </p>
//             </div>
//           </div>

//           <div className="space-y-3">
//             {passengers.map((passenger) => {
//               const seatId = seatAssignments[passenger.id];

//               const seat = seats.find(
//                 (item) => item.id === seatId
//               );

//               return (
//                 <div
//                   key={passenger.id}
//                   className={`flex flex-wrap items-center justify-between gap-3 rounded-xl border p-4 transition-colors ${borderColor} ${darkMode ? "bg-slate-800/30" : "bg-slate-50/70"}`}
//                 >
//                   <div>
//                     <p className={`text-sm font-bold ${headingColor}`}>
//                       {passenger.name}
//                     </p>

//                     <p className={`mt-1.5 flex items-center gap-1.5 text-xs ${textColor}`}>
//                       <Armchair size={14} className={primaryColor} />
//                       Seat {seat?.id || "Not assigned"}
//                     </p>
//                   </div>

//                   <div className="text-right">
//                     <span
//                       className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${primaryBg} ${primaryColor} ${primaryBorder}`}
//                     >
//                       {seat?.category || "No seat"}
//                     </span>

//                     <p className={`mt-2 text-sm font-bold ${headingColor}`}>
//                       {formatPrice(seat?.price || 0)}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* Optional Meal Selection */}
//         <MealSelector
//           passengers={passengers}
//           selectedMeals={selectedMeals}
//           onMealChange={handleMealChange}
//           darkMode={darkMode}
//         />

//         {/* Final Price */}
//         <section
//           className={`rounded-2xl border p-5 shadow-sm sm:p-6 ${cardBg} ${borderColor}`}
//         >
//           <div className="mb-6 flex items-center gap-3">
//             <div className={`rounded-xl p-2.5 ${primaryBg}`}>
//               <IndianRupee size={20} className={primaryColor} />
//             </div>

//             <h2 className={`text-base font-bold ${headingColor}`}>
//               Price Breakdown
//             </h2>
//           </div>

//           <div className="space-y-4">

//             <div className={`flex justify-between text-sm ${textColor}`}>
//               <span>Seat Charges</span>

//               <span className={`font-medium ${secondaryText}`}>
//                 {formatPrice(seatTotal)}
//               </span>
//             </div>

//             <div className={`flex justify-between text-sm ${textColor}`}>
//               <span>Meal Charges</span>

//               <span className={`font-medium ${secondaryText}`}>
//                 {formatPrice(mealTotal)}
//               </span>
//             </div>

//             <div
//               className={`flex items-center justify-between gap-3 border-t pt-5 ${darkMode ? "border-emerald-900/50" : "border-emerald-100"}`}
//             >
//               <div>
//                 <p className={`text-sm font-bold ${headingColor}`}>
//                   Grand Total
//                 </p>

//                 <p className={`mt-1 text-xs ${textColor}`}>
//                   Including all selected services
//                 </p>
//               </div>

//               <span className={`text-2xl font-bold tracking-tight ${primaryColor}`}>
//                 {formatPrice(grandTotal)}
//               </span>
//             </div>

//           </div>
//         </section>

//         {/* Navigation */}
//         <div className="flex flex-col-reverse justify-between gap-3 sm:flex-row">

//           <button
//             type="button"
//             onClick={() => navigate("/", { state: booking })}
//             className={`flex items-center justify-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-semibold transition-all duration-200 ${borderColor} ${darkMode ? "bg-[#0F172A] text-slate-300 hover:bg-slate-800 hover:text-white" : "bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900"}`}
//           >
//             <ArrowLeft size={17} />
//             Back to Seats
//           </button>

//           <button
//             type="button"
//             disabled={passengers.some(
//               (passenger) => !seatAssignments[passenger.id]
//             )}
//             onClick={handleConfirm}
//             className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-400 dark:disabled:bg-slate-700"
//           >
//             Confirm Selection
//             <ArrowRight size={17} />
//           </button>

//         </div>

//       </main>
//     </div>
//   );
// };

// export default BookingSummaryPage;





import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Armchair,
  ArrowLeft,
  ArrowRight,
  IndianRupee,
  Users,
  Plane,
} from "lucide-react";

import Navbar from "../components/Navbar";
import ProgressStepper from "../components/ProgressStepper";
import MealSelector from "../components/MealSelector";

const BookingSummaryPage = ({ darkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const booking = location.state;

  const [selectedMeals, setSelectedMeals] = useState({});

  // Theme Classes
  const theme = {
    page: darkMode ? "bg-[#020617]" : "bg-[#F8FAFC]",

    card: darkMode ? "bg-[#0F172A]" : "bg-white",

    border: darkMode ? "border-[#1E293B]" : "border-slate-200",

    heading: darkMode ? "text-slate-100" : "text-slate-900",

    text: darkMode ? "text-slate-300" : "text-slate-700",

    muted: darkMode ? "text-slate-400" : "text-slate-500",

    primary: darkMode ? "text-emerald-400" : "text-emerald-600",

    primaryBg: darkMode ? "bg-emerald-950/60" : "bg-emerald-50",

    primaryBorder: darkMode
      ? "border-emerald-900"
      : "border-emerald-200",

    sectionBorder: darkMode
      ? "border-[#1E293B]"
      : "border-slate-100",

    passengerCard: darkMode
      ? "bg-slate-800/30"
      : "bg-slate-50/70",

    backButton: darkMode
      ? "bg-[#0F172A] text-slate-300 hover:bg-slate-800 hover:text-white"
      : "bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900",

    buttonDisabled: darkMode
      ? "disabled:bg-slate-700"
      : "disabled:bg-slate-400",

    totalBorder: darkMode
      ? "border-emerald-900/50"
      : "border-emerald-100",
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
            <Armchair size={34} className={theme.primary} />
          </div>

          <h2 className={`mt-5 text-xl font-bold ${theme.heading}`}>
            Booking details not found
          </h2>

          <p className={`mt-2 text-sm ${theme.muted}`}>
            Please select your seats first.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Back to Seat Selection
          </button>
        </div>
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
    <div
      className={`min-h-screen transition-colors duration-300 ${theme.page}`}
    >
      {/* <Navbar darkMode={darkMode} /> */}

      <ProgressStepper activeStep={3} darkMode={darkMode} />

      <main className="mx-auto max-w-[1440px] space-y-6 px-4 py-8 sm:px-6 lg:px-8">

        {/* Heading */}
        <div>
          <h1 className={`text-2xl font-bold tracking-tight ${theme.heading}`}>
            Booking Summary
          </h1>

          <p className={`mt-1 text-sm ${theme.muted}`}>
            Review your passenger and seat details.
          </p>
        </div>

        {/* Flight Details */}
        <section
          className={`rounded-lg border p-5 shadow-sm sm:p-6 ${theme.card} ${theme.border}`}
        >
          <div className="mb-5 flex items-center gap-3">
            <div className={`rounded-xl p-2.5 ${theme.primaryBg}`}>
              <Plane size={20} className={theme.primary} />
            </div>

            <h2 className={`text-base font-bold ${theme.heading}`}>
              Flight Information
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className={`text-xs font-medium ${theme.muted}`}>
                Flight Route
              </p>

              <h2 className={`mt-1 text-lg font-bold ${theme.heading}`}>
                {flight.from} ({flight.fromCity}) → {flight.to} ({flight.toCity})
              </h2>
            </div>

            <div className="sm:text-right">
              <p className={`text-xs ${theme.muted}`}>
                Travel Date
              </p>

              <p className={`mt-1 text-sm font-semibold ${theme.text}`}>
                {flight.date}
              </p>
            </div>
          </div>

          <div
            className={`mt-5 flex flex-wrap gap-x-5 gap-y-3 border-t pt-4 text-xs ${theme.sectionBorder} ${theme.muted}`}
          >
            <span>
              Configuration:
              <span className={`ml-1 font-semibold ${theme.text}`}>
                {layoutType}
              </span>
            </span>

            <span>
              {passengers.length} Passengers
            </span>

            <span>
              Duration:
              <span className={`ml-1 font-semibold ${theme.text}`}>
                {flight.duration}
              </span>
            </span>
          </div>
        </section>

        {/* Passenger Seat Details */}
        <section
          className={`rounded-lg border p-5 shadow-sm sm:p-6 ${theme.card} ${theme.border}`}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className={`rounded-xl p-2.5 ${theme.primaryBg}`}>
              <Users size={20} className={theme.primary} />
            </div>

            <div>
              <h2 className={`text-base font-bold ${theme.heading}`}>
                Passenger Details
              </h2>

              <p className={`mt-0.5 text-xs ${theme.muted}`}>
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
                  className={`flex flex-wrap items-center justify-between gap-3 rounded-xl border p-4 transition-colors ${theme.border} ${theme.passengerCard}`}
                >
                  <div>
                    <p className={`text-sm font-bold ${theme.heading}`}>
                      {passenger.name}
                    </p>

                    <p className={`mt-1.5 flex items-center gap-1.5 text-xs ${theme.muted}`}>
                      <Armchair size={14} className={theme.primary} />
                      Seat {seat?.id || "Not assigned"}
                    </p>
                  </div>

                  <div className="text-right">
                    <span
                      className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${theme.primaryBg} ${theme.primary} ${theme.primaryBorder}`}
                    >
                      {seat?.category || "No seat"}
                    </span>

                    <p className={`mt-2 text-sm font-bold ${theme.heading}`}>
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
          darkMode={darkMode}
        />

        {/* Final Price */}
        <section
          className={`rounded-lg border p-5 shadow-sm sm:p-6 ${theme.card} ${theme.border}`}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className={`rounded-xl p-2.5 ${theme.primaryBg}`}>
              <IndianRupee size={20} className={theme.primary} />
            </div>

            <h2 className={`text-base font-bold ${theme.heading}`}>
              Price Breakdown
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
                  Grand Total
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
        </section>

        {/* Navigation */}
        <div className="flex flex-col-reverse justify-between gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate("/", { state: booking })}
            className={`flex items-center justify-center gap-2 rounded-lg cursor-pointer border px-5 py-3.5 text-sm font-semibold transition-all duration-200 ${theme.border} ${theme.backButton}`}
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
            className={`flex items-center justify-center gap-2 rounded-lg cursor-pointer bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-700 disabled:cursor-not-allowed ${theme.buttonDisabled}`}
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
