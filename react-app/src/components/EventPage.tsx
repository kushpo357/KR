import { useState } from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'
import Navbar from './navbar/Navbar'
const product = {
  name: 'Event ',
  title: 'Event  Details',
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
      name: 'Features',
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
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function EventPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <>
    <Navbar></Navbar>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-x-8">
          {/* Image on the left */}
          <div className="lg:w-1/2">
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
          </div>

          {/* Product info on the right */}
          <div className="lg:w-1/2">
            <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
                {/* Event 1 Details Box */}
                <div className="border border-gray-300 p-6">
                  <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.title}</h1>
                  <div className="mt-6 text-base text-gray-700" dangerouslySetInnerHTML={{ __html: product.descriptionText }} />
                </div>

                {/* Rules Box */}
                <div className="border border-gray-300 p-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.rules}</h2>
                  <div className="mt-6 text-base text-gray-700" dangerouslySetInnerHTML={{ __html: product.rulesText }} />
                </div>
              </div>

              {/* Features Box (occupies full width below the above two) */}
              <div className="border border-gray-300 p-6 mt-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Features</h2>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

