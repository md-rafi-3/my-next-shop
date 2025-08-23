"use client";

import React from "react";
import Lottie from "lottie-react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import errorAnimation from "../lotties/errorPage.json"; 

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      {/* Lottie Animation */}
      <div className="w-[250px] md:w-[400px]">
        <Lottie animationData={errorAnimation} loop />
      </div>

      {/* Message */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-6">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mt-2 mb-6 text-center max-w-sm">
        Oops! The page you are looking for does not exist.
      </p>

      {/* Back to Home */}
      <Link href="/">
        <button className="btn btn-primary flex items-center gap-2">
          <FaHome /> Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
