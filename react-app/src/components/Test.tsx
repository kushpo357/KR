import Navbar from "./navbar/Navbar";
import msrit from "../assets/msrit.jpg";
import deca from "../assets/deca.png";
import KR from "../assets/KR.png";


const features = [
  {
    name: "About M.S.R.I.T",
    description:
      "Established in 1962 by the visionary Dr. M.S. Ramaiah, Ramaiah Institute of Technology has only grown over the years and is one of the most prestigious engineering institutions in India. Offering a variety of courses at UG, PG and Doctorate level, RIT has established itself as a centre of excellence for high quality education. Industry oriented teaching programs and high placement records, guarantee aspiring students a bright future in whichever field they choose to pursue. It stands strong as a bastion of knowledge and free thinking.",
    imageSrc: msrit,
    imageAlt: "MSRIT campus building.",
  },
  {
    name: "About DECA",
    description:
      "If you're a student at MSRIT and interested in building leadership skills and exploring entrepreneurship, DECA is a great club to join. It's part of a global organization that helps students get hands-on experience with business-related competitions, case studies, and events. Being a part of DECA means you can engage in activities like pitching startup ideas, developing business strategies, and networking with industry professionals. It's not just about learning theroy: you get to challenge yourself in real world scenarios, which looks fantastic on your resume. plus, MSRIT's ecosystem is super supportive, with other clubs like IEEE and TEDx giving you diverse opportunities to grow. whether you're into tech or business, DECA gives you the platform to explore your potential ina afun,competitive, and grow-oriented environment.",
    imageSrc: deca,
    imageAlt: "DECA logo.",
  },
  {
    name: "About ಕನ್ನಡ Rajyotsava",
    description:
      "This has always been the most celebrated event during any given odd semester. Held in the month of November, Kannada Rajyotsava brings out the culture of the State in full fervour and colour. Eminent litterateurs and well-known actors are invited to our campus to add to the celebrations. Our institute takes pride in the fact that many non-kannadiga students come forward to work as volunteera and contribute to the success of rajyastava. Many competitive events are held and prizes are distributed on the final day.",
    imageSrc: KR,
    imageAlt: " Rajyotsava celebration.",
  },
];

export default function Example() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#0B0B0B] pt-[80px]">
        {/* Hero Section */}
        {/* Hero Section */}
        <main className="flex pt-[9vw] justify-center h-[40vh] bg-[#0B0B0B]">
  <div className="relative">
    <p className="text-2xl flex justify-center text-white ">M.S.R.I.T presents</p>
    <p className="text-7xl p-[1vw] md:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
      ಕನ್ನಡ Rajyotsava
    </p>
    <p className="text-5xl flex pt-[1vw] justify-center text-white ">೨೦೨೪
</p>
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
                  <h3 className="text-2xl font-medium text-[#E7602A]">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-[1.2vw] text-white">
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
