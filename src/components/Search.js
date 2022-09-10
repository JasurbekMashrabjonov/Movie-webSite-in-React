import React, { useContext, useState } from "react";
import "../styles/search2.css";

import { ContextProvider } from "../reducer/Context";

function Search(props) {
  const [searchState, setSearchState] = useState("man");
  const { setSearch } = useContext(ContextProvider);

  const showSearch = (s) => {
    setSearch(searchState);
    s.target.value = "";
  };

  return (
    <>
      <div className="input-group ">
        <input
          type="text"
          className="form-control bg-dark"
          placeholder="Search... "
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onInput={(s) => {
            setSearch(s.target.value)
            setSearchState(s.target.value);
          }}
        />
        <button
          className="btn btn-outline-secondary btn-light"
          type="button"
          id="button-addon2"
          onClick={showSearch}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {/* <form>
        <input type="text" placeholder="Search..." className="search_bar " />
        <button className="btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form> */}
    </>
  );
}

export default Search;
