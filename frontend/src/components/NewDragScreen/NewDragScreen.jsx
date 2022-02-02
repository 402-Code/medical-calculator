import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { ChildContext } from "../../context/ChildContext";
import DrugSummary from "../DrugSummary/DrugSummary";
import KidSelect from "../KidSelect/KidSelect";

const NewDragScreen = ({ drug }) => {
  const { kids } = useContext(ChildContext);
  const activeKid = useRef(kids[0]);
  let navigate = useNavigate();

  function handleStartNewDrug() {
    navigate("/history/" + activeKid.current.name);
  }

  return (
    <>
      <KidSelect activeKid={activeKid} />
      {/* There will be DrugFinder component here */}
      <DrugSummary kids={kids} drug={drug} />
      <Button
        sx={{ mt: 4, mx: "auto", display: "table" }}
        variant="contained"
        onClick={handleStartNewDrug}
      >
        Rozpocznij podawanie leku
      </Button>
    </>
  );
};

export default NewDragScreen;
