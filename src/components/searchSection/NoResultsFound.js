import Classes from "./NoResultsFound.module.css";
import { ReactComponent as Error } from "../../assets/icons/error.svg";

const NoResultsFound = () => {
  return (
    <section className={Classes.errorSection}>
      <Error />
      <h1>No results found</h1>
    </section>
  );
};

export default NoResultsFound;
