export const BASE_URL = "http://192.168.5.217:9000/api/v1";
// Endpoints
export const ENDPOINTS = {
  login: "/users/login",
  signUpFreelancer: "/users/signup/freelancer",
  signUpClient: "/users/signup/company",
  resetPassword: "/users/forgotPassword",
  changePassword: "/users/resetPassword",
  editProfileFrelancer: "/freelancers/profile",
  editProfileClient: "/companies/profile",
  updateAccountSetting: "/users/updateMe",
  getAllAvailableJobs: "/jobs/",
  searchJobApi: "/jobs/?",
  searchTag: "/tags/?",
  applyJob: "/jobs/apply",
  cancelJobApplication: "/jobs/cancelApplication",
  getAllAvailableTags: "/tags",
  publishJob: "/jobs/draftedJobs",
  deleteJob: "/jobs/",
  acitiveInactiveJobState: "/jobs",
  getAllAvailableCategories: "/categories",
  getAllAvailableCompanies: "/companies",
  photoUrl: "http://192.168.5.217:9000/freelancers/photos",
  getAllTags: "/tags",
  getAllCategories: "/categories",
  subscribeToTag: "/freelancers/subscribe/tag",
  unsubscribeTag: "/freelancers/unsubscribe/tag",
  subscribeToCategory: "/freelancers/subscribe/category",
  unsubscribeCategory: "/freelancers/unsubscribe/category",
  subscribeToCompany: "/freelancers/subscribe/company",
  unsubscribeCompany: "/freelancers/unsubscribe/company",
  freelancerDashboardJobs: "/jobs/jobsBasedOnSubscription",
  clientDashboardJobs: "/jobs/company-jobs",
  freelancerTagJobs: "/jobs/?skillsRequired",
  freelanceCategoryJobs: "/jobs/?category",
  freelancerCompanyJobs: "/jobs/?companyName",
};
