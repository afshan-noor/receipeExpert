import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./RecipeInfo.module.css";

const RecipeInfo: React.FC = () => {
  const { MealId } = useParams<{ MealId: string }>();

  console.log(MealId);
  const [item, setItem] = useState<any | null>(null);

  useEffect(() => {
    if (MealId !== "") {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data !== null) {
            setItem(data?.meals[0]);
          }
        });
    } else {
      setItem(null);
    }
  }, [MealId]);

  let id = "";
  if (item) {
    const strYoutube = item.strYoutube;
    const str = strYoutube.split("=");
    id = str[str.length - 1];
  }

  return (
    <>
      {(!item) ? "" :
        <div className={styles.page}>
          <div className={styles.recipepage}>
            <section className={styles.recipehero}>
              <img className={styles.recipeheroimg} src={item.strMealThumb} alt="" />
              <article className={styles.recipeinfo}>
                <h2>{item.strMeal}</h2>
                <div className={styles.innercontent}>
                  <h3>{item.strArea}: Food</h3>
                  <h1>||</h1>
                  <h3>Category : {item.strCategory}</h3>
                </div>
                <div className={styles.instruction}>
                  <h2>Instructions</h2><br />
                </div>
                <p>{item.strInstructions}</p>
                <div className={styles.recipeicons}>
                  <article>
                    <i className="fas fa-clock"></i>
                    <h5>Prep time</h5>
                    <p>30 mins</p>
                  </article>
                  <article>
                    <i className="far fa-clock"></i>
                    <h5>Cook time</h5>
                    <p>15 mins</p>
                  </article>
                  <article>
                    <i className="fas fa-user-friends"></i>
                    <h5>Servings</h5>
                    <p>2 servings</p>
                  </article>
                </div>
              </article>
            </section>
          </div>
          <h2 className={styles.Video}>Get Help from Video</h2><br />
          <div>
            <iframe width="100%" height="515" title="recipeVideo" src={`https://www.youtube.com/embed/${id}`}>
            </iframe>
          </div>
        </div>
      }
    </>
  )
}

export default RecipeInfo;
