import React from "react";
import { isCompositeComponent } from "react-dom/test-utils";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
