import React, { useState, useContext, useEffect } from 'react';
import KidSelect from './KidSelect/KidSelect';
import SelectDrug from './SelectDrug/SelectDrug';
import Profile from '../Profile/Profile';
import { UserContext } from '../../context/UserContext';

const NewDragScreen = ({ setSelectedDrug }) => {
  const { user } = useContext(UserContext);
  const [kids, setKids] = useState([]);
  const [activeKid, setActiveKid] = useState();

  useEffect(() => {
    if (user.kids?.length) setActiveKid(user.kids[0]);
    setKids(user.kids);
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
