import { FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import classes from "./FaboritesItem.module.scss";

interface FavoritesItemProps {
  id: string;
}

const FavoritesItem: FC<FavoritesItemProps> = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setIsFavorite(savedFavorites.includes(id));
  }, [id]);

  function addFavorites() {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    let updatedFavorites;
    if (savedFavorites.includes(id)) {
      updatedFavorites = savedFavorites.filter((favId: string) => favId !== id);
    } else {
      updatedFavorites = [...savedFavorites, id];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(updatedFavorites.includes(id));
  }

  return (
    <div className={classes.favorites}>
      <FontAwesomeIcon
        icon={faHeart}
        className={`${classes.icon} ${isFavorite ? classes.favoriteIcon : ""}`}
        onClick={addFavorites}
      />
    </div>
  );
};

export default FavoritesItem;
