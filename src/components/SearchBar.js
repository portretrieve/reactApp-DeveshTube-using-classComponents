import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="videoSearch">Video Search</label>
            <input type="text" name="videoSearch" id="videoSearch" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
