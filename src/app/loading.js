"use client";

import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../lotties/Loading Dots Blue.json"; // adjust path

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Lottie style={{ height: 150 }} animationData={loadingAnimation} loop />
    </div>
  );
};

export default Loading;
