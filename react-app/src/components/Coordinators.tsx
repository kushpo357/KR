import Navbar from "./navbar/Navbar";
import logo from '../assets/logo.jpg'; // Import the image from the assets folder
import vidya from '../assets/vidya.png';
import madhu from '../assets/madhukeerthi.png';
import pranav from '../assets/pranav.png';
import karthik from '../assets/karthik.png';
import shraddha from '../assets/shraddha.png';
import shreya from '../assets/shreya.png';

const people = [
  {
    name: 'Vidya Mainalli',
    role: '4th year Event Coordinator',
    contact: "6260763466",
    imageUrl: vidya,
  },
  {
    name: 'Madhukeerthi',
    role: '4th year Event Coordinator',
    contact: "6260763466",
    imageUrl: madhu,
  },
  {
    name: 'Shreya',
    role: '4th year Event Coordinator',
    contact: "6260763466",
    imageUrl: shreya,
  },
  {
    name: 'Pranav',
    role: '3rd year Event Coordinator',
    contact: "6260763466",
    imageUrl: pranav,
  },
  {
    name: 'Shraddha',
    role: '3rd year Event Coordinator',
    contact: "6260763466",
    imageUrl: shraddha,
  },
  {
    name: 'Karthik',
    role: '3rd year Event Coordinator',
    contact: "6260763466",
    imageUrl: karthik,
  },
];

export default function Coordinators() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 text-center sm:px-4 lg:px-6 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our team</h2>
              <p className="text-xl text-gray-500">
                Have a query? contact our coordinators.
              </p>
            </div>
            {/* Main Grid for Image on the Left and Team Section on the Right */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:max-w-5xl mx-auto">
              {/* Left Section: Full Image */}
              <div className="relative">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Right Section: People List with Proper Aspect Ratio */}
              <ul
                role="list"
                className="mx-auto px-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3"
              >
                {people.map((person) => (
                  <li key={person.name} className="space-y-6">
                    <div className="space-y-2">
                      <img
                        className="mx-auto w-full object-cover rounded-lg"
                        src={person.imageUrl}
                        alt={person.name}
                      />
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                        <p className="text-gray-500">Contact: {person.contact}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
