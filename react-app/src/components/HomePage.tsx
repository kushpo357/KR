import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link to="/coordinators">
          <button>Coordinators</button>
        </Link>
        <Link to="/eventPage">
          <button>Event Page</button>
        </Link>
        <Link to="/eventGallery">
          <button>Event Gallery</button>
        </Link>
        <Link to="/tShirtPage">
          <button>T-shirt Page</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
