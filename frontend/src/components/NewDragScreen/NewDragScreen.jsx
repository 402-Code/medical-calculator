import React from "react";
import { useState } from "react";
import KidSelect from "./KidSelect/KidSelect";
import SelectDrug from "./SelectDrug/SelectDrug";

const NewDragScreen = ({ selectedDrugState }) => {
  const activeKidState = useState({});

  return (
    <>
      <KidSelect activeKidState={activeKidState} />
      <SelectDrug
        selectedDrugState={selectedDrugState}
        activeKid={activeKidState[0]}
      />
    </>
  );
};

export default NewDragScreen;
