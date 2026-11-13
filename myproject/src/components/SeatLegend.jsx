
// import { Armchair } from "lucide-react";

// const legendItems = [
//   {
//     label: "Available",
//     description: "Seat available for selection",
//     color: "bg-blue-50 border-blue-400",
//   },
//   {
//     label: "Free",
//     description: "No additional charges",
//     color: "bg-green-50 border-green-500",
//   },
//   {
//     label: "Occupied",
//     description: "Already assigned",
//     color: "bg-slate-500 border-slate-500",
//   },
//   {
//     label: "Selected",
//     description: "Your selected seat",
//     color: "bg-blue-600 border-blue-600",
//   },
//   {
//     label: "Premium",
//     description: "Premium seat category",
//     color: "bg-purple-50 border-purple-500",
//   },
//   {
//     label: "Extra Legroom",
//     description: "Additional legroom",
//     color: "bg-orange-50 border-orange-500",
//   },
// ];

// const SeatLegend = () => {
//   return (
//     <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

//       <div className="mb-4 flex items-center gap-2">
//         <Armchair size={19} className="text-blue-600" />

//         <h3 className="text-sm font-bold text-slate-900">
//           Seat Information
//         </h3>
//       </div>

//       <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

//         {legendItems.map((item) => (
//           <div
//             key={item.label}
//             className="flex items-start gap-2.5"
//           >
//             <span
//               className={`mt-0.5 h-4 w-4 shrink-0 rounded border ${item.color}`}
//             />

//             <div>
//               <p className="text-xs font-semibold text-slate-800">
//                 {item.label}
//               </p>

//               <p className="mt-0.5 text-[10px] text-slate-500">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}

//       </div>

//     </section>
//   );
// };

// export default SeatLegend;




import { Armchair } from "lucide-react";

const legendItems = [
  {
    label: "Available",
    description: "Seat available for selection",
    color: "bg-blue-50 border-blue-400",
    darkColor: "dark:bg-blue-950/50 dark:border-blue-500",
  },
  {
    label: "Free",
    description: "No additional charges",
    color: "bg-green-50 border-green-500",
    darkColor: "dark:bg-green-950/50 dark:border-green-500",
  },
  {
    label: "Occupied",
    description: "Already assigned",
    color: "bg-slate-500 border-slate-500",
    darkColor: "dark:bg-slate-600 dark:border-slate-600",
  },
  {
    label: "Selected",
    description: "Your selected seat",
    color: "bg-blue-600 border-blue-600",
    darkColor: "dark:bg-blue-500 dark:border-blue-500",
  },
  {
    label: "Premium",
    description: "Premium seat category",
    color: "bg-purple-50 border-purple-500",
    darkColor: "dark:bg-purple-950/50 dark:border-purple-500",
  },
  {
    label: "Extra Legroom",
    description: "Additional legroom",
    color: "bg-orange-50 border-orange-500",
    darkColor: "dark:bg-orange-950/50 dark:border-orange-500",
  },
];

const SeatLegend = ({ darkMode = false }) => {

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

    icon: darkMode
      ? "text-emerald-400"
      : "text-emerald-600",
  };

  return (
    <section
      className={`rounded-lg border p-5 shadow-sm transition-colors duration-300 ${theme.card}`}
    >

      {/* Heading */}
      <div className="mb-4 flex items-center gap-2">
        <Armchair size={19} className={theme.icon} />

        <h3 className={`text-sm font-bold ${theme.heading}`}>
          Seat Information
        </h3>
      </div>

      {/* Legend Items */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

        {legendItems.map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-2.5"
          >
            <span
              className={`mt-0.5 h-4 w-4 shrink-0 rounded border ${
                darkMode ? item.darkColor : item.color
              }`}
            />

            <div>
              <p className={`text-xs font-semibold ${theme.heading}`}>
                {item.label}
              </p>

              <p className={`mt-0.5 text-[10px] ${theme.text}`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default SeatLegend;
