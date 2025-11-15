import React from 'react';
import '../../styles/HomePage.css';

// import { localProducts } from '../../data/mockData';
import Products from './Products';
import { HeadingBox } from './HeadingBox';
import Banner from './banner';

function HomePage() {
  return (
    <div className="homepage-container">
      <Banner />
      <HeadingBox />
      <Products />

    </div>
    )
}

export default HomePage;
