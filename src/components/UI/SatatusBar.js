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
  return (
    <div
      className={Classes.container}
      style={{
        border: `0.1rem solid ${returnStyle(props.status)[0]}`,
        justifyContent: `${returnStyle(props.status)[1]}`,
      }}
    >
      <div
        style={{
          backgroundColor: `${returnStyle(props.status)[0]}`,
        }}
      ></div>
    </div>
  );
};

export default StatusBar;
