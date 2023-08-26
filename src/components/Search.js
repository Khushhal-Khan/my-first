import React, { useState } from "react";
import classes from "./Search.module.css";

const Search = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const searchHandler = () => {
    const filtered = data.filter((item) =>
      item.Mov.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(filtered);
    setFilteredData(filtered);
    setSearchQuery("");
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };
  return (
    <>
      <div className={classes.search}>
        <input
          type="text"
          placeholder="Search Here"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={searchHandler}>Search</button>

        <div>
          {filteredData.map((item) => (
            <div key={item.id}>{item.Mov}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
