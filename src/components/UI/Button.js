import Classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button onClick={props.onClick} className={Classes[props.className]}>
      {props.children}
    </button>
  );
};

export default Button;
