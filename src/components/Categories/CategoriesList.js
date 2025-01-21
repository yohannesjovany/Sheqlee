import { ReactComponent as Categories } from "../../assets/icons/categories.svg";
import Classes from "./CategoriesList.module.css";
import ellipse from "../../assets/icons/Ellipse 2.svg";
import { ReactComponent as UiUx } from "../../assets/icons/ui_ux_design.svg";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ id, name, jobs, subscribers, Logo }) => {
  const navigate = useNavigate();
  const hundleClick = () => {
    navigate(`/categories/${id}`);
  };
  return (
    <div className={Classes.wrapper} onClick={hundleClick}>
      <div className={Classes.categoryLogo}>
        <Logo />
      </div>
      <div className={Classes.container}>
        <h1>{name}</h1>
        <p>
          <span>{`${jobs} jobs `}</span>
          <img src={ellipse} alt="ellipse icon" />
          <span>{` ${subscribers} subscribers`}</span>
        </p>
      </div>
    </div>
  );
};

const catItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6];

const CategoriesList = () => {
  return (
    <section>
      <header className={Classes.header}>
        <Categories />
        <div>
          <h1>All Categories</h1>
          <p>
            Job categories along with their respective number of <br /> jobs
            posted and number of subscribers.
          </p>
        </div>
      </header>
      <main className={Classes.mainTagContainer}>
        {catItems.map((Item) => (
          <CategoryItem
            id="cat1"
            name="Web Frontend"
            jobs={140}
            subscribers={2173}
            Logo={UiUx}
          />
        ))}
      </main>
    </section>
  );
};

export default CategoriesList;
