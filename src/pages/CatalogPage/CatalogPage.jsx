import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/truck/operations";
import { selectFilteredTrucks } from "../../redux/filters/selectors";
import { isLoading } from "../../redux/truck/selectors";
import TruckList from "../../components/TruckList/TruckList";
import Filters from "../../components/Filters/Filters";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filteredTrucks = useSelector(selectFilteredTrucks);
  const loading = useSelector(isLoading);
  const [visibleCount, setVisibleCount] = useState(4);
  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(4);
  }, [filteredTrucks]);

  const onClickButton = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      <Helmet>
        <title>Catalog Page</title>
      </Helmet>
      <div className={css.catalogContainer}>
        <Filters />
        <TruckList filteredTrucks={filteredTrucks.slice(0, visibleCount)} />
      </div>
      {!loading && visibleCount < filteredTrucks.length && (
        <button className={css.searchBtn} type="button" onClick={onClickButton}>
          Load more
        </button>
      )}
    </>
  );
};

export default CatalogPage;
