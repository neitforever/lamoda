import React from "react";
import styles from "./App.module.css";

function SortByColorAndCategory({
  products,
  selectedColors,
  selectedCategories,
  setSelectedColors,
  setSelectedCategories,
}) {
  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  return (
    <div className={styles.typesOfSort}>
      <div className={styles.sortByColor}>
        <h3 className={styles.tagOfSort}>Фильтр по цвету</h3>
        {Array.from(
          new Set(products.map((product) => product.color)).keys()
        ).map((color) => (
          <label className={styles.sortByColorText} key={color}>
            <input
              className={styles.SortCheckbox}
              type="checkbox"
              value={color}
              checked={selectedColors.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            {color}
          </label>
        ))}
      </div>

      <div className={styles.sortByCategory}>
        <h3 className={styles.tagOfSort}>Фильтр по категории</h3>
        {Array.from(new Set(products.map((product) => product.category))).map(
          (category) => (
            <label className={styles.sortByCategoryText} key={category}>
              <input
                className={styles.SortCheckbox}
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          )
        )}
      </div>
    </div>
  );
}

export default React.memo(SortByColorAndCategory);
