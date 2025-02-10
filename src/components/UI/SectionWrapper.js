import classes from "./SectionWrapper.module.css";
import rightArrow from "../../assets/icons/Icon material-keyboard-arrow-right.svg";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";

const SectionWrapper = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 896);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 896);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              <p className={props.loading ? classes.shimmer : undefined}>
                {props.info}
              </p>
              <button>
                <img src={rightArrow} alt="right arrow icon" />
              </button>
            </div>
          </header>
        )}
        {isMobile || <main className={classes.main}>{props.children}</main>}
        {isMobile && !props.isFlex && <Carousel>{props.children}</Carousel>}
        {isMobile && props.isFlex && (
          <main className={classes.isFlex}>{props.children}</main>
        )}
      </div>
    </section>
  );
};

export default SectionWrapper;
