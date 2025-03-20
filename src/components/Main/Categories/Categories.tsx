import { useMemo } from "react";

import classes from "./Categories.module.scss";

import CategoriesCard from "./CategoriesCard/CategoriesCard";
import CategoriesCardData from "./CategoriesCard/CategoriesCardData";

const Categories = () => {
  const CategoriesItem = useMemo(() => {
    return CategoriesCardData.map((card) => (
      <CategoriesCard key={card.id} {...card} />
    ));
  }, []);

  return (
    <section className={classes.slider}>
      <div className={classes.sliderInner}>
        <h2 className={classes.title}>Категории</h2>
        <div className={classes.cardSection}>{CategoriesItem}</div>
      </div>
    </section>
  );
};
export default Categories;
