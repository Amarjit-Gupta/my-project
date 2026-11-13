
// import { Plane, Clock, CalendarDays } from "lucide-react";

// const FlightInfo = ({ flight = {} }) => {
//   const {
//     from = "BOM",
//     fromCity = "Mumbai",
//     to = "DEL",
//     toCity = "New Delhi",
//     duration = "2h 10m",
//     date = "24 Apr 2025",
//   } = flight;

//   return (
//     <section className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_220px]">

//       {/* Flight Route */}
//       <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:px-8">

//         {/* Departure */}
//         <div className="min-w-0">
//           <p className="text-2xl font-bold tracking-tight text-slate-900">
//             {from}
//           </p>
//           <p className="text-sm text-slate-500">{fromCity}</p>
//         </div>

//         {/* Flight Path */}
//         <div className="flex flex-1 flex-col items-center gap-2 px-2">
//           <div className="flex w-full items-center gap-2">
//             <div className="h-px flex-1 bg-slate-300" />
//             <Plane className="shrink-0 rotate-90 text-blue-600" size={22} />
//             <div className="h-px flex-1 bg-slate-300" />
//           </div>

//           <span className="whitespace-nowrap text-xs font-medium text-slate-500">
//             Non-stop · {duration}
//           </span>
//         </div>

//         {/* Arrival */}
//         <div className="min-w-0 text-right">
//           <p className="text-2xl font-bold tracking-tight text-slate-900">
//             {to}
//           </p>
//           <p className="text-sm text-slate-500">{toCity}</p>
//         </div>
//       </div>

//       {/* Travel Date */}
//       <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
//         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//           <CalendarDays size={22} />
//         </div>

//         <div>
//           <p className="text-xs font-medium text-slate-500">
//             Travel Date
//           </p>
//           <p className="mt-1 text-sm font-semibold text-slate-900">
//             {date}
//           </p>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default FlightInfo;



import { Plane, CalendarDays } from "lucide-react";

const FlightInfo = ({
  flight = {},
  darkMode = false,
}) => {

  const {
    from = "BOM",
    fromCity = "Mumbai",
    to = "DEL",
    toCity = "New Delhi",
    duration = "2h 10m",
    date = "24 Apr 2025",
  } = flight;

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

    divider: darkMode
      ? "bg-slate-600"
      : "bg-slate-300",

    plane: darkMode
      ? "text-emerald-400"
      : "text-emerald-600",
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_320px]">

      {/* Flight Route */}
      <div
        className={`flex items-center justify-between gap-3 rounded-lg border p-5 shadow-sm transition-colors duration-300 sm:px-8 ${theme.card}`}
      >

        {/* Departure */}
        <div className="min-w-0">
          <p className={`text-2xl font-bold tracking-tight ${theme.heading}`}>
            {from}
          </p>

          <p className={`text-sm ${theme.text}`}>
            {fromCity}
          </p>
        </div>

        {/* Flight Path */}
        <div className="flex flex-1 flex-col items-center gap-2 px-2">

          <div className="flex w-full items-center gap-2">
            <div className={`h-px flex-1 ${theme.divider}`} />

            <Plane
              className={`shrink-0 rotate-90 ${theme.plane}`}
              size={22}
            />

            <div className={`h-px flex-1 ${theme.divider}`} />
          </div>

          <span className={`whitespace-nowrap text-xs font-medium ${theme.text}`}>
            Non-stop · {duration}
          </span>

        </div>

        {/* Arrival */}
        <div className="min-w-0 text-right">
          <p className={`text-2xl font-bold tracking-tight ${theme.heading}`}>
            {to}
          </p>

          <p className={`text-sm ${theme.text}`}>
            {toCity}
          </p>
        </div>

      </div>

      {/* Travel Date */}
      <div
        className={`flex items-center gap-3 rounded-lg border p-5 shadow-sm transition-colors duration-300 ${theme.card}`}
      >

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${theme.iconBg}`}
        >
          <CalendarDays size={22} />
        </div>

        <div>
          <p className={`text-xs font-medium ${theme.text}`}>
            Travel Date
          </p>

          <p className={`mt-1 text-sm font-semibold ${theme.heading}`}>
            {new Date().toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }).toLowerCase() || date}
          </p>
        </div>

      </div>

    </div>
  );
};

export default FlightInfo;
