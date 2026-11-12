
import { Armchair } from "lucide-react";

const legendItems = [
  {
    label: "Available",
    description: "Seat available for selection",
    color: "bg-blue-50 border-blue-400",
  },
  {
    label: "Free",
    description: "No additional charges",
    color: "bg-green-50 border-green-500",
  },
  {
    label: "Occupied",
    description: "Already assigned",
    color: "bg-slate-500 border-slate-500",
  },
  {
    label: "Selected",
    description: "Your selected seat",
    color: "bg-blue-600 border-blue-600",
  },
  {
    label: "Premium",
    description: "Premium seat category",
    color: "bg-purple-50 border-purple-500",
  },
  {
    label: "Extra Legroom",
    description: "Additional legroom",
    color: "bg-orange-50 border-orange-500",
  },
];

const SeatLegend = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="mb-4 flex items-center gap-2">
        <Armchair size={19} className="text-blue-600" />

        <h3 className="text-sm font-bold text-slate-900">
          Seat Information
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

        {legendItems.map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-2.5"
          >
            <span
              className={`mt-0.5 h-4 w-4 shrink-0 rounded border ${item.color}`}
            />

            <div>
              <p className="text-xs font-semibold text-slate-800">
                {item.label}
              </p>

              <p className="mt-0.5 text-[10px] text-slate-500">
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
