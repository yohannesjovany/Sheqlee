import { useState, useEffect } from "react";
import Pagination from "../UI/Pagination";
import Classes from "./FAQSection.module.css";
import { ReactComponent as Question } from "../../assets/icons/question.svg";
import { ReactComponent as Downarrow } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import { ReactComponent as Uparrwow } from "../../assets/icons/Icon material-keyboard-arrow-up.svg";

// Default FAQ items as initial state (fallback)
const initialFaqItems = [
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
];

const Accordion = ({ id, question, answer, accordionID, onClick }) => {
  return (
    <div className={Classes.accordionItem} onClick={onClick}>
      <header className={id === accordionID ? Classes.act : Classes.inact}>
        <p>{question}</p>
        {id === accordionID ? <Uparrwow /> : <Downarrow />}
      </header>
      <main
        className={
          id === accordionID
            ? Classes.activeAccordon
            : Classes.inactiveAccordion
        }
      >
        {answer}
      </main>
    </div>
  );
};

const FAQSection = () => {
  const [faqItems, setFaqItems] = useState(initialFaqItems);
  const [loading, setLoading] = useState(false);
  const [accordionID, setAccordionID] = useState(initialFaqItems[0].id);
  const [faqType, setFaqType] = useState("freelancers"); // "freelancers" or "companies"

  // Fetch FAQ items from backend based on faqType
  const fetchFaqItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/faq?type=${faqType}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      // Expect backend to return { faqItems: [...] }
      setFaqItems(data.faqItems || initialFaqItems);
      // Reset accordion selection with new data
      if (data.faqItems && data.faqItems.length > 0) {
        setAccordionID(data.faqItems[0].id);
      }
    } catch (error) {
      console.error("Error fetching FAQ items:", error);
      // fallback to defaults on error
      setFaqItems(initialFaqItems);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqItems();
  }, [faqType]);

  const handleAccordionClick = (id) => {
    setAccordionID(id);
  };

  const handleFaqTypeChange = (type) => {
    setFaqType(type);
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
              onClick={() => handleFaqTypeChange("freelancers")}
              className={faqType === "freelancers" ? Classes.active : undefined}
            >
              Freelancers
            </button>
            <button
              onClick={() => handleFaqTypeChange("companies")}
              className={faqType === "companies" ? Classes.active : undefined}
            >
              Companies
            </button>
          </div>
        </div>
      </header>
      <main>
        {loading ? (
          <p>Loading FAQs...</p>
        ) : (
          <div className={Classes.accordion}>
            {faqItems.map((faqItem) => (
              <Accordion
                key={faqItem.id}
                id={faqItem.id}
                question={faqItem.question}
                answer={faqItem.answer}
                accordionID={accordionID}
                onClick={() => handleAccordionClick(faqItem.id)}
              />
            ))}
          </div>
        )}
      </main>
    </section>
  );
};

export default FAQSection;
