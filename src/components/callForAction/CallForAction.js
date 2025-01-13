import Button from "../UI/Button";
import Classes from "./CallForAction.module.css";
import partyPoper from "../../assets/images/party-popper.png";
import { Link } from "react-router-dom";

const CallForAction = () => {
  return (
    <div className={Classes.actionCall}>
      <img src={partyPoper} alt="call for action icon" />
      <p>Are you a software developer in Ethiopia?</p>
      <Button className="primary">
        <Link to="/professionalsignup">Sign up</Link>
      </Button>
    </div>
  );
};

export default CallForAction;
