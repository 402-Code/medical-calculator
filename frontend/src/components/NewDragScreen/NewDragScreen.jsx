import React, { useRef, useContext } from "react";
import { ChildContext } from "../../context/ChildContext";
import KidSelect from "./KidSelect/KidSelect";
import SelectDrug from "./SelectDrug/SelectDrug";

const NewDragScreen = ({ selectedDrug }) => {
  const { kids } = useContext(ChildContext);
  const activeKid = useRef(kids[0]);

  return (
    <>
      <KidSelect activeKid={activeKid} />
      <SelectDrug selectedDrug={selectedDrug} activeKid={activeKid} />
    </>
  );
};

export default NewDragScreen;
