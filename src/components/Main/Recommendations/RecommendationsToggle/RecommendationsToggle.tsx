import classes from "./RecommendationsToggle.module.scss";
import leftArrow from "../../../../assets/icons/LeftArrow.svg";
import rightArrow from "../../../../assets/icons/RightArrow.svg";
import { FC } from "react";

interface RecommendationsToggleProps {
    prevCard: () => void; 
    nextCard: () => void; 
}

const RecommendationsToggle: FC<RecommendationsToggleProps> = ({ prevCard, nextCard }) => {
  return (
    <div className={classes.toggleSection}>
      <h2 className={classes.title}>Рекомендуем приобрести</h2>
      <div className={classes.arrows}>
        <img
          src={leftArrow}
          alt=""
          className={classes.arrowIcon}
          onClick={prevCard}
        />
        <img
          src={rightArrow}
          alt=""
          className={classes.arrowIcon}
          onClick={nextCard}
        />
      </div>
    </div>
  );
};

export default RecommendationsToggle;
