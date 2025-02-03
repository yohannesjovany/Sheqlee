import React, { useState } from "react";
import Classes from "./InputGroup.module.css";
import { ReactComponent as SlashEye } from "../../assets/icons/Icon awesome-eye-slash.svg";
import { ReactComponent as Eye } from "../../assets/icons/Icon awesome-eye.svg";

const InputGroup = ({
  id,
  isPassword,
  label,
  required,
  type = "text",
  value,
  placeholder = "",
  onChange,
  icon,
  inputProps = {},
  className = "",
}) => {
  const [currentState, setCurrentState] = useState(type);
  const hundleClick = () => {
    if (currentState === "text") {
      setCurrentState("password");
    } else {
      setCurrentState("text");
    }
  };

  return (
    <div className={`${Classes["input-group"]}  ${className}`}>
      {label && (
        <label htmlFor={id}>
          {label}
          {required ? <span style={{ color: "red" }}> *</span> : undefined}
        </label>
      )}
      <div className={Classes["input-group-container"]}>
        {icon && <span className={Classes["input-group-icon"]}>{icon}</span>}
        <input
          id={id}
          type={currentState}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...inputProps}
          className={Classes["input-group-field"]}
          required={required}
        />
        {isPassword && currentState === "text" && (
          <Eye onClick={hundleClick} className={Classes.isPassword} />
        )}
        {isPassword && currentState === "password" && (
          <SlashEye onClick={hundleClick} className={Classes.isPassword} />
        )}
      </div>
    </div>
  );
};

export default InputGroup;
