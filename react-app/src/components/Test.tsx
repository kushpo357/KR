import { Fragment } from "react";
import Navbar from "./navbar/Navbar";
import msrit from "../assets/msrit.jpg";
import deca from "../assets/deca.png";
import KR from "../assets/KR.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const features = [
  {
    name: "About MSRIT",
    description:
      "Established in 1962 by the visionary Dr. M.S. Ramaiah, Ramaiah Institute of Technology has only grown over the years and is one of the most prestigious engineering institutions in India. Offering a variety of courses at UG, PG and Doctorate level, RIT has established itself as a centre of excellence for high quality education. Industry oriented teaching programs and high placement records, guarantee aspiring students a bright future in whichever field they choose to pursue. It stands strong as a bastion of knowledge and free thinking.",
    imageSrc: msrit,
    imageAlt: "MSRIT campus building.",
  },
  {
    name: "About DECA",
    description:
      "If you're a student at MSRIT and interested in building leadership skills and exploring entrepreneurship, DECA is a great club to join. It's part of a global organization that helps students get hands-on experience with business-related competitions, case studies, and events. Being a part of DECA means you can engage in activities like pitching startup ideas, developing business strategies, and networking with industry professionals.",
    imageSrc: deca,
    imageAlt: "DECA logo.",
  },
  {
    name: "About Kannada Rajyotsava",
    description:
      "This has always been the most celebrated event during any given odd semester. Held in the month of November, Kannada Rajyotsava brings out the culture of the State in full fervour and colour. Eminent litterateurs and well-known actors are invited to our campus to add to the celebrations.",
    imageSrc: KR,
    imageAlt: "Kannada Rajyotsava celebration.",
  },
];

export default function Example() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-white pt-[80px]">
        {/* Hero Section */}
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
                    alt="Background image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                      ಕನ್ನಡ
                    </span>
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
                      Rajyotsava
                    </span>
                    <span className="block text-indigo-200">2024</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Features Section */}
        <div className="max-w-full mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="mt-11 space-y-16 sm:mt-16">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center w-full space-y-8 md:space-y-0 md:space-x-8`}
              >
                {/* Image */}
                <div className="flex-shrink-0 w-full md:w-1/3">
                  <img
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
