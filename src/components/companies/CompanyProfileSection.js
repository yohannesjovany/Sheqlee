import Classes from "./CompanyProfileSection.module.css";
import { ReactComponent as Company } from "../../assets/icons/company.svg";
import { ReactComponent as Edit } from "../../assets/icons/Icon material-edit.svg";
import { ReactComponent as Downkey } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import placeholderImage from "../../assets/icons/settings - alt2 (3).svg";
import FormatedInput from "../UI/FromatedInput";
import Button from "../UI/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompanyProfileSection = () => {
  const [image, setImage] = useState();
  const [formImage, setFormImage] = useState();

  const [name, setName] = useState();
  const [size, setSize] = useState();
  const [hq, setHq] = useState();
  const [domain, setDomain] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate an API call to login
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image, name, size, hq, domain, description }),
      });
      const data = await response.json();
      if (response.ok) {
        navigate("/"); // Redirect to home page
      } else {
        console.log({ image, name, size, hq, domain, description });
      }
    } catch (err) {
      //dispatch(authActions.loginFailure({err:"An error occurred. Please try again."}));
      console.log({ formImage, name, size, hq, domain, description });
    }
    navigate("/");
  };

  const handleQuillChange = (value) => {
    setDescription(value);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Set the uploaded image's data URL
      };
      reader.readAsDataURL(file);
      setFormImage(file);
    }
  };

  return (
    <section className={Classes.mainSection}>
      <header className={Classes.header}>
        <Company />
        <h1>Company Profile</h1>
        <p>
          Provide accurate information about your company <br />
          to make yourself discoverable.
        </p>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div className={Classes.row}>
            <div className={Classes.inputGroup}>
              <label htmlFor="company-name">
                Company name <span className={Classes.required}>*</span>
              </label>
              <div className={Classes.selectInput}>
                <input
                  type="text"
                  id="company-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sheqlee Co., Ltd."
                />
                <Edit />
              </div>
            </div>
            <div className={Classes.inputGroup}>
              <label htmlFor="domain">
                Domain <span className={Classes.required}>*</span>
              </label>
              <div className={Classes.selectInput}>
                <input
                  type="url"
                  id="domain"
                  value={domain}
                  required
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="https://sheqlee.com"
                />
                <Edit />
              </div>
            </div>
            <div className={Classes.fileUpload}>
              <div className={Classes.img}>
                <img
                  src={image ? image : placeholderImage}
                  className={!image ? Classes.placeholder : undefined}
                />
              </div>
              <label htmlFor="image-upload">
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                Upload
              </label>
              <p>2MB Max | 1:1 Ratio</p>
            </div>
          </div>
          <div className={`${Classes.inputGroup} `}>
            <label htmlFor="description">Description</label>
            <FormatedInput
              placeholder="A brief description about your company..."
              id="description"
              onChange={(value) => handleQuillChange(value)}
            />
          </div>
          <div className={Classes.row}>
            <div className={Classes.inputGroup}>
              <label for="size">Company size</label>
              <div className={Classes.selectInput}>
                <select
                  id="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="" selected>
                    Less than 10 people
                  </option>
                  <option>Web Frontend</option>
                  <option>UI/UX Desing</option>
                </select>
                <Downkey />
              </div>
            </div>
            <div className={Classes.inputGroup}>
              <label for="location">HQ location</label>
              <div className={Classes.selectInput}>
                <input
                  type="text"
                  id="location"
                  value={hq}
                  onChange={(e) => setHq(e.target.value)}
                  placeholder="Seoul, S. Korea"
                />
                <Edit />
              </div>
            </div>
          </div>

          <div className={Classes.actionButton}>
            <Button className="primary">Update profile</Button>
          </div>
        </form>
        <div className={Classes.lineSeparator}>
          <div></div>
          <p>
            <span className={Classes.required}> * </span> fields are required.
          </p>
        </div>
      </main>
    </section>
  );
};

export default CompanyProfileSection;
