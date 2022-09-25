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

const TrackProgress: React.FC<TrackProgressProps> = ({left, right, onChange}) => {
    return (
      <div className={styles.slider} >
        <h4 className={styles.l_time}>1:50</h4>
        <Box>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Slider
              size="small"
              sx={{ color: "white" }}
              min={left}
              max={right}
            />
          </Stack >
        </Box>

        <h4 className={styles.r_time}>2:50</h4>
      </div>
    );
};

export default TrackProgress;