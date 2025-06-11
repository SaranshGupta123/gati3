import AnimateSecond from "@/motion/AnimateSecond";
import React from "react";

const Mid = () => {
  return (
    <AnimateSecond >
      <div className="w-full flex items-center justify-center text-black text-4xl font-bold py-5 px-2">
        Our Powerful Tools
      </div>
      <p className="text-xl text-slate-600 max-w-2xl text-center mb-5 px-2">
        Discover our comprehensive suite of tools designed to transform your
        business and drive growth
      </p>
    </AnimateSecond>
  );
};

export default Mid;
