import Link from 'next/link'



export default function ProductCard({ product }) {
  return (
    <div className="bg-base-100 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
          <Link href={`/products/${product._id}`} className="btn btn-sm btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}
