
// import { Check } from "lucide-react";

// const steps = [
//   { id: 1, title: "Passenger Selection" },
//   { id: 2, title: "Seat Selection" },
//   { id: 3, title: "Summary" },
// ];

// const ProgressStepper = ({ activeStep = 1 }) => {
//   return (
//     <div className="w-full bg-white px-4 py-6 sm:px-6">
//       <div className="mx-auto max-w-3xl">

//         <div className="flex items-center">

//           {steps.map((step, index) => {
//             const isCompleted = step.id < activeStep;
//             const isActive = step.id === activeStep;

//             return (
//               <div
//                 key={step.id}
//                 className="flex flex-1 items-center last:flex-none"
//               >
//                 {/* Step */}
//                 <div className="flex flex-col items-center gap-2">

//                   <div
//                     className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300
//                       ${
//                         isCompleted
//                           ? "border-blue-600 bg-blue-600 text-white"
//                           : isActive
//                           ? "border-blue-600 bg-blue-50 text-blue-600"
//                           : "border-slate-300 bg-white text-slate-400"
//                       }`}
//                   >
//                     {isCompleted ? (
//                       <Check size={18} strokeWidth={2.5} />
//                     ) : (
//                       <span className="text-sm font-semibold">
//                         {step.id}
//                       </span>
//                     )}
//                   </div>

//                   <span
//                     className={`whitespace-nowrap text-center text-[10px] font-semibold sm:text-xs
//                       ${
//                         isActive || isCompleted
//                           ? "text-blue-700"
//                           : "text-slate-400"
//                       }`}
//                   >
//                     {step.title}
//                   </span>

//                 </div>

//                 {/* Connector */}
//                 {index !== steps.length - 1 && (
//                   <div className="mx-2 mb-6 h-[2px] flex-1 bg-slate-200 sm:mx-4">
//                     <div
//                       className={`h-full transition-all duration-300 ${
//                         isCompleted ? "w-full bg-blue-600" : "w-0"
//                       }`}
//                     />
//                   </div>
//                 )}

//               </div>
//             );
//           })}

//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProgressStepper;



// import { Check } from "lucide-react";

// const steps = [
//   { id: 1, title: "Passenger Selection" },
//   { id: 2, title: "Seat Selection" },
//   { id: 3, title: "Summary" },
// ];

// const ProgressStepper = ({
//   activeStep = 1,
//   darkMode = false,
// }) => {

//   // Theme Styles
//   const theme = {
//     background: darkMode
//       ? "bg-slate-900"
//       : "bg-white",

//     activeStep: darkMode
//       ? "border-emerald-500 bg-emerald-950/60 text-emerald-400"
//       : "border-emerald-600 bg-emerald-50 text-emerald-600",

//     inactiveStep: darkMode
//       ? "border-slate-600 bg-slate-800 text-slate-400"
//       : "border-slate-300 bg-white text-slate-400",

//     activeText: darkMode
//       ? "text-emerald-400"
//       : "text-emerald-700",

//     inactiveText: darkMode
//       ? "text-slate-500"
//       : "text-slate-400",

//     connector: darkMode
//       ? "bg-slate-700"
//       : "bg-slate-200",
//   };

//   return (
//     <div
//       className={`w-full px-4 py-6 transition-colors duration-300 sm:px-6 ${theme.background}`}
//     >
//       <div className="mx-auto max-w-3xl">

//         <div className="flex items-center">

//           {steps.map((step, index) => {

//             const isCompleted = step.id < activeStep;
//             const isActive = step.id === activeStep;

//             // Last step par sabhi steps completed dikhenge
//             const isLastStep = activeStep === steps.length;

//             const isFilled = isCompleted || isLastStep;

//             return (
//               <div
//                 key={step.id}
//                 className="flex flex-1 items-center last:flex-none"
//               >

//                 {/* Step */}
//                 <div className="flex flex-col items-center gap-2">

//                   <div
//                     className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300
//                       ${
//                         isFilled
//                           ? "border-emerald-600 bg-emerald-600 text-white"
//                           : isActive
//                           ? theme.activeStep
//                           : theme.inactiveStep
//                       }`}
//                   >
//                     {isFilled ? (
//                       <Check size={18} strokeWidth={2.5} />
//                     ) : (
//                       <span className="text-sm font-semibold">
//                         {step.id}
//                       </span>
//                     )}
//                   </div>

//                   <span
//                     className={`whitespace-nowrap text-center text-[10px] font-semibold transition-colors duration-300 sm:text-xs
//                       ${
//                         isFilled || isActive
//                           ? theme.activeText
//                           : theme.inactiveText
//                       }`}
//                   >
//                     {step.title}
//                   </span>

//                 </div>

//                 {/* Connector */}
//                 {index !== steps.length - 1 && (
//                   <div
//                     className={`mx-2 mb-6 h-[2px] flex-1 sm:mx-4 ${theme.connector}`}
//                   >
//                     <div
//                       className={`h-full transition-all duration-300 ${
//                         isFilled || step.id < activeStep
//                           ? "w-full bg-emerald-600"
//                           : "w-0"
//                       }`}
//                     />
//                   </div>
//                 )}

//               </div>
//             );
//           })}

//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProgressStepper;




// import { Check } from "lucide-react";

