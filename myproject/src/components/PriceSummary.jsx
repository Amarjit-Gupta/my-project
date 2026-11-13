
// import { Armchair, IndianRupee, ArrowRight, Users } from "lucide-react";

// const PriceSummary = ({
//   passengers = [],
//   seats = [],
//   seatAssignments = {},
//   onContinue,
//   buttonText = "Continue to Summary",
// }) => {

//   // Get seat details for each passenger
//   const assignedSeats = passengers
//     .map((passenger) => {
//       const seatId = seatAssignments[passenger.id];

//       const seat = seats.find(
//         (item) => item.id === seatId
//       );

//       return {
//         passenger,
//         seat,
//       };
//     })
//     .filter((item) => item.seat);

//   // Calculate total seat price
//   const totalPrice = assignedSeats.reduce(
//     (total, item) => total + item.seat.price,
//     0
//   );

//   const formatPrice = (price) =>
//     `₹${price.toLocaleString("en-IN")}`;

//   return (
//     <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

//       {/* Heading */}
//       <div className="mb-5 flex items-center justify-between">
//         <div>
//           <h2 className="text-base font-bold text-slate-900">
//             Price Summary
//           </h2>

//           <p className="mt-1 text-xs text-slate-500">
//             Your seat selection details
//           </p>
//         </div>

//         <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//           <IndianRupee size={20} />
//         </div>
//       </div>

//       {/* Passenger Count */}
//       <div className="mb-4 flex items-center justify-between rounded-xl bg-slate-50 p-3">
//         <div className="flex items-center gap-2 text-slate-600">
//           <Users size={17} />
//           <span className="text-xs font-medium">
//             Selected Seats
//           </span>
//         </div>

//         <span className="text-sm font-bold text-slate-900">
//           {assignedSeats.length}/{passengers.length}
//         </span>
//       </div>

//       {/* Assigned Seats */}
//       <div className="space-y-3">

//         {assignedSeats.map(({ passenger, seat }) => (
//           <div
//             key={passenger.id}
//             className="flex items-center justify-between gap-3 border-b border-dashed border-slate-200 pb-3"
//           >
//             <div className="min-w-0">
//               <p className="truncate text-sm font-semibold text-slate-800">
//                 {passenger.name}
//               </p>

//               <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
//                 <Armchair size={13} />
//                 Seat {seat.id} · {seat.category}
//               </p>
//             </div>

//             <span className="shrink-0 text-sm font-semibold text-slate-800">
//               {formatPrice(seat.price)}
//             </span>
//           </div>
//         ))}

//         {/* Empty State */}
//         {assignedSeats.length === 0 && (
//           <div className="rounded-xl bg-slate-50 px-3 py-6 text-center">
//             <Armchair
//               size={25}
//               className="mx-auto mb-2 text-slate-400"
//             />

//             <p className="text-sm font-medium text-slate-600">
//               No seats selected
//             </p>

//             <p className="mt-1 text-xs text-slate-400">
//               Select seats to see your price
//             </p>
//           </div>
//         )}

//       </div>

//       {/* Total */}
//       <div className="mt-5 border-t border-slate-200 pt-4">
//         <div className="flex items-center justify-between">
//           <span className="text-sm font-medium text-slate-600">
//             Total Seat Charges
//           </span>

//           <span className="text-xl font-bold text-slate-900">
//             {formatPrice(totalPrice)}
//           </span>
//         </div>

//         <p className="mt-1 text-[11px] text-slate-400">
//           Based on your selected seats
//         </p>
//       </div>

//       {/* Continue Button */}
//       <button
//         type="button"
//         onClick={onContinue}
//         disabled={
//           assignedSeats.length !== passengers.length ||
//           passengers.length === 0
//         }
//         className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
//       >
//         {buttonText}
//         <ArrowRight size={17} />
//       </button>

//     </section>
//   );
// };

// export default PriceSummary;



import { Armchair, IndianRupee, ArrowRight, Users } from "lucide-react";

