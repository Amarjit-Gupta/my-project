import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BookingProvider } from "./context/BookingContext";

import SeatSelectionPage from "./pages/SeatSelectionPage";
import BookingSummaryPage from "./pages/BookingSummaryPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {

  const [darkMode,setDarkMode] = useState(false);

  return (
    <BookingProvider>
      <BrowserRouter>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Routes>
          <Route path="/" element={<SeatSelectionPage darkMode={darkMode} />} />
          <Route path="/summary" element={<BookingSummaryPage darkMode={darkMode} />} />
          <Route path="/confirmation" element={<BookingConfirmationPage darkMode={darkMode} />} />
        </Routes>
      </BrowserRouter>
    </BookingProvider>
  );
}

export default App;