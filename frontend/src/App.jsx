import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ComplexNavbar from './components/Navbar';
import Footer from './components/Footer';
import SubNavbar from './components/SubNavbar';

import HomePage from './pages/home/HomePage';
import Supplier from './pages/supplier/Supplier';
import Login from './pages/login/Login';
import Shops from './pages/shops/Shops';

function App() {
  return (
    <Router>
      <ComplexNavbar />
      <SubNavbar />
      
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
