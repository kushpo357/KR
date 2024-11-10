import { useState } from 'react';

const categories = [
  {
    name: 'Event 1',
    href: '#',
    imageSrc: 'https://picsum.photos/200',
    description: 'Phone & keys holder',
    day: 'day1',
  },
  {
    name: 'Event 2',
    href: '#',
    imageSrc: 'https://picsum.photos/200',
    description: 'Stylish desk setup',
    day: 'day1',
  },
  {
    name: 'Event 3',
    href: '#',
    imageSrc: 'https://picsum.photos/200',
    description: 'Task management tool',
    day: 'day1',
  },
  {
    name: 'Event 4',
    href: '#',
    imageSrc: 'https://picsum.photos/200',
    description: 'Outdoor adventure',
    day: 'day2',
  },
  {
    name: 'Event 5',
    href: '#',
    imageSrc: 'https://picsum.photos/200',
    description: 'Team building game',
    day: 'day2',
  },
  {
    name: 'Event 6',
    href: '#',
    imageSrc: 'https://picsum.photos/200',
    description: 'Photography workshop',
    day: 'day2',
  },
  {
    name: 'Event 7',
    href: '#',
    imageSrc: 'https://picsum.photos/200',
    description: 'Coding marathon',
    day: 'day3',
  },
  {
    name: 'Event 8',
    href: '#',
    imageSrc: 'https://picsum.photos/200',
    description: 'Business seminar',
    day: 'day3',
  },
  {
    name: 'Event 9',
    href: '#',
    imageSrc: 'https://picsum.photos/200',
    description: 'Hackathon challenge',
    day: 'day3',
  },
  {
    name: 'Event 10',
    href: '#',
    imageSrc: 'https://picsum.photos/200',
    description: 'Yoga session',
    day: 'day4',
  },
  {
    name: 'Event 11',
    href: '#',
    imageSrc: 'https://picsum.photos/200',
    description: 'Music concert',
    day: 'day4',
  },
  {
    name: 'Event 12',
    href: '#',
    imageSrc: 'https://picsum.photos/200',
    description: 'Art exhibition',
    day: 'day4',
  },
];


const tabs = [
  { name: 'Day1', href: '#', day: 'day1' },
  { name: 'Day2', href: '#', day: 'day2' },
  { name: 'Day3', href: '#', day: 'day3' },
  { name: 'Day4', href: '#', day: 'day4' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function EventsGallery() {
  // State to store the currently selected day (default to the first tab)
  const [selectedDay, setSelectedDay] = useState(tabs[0].day);

  // Filter categories based on the selected day
  const filteredCategories = categories.filter(category => category.day === selectedDay);

  return (
    <div className="bg-white">
      <div className="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Events of KR</h2>
        <p className="mt-4 text-base text-gray-500">Each day new event...</p>

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
              {tabs.map((tab) => (
                <option key={tab.name} value={tab.day}>{tab.name}</option>
              ))}
            </select>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden sm:block">
            <nav className="flex space-x-4" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setSelectedDay(tab.day)}
                  className={classNames(
                    selectedDay === tab.day ? 'bg-gray-100 text-gray-700' : 'text-gray-500 hover:text-gray-700',
                    'px-3 py-2 font-medium text-sm rounded-md'
                  )}
                  aria-current={selectedDay === tab.day ? 'page' : undefined}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <a key={category.name} href={category.href} className="group block">
                <div
                  aria-hidden="true"
                  className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                >
                  <img
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{category.description}</p>
              </a>
            ))
          ) : (
            <p className="text-gray-500">No events for this day.</p>
          )}
        </div>
      </div>
    </div>
  );
}
