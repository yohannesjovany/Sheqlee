import CallForAction from "../components/callForAction/CallForAction";
import ContactUsForm from "../components/contact/ContactUsForm";
import PageContex from "../components/UI/PageContext";

const Contact = () => {
  return (
    <>
      <PageContex path={["Contact"]} />
      <ContactUsForm />
      <CallForAction />
    </>
  );
};

export default Contact;
