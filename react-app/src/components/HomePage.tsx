import React from 'react';
import Navbar from './navbar/Navbar';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <Navbar></Navbar>
      <div>
      <Link to="/coordinators">
          <div><button>Coordinators</button></div>
        </Link>
        <Link to="/eventPage">
          <div><button>Event Page</button></div>
        </Link>
        <Link to="/eventGallery">
          <div><button>Event Gallery</button></div>
        </Link>
        <Link to="/tShirtPage">
          <div><button>T-shirt Page</button></div>
        </Link>
        <Link to="/test">
          <div><button>test page</button></div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

            // <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            //   <a href="#" className=" hidden whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            //     Sign in
            //   </a>
            //   <a
            //     href="#"
            //     className="hidden ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
            //   >
            //     Sign up
            //   </a>
            // </div>