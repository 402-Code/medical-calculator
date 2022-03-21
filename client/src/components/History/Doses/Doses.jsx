import React, { useContext, useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@mui/material';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';

const NO_OF_PLANNED_APPLICATIONS = 4;

const Doses = ({ kidName }) => {
  const [disease, setDisease] = useState([]);
  const [drug, setDrug] = useState('');
  // const [lastApplication, setLastApplication] = useState({});
  const [plannedApplications, setPlannedApplications] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const kid = user.kids.find((kid) => kid.name === kidName);
      console.log(kid.diseases[0].drugApplications);
      setDisease(kid.diseases[0].drugApplications);
      console.log('last application:');
      console.log(kid.diseases[0].drugApplications.pop());
      const lastApplication = kid.diseases[0].drugApplications.pop();

      const { data } = await axios.get('/api/drugs');
      const drug = data.find((drug) => drug._id === kid.diseases[0].initialDrug);
      setDrug(drug);

      const plannedArray = [];
      // eslint-disable-next-line new-cap
      console.log(lastApplication.createdAt);
      const lastApplicationDate = new Date(lastApplication.createdAt);
      // const lastApplicationDate = new Date('2022-03-13T20:18:04.007Z');

      console.log('getHours: ', lastApplicationDate.getHours());

      let hour = lastApplicationDate.getHours();
      const nextDose = {
        minutes: lastApplicationDate.getMinutes(),
        drugName: drug.name,
        dose: 333
      };
      for (let i = 0; i < NO_OF_PLANNED_APPLICATIONS; i++) {
        hour += parseInt(drug.interval, 10);
        if (hour > 24) hour -= 24;
        plannedArray.push({ hour, ...nextDose });
      }
      setPlannedApplications(plannedArray);
    })();
  }, []);

  // useEffect(() => {
  //   const plannedArray = [];
  //   // eslint-disable-next-line new-cap
  //   console.log(lastApplication.createdAt);
  //   const lastApplicationDate = Date.parse(lastApplication.createdAt);
  //   // const lastApplicationDate = new Date('2022-03-13T20:18:04.007Z');
  //   console.log('last date:');
  //   console.log(typeof lastApplicationDate);
  //   console.dir(lastApplicationDate);
  //   const nextDose = {
  //     hour: lastApplicationDate.getHours(),
  //     minutes: lastApplicationDate.getMinutes(),
  //     drugName: drug.name,
  //     dose: 333
  //   };
  //   for (let i = 0; i < NO_OF_PLANNED_APPLICATIONS; i++) {
  //     // nextDose.hour += drug.interval;
  //     plannedArray.push(nextDose);
  //   }
  //   setPlannedApplications(plannedArray);
  // }, [lastApplication]);

  return (
    <Paper elevation={16} square sx={{ pb: 2, px: 2, boxShadow: 'none' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Godz.</TableCell>
            <TableCell>Lek</TableCell>
            <TableCell>Dawka</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {plannedApplications.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                {row.hour}:{row.minutes}
              </TableCell>
              <TableCell>{row.drugName}</TableCell>
              <TableCell>{row.dose}</TableCell>
              <TableCell>
                <Button>Podaj</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Doses;
