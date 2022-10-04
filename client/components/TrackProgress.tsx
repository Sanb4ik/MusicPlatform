import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import styles from '../styles/Home.module.css'

interface TrackProgressProps{
    left:number;
    right:number; 
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Time = (time: number) => {
  let minutes = Math.floor(time / 60)
  let seconds = '0'
  let sec = Math.ceil(time - minutes*60)

  if(sec<10) seconds = '0' +sec.toString()
  else seconds = sec.toString()
  // console.log(minutes,':', seconds)
 return `${minutes}:${seconds}`
}

const TrackProgress: React.FC<TrackProgressProps> = ({left, right, onChange}) => {
    return (
      <div className={styles.slider} >
        <p className={styles.l_time}>{Time(left)}</p>
        <Box>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Slider
              size="small"
              sx={{ color: "white" }}
              min={0}
              value={left}
              step={0.000001}
              onChange={onChange}
              max={right}
            />
          </Stack >
        </Box>

        <p className={styles.r_time}>{Time(right)}</p>
      </div>
    );
};

export default TrackProgress;