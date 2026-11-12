import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BookingProvider } from "./context/BookingContext";

import SeatSelectionPage from "./pages/SeatSelectionPage";
import BookingSummaryPage from "./pages/BookingSummaryPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";

function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SeatSelectionPage />} />
          <Route path="/summary" element={<BookingSummaryPage />} />
          <Route path="/confirmation" element={<BookingConfirmationPage />} />
        </Routes>
      </BrowserRouter>
    </BookingProvider>
  );
}

export default App;