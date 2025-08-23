"use client";

import { signOut } from "next-auth/react";
import Swal from "sweetalert2";

export default function LogoutButton() {
  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      // ✅ If confirmed, sign out
      signOut({ callbackUrl: "/signin" }); // redirect to home after logout
    }
  };

  return (
    <button
      onClick={handleLogout}
      
    >
      Logout
    </button>
  );
}
