import { Link } from "react-router-dom";
import css from "./MainInfo.module.css";

const MainInfo = () => {
  return (
    <section className={css.sectionHome}>
      <div className={css.containerHome}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <Link to="/catalog">
          <button type="button" className={css.titleBtn}>
            View Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MainInfo;
