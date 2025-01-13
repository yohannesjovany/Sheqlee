import CallForAction from "../components/callForAction/CallForAction";
import HeroSection from "../components/HeroSection/HeroSection";
import JobPostSection from "../components/jobs/JobPostSection";
import StatsSection from "../components/statsSection/StatsSection";
import TagsSection from "../components/tags/TagsSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <TagsSection />
      <JobPostSection />
      <CallForAction />
      <StatsSection />
    </>
  );
};

export default Home;
