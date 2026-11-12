
import { Armchair } from "lucide-react";

const Seat = ({
  seat,
  isSelected = false,
  isOccupied = false,
  onClick,
}) => {

  const getSeatStyle = () => {
    if (isSelected) {
      return "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200";
    }

    if (isOccupied) {
      return "cursor-not-allowed border-slate-400 bg-slate-500 text-white opacity-80";
    }

    if (seat.price === 0) {
      return "border-green-500 bg-green-50 text-green-700 hover:bg-green-100";
    }

    if (seat.category === "Premium") {
      return "border-purple-500 bg-purple-50 text-purple-700 hover:bg-purple-100";
    }

    if (seat.category === "Extra Legroom") {
      return "border-orange-500 bg-orange-50 text-orange-700 hover:bg-orange-100";
    }

    return "border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100";
  };

  return (
    <button
      type="button"
      disabled={isOccupied}
      onClick={() => onClick?.(seat)}
      title={`${seat.id} - ${seat.category} - ₹${seat.price}`}
      aria-label={`Seat ${seat.id}, ${seat.category}, ₹${seat.price}`}
      aria-pressed={isSelected}
      className={`group flex h-10 w-full min-w-0 items-center justify-center gap-1 rounded-lg border text-[10px] font-bold transition-all duration-200 hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed sm:text-xs ${getSeatStyle()}`}
    >
      <Armchair size={13} className="shrink-0" />
      <span>{seat.id}</span>
    </button>
  );
};

export default Seat;
