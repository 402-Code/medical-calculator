import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import KidSelect from './KidSelect/KidSelect';
import SelectDrug from './SelectDrug/SelectDrug';
import Profile from '../Profile/Profile';
import { UserContext } from '../../context/UserContext';

const NewDragScreen = ({ setSelectedDrug }) => {
  const { user } = useContext(UserContext);
  const [kids, setKids] = useState([]);
  const [activeKid, setActiveKid] = useState();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/kids');
      if (data?.length) setActiveKid(data[0]);
      setKids(data);
    })();
  }, [user]);

  if (kids?.length > 0 && activeKid) {
    return (
      <>
        <KidSelect activeKid={activeKid} setActiveKid={setActiveKid} kids={kids} />
        <SelectDrug setSelectedDrug={setSelectedDrug} activeKid={activeKid} />
      </>
    );
  }
  return <Profile />;
};

export default NewDragScreen;
