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
        <div>
          <img src={handshake} alt="handshake icon" />
          <h1>100K+</h1>
          <p>
            Total jobs posted on
            <br /> Sheqlee to date
          </p>
        </div>
        <div>
          <img src={programmer} alt="propgrammer icon" />
          <h1>15K+</h1>
          <p>
            Ethiopian professionals
            <br /> signed up so far
          </p>
        </div>
        <div>
          <img src={company} alt="company icon" />
          <h1>1K+</h1>
          <p>
            Korean companies <br />
            posting jobs daily
          </p>
        </div>
      </main>
    </section>
  );
};
export default StatsSection;
