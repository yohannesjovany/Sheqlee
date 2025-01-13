// import classes from "./TagsSection.module.css";
import SectionWrapper from "../UI/SectionWrapper";
import Tag from "./Tag";

// to be replaced with real data from back end
const tags = [
  { name: "JavaScript", jobs: 14, subscribers: 173 },
  { name: "JavaScript", jobs: 14, subscribers: 173 },
  { name: "JavaScript", jobs: 14, subscribers: 173 },
  { name: "JavaScript", jobs: 14, subscribers: 173 },
  { name: "JavaScript", jobs: 14, subscribers: 173 },
  { name: "JavaScript", jobs: 14, subscribers: 173 },
];

const TagsSection = () => {
  return (
    <SectionWrapper
      withHeader={true}
      title="Popular tags"
      info="73+ more tags"
      withBackground="withBackground"
    >
      {tags.map((tag) => (
        <Tag name={tag.name} jobs={tag.jobs} subscribers={tag.subscribers} />
      ))}
    </SectionWrapper>
  );
};

export default TagsSection;
