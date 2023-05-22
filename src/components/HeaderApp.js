import React from "react";
import logo from "../logo.svg";

const HeaderApp = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <img src={logo} className="mt-10 h-20 w-20 animate-bounce" alt="logo" />
      </div>
      <div className="px-20">
        <h1 className="text-center text-xs font-mono text-white mb-2 font-bold">
          Recipe App With React
        </h1>
        <h1 className="text-center text-xs font-mono text-white">
          build a simple recipe app that fetches a list of all recipes from
          external API and provide dynamic search functionality.
        </h1>
        <h1 className="text-center text-xs font-mono text-white py-5">
          -----------------------------
        </h1>
      </div>
    </div>
  );
};

export default HeaderApp;
