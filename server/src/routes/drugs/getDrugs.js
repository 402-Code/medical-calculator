import Drug from '../../models/drug';

const getDrugs = async (req, res) => {
  const drugs = await Drug.find().populate('applicationRequirement').populate('schedulingPolicy');
  res.json(drugs);
};

export default getDrugs;
