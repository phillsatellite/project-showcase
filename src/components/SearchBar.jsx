import React, {useState} from "react";
import "./SearchBar.css";

const SearchBar = ({onSearchSubmit}) => {
    const [inputValue, setInputValue] = useState("");

    //Handle input changes and update local state/update parent
    function handeChange(e) {
        const search = e.target.value;
        setInputValue(search);
        onSearchSubmit(search);
    }

    function handleClick() {
        onSearchSubmit(inputValue);
    }

    return (
        <div className="searchBox">
            <input  
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={handeChange}
            aria-label="Search projects"
            />
            <button type="button" onClick={handleClick}>Search</button>
        </div>
    );
};

export default SearchBar;