import React, { useContext } from "react";
import { useState } from "react";
import { ChildContext } from "../../context/ChildContext";
import KidSelect from "./KidSelect/KidSelect";
import SelectDrug from "./SelectDrug/SelectDrug";

const NewDragScreen = ({ selectedDrug }) => {
  const activeKidState = useState({});
  const { kids } = useContext(ChildContext);

  return (
    <>
      <KidSelect activeKidState={activeKidState} />
      <SelectDrug selectedDrug={selectedDrug} activeKid={activeKidState[0]} />
    </>
  );
};

export default NewDragScreen;
