import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import AddProductForm from "@/Components/AddProductForm"

export default async function AddProductPage() {
  const session = await getServerSession(authOptions)

  if (!session) redirect("/signin")

  return (
    <div className="p-8">
      
      <AddProductForm />
    </div>
  )
}
