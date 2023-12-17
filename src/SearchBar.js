import React from "react";
import styles from "./App.module.css";

const SearchBar = ({ setSearchTerm }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.trim());
  };
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.inputSearch}
        type="text"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default React.memo(SearchBar);
