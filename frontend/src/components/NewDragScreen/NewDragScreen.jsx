import React from "react";
import { useState, useContext } from "react";
import KidSelect from "./KidSelect/KidSelect";
import SelectDrug from "./SelectDrug/SelectDrug";
import { ChildContext } from "../../context/ChildContext";

const NewDragScreen = ({ setSelectedDrug }) => {
  const { kids } = useContext(ChildContext);
  const activeKidState = useState(kids[0]);

  return (
    <>
      <KidSelect activeKidState={activeKidState} />
      <SelectDrug
        setSelectedDrug={setSelectedDrug}
        activeKid={activeKidState[0]}
      />
    </>
  );
};

export default NewDragScreen;
