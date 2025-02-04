import Classes from "./StatsSection.module.css";
import programmer from "../../assets/icons/programmer.svg";
import company from "../../assets/icons/company (2).svg";
import handshake from "../../assets/icons/handshake.svg";
import { useSelector } from "react-redux";

const StatsSection = () => {
  const auth = useSelector((state) => state.auth);
  const loading = true;

  if (auth.user.role === "freelancer") return null;
  return (
    <section className={Classes.statsSection}>
      <header>
        <h1>Platform stats</h1>
      </header>
      <main className={loading ? Classes.shimmer : undefined}>
        <div>
          <img src={handshake} alt="handshake icon" />
          <h1>100K+</h1>
          <p>
            <span>Total jobs posted on</span>
            <span>
              <br /> Sheqlee to date
            </span>
          </p>
        </div>
        <div>
          <img src={programmer} alt="propgrammer icon" />
          <h1>15K+</h1>
          <p>
            <span>Ethiopian professionals</span>
            <span>
              <br /> signed up so far
            </span>
          </p>
        </div>
        <div>
          <img src={company} alt="company icon" />
          <h1>1K+</h1>
          <p>
            <span>Korean companies</span>
            <span>
              <br />
              posting jobs daily
            </span>
          </p>
        </div>
      </main>
    </section>
  );
};
export default StatsSection;
