import React from "react";
import "./SearchBox.css";
import P3 from "../../assets/search.svg"

const SearchBox = () => {
    return(
        <div className="searchbox-container">
            <input
                        id="search-text" placeholder="What are you looking for..."
                        type="text" />

                <button class="btn green-btn" type="submit">
                  <em><img src={P3} alt="search" /></em>Search
                </button>
                <button class="btn blue-btn" type="submit">Cancel</button>
        </div>
    )
}

export default SearchBox;