import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import KidSelect from './KidSelect/KidSelect';
import SelectDrug from './SelectDrug/SelectDrug';
import Profile from '../Profile/Profile';
import { ChildContext } from '../../context/ChildContext';

const NewDragScreen = ({ setSelectedDrug }) => {
  const { user } = useContext(ChildContext);
  const [kids, setKids] = useState([]);
  const [activeKid, setActiveKid] = useState();
  console.log('newdrug');
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/kids');
      console.log(data);
      if (data?.length) setActiveKid(data[0]);
      setKids(data);
    })();
  }, [user]);
  if (kids?.length > 0 && activeKid) {
    console.log('activeKid: ', activeKid);
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
