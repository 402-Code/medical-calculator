import axios from 'axios';

// TODO - biorę tylko pierwszą chorobę w lnii 7

const getLastApplication = async (user, kidName) => {
  const kid = user.kids.find((kid) => kid.name === kidName);
  const lastApplication = kid.diseases[0]?.drugApplications.slice(-1)[0];

  const { data } = await axios.get('/api/drugs');
  const drug = data.find((drug) => drug._id === kid.diseases[0].initialDrug);

  const diseaseId = kid.diseases[0]._id;

  return { lastApplication, diseaseId, drug };
};

export default getLastApplication;
