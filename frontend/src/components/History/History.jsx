import React from "react";
import { useParams } from "react-router-dom";
import HistoryName from "./HistoryName/HistoryName";
import Doses from "./Doses/Doses"
import Calendar from "./Calendar/Calendar";

const History = ({ drug }) => {
  const params = useParams();
  return (
    <>
      <HistoryName kidName={params.kidname} />
      <Calendar />
      <Doses drug={drug} />
    </>
  );
};

export default History;
