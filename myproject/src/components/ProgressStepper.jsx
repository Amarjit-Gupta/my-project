
import { Check } from "lucide-react";

const steps = [
  { id: 1, title: "Passenger Selection" },
  { id: 2, title: "Seat Selection" },
  { id: 3, title: "Summary" },
];

const ProgressStepper = ({ activeStep = 1 }) => {
  return (
    <div className="w-full bg-white px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-3xl">

        <div className="flex items-center">

          {steps.map((step, index) => {
            const isCompleted = step.id < activeStep;
            const isActive = step.id === activeStep;

            return (
              <div
                key={step.id}
                className="flex flex-1 items-center last:flex-none"
              >
                {/* Step */}
                <div className="flex flex-col items-center gap-2">

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300
                      ${
                        isCompleted
                          ? "border-blue-600 bg-blue-600 text-white"
                          : isActive
                          ? "border-blue-600 bg-blue-50 text-blue-600"
                          : "border-slate-300 bg-white text-slate-400"
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
                    className={`whitespace-nowrap text-center text-[10px] font-semibold sm:text-xs
                      ${
                        isActive || isCompleted
                          ? "text-blue-700"
                          : "text-slate-400"
                      }`}
                  >
                    {step.title}
                  </span>

                </div>

                {/* Connector */}
                {index !== steps.length - 1 && (
                  <div className="mx-2 mb-6 h-[2px] flex-1 bg-slate-200 sm:mx-4">
                    <div
                      className={`h-full transition-all duration-300 ${
                        isCompleted ? "w-full bg-blue-600" : "w-0"
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
