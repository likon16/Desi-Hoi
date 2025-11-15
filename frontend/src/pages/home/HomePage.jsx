import React from 'react';
import '../../styles/HomePage.css';

import { localProducts } from '../../data/mockData';

function HomePage() {
  return (
    <div className="p-5">
      <h1 className="text-center text-2xl font-bold mb-6">Local Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {localProducts.map(product => (
          <div 
            key={product.id} 
            className="border rounded-lg p-4 shadow-md text-center hover:shadow-lg transition"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-40 object-cover rounded-md"
            />

            <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
            <p className="text-gray-600 text-md font-medium mt-1">{product.Offer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
