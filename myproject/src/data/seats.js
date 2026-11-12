
const seatPrices = {
  standard: 0,
  premium: 250,
  extraLegroom: 350,
};

// Different aircraft configurations
export const seatLayouts = {
  "3-2": [
    ["A", "B", "C"],
    ["D", "E"],
  ],

  "2-3-2": [
    ["A", "B"],
    ["C", "D", "E"],
    ["F", "G"],
  ],
};

// Generate seats according to selected layout
export const getSeats = (layoutType = "3-2") => {
  const letters = seatLayouts[layoutType].flat();

  return Array.from({ length: 6 }, (_, rowIndex) => {
    const row = rowIndex + 1;

    return letters.map((letter, index) => {
      const id = `${row}${letter}`;

      let category = "Standard";
      let price = seatPrices.standard;

      // Sample premium seats
      if (id === "1E" || id === "2B") {
        category = "Premium";
        price = seatPrices.premium;
      }

      // Sample extra legroom seats
      if (id === "1C" || id === "2A") {
        category = "Extra Legroom";
        price = seatPrices.extraLegroom;
      }

      // Sample occupied seats
      const occupiedSeats = ["2C", "3D"];

      return {
        id,
        row,
        label: letter,
        category,
        price,
        status: occupiedSeats.includes(id)
          ? "occupied"
          : "available",
      };
    });
  }).flat();
};

export default getSeats;
