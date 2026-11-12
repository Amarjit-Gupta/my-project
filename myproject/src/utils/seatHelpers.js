
// Check whether a seat can be assigned
export const canAssignSeat = (
  seatAssignments,
  passengerId,
  seat,
  seats
) => {
  if (!seat || seat.status === "occupied") {
    return false;
  }

  const isAssignedToAnotherPassenger = Object.entries(
    seatAssignments
  ).some(
    ([assignedPassengerId, assignedSeatId]) =>
      assignedSeatId === seat.id &&
      assignedPassengerId !== passengerId
  );

  return !isAssignedToAnotherPassenger;
};

// Assign seat to passenger
export const assignSeatToPassenger = (
  seatAssignments,
  passengerId,
  seat,
  seats
) => {
  const isValid = canAssignSeat(
    seatAssignments,
    passengerId,
    seat,
    seats
  );

  if (!isValid) {
    return seatAssignments;
  }

  return {
    ...seatAssignments,
    [passengerId]: seat.id,
  };
};

// Remove passenger's assigned seat
export const removePassengerSeat = (
  seatAssignments,
  passengerId
) => {
  const updatedAssignments = { ...seatAssignments };

  delete updatedAssignments[passengerId];

  return updatedAssignments;
};

// Get passenger's assigned seat
export const getPassengerSeat = (
  passengerId,
  seatAssignments,
  seats
) => {
  const seatId = seatAssignments[passengerId];

  return seats.find((seat) => seat.id === seatId) || null;
};

// Check whether a seat is assigned to any passenger
export const isSeatAssigned = (
  seatId,
  seatAssignments
) => {
  return Object.values(seatAssignments).includes(seatId);
};
