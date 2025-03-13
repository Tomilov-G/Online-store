import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h1>По вашему запросу ничего не найдено</h1>
      <button>
        <NavLink to="/">На главную</NavLink>
      </button>
    </>
  );
};
