import CategoryItem from "./components/category-item/CategoryItem";
import { categories } from "./constants";
import "./categoriesContainer-styles.scss";

const App = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
};

export default App;
