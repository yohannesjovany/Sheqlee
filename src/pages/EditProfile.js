import EditProfileSection from "../components/auth/EditProfileSection";
import PageContex from "../components/UI/PageContext";

const EditProfile = () => {
  return (
    <>
      <PageContex path={["Profile"]} />
      <EditProfileSection />
    </>
  );
};

export default EditProfile;
