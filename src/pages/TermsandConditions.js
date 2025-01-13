import CallForAction from "../components/callForAction/CallForAction";
import FormatedText from "../components/UI/FormatedText";
import PageContex from "../components/UI/PageContext";

const SampleFormatedText = (
  <>
    <h1>Privacy Policy</h1>
    <p>
      <strong>Effective Date:</strong> January 2, 2025
    </p>
    <div>
      <h2>Information We Collect</h2>
      <p>
        We may collect personally identifiable information, such as your name,
        email address, and contact information when you voluntarily provide it
        to us.
      </p>
    </div>
    <div>
      <h2>Use of Your Information</h2>
      <p>
        We may use the information we collect from you for the following
        purposes: To operate, maintain, and improve the Site.
      </p>
    </div>
    <div>
      <h2>Disclosure of Your Information</h2>
      <p>
        Your information may be disclosed as follows: By Law or to Protect
        Rights.
      </p>
    </div>
    <div>
      <h2>Security of Your Information</h2>
      <p>
        We use administrative, technical, and physical security measures to help
        protect your personal information.
      </p>
    </div>
    <div>
      <h2>Policy for Children</h2>
      <p>
        We do not knowingly solicit information from or market to children under
        the age of 13.
      </p>
    </div>
    <div>
      <h2>Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time.</p>
    </div>
    <div>
      <h2>Contact Us</h2>
      <p>
        If you have questions or comments about this Privacy Policy, please
        contact us at: Email: support@example.com
      </p>
    </div>
  </>
);
const TermsAndConditions = () => {
  return (
    <>
      <PageContex path={["Terms and Conditions"]} />
      <FormatedText header="Terms and Conditions">
        {SampleFormatedText}
      </FormatedText>
      <CallForAction />
    </>
  );
};

export default TermsAndConditions;
