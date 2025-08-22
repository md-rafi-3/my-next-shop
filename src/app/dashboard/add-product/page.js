"use client";

import useAxiosPublic from "@/Hooks/axiosPublic";
import { useState } from "react";

export default function AddProductForm() {
    const axiosPublic=useAxiosPublic()
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      category: formData.get("category"),
      stock: Number(formData.get("stock")),
      rating: Number(formData.get("rating")),
      image: formData.get("image"),
      features: (formData.get("features"))
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean),
    };

      try {
      const res = await axiosPublic.post("/add-product",payload)

      if (!res.data.insertedId) throw new Error("Failed to add product");

      setMsg("✅ Product added successfully!");
      form.reset();
    } catch (err) {
      setMsg("❌ " + err.message);
    } finally {
      setLoading(false);
    }

  
    console.log(payload)
  }

  return (
   <div className="max-w-2xl mx-auto p-6 bg-base-200 rounded-xl shadow-lg">
  <h2 className="text-3xl font-bold mb-6 text-center">➕ Add Product</h2>

  <form onSubmit={handleSubmit} className="grid gap-5">
    {/* Product Name */}
    <div className="form-control">
      <label className="label font-semibold">Product Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter product name"
        required
        className="input input-bordered w-full"
      />
    </div>

    {/* Description */}
    <div className="form-control">
      <label className="label font-semibold">Description</label>
      <textarea
        name="description"
        placeholder="Enter product description"
        required
        className="textarea textarea-bordered w-full"
      />
    </div>

    {/* Price */}
    <div className="form-control">
      <label className="label font-semibold">Price ($)</label>
      <input
        type="number"
        name="price"
        placeholder="Enter price"
        required
        className="input input-bordered w-full"
      />
    </div>

    {/* Category */}
    <div className="form-control">
      <label className="label font-semibold">Category</label>
      <input
        type="text"
        name="category"
        placeholder="e.g. Electronics"
        required
        className="input input-bordered w-full"
      />
    </div>

    {/* Stock */}
    <div className="form-control">
      <label className="label font-semibold">Stock</label>
      <input
        type="number"
        name="stock"
        placeholder="Available stock"
        required
        className="input input-bordered w-full"
      />
    </div>

    {/* Rating */}
    <div className="form-control">
      <label className="label font-semibold">Rating (0 - 5)</label>
      <input
        type="number"
        step="0.1"
        name="rating"
        placeholder="Product rating"
        className="input input-bordered w-full"
      />
    </div>

    {/* Image URL */}
    <div className="form-control">
      <label className="label font-semibold">Image URL</label>
      <input
        type="url"
        name="image"
        placeholder="https://example.com/image.jpg"
        required
        className="input input-bordered w-full"
      />
    </div>

    {/* Features */}
    <div className="form-control">
      <label className="label font-semibold">Features</label>
      <input
        type="text"
        name="features"
        placeholder="Comma separated (e.g. Bluetooth, 20h Battery)"
        className="input input-bordered w-full"
      />
    </div>

    {/* Submit Button */}
    <button type="submit" className="btn btn-primary mt-4">
      Add Product
    </button>
  </form>

  {msg && <p className="mt-6 text-center font-medium">{msg}</p>}
</div>

  );
}
