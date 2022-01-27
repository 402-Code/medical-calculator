import React from "react";
import DrugSummary from "../DrugSummary/DrugSummary";
import KidSelect from "../KidSelect/KidSelect";

const HomeScreen = ({ kids, drug }) => {
  return (
    <>
      <KidSelect kids={kids} />
      {/* There will be DrugFinder component here */}
      <DrugSummary kids={kids} drug={drug} />
    </>
  );
};

export default HomeScreen;
