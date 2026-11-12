
// Calculate total seat charges
export const calculateSeatTotal = (
  passengers,
  seats,
  seatAssignments
) => {
  return passengers.reduce((total, passenger) => {
    const seatId = seatAssignments[passenger.id];

    const seat = seats.find((item) => item.id === seatId);

    return total + (seat?.price || 0);
  }, 0);
};

// Calculate total meal charges
export const calculateMealTotal = (
  passengers,
  selectedMeals,
  meals
) => {
  return passengers.reduce((total, passenger) => {
    const mealId = selectedMeals[passenger.id];

    const meal = meals.find((item) => item.id === mealId);

    return total + (meal?.price || 0);
  }, 0);
};

// Calculate final booking amount
export const calculateGrandTotal = (seatTotal, mealTotal) => {
  return seatTotal + mealTotal;
};

// Format price in Indian currency
export const formatPrice = (amount) => {
  return `₹${amount.toLocaleString("en-IN")}`;
};
