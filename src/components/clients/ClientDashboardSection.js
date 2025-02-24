import Classes from "./ClientDashboardSection.module.css";

import { ReactComponent as Dashboard } from "../../assets/icons/dashboard.svg";
import { ReactComponent as Elipse } from "../../assets/icons/Ellipse 2.svg";
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
  // const auth = useSelector((state) => state.auth);

  // const [jobs, setJobs] = useState([]);

  // // Fetch jobs from backend on component mount
  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       const response = await fetch("/api/jobs", {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${auth.token}`,
  //         },
  //       });
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch jobs");
  //       }
  //       const data = await response.json();
  //       setJobs(data);
  //     } catch (error) {
  //       console.error("Error fetching jobs:", error);
  //     }
  //   };
  //   fetchJobs();
  // }, [auth.token]);

  // const hundleChangestatus = async (id, status) => {
  //   try {
  //     // Update the job status in the backend
  //     const response = await fetch(`/api/jobs/${id}/status`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //       body: JSON.stringify({ status }),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to update status");
  //     }
  //     // Update the local state: find the job and update its status
  //     setJobs((prevJobs) =>
  //       prevJobs.map((job) => (job.id === id ? { ...job, status } : job))
  //     );
  //   } catch (error) {
  //     console.error("Error updating status:", error);
  //   }
  // };

  // const hundleDuplicateAction = async (id) => {
  //   try {
  //     // Call backend to duplicate job
  //     const response = await fetch(`/api/jobs/duplicate/${id}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to duplicate job");
  //     }
  //     const duplicatedJob = await response.json();
  //     // Update local state
  //     setJobs((prevJobs) => [...prevJobs, duplicatedJob]);
  //   } catch (error) {
  //     console.error("Error duplicating job:", error);
  //   }
  // };

  // const hundleDeleteAction = async (id) => {
  //   try {
  //     // Call backend API to delete the job
  //     const response = await fetch(`/api/jobs/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to delete job");
  //     }
  //     // Remove the job from local state
  //     setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  //   } catch (error) {
  //     console.error("Error deleting job:", error);
  //   }
  // };

  const postedaJob = true;
  const hundleChangestatus = (id, status) => {
    const job = listOfJobs.filter((job) => job.id === id);
    job[0].status = status;
  };
  const hundleDulicateAction = (id) => {
    //duplicate with fetch actions
    return null;
  };
  const hundleDeleteAction = (id) => {
    //duplicate with fetch actions
    return null;
  };
  const hundleViewAction = (id) => {
    //duplicate with fetch actions
    return null;
  };
  const hundleEditAction = (id) => {
    //duplicate with fetch actions
    console.log("in edit");
    return null;
  };
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
            <p>You can only post jobs on desktop.</p>
          </div>
        )}
        {postedaJob && (
          <div className={Classes.tableContainer}>
            <div>
              <table className={Classes.table}>
                <thead>
                  <tr>
                    <th>JID</th>
                    <th>Title</th>
                    <th className={Classes.noMobile}>Type</th>
                    <th className={Classes.noMobile}>Level</th>
                    <th className={Classes.statusHeader}>Status</th>
                    <th className={Classes.noMobile}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listOfJobs.map((job) => {
                    return (
                      <tr>
                        <td>{job.id}</td>
                        <td>
                          {job.title}{" "}
                          <div className={Classes.onlyMobile}>
                            <span> {job.type}</span>
                            <Elipse />
                            <span>{job.level}</span>
                          </div>
                        </td>
                        <td className={Classes.noMobile}>{job.type}</td>
                        <td className={Classes.noMobile}>{job.level}</td>
                        <td classname={Classes.statusHeader}>
                          <StatusBar
                            status={job.status}
                            onChangeStatus={(status) => {
                              hundleChangestatus(job.id, status);
                            }}
                          />
                        </td>
                        <td className={Classes.noMobile}>
                          {(job.status === "active" ||
                            job.status === "inactive") && (
                            <div className={Classes.actionsContainer}>
                              <ActionsButton
                                action="Duplicate"
                                status="vacancy"
                                onAction={() => {
                                  hundleDulicateAction(job.id);
                                }}
                              />
                              <ActionsButton
                                action="View"
                                status="vacancy"
                                onAction={() => {
                                  hundleViewAction(job.id);
                                }}
                              />
                              <ActionsButton
                                action={"Delete"}
                                status="vacancy"
                                onAction={() => {
                                  hundleDeleteAction(job.id);
                                }}
                              />
                            </div>
                          )}
                          {job.status === "draft" && (
                            <div className={Classes.actionsContainer}>
                              <ActionsButton
                                action="Duplicate"
                                status="draft"
                                onAction={() => {
                                  hundleDulicateAction(job.id);
                                }}
                              />
                              <button className={Classes.publish}>
                                Publish
                              </button>
                              <ActionsButton
                                action="Edit"
                                status="draft"
                                onAction={() => {
                                  hundleEditAction(job.id);
                                }}
                              />
                              <ActionsButton
                                action={"Delete"}
                                status="draft"
                                onAction={() => {
                                  hundleDeleteAction(job.id);
                                }}
                              />
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </section>
  );
};

export default ClientDashboardSection;
