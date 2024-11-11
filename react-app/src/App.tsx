import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import the components/pages
import HomePage from "./components/HomePage";
import Coordinators from "./components/Coordinators";
import EventPage from "./components/EventPage";
import EventsGallery from "./components/EventsGallery";
import Tshirt from "./components/Tshirt";
import Test from "./components/Test";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coordinators" element={<Coordinators />} />
        {/* Dynamic route for each event */}
        <Route path="/eventPage/:eventId" element={<EventPage />} />
        <Route path="/eventGallery" element={<EventsGallery />} />
        <Route path="/tShirtPage" element={<Tshirt />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
