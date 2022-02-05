import React from "react";
import { useState } from "react";
import KidSelect from "./KidSelect/KidSelect";
import SelectDrug from "./SelectDrug/SelectDrug";

const NewDragScreen = ({ setSelectedDrug }) => {
  const activeKidState = useState({});

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
