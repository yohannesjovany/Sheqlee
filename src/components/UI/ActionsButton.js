import Classes from "./ActionsButton.module.css";
import { ReactComponent as Delete } from "../../assets/icons/Icon material-delete.svg";
import { ReactComponent as Duplicate } from "../../assets/icons/duplicate.svg";
import { ReactComponent as View } from "../../assets/icons/Icon awesome-eye.svg";
import { ReactComponent as Edit } from "../../assets/icons/Icon material-edit.svg";

const Actions = (props) => {
  if (props.action === "Edit") {
    return <Edit />;
  } else if (props.action === "Delete") {
    return <Delete />;
  } else if (props.action === "Duplicate") {
    return <Duplicate />;
  } else if (props.action === "View") {
    return <View />;
  }
};

const ActionsButton = (props) => {
  return (
    <button className={Classes.actionButton} onClick={props.onAction}>
      <Actions action={props.action} />
      <span
        className={Classes["tooltip-text"]}
      >{`${props.action} ${props.status}`}</span>
    </button>
  );
};

export default ActionsButton;
