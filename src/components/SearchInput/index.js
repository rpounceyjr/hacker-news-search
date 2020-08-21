import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

function SearchInput({ handleInputChange, submitSearch, query }) {
  return (
    <Navbar className="navbar" bg="dark" expand="lg">
      <Navbar.Brand href="#home">Hacker News Search</Navbar.Brand>
      <Form
        inline
        className="ml-auto"
        onSubmit={(event) => submitSearch(query, event)}
      >
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={handleInputChange}
          value={query}
        />
        <Button
          variant="outline-success"
          onClick={(event) => submitSearch(query, event)}
        >
          Search
        </Button>
      </Form>
    </Navbar>
  );
}

export default SearchInput;
