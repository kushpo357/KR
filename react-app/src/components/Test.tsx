// import { Fragment } from 'react'
// import { Popover, Transition } from '@headlessui/react'
// import {
//   AnnotationIcon,
//   ChatAlt2Icon,
//   ChatAltIcon,
//   DocumentReportIcon,
//   HeartIcon,
//   InboxIcon,
//   MenuIcon,
//   PencilAltIcon,
//   QuestionMarkCircleIcon,
//   ReplyIcon,
//   SparklesIcon,
//   TrashIcon,
//   UsersIcon,
//   XIcon,
// } from '@heroicons/react/outline'


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   return (
//     <div className="bg-white">
//       <header>
//         <Popover className="relative bg-white">
//           <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
//             <div className="flex justify-start lg:w-0 lg:flex-1">
//               <a href="#">
//                 <span className="sr-only">Workflow</span>
//                 <img
//                   className="h-8 w-auto sm:h-10"
//                   src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
//                   alt=""
//                 />
//               </a>
//             </div>
//             <div className="-mr-2 -my-2 md:hidden">
//               <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                 <span className="sr-only">Open menu</span>
//                 <MenuIcon className="h-6 w-6" aria-hidden="true" />
//               </Popover.Button>
//             </div>
//             <Popover.Group as="nav" className="hidden md:flex space-x-10">
//               <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
//                 Event Page
//               </a>
//               <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
//                 Event gallery
//               </a>
//               <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
//                 Tshirt
//               </a>
//               <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
//                 Coordinators
//               </a>
//             </Popover.Group>
//           </div>

//           {/* Mobile menu */}
//           <Transition
//             as={Fragment}
//             enter="duration-200 ease-out"
//             enterFrom="opacity-0 scale-95"
//             enterTo="opacity-100 scale-100"
//             leave="duration-100 ease-in"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-95"
//           >
//             <Popover.Panel
//               focus
//               className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
//             >
//               <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
//                 <div className="pt-5 pb-6 px-5">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <img
//                         className="h-8 w-auto"
//                         src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
//                         alt="Workflow"
//                       />
//                     </div>
//                     <div className="-mr-2">
//                       <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                         <span className="sr-only">Close menu</span>
//                         <XIcon className="h-6 w-6" aria-hidden="true" />
//                       </Popover.Button>
//                     </div>
//                   </div>
//                   <div className="mt-6">
//                     <nav className="grid grid-cols-1 gap-7">
//                       <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
//                         <div className="ml-4 text-base font-medium text-gray-900">Solutions</div>
//                       </a>
//                       <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
//                         <div className="ml-4 text-base font-medium text-gray-900">Pricing</div>
//                       </a>
//                       <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
//                         <div className="ml-4 text-base font-medium text-gray-900">Partners</div>
//                       </a>
//                       <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
//                         <div className="ml-4 text-base font-medium text-gray-900">Company</div>
//                       </a>
//                     </nav>
//                   </div>
//                 </div>
//                 <div className="py-6 px-5">
//                   <div className="grid grid-cols-2 gap-4">
//                     <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
//                       Pricing
//                     </a>
//                     <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
//                       Partners
//                     </a>
//                     <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
//                       Company
//                     </a>
//                   </div>
//                   <div className="mt-6">
//                     <a
//                       href="#"
//                       className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
//                     >
//                       Sign up
//                     </a>
//                     <p className="mt-6 text-center text-base font-medium text-gray-500">
//                       Existing customer?{' '}
//                       <a href="#" className="text-gray-900">
//                         Sign in
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </Popover.Panel>
//           </Transition>
//         </Popover>
//       </header>

//       {/* Hero Section */}
//       <main>
//         <div className="relative">
//           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
//           <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//             <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
//               <div className="absolute inset-0">
//                 <img
//                   className="h-full w-full object-cover"
//                   src="https://w0.peakpx.com/wallpaper/410/412/HD-wallpaper-plain-black-black.jpg"
//                   alt="People working on laptops"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
//               </div>
//               <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
//                 <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
//                   <span className="block text-white">ಕನ್ನಡ</span>
//                   <span className="block text-white">Rajyotsava</span>
//                   <span className="block text-indigo-200">2024</span>
//                 </h1>
//                 <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
//                   Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
//                 </p>
//                 <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


// const features = [
//   {
//     name: 'about msrit',
//     description: 'Today, Next, and Someday cards allow you to defer your dreams into the future.',
//     imageSrc: 'https://picsum.photos/200',
//     imageAlt: 'Green cardstock box containing white, beige, and brown cards.',
//   },
//   {
//     name: 'about KR',
//     description: 'Each refill pack contains plenty of cards to last you a month of procrastination.',
//     imageSrc: 'https://picsum.photos/200',
//     imageAlt: 'Green cardstock box open with 50 cards inside.',
//   },
//   {
//     name: 'about DECA',
//     description: 'Flip a card over to doodle during meetings when you should be listening.',
//     imageSrc: 'https://picsum.photos/200',
//     imageAlt: 'Detail of white today card, beige next card, and brown someday card with dot grid.',
//   },
// ]

// export default function Example() {
//   return (
//     <div className="bg-white">
//       <div className="max-w-full mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">

//         <div className="mt-11 space-y-16 sm:mt-16">
//           {features.map((feature) => (
//             <div key={feature.name} className="flex flex-row items-center w-full space-x-8">
//               {/* Image */}
//               <div className="flex-shrink-0 w-1/4"> {/* Reduced the width to 1/4 */}
//                 <img
//                   src={feature.imageSrc}
//                   alt={feature.imageAlt}
//                   className="w-full h-auto object-cover rounded-lg"
//                 />
//               </div>

//               {/* Text */}
//               <div className="w-3/4"> {/* Adjust text to take up 3/4 of the width */}
//                 <h3 className="text-2xl font-medium text-gray-900">{feature.name}</h3>
//                 <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const features = [
  {
    name: 'about msrit',
    description: 'Today, Next, and Someday cards allow you to defer your dreams into the future.',
    imageSrc: 'https://picsum.photos/200',
    imageAlt: 'Green cardstock box containing white, beige, and brown cards.',
  },
  {
    name: 'about KR',
    description: 'Each refill pack contains plenty of cards to last you a month of procrastination.',
    imageSrc: 'https://picsum.photos/200',
    imageAlt: 'Green cardstock box open with 50 cards inside.',
  },
  {
    name: 'about DECA',
    description: 'Flip a card over to doodle during meetings when you should be listening.',
    imageSrc: 'https://picsum.photos/200',
    imageAlt: 'Detail of white today card, beige next card, and brown someday card with dot grid.',
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      {/* Header and Hero Section */}
      <header>
        <Popover className="relative bg-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Event Page
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Event gallery
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Tshirt
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Coordinators
              </a>
            </Popover.Group>
          </div>

          {/* Mobile menu */}
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                        <div className="ml-4 text-base font-medium text-gray-900">Solutions</div>
                      </a>
                      <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                        <div className="ml-4 text-base font-medium text-gray-900">Pricing</div>
                      </a>
                      <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                        <div className="ml-4 text-base font-medium text-gray-900">Partners</div>
                      </a>
                      <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                        <div className="ml-4 text-base font-medium text-gray-900">Company</div>
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Pricing
                    </a>
                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Partners
                    </a>
                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Company
                    </a>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{' '}
                      <a href="#" className="text-gray-900">
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>

      {/* Hero Section */}
      <main>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://w0.peakpx.com/wallpaper/410/412/HD-wallpaper-plain-black-black.jpg"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">ಕನ್ನಡ</span>
                  <span className="block text-white">Rajyotsava</span>
                  <span className="block text-indigo-200">2024</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <div className="max-w-full mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="mt-11 space-y-16 sm:mt-16">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-row items-center w-full space-x-8">
              {/* Image */}
              <div className="flex-shrink-0 w-1/4">
                <img
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Text */}
              <div className="w-3/4">
                <h3 className="text-2xl font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
