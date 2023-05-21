import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="bg-slate-700 h-screen">
      {/* Header stuff ya know */}
      <div className="flex justify-center">
        <img src={logo} className="mt-10 h-20 w-20 animate-bounce" alt="logo" />
      </div>
      <div className="px-20 text-center">
        <h1 className="text-xs font-mono text-white mb-2 font-bold">
          Recipe App With React
        </h1>
        <h1 className="text-xs font-mono text-white">
          build a simple recipe app that fetches a list of all recipes from
          external API and provide dynamic search functionality.
        </h1>
        <h1 className="text-xs font-mono text-white py-5">
          -----------------------------
        </h1>
        <div className="text-white font-mono text-xs">
        <p>work flow</p>
        <p>find list of recipes from external APIs</p>
        <p>fetch list</p>
        <p>assign to constant</p>
        <p>dynamic search? functionality</p>
        <p>and display it in a display box</p>
        </div>
      </div>

      <div>
        <p>actual code here</p>
      </div>
    </div>
  );
}

export default App;
