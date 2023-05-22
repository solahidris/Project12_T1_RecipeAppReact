import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import HeaderApp from "./components/HeaderApp.js";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.edamam.com/search?app_id=c8f45999&app_key=b37dbaa88d79e02d2acbed8a4ed353f9&q=your-query-here"
        );
        const data = await response.json();
        setRecipes(data.hits); // Assuming the response contains an array of recipe objects
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-slate-700 h-screen">
      <HeaderApp />

      <div>
        <p>actual code here</p>
      </div>

      <div>
        {recipes.map((recipe) => (
          <div key={recipe.recipe.uri}>
            <h3>{recipe.recipe.label}</h3>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            {/* Display other recipe information as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
