
// import { UserRound, Armchair, CheckCircle2 } from "lucide-react";

// const PassengerList = ({
//   passengers = [],
//   selectedPassengerId,
//   seatAssignments = {},
//   onSelectPassenger,
// }) => {

//   return (
//     <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

//       {/* Heading */}
//       <div className="mb-4">
//         <h3 className="text-sm font-bold text-slate-900">
//           Passenger List
//         </h3>
//         <p className="mt-1 text-xs text-slate-500">
//           Select a passenger to assign a seat
//         </p>
//       </div>

//       {/* Passenger Items */}
//       <div className="space-y-3">

//         {passengers.map((passenger, index) => {
//           const isActive =
//             selectedPassengerId === passenger.id;

//           const assignedSeat =
//             seatAssignments[passenger.id];

//           return (
//             <button
//               key={passenger.id}
//               type="button"
//               onClick={() => onSelectPassenger(passenger.id)}
//               aria-pressed={isActive}
//               className={`flex w-full items-center justify-between rounded-xl border p-3 text-left transition-all duration-200
//                 ${
//                   isActive
//                     ? "border-blue-300 bg-blue-50 ring-1 ring-blue-100"
//                     : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
//                 }`}
//             >

//               <div className="flex min-w-0 items-center gap-3">

//                 {/* Active Indicator */}
//                 <div
//                   className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full
//                     ${
//                       isActive
//                         ? "bg-blue-600 text-white"
//                         : "bg-slate-100 text-slate-500"
//                     }`}
//                 >
//                   <UserRound size={17} />
//                 </div>

//                 {/* Passenger Details */}
//                 <div className="min-w-0">
//                   <p className="truncate text-sm font-semibold text-slate-900">
//                     {passenger.name || `Passenger ${index + 1}`}
//                   </p>

//                   <div className="mt-1 flex items-center gap-1.5">
//                     <Armchair
//                       size={13}
//                       className="text-slate-400"
//                     />

//                     <span className="text-xs text-slate-500">
//                       {assignedSeat
//                         ? `Seat: ${assignedSeat}`
//                         : "Seat: Not Selected"}
//                     </span>
//                   </div>
//                 </div>

//               </div>

//               {/* Assignment Status */}
//               {assignedSeat ? (
//                 <CheckCircle2
//                   size={19}
//                   className="shrink-0 text-green-600"
//                 />
//               ) : (
//                 <span
//                   className={`h-4 w-4 shrink-0 rounded-full border-2
//                     ${
//                       isActive
//                         ? "border-blue-600 bg-blue-600 ring-2 ring-blue-100"
//                         : "border-slate-300"
//                     }`}
//                 />
//               )}

//             </button>
//           );
//         })}

//         {/* Empty State */}
//         {passengers.length === 0 && (
//           <div className="rounded-xl bg-slate-50 py-8 text-center">
//             <Users className="mx-auto mb-2 text-slate-400" size={24} />
//             <p className="text-sm font-medium text-slate-600">
//               No passengers found
//             </p>
//           </div>
//         )}

//       </div>

//     </section>
//   );
// };

// export default PassengerList;




import {
  UserRound,
  Armchair,
  CheckCircle2,
  Users,
} from "lucide-react";

const PassengerList = ({
  passengers = [],
  selectedPassengerId,
  seatAssignments = {},
  onSelectPassenger,
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

    muted: darkMode
      ? "text-slate-400"
      : "text-slate-400",

    activeCard: darkMode
      ? "border-emerald-500 bg-emerald-950/30 ring-1 ring-emerald-900"
      : "border-emerald-300 bg-emerald-50 ring-1 ring-emerald-100",

    inactiveCard: darkMode
      ? "border-slate-700 bg-slate-800/50 hover:border-emerald-500 hover:bg-slate-800"
      : "border-slate-200 bg-white hover:border-emerald-200 hover:bg-slate-50",

    activeIcon: darkMode
      ? "bg-emerald-500 text-white"
      : "bg-emerald-600 text-white",

    inactiveIcon: darkMode
      ? "bg-slate-700 text-slate-300"
      : "bg-slate-100 text-slate-500",

    emptyBg: darkMode
      ? "bg-slate-800/50"
      : "bg-slate-50",

    emptyIcon: darkMode
      ? "text-slate-500"
      : "text-slate-400",

    activeIndicator: darkMode
      ? "border-emerald-500 bg-emerald-500 ring-2 ring-emerald-900"
      : "border-emerald-600 bg-emerald-600 ring-2 ring-emerald-100",

    inactiveIndicator: darkMode
      ? "border-slate-600"
      : "border-slate-300",
  };

  return (
    <section
      className={`rounded-lg border p-5 shadow-sm transition-colors duration-300 ${theme.card}`}
    >

      {/* Heading */}
      <div className="mb-4">
        <h3 className={`text-sm font-bold ${theme.heading}`}>
          Passenger List
        </h3>

        <p className={`mt-1 text-xs ${theme.text}`}>
          Select a passenger to assign a seat
        </p>
      </div>

      {/* Passenger Items */}
      <div className="space-y-3">

        {passengers.map((passenger, index) => {
          const isActive =
            selectedPassengerId === passenger.id;

          const assignedSeat =
            seatAssignments[passenger.id];

          return (
            <button
              key={passenger.id}
              type="button"
              onClick={() => onSelectPassenger(passenger.id)}
              aria-pressed={isActive}
              className={`flex w-full items-center justify-between rounded-lg border p-3 text-left transition-all duration-200
                ${
                  isActive
                    ? theme.activeCard
                    : theme.inactiveCard
                }`}
            >

              <div className="flex min-w-0 items-center gap-3">

                {/* Active Indicator */}
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full
                    ${
                      isActive
                        ? theme.activeIcon
                        : theme.inactiveIcon
                    }`}
                >
                  <UserRound size={17} />
                </div>

                {/* Passenger Details */}
                <div className="min-w-0">
                  <p className={`truncate text-sm font-semibold ${theme.heading}`}>
                    {passenger.name || `Passenger ${index + 1}`}
                  </p>

                  <div className="mt-1 flex items-center gap-1.5">
                    <Armchair
                      size={13}
                      className={theme.muted}
                    />

                    <span className={`text-xs ${theme.text}`}>
                      {assignedSeat
                        ? `Seat: ${assignedSeat}`
                        : "Seat: Not Selected"}
                    </span>
                  </div>
                </div>

              </div>

              {/* Assignment Status */}
              {assignedSeat ? (
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-green-500"
                />
              ) : (
                <span
                  className={`h-4 w-4 shrink-0 rounded-full border-2
                    ${
                      isActive
                        ? theme.activeIndicator
                        : theme.inactiveIndicator
                    }`}
                />
              )}

            </button>
          );
        })}

        {/* Empty State */}
        {passengers.length === 0 && (
          <div className={`rounded-lg py-8 text-center ${theme.emptyBg}`}>
            <Users
              className={`mx-auto mb-2 ${theme.emptyIcon}`}
              size={24}
            />

            <p className={`text-sm font-medium ${theme.text}`}>
              No passengers found
            </p>
          </div>
        )}

      </div>

    </section>
  );
};

export default PassengerList;
