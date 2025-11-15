import { localProducts } from '../../data/mockData';

function Products() {
  return (
    <div className="p-5">
      {/* <div className="img">
<img src="/images/desiban.png" alt="banner" className='w-full h-auto rounded-lg'/>
      </div> */}
      <h1 className="text-center text-2xl font-bold mb-6">Local Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-white p-4 rounded-lg shadow-md">
        {localProducts.map(product => (
          <div 
            key={product.id} 
            className="border rounded-lg p-4 shadow-md text-center hover:shadow-lg transition"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-45 object-cover rounded-md"
            />

            <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
            <p className="text-gray-600 text-md font-medium mt-1">{product.Offer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;