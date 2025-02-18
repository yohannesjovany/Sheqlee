// import classes from "./TagsSection.module.css";
import { useEffect, useState } from "react";
import SectionWrapper from "../UI/SectionWrapper";
import Tag from "./Tag";

// to be replaced with real data from back end
const falsetags = [
  { name: "JavaScript", jobs: 14, subscribers: 173 },
  { name: "JavaScript", jobs: 14, subscribers: 173 },
  { name: "JavaScript", jobs: 14, subscribers: 17433 },
  { name: "JavaScript", jobs: 1433, subscribers: 173 },
  { name: "JavaScript", jobs: 14, subscribers: 17343 },
  { name: "JavaScript", jobs: 14, subscribers: 173 },
];

const TagsSection = () => {
  const [tags, setTags] = useState(falsetags);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("/api/tags");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.error("Error fetching tags:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  return (
    <SectionWrapper
      withHeader={true}
      title="Popular tags"
      info="73+ more tags" //tags legth is to be fetched from backend {`${totalJobs.toLocaleString()}+ jobs`}
      withBackground="withBackground"
      loading={loading}
    >
      {tags.map((tag) => (
        <Tag
          id={"tag1"}
          name={tag.name}
          jobs={Number(tag.jobs).toLocaleString()}
          subscribers={Number(tag.subscribers).toLocaleString()}
          loading={loading}
        />
      ))}
    </SectionWrapper>
  );
};

export default TagsSection;
