import Classes from "./Button.module.css";
const Button = (props) => {
  return <button className={Classes[props.className]}>{props.children}</button>;
};

export default Button;
