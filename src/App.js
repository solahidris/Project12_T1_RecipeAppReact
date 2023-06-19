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

  const apiKey = process.env.REACT_APP_API_KEY;
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?app_id=${apiKey}&q=${searchTerm}`
      );
      const data = await response.json();
      setRecipes(data.hits); // Assuming the response contains an array of recipe objects
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