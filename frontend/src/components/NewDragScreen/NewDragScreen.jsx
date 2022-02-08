import React from "react";
import { useState, useContext, useEffect } from "react";
import KidSelect from "./KidSelect/KidSelect";
import SelectDrug from "./SelectDrug/SelectDrug";
import Profile from "../Profile/Profile";
import { ChildContext } from "../../context/ChildContext";

const NewDragScreen = ({ setSelectedDrug }) => {
  const { kids } = useContext(ChildContext);
  const [activeKid, setActiveKid] = useState();

  useEffect(() => {
    setActiveKid(kids[0]);
  }, [kids]);

  if (kids.length > 0) {
    return (
      <>
        <KidSelect activeKid={activeKid} setActiveKid={setActiveKid} />
        <SelectDrug setSelectedDrug={setSelectedDrug} activeKid={activeKid} />
      </>
    );
  } else {
    return <Profile />;
  }
};

export default NewDragScreen;
