import Drug from '../../models/drug';
import { differenceInMonths } from 'date-fns'

const dosesForKid = (drugs, age, weight) => {
  const isDrugsApplicable = drugs.map(drug => ({
    ...drug.toObject(),
    isApplicable: drug.applicationRequirement.minAge <= age && drug.applicationRequirement.maxAge >= age,
    recommendedDose: drug.schedulingPolicy[0].recommendedDose.value * weight,
    maximumDose: drug.schedulingPolicy[0].recommendedDose.value * weight * 24 / drug.interval,
  }));
  return isDrugsApplicable;
}

const getDrugs = async (req, res) => {
  const user = req.user
  const { kidId } = req.params
  const kid = user.kids.find((kid) => kid._id.toString() === kidId);
  const kidAge = new Date(kid.dateOfBirth)
  const ageInMonth = differenceInMonths(new Date(), kidAge)
  const drugs = await Drug.find({}).populate('applicationRequirement').populate('schedulingPolicy');
  const drugsWithIsApplicableFlag = dosesForKid(drugs, ageInMonth, kid.weight)
  res.send(drugsWithIsApplicableFlag);

}

export default getDrugs;
