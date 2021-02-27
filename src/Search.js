import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { useHistory } from "react-router-dom";
import { UseStateValue } from "./StateProvider";
import { actionType } from "./Reducer";

function Search({ HideButton }) {
  const [input, setInput] = useState([]);

  const history = useHistory();

  const [{}, dispatch] = UseStateValue();

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const Search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionType.result_Item,
      term: input,
    });
    history.push("/search");
    // setInput(e.target.value);
  };
  return (
    <form className="search">
      <div className="searchInput">
        <SearchIcon className="Icon" onClick={Search} />
        <input
          type="text"
          name="text"
          className="input"
          value={input}
          onChange={changeInput}
        />
        <MicIcon className="Icon" />
      </div>

      {!HideButton ? (
        <div className="searchButton">
          <button variant="outlined" className="Button" onClick={Search}>
            Google Search
          </button>
          <button variant="outlined" className="Button">
            I'm feeling lucky
          </button>
        </div>
      ) : (
        <div className="searchButton" className="hideButton">
          <button variant="outlined" className="Button" onClick={Search}>
            Google Search
          </button>
          <button variant="outlined" className="Button">
            I'm feeling lucky
          </button>
        </div>
      )}
    </form>
  );
}

export default Search;
