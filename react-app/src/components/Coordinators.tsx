import InstagramIcon from '/src/assets/insta.svg'; // Import the Instagram SVG icon

const people = [
  {
    name: 'Shreya G Shet',
    usn: '1MS21CV086',
    phone: '6363679309',
    url: 'https://instagram.com/shreya_g_shet',
    photo: '/src/assets/shreya.png',
  },
  {
    name: 'Madhukeerthi K',
    usn: '1MS22CV404',
    phone: '9480420739',
    url: 'https://instagram.com/madhu.001.mk',
    photo: '/src/assets/madhu.png',
  },
  {
    name: 'Vidya Mainalli',
    usn: '1ms21et060',
    phone: '9019519798',
    url: 'https://instagram.com/vidya_f_m',
    photo: '/src/assets/vidya.png',
  },
  {
    name: 'Pranav B Raj',
    usn: '1MS22AI073',
    phone: '9353029515',
    url: 'https://instagram.com/pranav_b_raj',
    photo: '/src/assets/pranav.png',
  },
  {
    name: 'Shraddha K Hiremath',
    usn: '1MS22IM042',
    phone: '7892433738',
    url: 'https://instagram.com/shraddhahiremath',
    photo: '/src/assets/shraddha.jpg',
  },
  {
    name: 'Karthik Gowda G R',
    usn: '1MS22CHO22',
    phone: '9353083175',
    url: 'https://instagram.com/_karthik_gowda_40',
    photo: '/src/assets/karthik.png',
  },
];

export default function Coordinators() {
  const fourthYearCoordinators = people.slice(0, 3);
  const thirdYearCoordinators = people.slice(3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[100vh] bg-[#000000]">
      {/* Left Side Image */}
      <div className="bg-cover my-[11vw] mx-[8vh] bg-center h-[65vh] w-[40vw]" style={{ backgroundImage: "url('/src/assets/gb.jpg')" }}>
      </div>

      {/* Right Side Content */}
      <div className="bg-[#000000] py-12 mx-[8vh] -ml-[10vh] max-h-[100vh] overflow-hidden">
        <div className="max-w-[60vh] mx-auto py-[8vh] space-y-12 text-center">
          {/* 4th Year Coordinators */}
          <div className="space-y-5">
            <h2 className="text-[3vh] font-bold tracking-tight text-[#FFEAAC]">
              Meet our 4<sup className="align-super text-[1.5vh]">th</sup> Year Coordinators
            </h2>
          </div>
          <ul
            role="list"
            className="space-y-[1vw] sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-[6vh]"
          >
            {fourthYearCoordinators.map((person) => (
              <li key={person.name} className="relative bg-[#151515] pb-[.5vw] rounded-lg shadow-md">
                <div className="relative">
                  <img
                    src={person.photo}
                    alt=""
                    className="mx-auto h-[9vw] w-[9vw]  object-cover"
                  />
                  <a
                    href={person.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-[.5vw] right-[.5vw]"
                  >
                    <img src={InstagramIcon} alt="Instagram" className="h-[1.5vw] w-[1.5vw]" />
                  </a>
                </div>
                <div className="text-center mt-[.1vw] space-y-1">
                  <h3 className="text-[#ffffff] font-semibold">{person.name}</h3>
                  <p className="text-[#FE5B4A] uppercase text-sm">{person.usn}</p>
                  <p className="text-[#ffffff] text-sm">{person.phone}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* 3rd Year Coordinators */}
          <div className="space-y-5 pb-[1vw]">
            <h2 className="text-[3vh] font-bold tracking-tight text-[#FFEAAC]">
              Meet our 3<sup className="align-super text-[1.5vh]">rd</sup> Year Coordinators
            </h2>
          </div>
          <ul
            role="list"
            className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-[6vh]"
          >
            {thirdYearCoordinators.map((person) => (
              <li key={person.name} className="relative bg-[#151515] pb-[.5vw] rounded-lg shadow-md">
                <div className="relative">
                  <img
                    src={person.photo}
                    alt=""
                    className="mx-auto h-[9vw] w-[9vw]  object-cover"
                  />
                  <a
                    href={person.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-[.5vw] right-[.5vw]"
                  >
                    <img src={InstagramIcon} alt="Instagram" className="h-[1.5vw] w-[1.5vw]" />
                  </a>
                </div>
                <div className="text-center mt-[.3vw] space-y-1">
                  <h3 className="text-[#ffffff] font-semibold">{person.name}</h3>
                  <p className="text-[#FE5B4A] uppercase text-sm">{person.usn}</p>
                  <p className="text-[#ffffff] text-sm">{person.phone}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
