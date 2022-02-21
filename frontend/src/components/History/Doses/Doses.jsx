import React, { useEffect } from "react";
import {
  Checkbox,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Card,
} from "@mui/material";
import "./Doses.scss";
import SymScreen from "../Symptoms/SymScreen";

const Doses = ({ drug }) => {

    const titlesArray = ['Godzina', 'Nazwa leku', 'Dawka', 'Temperatura', 'Objawy'].map((item, key) => 
        <Typography key={key} className='doses__titles' sx={{fontSize:'10px'}} variant="subtitle2" component="div">
            {item}
        </Typography>
    )

    const now = new Date()
    const hour = now.getHours()
    let minutes = now.getMinutes()
    if(minutes < 10) {
        minutes = '0'+ minutes;
    }

    const currentTime = `${hour}:${minutes}`
    const defaultTime = ['8:00', '14:00', '20:00', '02:00']

    const dose = defaultTime.map((item, key) => {
        const [checked, setChecked] = React.useState(false);
        const [time, setTime] = React.useState(0)

        useEffect(() => {
            if (!checked) {
                setTime(item)
            }  else {
                setTime(currentTime)
            }
        }, [checked]);
        
        return (<Card elevation={16} key={key} value={item} className='doses__items' component="div" >
                <Typography key={key} className='doses__item' variant="subtitle2" component="div">
                {time}
                </Typography>
                <Typography className='doses__item' variant="subtitle2" component="div">
                {drug.medication}
                </Typography> 
                <Typography className='doses__item' variant="subtitle2" component="div">
                {drug.weight_based_calculations?.dose_per_1kg?.amount}
                {drug.weight_based_calculations?.dose_per_1kg?.unit}
                </Typography>   
                <TextField
                className='doses__item'
                sx={{ width: '50px', '& .MuiInput-underline:before': { borderBottomColor: 'white' }}}
                inputProps={{ style: {fontSize: 11, color:'white' }}}
                id="standard-number"
                type="number"
                variant="standard"
                InputProps={{
                endAdornment: <InputAdornment className='doses__icon' position="end"><Typography sx={{color: 'white'}}>°C</Typography></InputAdornment>,
                }}
                 aria-describedby="standard--helper-text"
                />    
                <SymScreen symptoms={[]} onChange={() => {}} />
                <Checkbox
                style ={{
                    color: "#fff",
                }}
                onChange={e => setChecked(e.target.checked)} color="default" />
                </Card>
        )});
    
    return (
        <Box className='doses' component="div">
            <Card elevation={16} sx={{p: '5px 0 5px 0'}} className='doses__header' component="div">
                {titlesArray}           
            </Card>
            <Box>{dose}</Box>                        
        </Box>      
    )
}

export default Doses;
