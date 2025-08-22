import ProductCard from '@/Components/ProductCard';
import React from 'react';

 const AllProducts  = async() => {
    const res=await fetch("http://localhost:5000/products")
    const products=await res.json()
    return (
        <section className=" pb-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <h1 className="text-3xl mt-5 font-bold">All Products</h1>
        <p className="text-gray-600">Browse all available products in our store.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
    );
}

export default AllProducts;
