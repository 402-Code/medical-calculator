import React from 'react';
import { useParams } from 'react-router-dom';
import HistoryName from './HistoryName/HistoryName';
import Doses from './Doses/Doses';
import Calendar from './Calendar/Calendar';

const History = () => {
  const params = useParams();
  return (
    <>
      <HistoryName kidName={params.kidname} />
      <Calendar />
      <Doses kidName={params.kidname} />
    </>
  );
};

export default History;
