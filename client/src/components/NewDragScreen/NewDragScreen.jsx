import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import KidSelect from './KidSelect/KidSelect';
import SelectDrug from './SelectDrug/SelectDrug';
import Profile from '../Profile/Profile';
// import { ChildContext } from '../../context/ChildContext';
import { UserContext } from '../../context/UserContext';

const NewDragScreen = ({ setSelectedDrug }) => {
  // const { kids } = useContext(ChildContext);
  const { user } = useContext(UserContext);
  const [kids, setKids] = useState([]);
  const [activeKid, setActiveKid] = useState();



  // useEffect(() => {
  //   setActiveKid(kids[0]);
  // }, [kids]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/kids');
      if (data?.length) setActiveKid(data[0]);
      setKids(data);
    })();
  }, [user]);

  if (kids.length > 0) {
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
