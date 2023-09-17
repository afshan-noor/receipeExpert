import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.navbar} ${isNavOpen ? styles.open : ''}`}>
          <button className={styles.toggleButton} onClick={toggleNav}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </button>
          <NavLink to="" onClick={closeNav}>
            <h1>
              <span className={styles.white}>Recipe</span>
              <span className={styles.red}>Expert</span>
            </h1>
          </NavLink>
          <ul>
            <li className={styles.white}>
              <NavLink
                className={styles.white}
                to=""
                onClick={closeNav}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.white}>
              <NavLink
                className={styles.white}
                to="choose"
                onClick={closeNav}
              >
                Choose your Recipe
              </NavLink>
            </li>
            <li className={styles.white}>
              <NavLink
                className={styles.white}
                to="randomRecipe"
                onClick={closeNav}
              >
                Random Recipe
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
