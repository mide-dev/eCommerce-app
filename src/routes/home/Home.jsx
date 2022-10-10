import { Outlet } from "react-router-dom";

import CategoryItem from "../../components/category-item/CategoryItem";
import { categories } from "../../constants";
import "./home.scss";

const Home = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Home;
