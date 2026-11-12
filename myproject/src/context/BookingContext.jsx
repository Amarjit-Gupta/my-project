
import { createContext, useMemo, useState } from "react";

import getSeats from "../data/seats";
import { getPassengers } from "../data/passengers";
import flight from "../data/flight";
import meals from "../data/meals";
import {
   
    
    canAssignSeat,
} from "../utils/seatHelpers";

import {
    assignSeatToPassenger,
    removePassengerSeat,
} from "../utils/seatHelpers";

import {
    calculateSeatTotal,
    calculateMealTotal,
} from "../utils/priceCalculator";

export const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
    const [passengerCount, setPassengerCount] = useState(2);

    const [selectedPassengerId, setSelectedPassengerId] =
        useState("p1");

    const [layoutType, setLayoutType] = useState("3-2");

    const [seatAssignments, setSeatAssignments] = useState({});

    const [selectedMeals, setSelectedMeals] = useState({});

    // Generate passengers dynamically
    const passengers = useMemo(
        () => getPassengers(passengerCount),
        [passengerCount]
    );

    // Generate seats according to layout
    const seats = useMemo(
        () => getSeats(layoutType),
        [layoutType]
    );

    // Calculate seat charges
    const seatTotal = useMemo(
        () => calculateSeatTotal(passengers, seats, seatAssignments),
        [passengers, seats, seatAssignments]
    );

    // Calculate meal charges
    const mealTotal = useMemo(
        () => calculateMealTotal(passengers, selectedMeals, meals),
        [passengers, selectedMeals]
    );

    const grandTotal = seatTotal + mealTotal;

    // Change passenger count
    const updatePassengerCount = (count) => {
        const newCount = Math.max(1, Math.min(9, count));

        setPassengerCount(newCount);

        setSeatAssignments((prev) =>
            Object.fromEntries(
                Object.entries(prev).filter(
                    ([id]) => Number(id.replace("p", "")) <= newCount
                )
            )
        );

        setSelectedMeals((prev) =>
            Object.fromEntries(
                Object.entries(prev).filter(
                    ([id]) => Number(id.replace("p", "")) <= newCount
                )
            )
        );

        if (Number(selectedPassengerId.replace("p", "")) > newCount) {
            setSelectedPassengerId(`p${newCount}`);
        }
    };

    // Select aircraft layout
    const updateLayout = (newLayout) => {
        if (newLayout === layoutType) return;

        setLayoutType(newLayout);
        setSeatAssignments({});
    };

    // Assign seat to active passenger
   const selectSeat = (seatId) => {
  const seat = seats.find((item) => item.id === seatId);

  if (
    !canAssignSeat(seatAssignments, selectedPassengerId, seat, seats)
  ) {
    return false;
  }

  setSeatAssignments((prev) =>
    assignSeatToPassenger(prev, selectedPassengerId, seat, seats)
  );

  return true;
};

    // Remove active passenger seat
    const removeSeat = () => {
        setSeatAssignments((prev) =>
            removePassengerSeat(prev, selectedPassengerId)
        );
    };

    // Select meal for a passenger
    const updateMeal = (passengerId, mealId) => {
        setSelectedMeals((prev) => ({
            ...prev,
            [passengerId]: mealId,
        }));
    };

    const value = {
        passengerCount,
        updatePassengerCount,

        passengers,

        selectedPassengerId,
        setSelectedPassengerId,

        layoutType,
        updateLayout,

        seats,

        seatAssignments,
        selectSeat,
        removeSeat,

        selectedMeals,
        updateMeal,

        meals,
        flight,

        seatTotal,
        mealTotal,
        grandTotal,
    };

    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    );
};
