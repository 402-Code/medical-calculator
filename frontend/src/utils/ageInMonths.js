import today from "./today";

const ageInMonths = (kid) => {
  const years = today.split("-")[0] - kid.dob.split("-")[0];
  const months = today.split("-")[1] - kid.dob.split("-")[1];
  const days = today.split("-")[2] - kid.dob.split("-")[2];

  const age = (years * 12) + months + (days / 30);
  return age;
};

export default ageInMonths;
