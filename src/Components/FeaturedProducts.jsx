
import Link from "next/link";
import ProductCard from "./ProductCard"
import { FaArrowRight } from "react-icons/fa";


// Example mock products


export default async function FeaturedProducts() {
    const res=await fetch("http://localhost:5000/products")
    const allProducts=await res.json()
    const products=allProducts.slice(0,4);
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <p className="text-gray-600">Check out some of our top products!</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-5"><Link href="/products" className="btn btn-outline border-gray-400 bg-white hover:bg-primary hover:text-white">View All <FaArrowRight /></Link></div>
    </section>
  )
}