const PriceSummary = ({
  passengers = [],
  seats = [],
  seatAssignments = {},
  onContinue,
  buttonText = "Continue to Summary",
  darkMode = false,
}) => {

  // Theme styles
  const theme = {
    card: darkMode
      ? "border-slate-800 bg-slate-900"
      : "border-slate-200 bg-white",

    heading: darkMode
      ? "text-slate-100"
      : "text-slate-900",

    text: darkMode
      ? "text-slate-300"
      : "text-slate-600",

    muted: darkMode
      ? "text-slate-400"
      : "text-slate-500",

    iconBg: darkMode
      ? "bg-emerald-950/60 text-emerald-400"
      : "bg-emerald-50 text-emerald-600",

    passengerBg: darkMode
      ? "bg-slate-800/60"
      : "bg-slate-50",

    border: darkMode
      ? "border-slate-700"
      : "border-slate-200",

    emptyBg: darkMode
      ? "bg-slate-800/50"
      : "bg-slate-50",

    emptyIcon: darkMode
      ? "text-slate-500"
      : "text-slate-400",

    total: darkMode
      ? "text-slate-100"
      : "text-slate-900",

    button: darkMode
      ? "bg-emerald-500 text-white hover:bg-emerald-400 disabled:bg-slate-700 disabled:text-slate-500"
      : "bg-emerald-600 text-white hover:bg-emerald-700 disabled:bg-slate-300 disabled:text-slate-500",
  };

  // Get seat details for each passenger
  const assignedSeats = passengers
    .map((passenger) => {
      const seatId = seatAssignments[passenger.id];

      const seat = seats.find(
        (item) => item.id === seatId
      );

      return {
        passenger,
        seat,
      };
    })
    .filter((item) => item.seat);

  // Calculate total seat price
  const totalPrice = assignedSeats.reduce(
    (total, item) => total + item.seat.price,
    0
  );

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN")}`;

  return (
    <section
      className={`rounded-lg border p-5 shadow-sm transition-colors duration-300 ${theme.card}`}
    >

      {/* Heading */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className={`text-base font-bold ${theme.heading}`}>
            Price Summary
          </h2>

          <p className={`mt-1 text-xs ${theme.muted}`}>
            Your seat selection details
          </p>
        </div>

        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${theme.iconBg}`}>
          <IndianRupee size={20} />
        </div>
      </div>

      {/* Passenger Count */}
      <div className={`mb-4 flex items-center justify-between rounded-lg p-3 ${theme.passengerBg}`}>
        <div className={`flex items-center gap-2 ${theme.text}`}>
          <Users size={17} />

          <span className="text-xs font-medium">
            Selected Seats
          </span>
        </div>

        <span className={`text-sm font-bold ${theme.heading}`}>
          {assignedSeats.length}/{passengers.length}
        </span>
      </div>

      {/* Assigned Seats */}
      <div className="space-y-3">

        {assignedSeats.map(({ passenger, seat }) => (
          <div
            key={passenger.id}
            className={`flex items-center justify-between gap-3 border-b border-dashed pb-3 ${theme.border}`}
          >
            <div className="min-w-0">
              <p className={`truncate text-sm font-semibold ${theme.heading}`}>
                {passenger.name}
              </p>

              <p className={`mt-1 flex items-center gap-1 text-xs ${theme.muted}`}>
                <Armchair size={13} />
                Seat {seat.id} · {seat.category}
              </p>
            </div>

            <span className={`shrink-0 text-sm font-semibold ${theme.text}`}>
              {formatPrice(seat.price)}
            </span>
          </div>
        ))}

        {/* Empty State */}
        {assignedSeats.length === 0 && (
          <div className={`rounded-lg px-3 py-6 text-center ${theme.emptyBg}`}>
            <Armchair
              size={25}
              className={`mx-auto mb-2 ${theme.emptyIcon}`}
            />

            <p className={`text-sm font-medium ${theme.text}`}>
              No seats selected
            </p>

            <p className={`mt-1 text-xs ${theme.muted}`}>
              Select seats to see your price
            </p>
          </div>
        )}

      </div>

      {/* Total */}
      <div className={`mt-5 pt-4 ${theme.border}`}>
        <div className="flex items-center justify-between">
          <span className={`text-sm font-medium ${theme.text}`}>
            Total Seat Charges
          </span>

          <span className={`text-xl font-bold ${theme.total}`}>
            {formatPrice(totalPrice)}
          </span>
        </div>

        <p className={`mt-1 text-[11px] ${theme.muted}`}>
          Based on your selected seats
        </p>
      </div>

      {/* Continue Button */}
      <button
        type="button"
        onClick={onContinue}
        disabled={
          assignedSeats.length !== passengers.length ||
          passengers.length === 0
        }
        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold shadow-sm transition ${theme.button} disabled:cursor-not-allowed`}
      >
        {buttonText}
        <ArrowRight size={17} />
      </button>

    </section>
  );
};

export default PriceSummary;

