import { useState } from "react";
import BuyNowButton from "../../../ui/Buttons/BuyNowButton/BuyNowButton";
import classes from "./Recommendations.module.scss";
import RecommendationsCard from "./RecommendationsCard/RecommendationsCard";
import RecommendationsCardData from "./RecommendationsCard/RecommendationsCardData";
import RecommendationsToggle from "./RecommendationsToggle/RecommendationsToggle";

const Recommendations = () => {
  const VISIBLE_CARDS = 6;

  const [startIndex, setStartIndex] = useState(0);

  function nextCard() {
    setCards((prev) => prev + 1 <= RecommendationsCardData.length - VISIBLE_CARDS ? prev + 1 : prev);
  }
  function prevCard() {}
  return (
    <section className={classes.recommendations}>
      <div className={classes.recommendationsInner}>
        <RecommendationsToggle nextCard={nextCard} prevCard={prevCard} />
        <div className={classes.cardSection}>
          {cards.map((card) => (
            <RecommendationsCard key={card.id} {...card}>
              <BuyNowButton />
            </RecommendationsCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
