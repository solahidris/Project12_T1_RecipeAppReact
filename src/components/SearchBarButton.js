import React from "react";

const SearchBarButton = ({value, onChange, onClick}) => {
    return(
        <div className="flex justify-end  mb-5">
          <input
            type="text"
            value={value}
            onChange={onChange}
            className="mr-2 px-2 py-1 font-mono text-md rounded"
          />
          <button
            onClick={onClick}
            className=" px-4 py-1 rounded bg-blue-500 text-xs font-bold font-mono text-white"
          >
            Search
          </button>
        </div>
    )
};

export default SearchBarButton;