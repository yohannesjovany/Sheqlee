import classes from "./ListOfCompanies.module.css";
import { ReactComponent as Company } from "../../assets/icons/company.svg";
import SectionWrapper from "../UI/SectionWrapper";
import Tag from "../tags/Tag";
const companyList = [1, 2, 3, 4, 5, 6, 7, 8];
const ListOfCompanies = () => {
  return (
    <section>
      <header className={classes.header}>
        <Company />
        <div>
          <h1>Companies on Sheqlee</h1>

          <p className={classes.desktopInfo}>
            List of the companies on Sheqlee with their number <br />
            of job posts and subscribers.
          </p>
          <p className={classes.mobileInfo}>
            List of the companies on Sheqlee with their number of job posts and
            subscribers.
          </p>
        </div>
      </header>
      <main>
        {
          <SectionWrapper isFlex={true}>
            {companyList.map((job) => (
              <Tag
                id="cam1"
                name="Kepler Co., Ltd."
                jobs={140}
                subscribers={3500}
                verified={true}
                isCompany={true}
              />
            ))}
          </SectionWrapper>
        }
      </main>
    </section>
  );
};
export default ListOfCompanies;
