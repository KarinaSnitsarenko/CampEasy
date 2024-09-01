import { useSelector } from "react-redux";
import ClientForm from "../ClientForm/ClientForm";
import { selectTruck } from "../../redux/truck/selectors";
import { nanoid } from "nanoid";
import icons from "../../assets/sprite.svg";
import css from "./ReviewsTruk.module.css";

const ReviewsTruk = () => {
  const truck = useSelector(selectTruck);
  const totalStars = 5;
  return (
    <div className={css.reviewContainer}>
      <ul className={css.reviewList}>
        {truck.reviews.length === 0 ? (
          <p>Sorry, there are no reviews!</p>
        ) : (
          truck.reviews.map((item) => (
            <li key={nanoid()}>
              <div className={css.reviewerTwo}>
                <div className={css.reviewerName}>
                  {item.reviewerName.charAt(0)}
                </div>
                <div>
                  <h3>{item.reviewerName}</h3>
                  {[...Array(totalStars)].map((_, starIndex) => (
                    <svg
                      width="16"
                      height="16"
                      fill={
                        starIndex < item.reviewer_rating ? "#ffc531" : "#f2f4f7"
                      }
                      key={nanoid()}
                    >
                      <use href={`${icons}#icon-Rating-1`} />
                    </svg>
                  ))}
                </div>
              </div>
              <p className={css.reviewComment}>{item.reviewComment}</p>
            </li>
          ))
        )}
      </ul>
      <ClientForm />
    </div>
  );
};

export default ReviewsTruk;
