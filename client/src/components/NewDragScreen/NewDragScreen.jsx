import React, { useState, useContext, useEffect } from 'react';

import KidSelect from './KidSelect/KidSelect';
import SelectDrug from './SelectDrug/SelectDrug';
import Profile from '../Profile/Profile';
import { ChildContext } from '../../context/ChildContext';

const NewDragScreen = ({ setSelectedDrug }) => {
  const [activeKid, setActiveKid] = useState({});
  const ctx = useContext(ChildContext);

  useEffect(() => {
    const firstKid = ctx.user.kids[0];
    setActiveKid(firstKid);
  }, []);

  console.log('activekid2', activeKid);

  if (ctx.user.kids !== null) {
    return (
      <>
        <KidSelect activeKid={ctx.user.kids[0]} setActiveKid={setActiveKid} />
        <SelectDrug setSelectedDrug={setSelectedDrug} activeKid={ctx.user.kids[0]} />
      </>
    );
  }
  return <Profile />;
};

export default NewDragScreen;
