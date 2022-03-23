import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const HistoryTabs = ({ itemOne, itemTwo }) => {
  const [selectedTab, setSelectedTab] = React.useState(1);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={selectedTab} onChange={handleChange}>
            <Tab label="Historia Dawkowania" />
            <Tab label="Planowane Dawki" />
          </Tabs>
        </Box>
      </Box>
      {selectedTab === 0 && itemOne}
      {selectedTab === 1 && itemTwo}
    </>
  );
};

export default HistoryTabs;
