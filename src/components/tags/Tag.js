import Classes from "./Tag.module.css";
import ellipse from "../../assets/icons/Ellipse 2.svg";
import { ReactComponent as Verify } from "../../assets/icons/verify.svg";
import { useNavigate, useNavigation } from "react-router-dom";

const Tag = (props) => {
  const { id, name, jobs, subscribers, verified } = props;
  const navigate = useNavigate();

  const hundleClick = () => {
    if (props.isCompany) {
      navigate(`/Companies/${id}`);
    } else {
      navigate(`/tags/${id}`);
    }
  };

  return (
    <div className={Classes.container} onClick={hundleClick}>
      <h1>
        {name}
        {verified && <Verify />}{" "}
      </h1>
      <p>
        <span>{`${jobs} jobs `}</span>
        <img src={ellipse} alt="ellipse icon" />
        <span>{` ${subscribers} subscribers`}</span>
      </p>
    </div>
  );
};

export default Tag;
