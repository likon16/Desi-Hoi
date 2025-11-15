import React from 'react';
import { Link } from "react-router-dom";
import cartIcon from '../assets/cart.png';
// import logo from '../assets/logo.svg';

// Simple Navbar Component
function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Logo Section */}
      <div style={styles.logo}>
      {/* <img src={logo} alt="Logo" style={styles.logoImage} /> */}
        <span style={styles.logoText}>Desi Hoi</span>
      </div>
   {/* Search Box */}
   <div className="searcBox">
<input
        type="text"
        placeholder="Search groceries, fashion, food..."
        style={styles.searchBox}
      />
   </div>
      
      {/* Navigation Links */}
      <ul style={styles.navLinks}> 
  <li style={styles.navLink}>
    <Link to="/" style={styles.link}></Link>
  </li>
         <li style={styles.navLink}>
    <Link to="/shops" style={styles.link}>Shops</Link>
  </li>
   <li style={styles.navLink}>
    <Link to="/supplier" style={styles.link}>Become a Supplier</Link>
  </li>
 
  <li style={styles.navLink}>
    <Link to="/login" style={styles.link}>Login</Link>
  </li>
    <li style={styles.navLink}>
      <Link to="/cart" style={styles.link}>
        <img src={cartIcon} alt="Cart Icon" style={styles.icon} /> {/* Image icon */}
        
      </Link>
    </li>
</ul>
    </nav>
  );
}

// Styles for the navbar
const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 50px',
    backgroundColor: '#d95050ff',
    // color: '#f1dedeff',
     position: 'sticky',
  top: 0,
  
  
  zIndex: 1000,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
  },
  logoImage: {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  searchBox: {
    padding: '8px',
    borderRadius: '8px',
    Color: '#0000005b',
    width: '35rem',
  fontSize: '16px',
  border: '1px solid #ccc',
  
  },
  navLinks: {
    display: 'flex',
    listStyleType: 'none',
    paddingLeft: '50px',
    margin: '0',
  },
  navLink: {
    marginLeft: '40px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '18px',
    transition: 'color 0.3s',
  },
};

export default Navbar;