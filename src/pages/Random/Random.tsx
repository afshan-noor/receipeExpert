import React, { useEffect, useState } from 'react';
import styles from "./Random.module.css"










const RandomRecipe:React.FC = () => {
  const [randomRecipe, setRandomRecipe] = useState(null);

  useEffect(() => {
  
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => {
       
        setRandomRecipe(data.meals[0]);
      })
      .catch((error) => {
        console.error('Error fetching random recipe:', error);
      });
  }, []); 

    return(
        <>
         <div>
      {randomRecipe ? (
        <div  className={styles.page}>
             <section className={styles.recipehero}>
         
          <img  className={styles.recipeheroimg} src={randomRecipe['strMealThumb']} alt={randomRecipe['strMeal']} />
          <article className={styles.recipeinfo}>
          <h2 >{randomRecipe['strMeal']}</h2>
          <div className={styles.instruction}>
               <h2>Instructions</h2><br />
           </div>
          <p>{randomRecipe['strInstructions']}</p>
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
      ) : (
        <p>Loading random recipe...</p>
      )}
    </div>
        
        </>
    )
}
export default RandomRecipe;