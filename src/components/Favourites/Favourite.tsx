import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import classes from './Favourite.module.css'

const FavouriteFoods:React.FC = () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=rice'
  const [recipes, setRecipes] = useState([])
  const [showRecipe, setShowRecipe] = useState(0)

  useEffect(() => {
    const fetchRecipes = async() => {
      try {
        const res = await fetch(URL) 
        const data = await res.json()
        console.log(data.meals)
        setRecipes(data.meals)
      } catch (error) {
        console.error(error)
      }
    }
    fetchRecipes()
  }, [])

  const handleArrow = (direction:any) => {
    if(direction === 'left'){
      if(showRecipe === 0){
        setShowRecipe(recipes.length - 1)
      } else {
        setShowRecipe(prev => prev - 1)
      }
    }

    if(direction === 'right'){
      if(showRecipe === recipes.length - 1){
        setShowRecipe(0)
      } else {
        setShowRecipe(prev => prev + 1)
      }
    }
  }

  return (
    <>  
     <div className={classes.favourite}>
    <h1>Your Favourite Recipe</h1>
</div>
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <div className={classes.recipes}>
            <AiOutlineArrowLeft onClick={() => handleArrow('left')} className={classes.leftArrow}/>
            {recipes?.map((recipe) => (
              <div style={{transform: `translateX(-${showRecipe * 750}px)`}} className={classes.recipe} key={recipe['idMeal']}>
                 <img src={recipe?.['strMealThumb']} alt="" />
                 <h3>{recipe?.['strMeal']}</h3>
              </div>
            ))}
            <AiOutlineArrowRight onClick={() => handleArrow('right')} className={classes.rightArrow}/>
          </div>
          <div className={classes.dots}>
            {recipes?.map((recipe, index) => (
              <div onClick={() => setShowRecipe(index)} className={`${classes.dot} ${showRecipe === index && classes.activeDot}`} key={recipe['idMeal']}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FavouriteFoods