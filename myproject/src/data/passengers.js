
export const getPassengers = (count = 1) => {
  return Array.from({ length: count }, (_, index) => ({
    id: `p${index + 1}`,
    name: `Passenger ${index + 1}`,
    identifier: `P${String(index + 1).padStart(2, "0")}`,
  }));
};

export default getPassengers;
