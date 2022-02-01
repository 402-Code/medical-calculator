import React from "react";
import { useParams } from "react-router-dom";
import HistoryName from "./HistoryName/HistoryName";

const History = () => {
  const params = useParams();
  return (
    <>
      <HistoryName kidName={params.kidname} />
    </>
  );
};

export default History;
