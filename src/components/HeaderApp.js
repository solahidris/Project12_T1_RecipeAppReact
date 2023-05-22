import React from "react";
import logo from "../logo.svg";

const HeaderApp = () => {
  return (
    <div className="pb-3">
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
        <div className="text-white font-mono text-xs">
          <p>work flow</p>
          <p>1- find list of recipes from external APIs</p>
          <p>2- fetch list</p>
          <p>3- assign to constant</p>
          <p>4- dynamic search? functionality</p>
          <p>5- and display it in a display box</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderApp;
