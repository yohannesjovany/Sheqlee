import { useState } from "react";
import Classes from "./ReadMore.module.css";
import { ReactComponent as Uparrow } from "../../assets/icons/up-arrow.svg";
import { ReactComponent as Downarrow } from "../../assets/icons/down-arrow.svg";

const ReadMore = ({ formattedText, maxLength = 5 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={Classes.mainContainer}>
      <div className={isExpanded ? Classes.expanded : Classes.notExpanded}>
        {formattedText}
      </div>
      <button onClick={toggleExpanded} style={{ marginTop: "10px" }}>
        {isExpanded ? (
          <>
            Read Less <Uparrow />
          </>
        ) : (
          <>
            Read More <Downarrow />
          </>
        )}
      </button>
    </div>
  );
};

export default ReadMore;
