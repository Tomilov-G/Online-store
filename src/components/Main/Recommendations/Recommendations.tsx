import { useEffect, useMemo, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import classes from "./Recommendations.module.scss";

import RecommendationsCard from "./RecommendationsCard/RecommendationsCard";
import RecommendationsToggle from "./RecommendationsToggle/RecommendationsToggle";

import BuyNowButton from "../../../ui/Buttons/BuyNowButton/BuyNowButton";
import SCREEN_SIZES from "../../../constants/screenSizes";
import fetchCatalogItems from "../../../api/services/GadgetsService";

const Recommendations = () => {
  const dispatch = useAppDispatch();
  const { catalogItems } = useAppSelector((state) => state.catalog);

  const filteredCatalogItems = useMemo(() => {
    return catalogItems
      .filter((item) => +item.id <= 8)
      .map((card) => (
        <RecommendationsCard key={card.id} {...card}>
          <BuyNowButton />
        </RecommendationsCard>
      ));
  }, [catalogItems]);

  const FIRST_INDEX: number = 0;
  const LAST_INDEX: number = filteredCatalogItems.length - 1;

  const [cardsToShow, setCardsToShow] = useState<number>(5);
  const [startIndex, setStartIndex] = useState<number>(FIRST_INDEX);

  useEffect(() => {
    dispatch(fetchCatalogItems());
  }, []);

  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      switch (true) {
        case width >= SCREEN_SIZES.DESKTOP:
          setCardsToShow(5);
          break;
        case width >= SCREEN_SIZES.TABLET:
          setCardsToShow(4);
          break;
        case width >= SCREEN_SIZES.MOBILE:
          setCardsToShow(3);
          break;
        case width >= SCREEN_SIZES.SMALL_MOBILE:
          setCardsToShow(2);
          break;
        default:
          setCardsToShow(1);
      }
    };
    window.addEventListener("resize", updateCardsToShow);

    updateCardsToShow();
    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  function nextCard() {
    if (startIndex + cardsToShow <= LAST_INDEX) {
      setStartIndex((prev) => prev + 1);
    }
  }

  function prevCard() {
    setStartIndex((prev) => (prev > FIRST_INDEX ? prev - 1 : prev));
  }

  return (
    <section className={classes.recommendations}>
      <div className={classes.recommendationsInner}>
        <RecommendationsToggle
          nextCard={nextCard}
          prevCard={prevCard}
          disabledLeftArrowClassName={
            startIndex <= FIRST_INDEX ? classes.disableLeftArrow : ""
          }
          disabledRightArrowClassName={
            startIndex + cardsToShow - 1 === LAST_INDEX
              ? classes.disableRightArrow
              : ""
          }
        />
        <div className={classes.sliderWrapper}>
          <div
            className={classes.cardSection}
            style={
              {
                transform: `translateX(-${startIndex * (100 / cardsToShow)}%)`,
                transition: "transform 0.4s ease-in-out",
                "--cards-to-show": cardsToShow,
              } as React.CSSProperties
            }
          >
            {filteredCatalogItems}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
