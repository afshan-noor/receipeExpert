import React from "react";
import styles from './Recipe.module.css';

interface RecipeIndexProps {
  alphaIndex: (alpha: string) => void;
}

const RecipeIndex: React.FC<RecipeIndexProps> = ({ alphaIndex }) => {
  const categories: string[] = ["Starter", "Dessert", "Seafood"]; // Update the categories

  return (
    <>
      {categories.map((category, index) => (
        <div className={styles.numBox} key={index} onClick={() => alphaIndex(category)}>
          <h3 className={styles.box}>
            <span>{category}</span>
          </h3>
        </div>
      ))}
    </>
  );
};

export default RecipeIndex;
