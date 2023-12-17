import React from "react";
import styles from "./App.module.css";

const SortButtons = ({ sortOption, setSortOption }) => {
  return (
    <div className={styles.sortButtons}>
      <button
        className={sortOption === "priceInc" ? "active" : ""}
        onClick={() => setSortOption("priceInc")}
      >
        Сначала дешевые
      </button>
      <button
        className={sortOption === "priceDecr" ? "active" : ""}
        onClick={() => setSortOption("priceDecr")}
      >
        Сначала дорогие
      </button>
      <button
        className={sortOption === "ratingDecr" ? "active" : ""}
        onClick={() => setSortOption("ratingDecr")}
      >
        Сначала популярные
      </button>
    </div>
  );
};

export default React.memo(SortButtons);
