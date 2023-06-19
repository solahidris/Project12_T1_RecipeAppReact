import React from "react";
import logo from "../logo.svg";
import recipeapp from "../recipeapp.jpeg";

const HeaderApp = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-amber-300 to-amber-200">
        <div className="flex justify-center mb-8">
          <img src={recipeapp} className="mt-10 h-[15rem] w-[15rem] justify-center rounded-2xl" alt="logo" />
        </div>
        <div className="px-10">
          <div className="flex justify-center">
            <h1 className="pl-10 text-center lg:text-3xl text-2xl font-mono text-black mb-8 font-bold">
              Recipe App With React
            </h1>
            <img src={logo} className="h-10 w-10 animate-bounce justify-center" alt="logo" />
          </div>
          <h1 className="text-center text-xs font-mono text-black pb-10">
            build a simple recipe app that fetches a list of all recipes from
            external API and provide dynamic search functionality.
          </h1>
      </div>

      </div>
    </div>
  );
};

export default HeaderApp;
