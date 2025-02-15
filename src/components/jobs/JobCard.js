import Classes from "./JobCard.module.css";

import logo from "../../assets/icons/product_design.svg";
import calendar from "../../assets/icons/calendar.svg";
import clock from "../../assets/icons/Icon feather-clock.svg";
import company from "../../assets/icons/company.svg";
import { useNavigate } from "react-router-dom";

const JobCard = (props) => {
  // const { logo, title, description } = props;
  const navigate = useNavigate();
  const hundleClick = () => {
    if (props.loading) return;
    navigate("/jobs/jobid");
  };

  return (
    <div className={Classes.card} onClick={hundleClick}>
      <div>
        <header className={props.loading ? Classes.shimmer : undefined}>
          {/* <div class={Classes.overlay}></div> */}
          {!props.noIcon && <img src={logo} alt="catagory icon" />}

          <span>Product Designer</span>
        </header>
        <main className={props.loading ? Classes.shimmer : undefined}>
          <div className={Classes.overlay}></div>
          <div className={Classes.overla}></div>
          <p>
            KeplerLab is a VC-backed, stealth, application-only platform for
            senior product designers to team up with the best companies on their
            next big thing.
          </p>
        </main>
      </div>
      <div
        className={`${Classes.details} ${props.loading ? Classes.shimmer : ""}`}
      >
        <p>
          <span className={Classes.imgOverlay}></span>
          <span className={Classes.infoOverlay}></span>
          <img src={calendar} alt="calendar icon" />
          <span>30mins ago</span>
        </p>
        <p>
          <span className={Classes.imgOverlay}></span>
          <span className={Classes.infoOverlay}></span>
          <img src={company} alt="company icon" />
          <span>Entrust Datacard</span>
        </p>
        <p>
          <span className={Classes.imgOverlay}></span>
          <span className={Classes.infoOverlay}></span>
          <img src={clock} alt="clock icon" />
          <span>Full-Time</span>
        </p>
        <p>
          <span className={Classes.imgOverlay}></span>
          <span className={Classes.infoOverlay}></span>
          <img src={calendar} alt="calander icon" />
          <span>Intermediate</span>
        </p>
        <p>
          <span className={Classes.imgOverlay}></span>
          <span className={Classes.infoOverlay}></span>
          <img src={company} alt="company icon" />
          <span>$15/hr</span>
        </p>
        <button onClick={hundleClick}>
          <span>Apply</span>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
