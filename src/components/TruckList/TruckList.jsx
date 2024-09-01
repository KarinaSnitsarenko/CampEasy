import css from "./TruckList.module.css";

import { useSelector } from "react-redux";
import { isLoading } from "../../redux/truck/selectors";
import Loader from "../Loader/Loader";
import TruckCard from "../TruckCard/TruckCard";

const TruckList = ({ filteredTrucks }) => {
  const loading = useSelector(isLoading);
  if (loading) {
    return <Loader />;
  }

  if (filteredTrucks.length === 0) {
    return <p className={css.text}>Sorry, there are no campers!</p>;
  }
  return (
    <ul className={css.list}>
      {filteredTrucks.map((item) => (
        <li className={css.list_tem} key={item.id}>
          <TruckCard truck={item} />
        </li>
      ))}
    </ul>
  );
};
export default TruckList;
