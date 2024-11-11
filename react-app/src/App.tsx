// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// // Import the components/pages
// import HomePage from "./components/HomePage";
// import Coordinators from "./components/Coordinators";
// import EventPage from "./components/EventPage";
// import EventsGallery from "./components/EventsGallery";
// import Tshirt from "./components/Tshirt";
// import Test from "./components/Test";
// import Navbar from "./components/navbar/Navbar";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Test />} />
//         <Route path="/coordinators" element={<Coordinators />} />
//         <Route path="/eventPage" element={<EventPage />} />
//         <Route path="/eventGallery" element={<EventsGallery />} />
//         <Route path="/tShirtPage" element={<Tshirt />} />
//         <Route path="/test" element={<Test />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import components/pages
import HomePage from "./components/HomePage";
import Coordinators from "./components/Coordinators";
import EventPage from "./components/EventPage";
import EventsGallery from "./components/EventsGallery";
import EventDetailsPage from "./components/EventDetailsPage"; // New page for event details
import Tshirt from "./components/Tshirt";
import Test from "./components/Test";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coordinators" element={<Coordinators />} />
        <Route path="/eventGallery" element={<EventsGallery />} />
        <Route path="/tShirtPage" element={<Tshirt />} />
        <Route path="/test" element={<Test />} />
        {/* Nested route for individual events */}
        <Route path="/event/:eventId" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
