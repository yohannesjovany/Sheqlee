import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Classes from "./FormatedInput.module.css";
const FormatedInput = (props) => {
  return (
    <div className={Classes.formatedcontainer}>
      <ReactQuill {...props} />
    </div>
  );
};

export default FormatedInput;
