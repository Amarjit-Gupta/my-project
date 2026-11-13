
// import { Minus, Plus, Users } from "lucide-react";

// const PassengerSelector = ({
//   passengerCount,
//   onPassengerCountChange,
//   min = 1,
//   max = 9,
// }) => {

//   const decrease = () => {
//     if (passengerCount > min) {
//       onPassengerCountChange(passengerCount - 1);
//     }
//   };

//   const increase = () => {
//     if (passengerCount < max) {
//       onPassengerCountChange(passengerCount + 1);
//     }
//   };

//   return (
//     <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

//       {/* Heading */}
//       <div className="mb-5 flex items-center gap-3">
//         <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//           <Users size={21} />
//         </div>

//         <div>
//           <h2 className="text-lg font-bold text-slate-900">
//             Passengers
//           </h2>
//           <p className="text-xs text-slate-500">
//             Select number of passengers
//           </p>
//         </div>
//       </div>

//       {/* Passenger Counter */}
//       <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-2">

//         <button
//           type="button"
//           onClick={decrease}
//           disabled={passengerCount <= min}
//           aria-label="Decrease passengers"
//           className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
//         >
//           <Minus size={18} />
//         </button>

//         <div className="text-center">
//           <p className="text-2xl font-bold text-slate-900">
//             {passengerCount}
//           </p>
//           <p className="text-xs text-slate-500">
//             {passengerCount === 1 ? "Passenger" : "Passengers"}
//           </p>
//         </div>

//         <button
//           type="button"
//           onClick={increase}
//           disabled={passengerCount >= max}
//           aria-label="Increase passengers"
//           className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
//         >
//           <Plus size={18} />
//         </button>

//       </div>

//       <p className="mt-3 text-xs text-slate-500">
//         You can select up to {max} passengers.
//       </p>

//     </section>
//   );
// };

// export default PassengerSelector;




import { Minus, Plus, Users } from "lucide-react";

const PassengerSelector = ({
  passengerCount,
  onPassengerCountChange,
  min = 1,
  max = 9,
  darkMode = false,
}) => {

  // Theme Styles
  const theme = {
    card: darkMode
      ? "border-slate-800 bg-slate-900"
      : "border-slate-200 bg-white",

    heading: darkMode
      ? "text-slate-100"
      : "text-slate-900",

    text: darkMode
      ? "text-slate-300"
      : "text-slate-500",

    iconBg: darkMode
      ? "bg-emerald-950/60 text-emerald-400"
      : "bg-emerald-50 text-emerald-600",

    counterBg: darkMode
      ? "border-slate-700 bg-slate-800/60"
      : "border-slate-200 bg-slate-50",

    decreaseButton: darkMode
      ? "border-slate-700 bg-slate-800 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 disabled:opacity-40"
      : "border-slate-200 bg-white text-slate-700 hover:border-emerald-500 hover:text-emerald-600 disabled:opacity-40",

    increaseButton: darkMode
      ? "bg-emerald-500 text-white hover:bg-emerald-400 disabled:bg-slate-700 disabled:text-slate-500"
      : "bg-emerald-600 text-white hover:bg-emerald-700 disabled:bg-slate-300 disabled:text-slate-500",
  };

  const decrease = () => {
    if (passengerCount > min) {
      onPassengerCountChange(passengerCount - 1);
    }
  };

  const increase = () => {
    if (passengerCount < max) {
      onPassengerCountChange(passengerCount + 1);
    }
  };

  return (
    <section
      className={`rounded-lg border p-5 shadow-sm transition-colors duration-300 ${theme.card}`}
    >

      {/* Heading */}
      <div className="mb-5 flex items-center gap-3">

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${theme.iconBg}`}
        >
          <Users size={21} />
        </div>

        <div>
          <h2 className={`text-lg font-bold ${theme.heading}`}>
            Passengers
          </h2>

          <p className={`text-xs ${theme.text}`}>
            Select number of passengers
          </p>
        </div>

      </div>

      {/* Passenger Counter */}
      <div
        className={`flex items-center justify-between rounded-lg border p-2 ${theme.counterBg}`}
      >

        {/* Decrease Button */}
        <button
          type="button"
          onClick={decrease}
          disabled={passengerCount <= min}
          aria-label="Decrease passengers"
          className={`flex h-10 w-10 items-center justify-center rounded-lg border transition ${theme.decreaseButton} disabled:cursor-not-allowed`}
        >
          <Minus size={18} />
        </button>

        {/* Passenger Count */}
        <div className="text-center">
          <p className={`text-2xl font-bold ${theme.heading}`}>
            {passengerCount}
          </p>

          <p className={`text-xs ${theme.text}`}>
            {passengerCount === 1 ? "Passenger" : "Passengers"}
          </p>
        </div>

        {/* Increase Button */}
        <button
          type="button"
          onClick={increase}
          disabled={passengerCount >= max}
          aria-label="Increase passengers"
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition ${theme.increaseButton} disabled:cursor-not-allowed`}
        >
          <Plus size={18} />
        </button>

      </div>

      {/* Helper Text */}
      <p className={`mt-3 text-xs ${theme.text}`}>
        You can select up to {max} passengers.
      </p>

    </section>
  );
};

export default PassengerSelector;

