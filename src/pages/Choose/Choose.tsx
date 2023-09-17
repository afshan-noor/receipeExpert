
import { useEffect } from 'react'
import { useState } from 'react'
import classes from './Choose.module.css'
import { Link,useNavigate } from 'react-router-dom'


const Choose = () => {
    const URL_CATEGORIES = "https://www.themealdb.com/api/json/v1/1/categories.php"
    const URL_RECIPES = "https://www.themealdb.com/api/json/v1/1/filter.php?c="
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState("")
    const [recipes, setRecipes] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(URL_CATEGORIES)
                const data = await res.json()
                setCategories(data.categories.slice(0, 9))
                setActiveCategory(data.categories[0].strCategory)
            } catch (error) {
                console.error(error)
            }
        }
        fetchCategories()
    }, [])

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch(`${URL_RECIPES}${activeCategory}`)
                const data = await res.json()
                setRecipes(data.meals.slice(0, 11))
            } catch (error) {
                console.error(error)
            }
        }
        activeCategory && fetchRecipes()
    }, [activeCategory])

    return (
        <>
       
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.titles}>
                    <h5>Pick a Recipe from your Favourite Category</h5>
                </div>
                <div className={classes.categories}>
                    {categories?.map((category) => (
                        <div
                            onClick={() => setActiveCategory(category['strCategory'])}
                            className={`${classes.category} ${activeCategory === category['strCategory'] && classes.active}`}
                            key={category['idCategory']}>

                            {category['strCategory']}
                        </div>
                    ))}
                </div>
                <div className={classes.productmain}>
                        {recipes?.map((recipe) => (
                            <div key={recipe['idMeal']} className={classes.productItem}>
                                <Link
                                    onClick={() => navigate(`/restaurant/${recipe['idMeal']}`)}
                                    className={classes.imgContainer} to={''}                                >
                                    <img src={recipe['strMealThumb']} alt='img' />
                                </Link>
                                <div className={classes.productInner}>
                            <div className={classes.flexBox}>
                                <h3>{recipe['strMeal']}</h3>
                            </div>
                        </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Choose;