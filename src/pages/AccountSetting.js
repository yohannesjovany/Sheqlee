import AccountSettingSection from "../components/auth/AccountSettingSection";
import CompanyProfileSection from "../components/companies/CompanyProfileSection";
import PageContex from "../components/UI/PageContext";

const AccountSetting = () => {
  return (
    <>
      <PageContex path={["Account Setting"]} />
      <AccountSettingSection />
    </>
  );
};

export default AccountSetting;
