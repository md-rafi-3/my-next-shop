"use client";

import useAxiosPublic from "@/Hooks/axiosPublic";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddProductForm() {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  // 🛠️ Put your imgbb API key in .env.local
  const imgbbKey = process.env.NEXT_PUBLIC_IMGBB_KEY;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const imageFile = formData.get("image");

    try {
      // 1️⃣ Upload image to imgbb
      const imgForm = new FormData();
      imgForm.append("image", imageFile);

      const imgRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${imgbbKey}`,
        {
          method: "POST",
          body: imgForm,
        }
      );

      const imgData = await imgRes.json();
      if (!imgData.success) throw new Error("Image upload failed");

      const imageUrl = imgData.data.url;

      // 2️⃣ Build payload
      const payload = {
        name: formData.get("name"),
        description: formData.get("description"),
        price: Number(formData.get("price")),
        category: formData.get("category"),
        stock: Number(formData.get("stock")),
        rating: Number(formData.get("rating")),
        image: imageUrl,
        features: formData
          .get("features")
          .split(",")
          .map((f) => f.trim())
          .filter(Boolean),
      };

      // 3️⃣ Save product to DB
      const res = await axiosPublic.post("/add-product", payload);

      if (!res.data.insertedId) throw new Error("Failed to add product");

      // 🎉 SweetAlert success
      Swal.fire({
        icon: "success",
        title: "Product Added!",
        text: "Your product has been added successfully.",
        confirmButtonColor: "#3085d6",
      });

      form.reset();
      setPreview(null); // reset preview
    } catch (err) {
      // ❌ SweetAlert error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message || "Something went wrong!",
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false);
    }
  }

  // 🖼️ Handle image preview
  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
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

        {/* Image Upload + Preview */}
        <div className="form-control">
          <label className="label font-semibold">Product Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            required
            onChange={handleImageChange}
            className="file-input file-input-bordered w-full"
          />
          {preview && (
            <div className="mt-3">
              <p className="text-sm mb-2">Preview:</p>
              <img
                src={preview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-md border"
              />
            </div>
          )}
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
        <button type="submit" className="btn btn-primary mt-4" disabled={loading}>
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
