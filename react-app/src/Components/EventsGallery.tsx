import { useState } from "react";
import Navbar from "./navbar/Navbar";
import { Link } from "react-router-dom";
const categories = [
  {
    name: "Debate",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Phone & keys holder",
    day: "Day 0",
  },
  {
    name: "Student Quiz",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Stylish desk setup",
    day: "Day 0",
  },
  {
    name: "Cooking without Fire",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Task management tool",
    day: "Day 0",
  },
  {
    name: "Creative Writing",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Outdoor adventure",
    day: "Day 0",
  },
  {
    name: "JAM",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Outdoor adventure",
    day: "Day 0",
  },
  {
    name: "Ramaiah's Staff Got Talent",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Outdoor adventure",
    day: "Day 0",
  },
  {
    name: "Movie Screening",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Outdoor adventure",
    day: "Day 0",
  },
  {
    name: "Flash Mob",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Team building game",
    day: "Day 1",
  },
  {
    name: "Cosplay",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Photography workshop",
    day: "Day 1",
  },
  {
    name: "Banner Drop",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Photography workshop",
    day: "Day 1",
  },
  {
    name: "Hook Steps Contest",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Photography workshop",
    day: "Day 1",
  },
  {
    name: "Dance off",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Photography workshop",
    day: "Day 1",
  },
  {
    name: "Treasure Hunt",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Photography workshop",
    day: "Day 1",
  },
  {
    name: "Criminal Inquest",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Photography workshop",
    day: "Day 1",
  },
  {
    name: "Most Auctions",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Photography workshop",
    day: "Day 1",
  },
  {
    name: "Know our land",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Photography workshop",
    day: "Day 1",
  },
  {
    name: "Acting Arena",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Photography workshop",
    day: "Day 1",
  },
  {
    name: "Heavenly Voices",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Photography workshop",
    day: "Day 1",
  },
  {
    name: "Gaming",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Photography workshop",
    day: "Day 1",
  },
  {
    name: "Doodling",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Photography workshop",
    day: "Day 1",
  },
  {
    name: "Staff Antyakshari",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Photography workshop",
    day: "Day 1",
  },
  {
    name: "Kabaddi",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Coding marathon",
    day: "Day 2",
  },
  {
    name: "Minute to win it",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Business seminar",
    day: "Day 2",
  },
  {
    name: "Staff Quiz",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Hackathon challenge",
    day: "Day 2",
  },
  {
    name: "Bon Voyage",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Hackathon challenge",
    day: "Day 2",
  },
  {
    name: "Student Antyakshari",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Hackathon challenge",
    day: "Day 2",
  },
  {
    name: "Paint on Anything",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Hackathon challenge",
    day: "Day 2",
  },
  {
    name: "Origami",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Hackathon challenge",
    day: "Day 2",
  },
  {
    name: "Rangoli",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Hackathon challenge",
    day: "Day 2",
  },
  {
    name: "Indian Dance",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Hackathon challenge",
    day: "Day 2",
  },
  {
    name: "Cine Prapancha",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Hackathon challenge",
    day: "Day 2",
  },
  {
    name: "HKnK",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Hackathon challenge",
    day: "Day 2",
  },
  {
    name: "Gaming",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Hackathon challenge",
    day: "Day 2",
  },
  {
    name: "Event 10",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Yoga session",
    day: "day4",
  },
  {
    name: "Event 11",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Music concert",
    day: "day4",
  },
  {
    name: "Event 12",
    href: "#",
    imageSrc: "https://picsum.photos/200",
    description: "Art exhibition",
    day: "day4",
  },
];

const tabs = [
  { name: "Day 0", href: "#", day: "Day 0" },
  { name: "Day 1", href: "#", day: "Day 1" },
  { name: "Day 2", href: "#", day: "Day 2" },
  // { name: 'Day4', href: '#', day: 'day4' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function EventsGallery() {
  const [selectedDay, setSelectedDay] = useState("");

  const filteredCategories = selectedDay
    ? categories.filter((category) => category.day === selectedDay)
    : categories;

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Events of KR
          </h2>

          {/* Mobile Tabs Dropdown */}
          <div>
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              <select
                id="tabs"
                name="tabs"
                className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                <option value="">All Events</option>
                {tabs.map((tab) => (
                  <option key={tab.name} value={tab.day}>
                    {tab.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden sm:block">
              <nav className="flex space-x-4" aria-label="Tabs">
                <button
                  onClick={() => setSelectedDay("")}
                  className={classNames(
                    selectedDay === ""
                      ? "bg-gray-100 text-gray-700"
                      : "text-gray-500 hover:text-gray-700",
                    "px-3 py-2 font-medium text-sm rounded-md"
                  )}
                  aria-current={selectedDay === "" ? "page" : undefined}
                >
                  All Events
                </button>
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setSelectedDay(tab.day)}
                    className={classNames(
                      selectedDay === tab.day
                        ? "bg-gray-100 text-gray-700"
                        : "text-gray-500 hover:text-gray-700",
                      "px-3 py-2 font-medium text-sm rounded-md"
                    )}
                    aria-current={selectedDay === tab.day ? "page" : undefined}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-x-8">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="group block text-center"
                >
                  <div
                    aria-hidden="true"
                    className="mt-2 rounded-lg overflow-hidden group-hover:opacity-75"
                  >
                    <Link to="/eventPage">
                      <img
                        src={category.imageSrc}
                        alt="google.com"
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-gray-900">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    {category.description}
                  </p>
                </a>
              ))
            ) : (
              <p className="text-gray-500">No events for this day.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
