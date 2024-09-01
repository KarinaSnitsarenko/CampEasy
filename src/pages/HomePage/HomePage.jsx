import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <main>
        <div className={css.sectionHome}>
          <div className={css.containerHome}>
            <h1 className={css.title}>Campers of your dreams</h1>
            <p>You can find everything you want in our catalog</p>
            <Link to="/catalog">
              <button type="button" className={css.titleBtn}>
                View Now
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
