import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import AddProductForm from "@/Components/AddProductForm"

export default async function AddProductPage() {
  const session = await getServerSession(authOptions)

  if (!session) redirect("/signin")

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>
      <AddProductForm />
    </div>
  )
}
