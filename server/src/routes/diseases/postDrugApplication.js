import { StatusCodes } from 'http-status-codes';
import User from '../../models/user';
import Drug from '../../models/drug';

const postDrugApplication = async (req, res) => {
  // ----------------- mocks
  req.user = await User.findById('621e8cb924b74f4dd1952d44');
  req.body.kidId = '621e914f1f46dbe4c841b4e2';
  req.body.diseaseId = '6220e981056348e6bfd5abcf';
  req.body.appliedDrug = await Drug.findById('621aa33d871734d3d6f6b960');
  // ----------------- mocks

  try {
    //pobierz id aplikowanego drug-u
    const drugApplication = { drugId: req.body.appliedDrug._id };
    // złap usera
    // złap dziecko
    const kid = await req.user.kids.id(req.body.kidId);
    // złap chorobę
    const diseases = await kid.diseases.id(req.body.diseaseId);
    //pchnij obiekt drugApplication do tablicy
    diseases.drugApplications.push(drugApplication);
    // zapisz usera
    await req.user.save();
    // res wyślij disease?
    res.status(StatusCodes.CREATED).send(diseases);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: err.message });
  }
};
export default postDrugApplication;
