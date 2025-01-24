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
      loading={true}
    >
      {tags.map((tag) => (
        <Tag
          id={"tag1"}
          name={tag.name}
          jobs={tag.jobs}
          subscribers={tag.subscribers}
          loading={true}
        />
      ))}
    </SectionWrapper>
  );
};

export default TagsSection;
