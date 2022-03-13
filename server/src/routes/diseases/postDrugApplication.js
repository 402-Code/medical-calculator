import { StatusCodes } from 'http-status-codes';
import User from '../../models/user';
import Drug from '../../models/drug';

const postDrugApplication = async (req, res) => {
  // ----------------- mocks
  req.user = await User.findById('621e8cb924b74f4dd1952d44');
  req.body.kidId = '621e914f1f46dbe4c841b4e2';
  req.body.diseaseId = '6220e981056348e6bfd5abcf';
  req.body.appliedDrugId = await Drug.findById('621aa33d871734d3d6f6b960');
  // ----------------- mocks
  try {
    const drugApplication = { drugId: req.body.appliedDrugId };

    const findDisease = () => {
      req.user.kids.forEach((kid) => {
        kid.diseases.forEach((disease) => {
          if (disease._id.toString() === req.params.diseaseId) {
            console.log('wlazło raz');
            return disease;
          }
        });
      });
    };
    const disease = findDisease();

    console.log('stan: ' + disease);
    if (!disease) {
      console.log('not');
      // res.status(StatusCodes.NOT_FOUND).send({ message: 'Nie znaleziono.' });
    } else {
      console.log('yep');
      // disease.drugApplications.push(drugApplication);
      // await req.user.save();
      // res.status(StatusCodes.CREATED).send(disease);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Nic.' });
  }
};
export default postDrugApplication;
