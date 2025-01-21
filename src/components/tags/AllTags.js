import Classes from "./AllTags.module.css";
import { ReactComponent as Tagicon } from "../../assets/icons/tag.svg";
import Tag from "./Tag";
import SectionWrapper from "../UI/SectionWrapper";

const tagsList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4,
];

const AllTags = () => {
  return (
    <section>
      <header className={Classes.header}>
        <Tagicon />
        <h1>All Tags</h1>
        <p>
          Job tags along with their respective number of
          <br /> jobs posted and number of subscribers.
        </p>
      </header>
      <main>
        {
          <SectionWrapper>
            {tagsList.map((job) => (
              <Tag id="job1" name="Java" jobs={140} subscribers={3500} />
            ))}
          </SectionWrapper>
        }
      </main>
    </section>
  );
};

export default AllTags;
