import React, { useEffect, useRef, useState } from 'react';
import MealItem from '../MealItem/MealItem';
import RecipeIndex from '../RecipeIndex/RecipeIndex';
import FavouriteFoods from '../Favourites/Favourite';
import styles from './Product.module.css';

const Product: React.FC = () => {
  const [url, setUrl] = useState<string>('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
  const [item, setItem] = useState<any[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const searchTimeoutRef = useRef<number | null>(null);

  const fetchData = (apiUrl: string) => {
    setShow(false);
    setErrorMessage('');

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals || []);
        setShow(true);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setErrorMessage('An error occurred while fetching data.');
        setShow(false);
      });
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const setIndex = (alpha: string) => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${alpha}`;
    fetchData(apiUrl);
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearch(inputValue);

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = window.setTimeout(() => {
      if (inputValue.trim() === '') {
        setSearch('');
        setUrl('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
      } else {
        setSearch(inputValue);
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
      }
    }, 500);
  };

  return (
    <>
      <section className={styles.product}>
        <div className={styles.sectionheading}>
          <h1 className={styles.red}>Products</h1>
          <div className={styles.searchBox}>
            <input
              value={search}
              placeholder="Search"
              type="search"
              className={styles.searchbar}
              onChange={handleSearchInputChange}
              onBlur={handleSearchInputChange}
            />
          </div>
        </div>
        <div className={styles.indexContainer}>
          <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
        </div>
        <div className={styles.container}>
          <div className={styles.productmain}>
            {show ? (
              item.length > 0 ? (
                <MealItem data={item} />
              ) : (
                <div className={styles.found}>
                  <h1>No Recipes Found.</h1>
                </div>
              )
            ) : (
              <p className={styles.loading}>Loading.......</p>
            )}
          </div>
        </div>
      </section>

      <FavouriteFoods />
    </>
  );
};

export default Product;
