import Classes from "./Tag.module.css";
import ellipse from "../../assets/icons/Ellipse 2.svg";
import { ReactComponent as Verify } from "../../assets/icons/verify.svg";

const Tag = (props) => {
  const { name, jobs, subscribers, verified } = props;
  return (
    <div className={Classes.container}>
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
