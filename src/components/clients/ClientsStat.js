import Button from "../UI/Button";
import Classes from "./clientsStat.module.css";

const LeftDiv = (props) => {
  return (
    <div className={Classes.leftContainer}>
      <div>{props.stat}</div>
      <div>
        <h1>{props.title}</h1>
        <p>
          {props.desctription}
          <br /> (Launched: 1 YEAR AGO)
        </p>
      </div>
    </div>
  );
};

const RightDiv = (props) => {
  return (
    <div className={Classes.rightContainer}>
      <div>
        <h1>{props.title}</h1>
        <p>
          {props.desctription}
          <br /> (Launched: 1 YEAR AGO)
        </p>
      </div>
      <div>{props.stat}</div>
    </div>
  );
};

const ClientsStat = () => {
  return (
    <section>
      <header className={Classes.header}>
        <div>
          <h1>Sheqlee for Clients</h1>
          <p>
            Access a pool of talented, competent and dedicated <br />
            experts and professional from Ethiopia.
          </p>
        </div>
        <div className={Classes.action}>
          <Button className="secondary">Log in</Button>
          <Button className="primary">Register as an employer</Button>
        </div>
      </header>
      <main className={Classes.main}>
        <LeftDiv
          stat="1.5M+"
          title="Unique alerts delivered"
          desctription="We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched."
        />
        <RightDiv
          stat="1.5M+"
          title="Unique alerts delivered"
          desctription="We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched."
        />
        <LeftDiv
          stat="1.5M+"
          title="Unique alerts delivered"
          desctription="We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched."
        />
        <RightDiv
          stat="1.5M+"
          title="Unique alerts delivered"
          desctription="We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched. "
        />
        <Button className="primary">Post a job now</Button>
      </main>
    </section>
  );
};

export default ClientsStat;
