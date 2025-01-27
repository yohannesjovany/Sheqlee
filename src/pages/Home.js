import { useSelector } from "react-redux";
import CallForAction from "../components/callForAction/CallForAction";
import HeroSection from "../components/HeroSection/HeroSection";
import JobPostSection from "../components/jobs/JobPostSection";
import StatsSection from "../components/statsSection/StatsSection";
import TagsSection from "../components/tags/TagsSection";
import FreelancerHomeSection from "../components/jobs/FreelancerHomeSection";
const Home = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <HeroSection />
      {auth.user.role === "freelancer" || (
        <>
          <TagsSection />
          <JobPostSection />
        </>
      )}
      {auth.user.role === "freelancer" && <FreelancerHomeSection />}
      <CallForAction />
      <StatsSection />
    </>
  );
};

export default Home;
