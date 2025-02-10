import { useState } from "react";
import Classes from "./SatatusBar.module.css";

const returnStyle = (status) => {
  if (status === "active") {
    return ["#10B446", "right"];
  } else if (status === "draft") {
    return ["#444444", "center"];
  } else if (status === "inactive") {
    return ["#F32424", "left"];
  }
};

const StatusBar = (props) => {
  const [status, setStatus] = useState(props.status);
  const hundleClick = () => {
    if (status === "active") {
      setStatus("inactive");
      props.onChangeStatus("inactive");
    } else if (status === "inactive") {
      setStatus("active");
      props.onChangeStatus("active");
    } else {
      return null;
    }
  };
  return (
    <div
      className={Classes.container}
      style={{
        border: `0.238rem solid ${returnStyle(status)[0]}`,
        justifyContent: `${returnStyle(status)[1]}`,
      }}
      onClick={hundleClick}
    >
      <div
        style={{
          backgroundColor: `${returnStyle(status)[0]}`,
        }}
      ></div>
    </div>
  );
};

export default StatusBar;
