import React from 'react';
import { useParams } from 'react-router-dom';
import HistoryName from './HistoryName/HistoryName';
import HistoryTabs from './Calendar/HistoryTabs';
import PlannedDoses from './PlannedDoses/PlannedDoses';
import DosesHistory from './DosesHistory/DosesHistory';

const History = () => {
  const { kidname } = useParams();
  return (
    <>
      <HistoryName kidName={kidname} />
      <HistoryTabs itemOne={<DosesHistory kidName={kidname} />} itemTwo={<PlannedDoses kidName={kidname} />} />
    </>
  );
};

export default History;