// const steps = [
//   { id: 1, title: "Passenger Selection" },
//   { id: 2, title: "Seat Selection" },
//   { id: 3, title: "Summary" },
// ];

// const ProgressStepper = ({
//   activeStep = 1,
//   darkMode = false,
// }) => {
//   const theme = {
//     background: darkMode ? "bg-slate-900" : "bg-white",

//     activeStep: darkMode
//       ? "border-emerald-500 bg-emerald-950/60 text-emerald-400"
//       : "border-emerald-600 bg-emerald-50 text-emerald-600",

//     inactiveStep: darkMode
//       ? "border-slate-600 bg-slate-800 text-slate-400"
//       : "border-slate-300 bg-white text-slate-400",

//     activeText: darkMode
//       ? "text-emerald-400"
//       : "text-emerald-700",

//     inactiveText: darkMode
//       ? "text-slate-500"
//       : "text-slate-400",

//     connector: darkMode
//       ? "bg-slate-700"
//       : "bg-slate-200",
//   };

//   return (
//     <div
//       className={`w-full px-4 py-6 transition-colors duration-300 sm:px-6 ${theme.background}`}
//     >
//       <div className="mx-auto max-w-3xl">
//         <div className="flex items-center">

//           {steps.map((step, index) => {
//             // Previous steps completed
//             const isCompleted = step.id < activeStep;

//             // Current active step
//             const isActive = step.id === activeStep;

//             return (
//               <div
//                 key={step.id}
//                 className="flex flex-1 items-center last:flex-none"
//               >
//                 {/* Step */}
//                 <div className="flex flex-col items-center gap-2">
//                   <div
//                     className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
//                       isCompleted
//                         ? "border-emerald-600 bg-emerald-600 text-white"
//                         : isActive
//                         ? theme.activeStep
//                         : theme.inactiveStep
//                     }`}
//                   >
//                     {isCompleted ? (
//                       <Check size={18} strokeWidth={2.5} />
//                     ) : (
//                       <span className="text-sm font-semibold">
//                         {step.id}
//                       </span>
//                     )}
//                   </div>

//                   <span
//                     className={`whitespace-nowrap text-center text-[10px] font-semibold transition-colors duration-300 sm:text-xs ${
//                       isCompleted || isActive
//                         ? theme.activeText
//                         : theme.inactiveText
//                     }`}
//                   >
//                     {step.title}
//                   </span>
//                 </div>

//                 {/* Connector */}
//                 {index !== steps.length - 1 && (
//                   <div
//                     className={`mx-2 mb-6 h-[2px] flex-1 overflow-hidden sm:mx-4 ${theme.connector}`}
//                   >
//                     <div
//                       className={`h-full transition-all duration-300 ${
//                         isCompleted
//                           ? "w-full bg-emerald-600"
//                           : "w-0"
//                       }`}
//                     />
//                   </div>
//                 )}
//               </div>
//             );
//           })}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProgressStepper;



import { Check } from "lucide-react";

const steps = [
  { id: 1, title: "Passenger Selection" },
  { id: 2, title: "Seat Selection" },
  { id: 3, title: "Summary" },
];

const ProgressStepper = ({
  activeStep = 1,
  darkMode = false,
  completed = false,
}) => {
  const theme = {
    background: darkMode ? "bg-slate-900" : "bg-white",

    activeStep: darkMode
      ? "border-emerald-500 bg-emerald-950/60 text-emerald-400"
      : "border-emerald-600 bg-emerald-50 text-emerald-600",

    completedStep: "border-emerald-600 bg-emerald-600 text-white",

    inactiveStep: darkMode
      ? "border-slate-600 bg-slate-800 text-slate-400"
      : "border-slate-300 bg-white text-slate-400",

    activeText: darkMode
      ? "text-emerald-400"
      : "text-emerald-700",

    inactiveText: darkMode
      ? "text-slate-500"
      : "text-slate-400",

    connector: darkMode
      ? "bg-slate-700"
      : "bg-slate-200",
  };

  return (
    <div
      className={`w-full px-4 py-6 transition-colors duration-300 sm:px-6 ${theme.background}`}
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center">
          {steps.map((step, index) => {
            const isCompleted = completed || step.id < activeStep;
            const isActive = !completed && step.id === activeStep;

            return (
              <div
                key={step.id}
                className="flex flex-1 items-center last:flex-none"
              >
                {/* Step Circle and Title */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isCompleted
                        ? theme.completedStep
                        : isActive
                        ? theme.activeStep
                        : theme.inactiveStep
                    }`}
                  >
                    {isCompleted ? (
                      <Check size={18} strokeWidth={2.5} />
                    ) : (
                      <span className="text-sm font-semibold">
                        {step.id}
                      </span>
                    )}
                  </div>

                  <span
                    className={`whitespace-nowrap text-center text-[10px] font-semibold transition-colors duration-300 sm:text-xs ${
                      isCompleted || isActive
                        ? theme.activeText
                        : theme.inactiveText
                    }`}
                  >
                    {step.title}
                  </span>
                </div>

                {/* Connector */}
                {index !== steps.length - 1 && (
                  <div
                    className={`mx-2 mb-6 h-[2px] flex-1 overflow-hidden sm:mx-4 ${theme.connector}`}
                  >
                    <div
                      className={`h-full transition-all duration-300 ${
                        isCompleted
                          ? "w-full bg-emerald-600"
                          : "w-0"
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressStepper;
