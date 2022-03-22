import Drug from '../../models/drug';
import { differenceInMonths } from 'date-fns';

const isApplicable = (drugs, age) => {
  const isDrugsApplicable = drugs.map((drug) => ({
    ...drug.toObject(),
    isApplicable: drug.applicationRequirement.minAge <= age && drug.applicationRequirement.maxAge >= age
  }));
  return isDrugsApplicable;
};

const getDrugWithApplicableFlag = async (req, res) => {
  const user = req.user;
  const { kidId } = req.params;
  const kid = user.kids.find((kid) => kid._id.toString() === kidId);
  const kidAge = new Date(kid.dateOfBirth);
  const ageInMonth = differenceInMonths(new Date(), kidAge);
  const drugs = await Drug.find({}).populate('applicationRequirement');
  const drugsWithIsApplicableFlag = isApplicable(drugs, ageInMonth);
  res.send(drugsWithIsApplicableFlag);
};

export default getDrugWithApplicableFlag;
