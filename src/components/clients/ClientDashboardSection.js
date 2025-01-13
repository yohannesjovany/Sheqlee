import Classes from "./ClientDashboardSection.module.css";

import { ReactComponent as Dashboard } from "../../assets/icons/dashboard.svg";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom";
import StatusBar from "../UI/SatatusBar";
import ActionsButton from "../UI/ActionsButton";

const listOfJobs = [
  {
    id: 1,
    title: "Senior mobile app developer",
    type: "Full-time",
    level: "Senior",
    status: "draft",
  },
  {
    id: 2,
    title: "Python backend developer",
    type: "Part-time",
    level: "Lead",
    status: "active",
  },
  {
    id: 3,
    title: "ReactJS developer",
    type: "Part-time",
    level: "Middle",
    status: "inactive",
  },
];

const ClientDashboardSection = () => {
  const postedaJob = true;
  return (
    <section>
      <header className={Classes.header}>
        <Dashboard />
        <h1>Dashboard</h1>
        {postedaJob && (
          <p>
            All the jobs you have posted and
            <br /> are about to post.
          </p>
        )}
        {postedaJob || (
          <p>
            You have not posted any jobs yet. Get
            <br /> started by posting a job.
          </p>
        )}
      </header>
      <main className={Classes.mainContainer}>
        {postedaJob || (
          <div className={Classes.postJobButton}>
            <Button className="primary">
              <NavLink to={"/addvacancy"}>Post your first job</NavLink>
            </Button>
          </div>
        )}
        {postedaJob && (
          <div className={Classes.tableContainer}>
            <table className={Classes.table}>
              <thead>
                <tr>
                  <th>JID</th>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Level</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {listOfJobs.map((job) => {
                  return (
                    <tr>
                      <td>{job.id}</td>
                      <td>{job.title}</td>
                      <td>{job.type}</td>
                      <td>{job.level}</td>
                      <td>
                        <StatusBar status={job.status} />
                      </td>
                      <td>
                        {(job.status === "active" ||
                          job.status === "inactive") && (
                          <div className={Classes.actionsContainer}>
                            <ActionsButton action="duplicate" />
                            <ActionsButton action="view" />
                            <ActionsButton action={"delete"} />
                          </div>
                        )}
                        {job.status === "draft" && (
                          <div className={Classes.actionsContainer}>
                            <ActionsButton action="duplicate" />
                            <button className={Classes.publish}>Publish</button>
                            <ActionsButton action="edit" />
                            <ActionsButton action={"delete"} />
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </section>
  );
};

export default ClientDashboardSection;
