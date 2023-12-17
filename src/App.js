import React, { useState, useMemo } from "react";
import styles from "./App.module.css";
import { randomProducts } from "./randomProducts";
import SortByColorAndCategory from "./SortByColorAndCategory";
import SortButtons from "./SortButtons";
import SearchBar from "./SearchBar";
import Product from "./Product";

const App = () => {
  const [initialProducts] = useState(randomProducts(10));
  const [products] = useState(initialProducts);
  const [sortOption, setSortOption] = useState("ratingDecr");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    if (sortOption === "priceInc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDecr") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "ratingDecr") {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted;
  }, [products, sortOption]);
  const filteredProducts = useMemo(() => {
    return sortedProducts.filter((product) => {
      const name = product.name.toLowerCase();
      const description = product.description.toLowerCase();
      const search = searchTerm.toLowerCase();
      return name.includes(search) || description.includes(search);
    });
  }, [searchTerm, sortedProducts]);
  return (
    <div className={styles.productMainContainer}>
      <div className={styles.header}>
        <div>
          <SortButtons sortOption={sortOption} setSortOption={setSortOption} />
        </div>
        <div>
          <SearchBar setSearchTerm={setSearchTerm} />
        </div>
      </div>
      <div className={styles.containerOfsortsAndproducts}>
        <div>
          <SortByColorAndCategory
            products={products}
            selectedColors={selectedColors}
            selectedCategories={selectedCategories}
            setSelectedColors={setSelectedColors}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
        <div>
          <Product
            filteredProducts={filteredProducts}
            selectedColors={selectedColors}
            selectedCategories={selectedCategories}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
