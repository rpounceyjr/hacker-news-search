import React from "react";

function SearchHistoryElement({ searchTerm, submitSearch }) {
  return (
    <p
      className="search-history-element"
      onClick={(event) => submitSearch(searchTerm, event)}
    >
      {searchTerm}
    </p>
  );
}

export default SearchHistoryElement;
