import axios from 'axios';

// TODO - biorę tylko pierwszą chorobę w lnii 7

const getLastApplication = async (user, kidName) => {
  const kid = user.kids.find((kid) => kid.name === kidName);
  const lastApplication = kid.diseases[0].drugApplications.pop();

  const { data } = await axios.get('/api/drugs');
  const drug = data.find((drug) => drug._id === kid.diseases[0].initialDrug);

  return { lastApplication, drug };
};

export default getLastApplication;
