import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MainInfo from "../../components/MainInfo/MainInfo";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <MainInfo />
    </>
  );
};

export default HomePage;
