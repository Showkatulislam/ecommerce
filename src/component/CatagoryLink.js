import React from "react";

const CatagoryLink = ({ setFilter: setQuery,isLoading, isFetching }) => {
  return (
    <div className="flex flex-col bg-teal-500 shadow-xl text-white font-semibold text-lg p-6">
      <button
        onClick={(e) => setQuery(e.target.innerText)}  isLoading={isFetching}
        className="p-2 hover:visited:"
      >
        {" "}
        Bottle
      </button>
      <button
        onClick={(e) => setQuery(e.target.innerText)} isLoading={isFetching}
        className="p-2 hover:visited:"
      >
        Earphones
      </button>
      <button
        onClick={(e) => setQuery(e.target.innerText)} isLoading={isFetching}
        className="p-2 hover:visited:"
      >
        Cap
      </button>
      <button
        onClick={(e) => setQuery(e.target.innerText)} isLoading={isFetching}
        className="p-2 hover:visited:"
      >
        Bag
      </button>
      <button
        onClick={(e) => setQuery(e.target.innerText)} isLoading={isFetching}
        className="p-2 hover:visited:"
      >
        Men's Sneaker
      </button>
      <button
        onClick={(e) => setQuery(e.target.innerText)} isLoading={isFetching}
        className="p-2 hover:visited:"
      >
        Men's Boot
      </button>
      <button
        onClick={(e) => setQuery(e.target.innerText)} isLoading={isFetching}
        className="p-2 hover:visited:"
      >
        Men's Pants
      </button>
      <button
        onClick={(e) => setQuery(e.target.innerText)} isLoading={isFetching}
        className="p-2 hover:visited:"
      >
        Men's Sneaker
      </button>
    </div>
  );
};

export default CatagoryLink;
