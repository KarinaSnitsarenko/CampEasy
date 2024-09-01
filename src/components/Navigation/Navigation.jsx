import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const navActiveLink = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const Navigation = () => {
  return (
    <>
      <nav className={css.navContainer}>
        <NavLink to="/" className={navActiveLink}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={navActiveLink}>
          Catalog
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
