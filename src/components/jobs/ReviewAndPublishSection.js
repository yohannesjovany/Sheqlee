import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";

import Classes from "./ReviewAndPublishSection.module.css";

import { ReactComponent as UiUX } from "../../assets/icons/ui_ux_design.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../../assets/icons/Icon feather-clock.svg";
import { ReactComponent as Company } from "../../assets/icons/company.svg";
import { ReactComponent as AawesomeTags } from "../../assets/icons/Icon awesome-tags.svg";
import { ReactComponent as Templet } from "../../assets/icons/template.svg";
import Button from "../UI/Button";
import VacancyDataContext from "../../store/VacancyContext";

const ReviewAndPublishSection = () => {
  const { vacancyData } = useContext(VacancyDataContext);
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const handlePublish = async () => {
    try {
      const response = await fetch("/api/vacancies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(vacancyData),
      });
      if (!response.ok) {
        throw new Error("Failed to publish vacancy");
      }
      const data = await response.json();

      alert("Job published successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error publishing job:", error);
      alert("Error publishing job. Please try again.");
    }
  };

  return (
    <section className={Classes.section}>
      <div className={Classes.redirection}>
        <div>
          <Templet />
        </div>
        <div>
          <p>
            To speed up the process of posting a job, try using
            <NavLink to="/professionalsignup"> job templates.</NavLink>
          </p>
        </div>
      </div>
      <header className={Classes.header}>
        <div>
          <h1>
            Review & publish <span> [2/2]</span>
          </h1>
          <p>Review job details before publishing.</p>
        </div>
        <div>
          <Button className="secondary" onClick={() => navigate("/addvacancy")}>
            Edit
          </Button>
          <Button className="primary" onClick={handlePublish}>
            Publish job
          </Button>
        </div>
      </header>
      <p className={Classes.secHeader}>
        <span />
        VACANCY PREVIEW
        <span />
      </p>
      <main>
        <section>
          <header className={Classes["sec-header"]}>
            <div className={Classes.jobTitle}>
              <UiUX />
              <h1>{vacancyData.title}</h1>
            </div>
            <div className={Classes.details}>
              {vacancyData.companyName && (
                <p>
                  <Company />
                  {auth.user.fullname}
                </p>
              )}
              <p>
                <Clock />
                {vacancyData.type}
              </p>
              <p>
                <Calendar />
                {vacancyData.level}
              </p>
              <p>
                <Company />
                {`${vacancyData.currency} ${vacancyData.salary} ${vacancyData.rate}`}
              </p>
            </div>
          </header>
          <main className={Classes.mainContainer}>
            {
              <>
                <p>{vacancyData.shortDescription}</p>
                {
                  <div
                    dangerouslySetInnerHTML={{
                      __html: [
                        vacancyData.how,
                        vacancyData.reqirements,
                        vacancyData.descrioption,
                      ],
                    }}
                  ></div>
                }
              </>
            }
          </main>
          <footer className={Classes.footer}>
            <div className={Classes.details}>
              <div className={Classes.tagsIndicator}>
                <AawesomeTags />
              </div>
              {vacancyData.skills.map((tag) => (
                <p>{tag}</p>
              ))}
            </div>
          </footer>
        </section>
      </main>
      <div className={Classes.line}></div>
      <div className={Classes.actionButtons}>
        <Button className="secondary" onClick={() => navigate("/addvacancy")}>
          Edit
        </Button>
        <Button className="primary" onClick={handlePublish}>
          Publish job
        </Button>
      </div>
    </section>
  );
};

export default ReviewAndPublishSection;
