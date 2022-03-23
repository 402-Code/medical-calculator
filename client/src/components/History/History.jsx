import React from 'react';
import { useParams } from 'react-router-dom';
import HistoryName from './HistoryName/HistoryName';
import HistoryTabs from './Calendar/HistoryTabs';
import PlannedDoses from './PlannedDoses/PlannedDoses';
import DosesHistory from './DosesHistory/DosesHistory';

const History = () => {
  const params = useParams();
  return (
    <>
      <HistoryName kidName={params.kidname} />
      <HistoryTabs
        itemOne={<DosesHistory kidName={params.kidname} />}
        itemTwo={<PlannedDoses kidName={params.kidname} />}
      />
    </>
  );
};

export default History;
