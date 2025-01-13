import classes from "./SectionWrapper.module.css";
import rightArrow from "../../assets/icons/Icon material-keyboard-arrow-right.svg";

const SectionWrapper = (props) => {
  return (
    <section
      className={`${classes["section-wrapper"]} ${
        classes[props.withBackground]
      } `}
    >
      <div className={classes.container}>
        {props.withHeader && (
          <header className={classes.header}>
            <h1>{props.title}</h1>
            <div className={classes.info}>
              <p>{props.info}</p>
              <button>
                <img src={rightArrow} alt="right arrow icon" />
              </button>
            </div>
          </header>
        )}
        <main className={classes.main}>{props.children}</main>
      </div>
    </section>
  );
};

export default SectionWrapper;
