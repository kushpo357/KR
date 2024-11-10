import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
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
      </div>
    </div>
  );
};

export default HomePage;
