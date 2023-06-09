import React, { useState, useEffect } from "react";
import HeaderApp from "./components/HeaderApp.js";
// eslint-disable-next-line
import WorkFlow from "./components/WorkFlow.js";
import AppTitle from "./components/AppTitle.js";
import SearchBarButton from "./components/SearchBarButton.js";
import ListItemSearch from "./components/ListItemSearch.js";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const appId = "c8f45999";
  const appKey = "b37dbaa88d79e02d2acbed8a4ed353f9";

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?app_id=${appId}&app_key=${appKey}&q=${searchTerm}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [searchTerm]);

  const handleSearch = () => {
    fetchData();
  };

  return (
    <div className="bg-gradient-to-b from-amber-300 to-amber-500 pb-20 min-h-screen	h-max">
      <HeaderApp />
      {/* <WorkFlow /> */}
      
      <AppTitle />

      <div className="px-5 py-5 mx-5 bg-slate-800/10 rounded-lg h-max">
        <SearchBarButton
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={handleSearch}
        />
        <ListItemSearch recipes={recipes} />
      </div>
    </div>
  );
}

export default App;