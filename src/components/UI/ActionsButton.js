import Classes from "./ActionsButton.module.css";
import { ReactComponent as Delete } from "../../assets/icons/Icon material-delete.svg";
import { ReactComponent as Duplicate } from "../../assets/icons/duplicate.svg";
import { ReactComponent as View } from "../../assets/icons/Icon awesome-eye.svg";
import { ReactComponent as Edit } from "../../assets/icons/Icon material-edit.svg";

const Actions = (props) => {
  if (props.action === "edit") {
    return <Edit />;
  } else if (props.action === "delete") {
    return <Delete />;
  } else if (props.action === "duplicate") {
    return <Duplicate />;
  } else if (props.action === "view") {
    return <View />;
  }
};

const ActionsButton = (props) => {
  return (
    <button className={Classes.actionButton}>
      <Actions action={props.action} />
    </button>
  );
};

export default ActionsButton;
