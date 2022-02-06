import _ from "underscore";
import ageInMonths from "../../../../utils/ageInMonths";

const maxDailyDose = (activeKid, selectedDrug) => {
  let txtToDisplay;
  if (!_.isEmpty(selectedDrug.weight_based_calculations)) {
    selectedDrug.weight_based_calculations.max_daily_dose.forEach((dose) => {
      if (
        ageInMonths(activeKid) >= dose["age_form-to_in_month"][0] &&
        ageInMonths(activeKid) < dose["age_form-to_in_month"][1]
      ) {
        const computedMaxDose =
          Number.parseFloat(activeKid.weight) * dose.max_per_1kg;
        txtToDisplay = `${computedMaxDose} ${dose.unit}`;
      }
    });
  } else if (!_.isEmpty(selectedDrug.age_based_calculations)) {
    selectedDrug.age_based_calculations.max_daily_dose.forEach((dose) => {
      if (
        ageInMonths(activeKid) >= dose["age_form-to_in_month"][0] &&
        ageInMonths(activeKid) < dose["age_form-to_in_month"][1]
      ) {
        txtToDisplay = `${dose.max_per_age} ${dose.unit}`;
      }
    });
  }
  return txtToDisplay;
};

export default maxDailyDose;
