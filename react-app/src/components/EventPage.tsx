import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";

// Sample event details
const events = [
  { id: 1, name: "Debate", description: "Event Description for Debate", rules: "Rules for Debate" },
  { id: 2, name: "Student Quiz", description: "Event Description for Student Quiz", rules: "Rules for Quiz" },
  { id: 3, name: "Cooking without Fire", description: "Event Description for Cooking", rules: "Rules for Cooking" },
  // Add all other events similarly...
];

export default function EventPage() {
  const { eventId } = useParams(); // Get eventId from URL params
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event details based on eventId (in this case, hardcoded data)
    const selectedEvent = events.find((event) => event.id === parseInt(eventId));
    setEvent(selectedEvent);
  }, [eventId]);

  if (!event) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-x-8">
            {/* Event details */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{event.name}</h1>
              <p className="mt-6 text-base text-gray-700">{event.description}</p>
            </div>

            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900">Rules</h2>
              <p className="mt-6 text-base text-gray-700">{event.rules}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
