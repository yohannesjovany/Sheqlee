import Classes from "./FormatedText.module.css";
const FormatedText = (props) => {
  return (
    <section className={Classes.mainContainer}>
      <h1>{props.header}</h1>
      <main>{props.children}</main>
    </section>
  );
};

export default FormatedText;
