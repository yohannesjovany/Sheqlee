import PageContex from "../components/UI/PageContext";

import ProfilePreviewSection from "../components/auth/ProfilePreviewSection";

const ProfilePreview = () => {
  return (
    <>
      <PageContex path={["Profile Preview"]} />
      <ProfilePreviewSection />
    </>
  );
};

export default ProfilePreview;
