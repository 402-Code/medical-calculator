import Drug from '../../models/drug';

const getDrugs = async (req, res) => {
  const drugs = await Drug.find({});
  res.json(drugs);
};

export default getDrugs;
