import React from "react";

function SearchResult({ title, author, url }) {
  return (
    <div className="search-result-div">
      <span className="search-result-span">
        <a href={url}>{title}</a> by: {author}
      </span>
    </div>
  );
}

export default SearchResult;
