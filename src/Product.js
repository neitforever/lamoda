import React, { useEffect, useState } from "react";
import styles from "./App.module.css";

const Product = ({ filteredProducts, selectedColors, selectedCategories }) => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const newFilteredItems = filteredProducts.filter(
      (product) =>
        (selectedColors.length === 0 ||
          selectedColors.includes(product.color)) &&
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product.category))
    );
    setFilteredItems(newFilteredItems);
  }, [filteredProducts, selectedColors, selectedCategories]);

  if (filteredItems.length === 0) {
    return <p>По вашему запросу ничего не найдено</p>;
  }

  return (
    <div className={styles.productContainer}>
      {filteredItems.map((product) => (
        <div className={styles.oneProduct} key={product.id}>
          <div className={styles.productInfo}>
            <div className={styles.productimg}>
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className={styles.productValues}>
              <h2>{product.name}</h2>
              <h4>{product.description}</h4>
              <span className={styles.color}>
                <p className={styles.colorText}>Цвет:</p> <p>{product.color}</p>
              </span>
              <span className={styles.price}>
                <p className={styles.priceText}>Цена:</p> <p>{product.price}</p>
              </span>
              <span className={styles.category}>
                <p className={styles.categoryText}>Категория:</p>{" "}
                <p>{product.category}</p>
              </span>
              <span className={styles.rating}>
                <p className={styles.ratingText}>Рейтинг:</p>{" "}
                <p>{product.rating}</p>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Product);
