import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../UI/Button";
import Classes from "./CallForAction.module.css";
import partyPoper from "../../assets/images/party-popper.png";

const CallForAction = () => {
  const auth = useSelector((state) => state.auth);
  if (auth.status === "guest") {
    return (
      <div className={Classes.actionCall}>
        <img src={partyPoper} alt="call for action icon" />
        <p>Are you a software developer in Ethiopia?</p>
        <Button className="primary">
          <Link to="/professionalsignup">Sign up</Link>
        </Button>
      </div>
    );
  }
};

export default CallForAction;
