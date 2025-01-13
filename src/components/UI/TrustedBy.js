import Classes from "./TrustedBy.module.css";
import apple from "../../assets/images/apple.png";
import google from "../../assets/images/google.png";
import meta from "../../assets/images/meta.png";
import microsoft from "../../assets/images/microsoft.png";

const TrustedBy = () => {
  return (
    <section className={Classes.trustedBy}>
      <h1>Trusted by</h1>
      <div>
        <img src={google} alt="google" />
        <img src={meta} alt="meta" />
        <img src={microsoft} alt="microsoft" />
        <img src={apple} alt="" />
      </div>
    </section>
  );
};

export default TrustedBy;
