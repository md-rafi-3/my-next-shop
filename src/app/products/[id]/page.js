'use client'
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import useAxiosPublic from '@/Hooks/axiosPublic';


export default function ProductDetailsPage() {
    const axiosPublic=useAxiosPublic()
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axiosPublic.get(`/product/${id}`)
        if (!res.data) throw new Error("Product not found");
        const data = await res.data;
        setProduct(data);
      } catch (err) {
        router.push('/products'); // redirect if not found
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id, router]);

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (!product) return null;

  return (
    <section className="py-16 bg-base-200 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="mb-2">
              <span className="font-semibold">Price:</span> ${product.price.toFixed(2)}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Stock:</span> {product.stock}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Rating:</span> {product.rating} / 5
            </p>

            {/* Features */}
            <h3 className="font-semibold mb-2">Features:</h3>
            <ul className="list-disc list-inside mb-4">
              {product.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <Link href="/products" className="btn btn-primary">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
