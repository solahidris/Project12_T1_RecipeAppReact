import React from "react";

const SearchBarButton = ({ value, onChange, onClick }) => {
  return (
    <div className="flex justify-end mb-5 lg:mr-10 lg:mt-5 lg:mb-10">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="mr-2 px-2 py-1 lg:px-4 lg:py-2  text-md rounded"
      />
      <button
        onClick={onClick}
        className="px-4 py-1 lg:px-8 lg:py-2 rounded bg-blue-500 text-xs font-bold text-white"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBarButton;