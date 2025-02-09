import Classes from "./PageContext.module.css";
import locationIcon from "../../assets/icons/placeholder.svg";
import { ReactComponent as RigthArrowIcon } from "../../assets/icons/Icon material-keyboard-arrow-right.svg";
import { NavLink } from "react-router-dom";

const PageContex = (props) => {
  return (
    <div className={Classes.pagecontext}>
      <img src={locationIcon} alt="page context" />
      <p>
        <NavLink to={"/"}> Sheqlee</NavLink>
        {props.path &&
          props.path.map((pathItem) => (
            <>
              <RigthArrowIcon />
              <span>{pathItem}</span>
            </>
          ))}
      </p>
    </div>
  );
};
export default PageContex;
