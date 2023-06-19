import React from "react";

const ListItemSearch = ({ recipes }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {recipes.map((recipe) => (
        <div key={recipe.recipe.uri}>
          <div>
            <img
              className="h-30 w-40 lg:h-60 lg:w-80 rounded-lg"
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
            />
            <h3 className="font-mono text-white text-xs mt-2">
              {recipe.recipe.label}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItemSearch;
