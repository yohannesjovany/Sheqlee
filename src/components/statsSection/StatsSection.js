import Classes from "./StatsSection.module.css";
import programmer from "../../assets/icons/programmer.svg";
import company from "../../assets/icons/company (2).svg";
import handshake from "../../assets/icons/handshake.svg";

const StatsSection = () => {
  return (
    <section className={Classes.statsSection}>
      <header>
        <h1>Platform stats</h1>
      </header>
      <main>
        <img src={handshake} alt="handshake icon" />
        <img src={programmer} alt="propgrammer icon" />
        <img src={company} alt="company icon" />
        <h1>100K+</h1>
        <h1>15K+</h1>
        <h1>1K+</h1>
        <p>Total jobs posted on Sheqlee to date</p>

        <p>Ethiopian professionals signed up so far</p>

        <p>Korean companies posting jobs daily</p>
      </main>
    </section>
  );
};
export default StatsSection;
