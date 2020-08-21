import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import EmptySearchErrorMessage from "./components/EmptySearchErrorMessage";
import ErrorMessage from "./components/ErrorMessage";
import NewSearchMessage from "./components/NewSearchMessage"
import SearchHistoryElement from "./components/SearchHistoryElement";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import axios from "axios";

function App() {
  const [queryState, setQueryState] = useState("");
  const [searchResults, setSearchResults] = useState();
  const [errorExists, setErrorExists] = useState(false);
  const [emptySearch, setEmptySearch] = useState(false);

  const userSearchHistory = useSelector((state) => state.searchHistory);

  const dispatch = useDispatch();

  function handleInputChange(e) {
    setQueryState(e.target.value);
  }

  async function submitSearch(query, event) {
    event.preventDefault();

    setErrorExists(false);
    setEmptySearch(false);

    if (query.trim() === "") {
      setSearchResults([]);
      setEmptySearch(true);
      return setErrorExists(true);
    }

    dispatch({
      type: "ADD_TO_SEARCH_HISTORY",
      searchTerm: queryState,
    });

    try {
      const data = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      setQueryState("");
      return setSearchResults(data.data.hits);
    } catch (err) {
      setErrorExists(true);
      setQueryState("");
    }
  }

  return (
    <div className="App">
      <SearchInput
        className="search-input"
        handleInputChange={handleInputChange}
        submitSearch={submitSearch}
        query={queryState}
      />
      <Container>
      {userSearchHistory.length === 0 && <NewSearchMessage />}
        <Row>
          <Col md={3} className="text-center">
            {userSearchHistory.length > 0 &&<h4>Previous Searches:</h4>}
            {userSearchHistory.map((searchTerm, index) => (
              <SearchHistoryElement
                key={index}
                submitSearch={submitSearch}
                searchTerm={searchTerm}
              />
            ))}
          </Col>
          <Col md={9} className="text-right align-right">
          {console.log("search history", userSearchHistory)}
            {errorExists && <ErrorMessage />}
            {emptySearch && <EmptySearchErrorMessage />}
            {searchResults && <h4>Search Results:</h4>}
            {searchResults &&
              searchResults.map(
                (result) =>
                  result.title && (
                    <SearchResult
                      key={result.objectID}
                      title={result.title}
                      author={result.author}
                      url={result.url}
                    />
                  )
              )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
