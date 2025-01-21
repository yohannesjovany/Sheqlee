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
    navigate("/jobs/jobid");
  };

  return (
    <div className={Classes.card} onClick={hundleClick}>
      <div>
        <header>
          {!props.noIcon && <img src={logo} alt="catagory icon" />}{" "}
          <span>Product Designer</span>
        </header>
        <main className="">
          <p>
            KeplerLab is a VC-backed, stealth, application-only platform for
            senior product designers to team up with the best companies on their
            next big thing.
          </p>
        </main>
      </div>
      <div className={Classes.details}>
        <p>
          <img src={calendar} alt="calendar icon" />
          30mins ago
        </p>
        <p>
          <img src={company} alt="company icon" />
          Entrust Datacard
        </p>
        <p>
          <img src={clock} alt="clock icon" />
          Full-Time
        </p>
        <p>
          <img src={calendar} alt="calander icon" />
          Intermediate
        </p>
        <p>
          <img src={company} alt="company icon" />
          $15/hr
        </p>
        <button onClick={hundleClick}>Apply</button>
      </div>
    </div>
  );
};

export default JobCard;
