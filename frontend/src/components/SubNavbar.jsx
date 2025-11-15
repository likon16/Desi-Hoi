// src/components/SubNavbar.jsx
import { AlignCenter } from 'lucide-react';
import React from 'react';

const SubNavbar = () => {
  const categories = [
    "Popular",
    "Fashion",
    "Local Brands",
    "Local Foods",
    "Electronics & Appliances",
    "Grocery",
    "Home & Furniture",
    "Beauty",
    "Toys & Baby Products",
    "Kurti, Saree & Lehenga",
    
   
  ];

  return (
    <div style={styles.container}>
      {categories.map((category, index) => (
        <a href="#" style={styles.link} key={index}>
          {category}
        </a>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    
    padding: '18px 0',
    paddingLeft: '50px',
    backgroundColor: '#f5f5f5',
    borderBottom: '2px solid #ddd',
    whiteSpace: 'nowrap',
    height: '55px',
    overflowX: 'auto'
  },
  link: {
    marginRight: '30px',
    color: '#333',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    // padding: '8px',
  }
};

export default SubNavbar;