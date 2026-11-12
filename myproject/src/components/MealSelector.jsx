
import { UtensilsCrossed, Check } from "lucide-react";

const mealOptions = [
  {
    id: "veg",
    name: "Vegetarian Meal",
    description: "Fresh and healthy vegetarian food",
    price: 0,
    tag: "Free",
  },
  {
    id: "standard",
    name: "Standard Meal",
    description: "A delicious standard meal",
    price: 150,
    tag: "₹150",
  },
  {
    id: "premium",
    name: "Premium Meal",
    description: "Premium meal with extra choices",
    price: 250,
    tag: "₹250",
  },
];

const MealSelector = ({
  passengers = [],
  selectedMeals = {},
  onMealChange,
}) => {

  const formatPrice = (price) =>
    price === 0
      ? "Free"
      : `₹${price.toLocaleString("en-IN")}`;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      {/* Heading */}
      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
          <UtensilsCrossed size={21} />
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Meal Selection
          </h2>

          <p className="text-xs text-slate-500">
            Choose meals for your passengers
          </p>
        </div>

      </div>

      {/* Passenger Meal Selection */}
      <div className="space-y-6">

        {passengers.map((passenger, index) => {

          const selectedMealId =
            selectedMeals[passenger.id] || "";

          return (
            <div key={passenger.id}>

              {/* Passenger Name */}
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-800">
                  {passenger.name || `Passenger ${index + 1}`}
                </h3>

                <span className="text-[11px] font-medium text-slate-400">
                  Passenger {index + 1}
                </span>
              </div>

              {/* Meal Options */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                {mealOptions.map((meal) => {

                  const isSelected =
                    selectedMealId === meal.id;

                  return (
                    <button
                      key={meal.id}
                      type="button"
                      onClick={() =>
                        onMealChange(passenger.id, meal.id)
                      }
                      aria-pressed={isSelected}
                      className={`relative rounded-xl border p-3 text-left transition-all duration-200
                        ${
                          isSelected
                            ? "border-blue-500 bg-blue-50 ring-1 ring-blue-200"
                            : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                        }`}
                    >

                      {/* Selected Indicator */}
                      {isSelected && (
                        <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                          <Check size={12} />
                        </span>
                      )}

                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                        <UtensilsCrossed size={18} />
                      </div>

                      <p className="pr-5 text-sm font-semibold text-slate-800">
                        {meal.name}
                      </p>

                      <p className="mt-1 min-h-8 text-[11px] leading-4 text-slate-500">
                        {meal.description}
                      </p>

                      <p
                        className={`mt-3 text-sm font-bold ${
                          isSelected
                            ? "text-blue-700"
                            : "text-slate-800"
                        }`}
                      >
                        {formatPrice(meal.price)}
                      </p>

                    </button>
                  );
                })}

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default MealSelector;
