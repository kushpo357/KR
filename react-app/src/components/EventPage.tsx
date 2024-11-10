import { useState } from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'

const product = {
  name: 'Event 1',
  title: 'Event 1 Details', // Renamed from 'details' to 'title' to avoid conflict
  rules: 'Rules',
  description: 'Description',
  descriptionText: `
    <p>cool description text </p>
  `,
  detailsText: `
    <p>cool description </p>
  `,
  rulesText: `
    <p>cool description </p>
  `,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://picsum.photos/200',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  details: [
    {
      name: 'details',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections can be added here...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function EventPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              {/* Placeholder for image selector if needed */}
            </div>

            <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
              {product.images.map((image) => (
                <Tab.Panel key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-center object-cover sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            {/* Product Title */}
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.title}</h1>

            {/* Description Section */}
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: product.descriptionText }}
              />
            </div>

            {/* Rules Section */}
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-10">{product.rules}</h2>
            <div className="mt-6">
              <h3 className="sr-only">Rules</h3>
              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: product.rulesText }}
              />
            </div>

            {/* Features Section */}
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-10">Features</h2>
            <div className="mt-6">
              {product.details.map((section) => (
                <div key={section.name}>
                  <h3 className="text-lg font-semibold text-gray-900">{section.name}</h3>
                  <ul className="list-disc pl-5 mt-2 text-base text-gray-700">
                    {section.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Additional details section */}
          <section aria-labelledby="details-heading" className="mt-12">
            <h2 id="details-heading" className="sr-only">
              Additional details
            </h2>
            {/* Insert additional details here if needed */}
          </section>
        </div>
      </div>
    </div>
  );
}
