import React from "react";
import { useParams } from "react-router-dom";
import HistoryName from "./HistoryName/HistoryName";
import Calendar from "./Calendar/Calendar";

const History = () => {
  const params = useParams();
  return (
    <>
      <HistoryName kidName={params.kidname} />
      <Calendar />
    </>
  );
};

export default History;
