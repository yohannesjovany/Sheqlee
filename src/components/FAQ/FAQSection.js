import Pagination from "../UI/Pagination";
import Classes from "./FAQSection.module.css";
import { ReactComponent as Question } from "../../assets/icons/question.svg";
import { ReactComponent as Downarrow } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import { ReactComponent as Uparrwow } from "../../assets/icons/Icon material-keyboard-arrow-up.svg";
import { useState } from "react";

const faqItems = [
  {
    id: "faq1",
    question: "How do I post a job vacancy on Sheqlee?",
    answer:
      "In order to post a job vacancy on Sheqlee, you must first create an account as a company. Company account creation is done by just filling out a few basic information about your company. Then you can easily post a job vacancy by providing the details of the job post. It takes less than 15mins to post a job.",
  },
  {
    id: "faq2",
    question: "How do I post a job vacancy on Sheqlee?",
    answer:
      "In order to post a job vacancy on Sheqlee, you must first create an account as a company. Company account creation is done by just filling out a few basic information about your company. Then you can easily post a job vacancy by providing the details of the job post. It takes less than 15mins to post a job.",
  },
  {
    id: "faq3",
    question: "How do I post a job vacancy on Sheqlee?",
    answer:
      "In order to post a job vacancy on Sheqlee, you must first create an account as a company. Company account creation is done by just filling out a few basic information about your company. Then you can easily post a job vacancy by providing the details of the job post. It takes less than 15mins to post a job.",
  },
  {
    id: "faq4",
    question: "How do I post a job vacancy on Sheqlee?",
    answer:
      "In order to post a job vacancy on Sheqlee, you must first create an account as a company. Company account creation is done by just filling out a few basic information about your company. Then you can easily post a job vacancy by providing the details of the job post. It takes less than 15mins to post a job.",
  },
  {
    id: "faq5",
    question: "How do I post a job vacancy on Sheqlee?",
    answer:
      "In order to post a job vacancy on Sheqlee, you must first create an account as a company. Company account creation is done by just filling out a few basic information about your company. Then you can easily post a job vacancy by providing the details of the job post. It takes less than 15mins to post a job.",
  },
];

const Accordion = (props) => {
  return (
    <div className={Classes.accordionItem} onClick={props.onClick}>
      <header
        className={props.id === props.accordionID ? Classes.act : Classes.inact}
      >
        <p>{props.question}</p>
        {props.id === props.accordionID ? <Uparrwow /> : <Downarrow />}
      </header>
      <main
        className={
          props.id === props.accordionID
            ? Classes.activeAccordon
            : Classes.inactiveAccordion
        }
      >
        {props.answer}
      </main>
    </div>
  );
};

const FAQSection = () => {
  const [isActive, setisActive] = useState(true);
  const [accordionID, setAccordionID] = useState();

  const hundleAccordionClick = (id) => {
    setAccordionID(id);
  };
  const hundleClick = () => {
    setisActive(!isActive);
  };

  return (
    <section className={Classes.faq}>
      <header className={Classes.header}>
        <Question />
        <div>
          <h1>FAQ</h1>
          <p>
            The following are some of the most commonly <br />
            asked questions by our users.
          </p>
        </div>
        <div>
          <div className={Classes.toggleAction}>
            <button
              onClick={hundleClick}
              className={isActive ? Classes.active : undefined}
            >
              Freelancers
            </button>
            <button
              onClick={hundleClick}
              className={!isActive ? Classes.active : undefined}
            >
              Companies
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className={Classes.accordion}>
          {faqItems.map((faqItem) => (
            <Accordion
              key={faqItem.id}
              id={faqItem.id}
              question={faqItem.question}
              answer={faqItem.answer}
              accordionID={accordionID}
              onClick={() => {
                hundleAccordionClick(faqItem.id);
              }}
            />
          ))}
        </div>
        <Pagination
          totalItems={139}
          itemsPerPage={3}
          currentPage={10}
          onPageChange="skip"
        />
      </main>
    </section>
  );
};
export default FAQSection;
