import React, { useState, useContext, useEffect } from 'react';

import KidSelect from './KidSelect/KidSelect';
import SelectDrug from './SelectDrug/SelectDrug';
import Profile from '../Profile/Profile';
import { ChildContext } from '../../context/ChildContext';

const NewDragScreen = ({ setSelectedDrug }) => {
  console.log('setselecteddrug', setSelectedDrug);

  const [activeKid, setActiveKid] = useState({});
  const ctx = useContext(ChildContext);

  useEffect(() => {
    if (ctx.user.kids?.length > 0) {
      const firstKid = ctx.user.kids[0];
      console.log('firstKid', firstKid);
      setActiveKid(firstKid);
      console.log('activekid1', activeKid);
    }
  }, []);

  console.log('activekid2', activeKid);

  if (ctx.user.kids !== null) {
    console.log('!@#$%^&*()_+', ctx.user);
    return (
      <>
        {console.log('activekid3', activeKid)}
        <KidSelect activeKid={ctx.user.kids[0]} setActiveKid={setActiveKid} />
        <SelectDrug setSelectedDrug={setSelectedDrug} activeKid={ctx.user.kids[0]} />
      </>
    );
  }
  return <Profile />;
};

export default NewDragScreen;
