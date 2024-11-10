const categories = [
  {
    name: 'event 1',
    href: '#',
    imageSrc: 'https://picsum.photos/200',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
  },
  {
    name: 'event 2',
    href: '#',
    imageSrc: 'https://picsum.photos/200',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    name: 'event 3',
    href: '#',
    imageSrc: 'https://picsum.photos/200',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: 'Be more productive than enterprise project managers with a single piece of paper.',
  },
]

const tabs = [
  { name: 'Day1', href: '#', current: false },
  { name: 'Day2', href: '#', current: false },
  { name: 'Day3', href: '#', current: true },
  { name: 'Day4', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function EventsGallery() {
  return (
    <div className="bg-white">
      <div className="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Events of KR</h2>
        <p className="mt-4 text-base text-gray-500">
          Each day new event...
        </p>

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
              defaultValue={tabs.find((tab) => tab.current).name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden sm:block">
            <nav className="flex space-x-4" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current ? 'bg-gray-100 text-gray-700' : 'text-gray-500 hover:text-gray-700',
                    'px-3 py-2 font-medium text-sm rounded-md'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {categories.map((category) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
