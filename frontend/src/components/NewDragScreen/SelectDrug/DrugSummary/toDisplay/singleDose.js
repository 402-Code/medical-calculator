import _ from "underscore";
import ageInMonths from "../../../../../utils/ageInMonths";

const singleDose = (activeKid, selectedDrug) => {
  let txtToDisplay;
  if (!_.isEmpty(selectedDrug.weight_based_calculations)) {
    const amount =
      Number.parseFloat(activeKid.weight) *
      selectedDrug.weight_based_calculations.dose_per_1kg.amount;
    txtToDisplay = `${amount} ${selectedDrug.weight_based_calculations.dose_per_1kg.unit}`;
  } else if (!_.isEmpty(selectedDrug.age_based_calculations)) {
    selectedDrug.age_based_calculations.dose_per_age.forEach((dose) => {
      if (
        ageInMonths(activeKid) >= dose["age_form-to_in_month"][0] &&
        ageInMonths(activeKid) < dose["age_form-to_in_month"][1]
      ) {
        txtToDisplay = `${dose.amount} ${dose.unit}`;
      }
    });
  }
  return txtToDisplay;
};

export default singleDose;
