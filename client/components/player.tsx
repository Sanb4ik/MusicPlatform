import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import VolumeUp from '@mui/icons-material/VolumeUp';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import styles from '../styles/Home.module.css'
import antidepressant from '../public/antidepressant.jpg'
import { ITrack } from '../types/track';
import TrackProgress from './TrackProgress';

const Player = () => {
  const track: ITrack = {_id: '1', name: 'Antidepressant', artist: 'FACE', text: 'сатань мне антидепрессантом', listens:0, picture: 'http://localhost:3333/image/4637ef5a-3853-4a49-92b2-674d78f36419.png', audio: 'http://localhost/3333/audio/9e3fbd8c-f568-4f2d-9231-25d31076e03a.mp3'}
  
    return (
      <div className={styles.player}>
        <div className={styles.prewiev}>
          <div className={styles.img}>
            <Image
              src={antidepressant}
              alt="Picture of the author"
              width={'100vh'}
              height={'100vh'}
            />
          </div>
          <div className={styles.info}> Antidipressant</div>
          <div className={styles.info}> Face</div>
        </div>
        <div className={styles.play_module}>
          <div className={styles.module_btns}>
            <SkipPreviousIcon className={styles.skip_back} />
            <PlayCircleIcon className={styles.pause} />
            <SkipNextIcon className={styles.skip_next} />
          </div>
          <TrackProgress left={0} right={20} style={'slider'} onChange={()=>({})}></TrackProgress>
          <div className={styles.smart_pause}>
            <PlayCircleIcon sx={{ fontSize: "40px" }} />
          </div>
        </div>
        <div className={styles.functions}>
          <div>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <LibraryBooksIcon className={styles.func_btn} />
            </Stack>
          </div>
          <Box sx={{ width: '80%'}}>
             
              <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <VolumeUp className={styles.func_btn} />
              <Slider/>
              {/* <TrackProgress left={0} right={20} style={''} onChange={()=>({})}></TrackProgress> */}
            </Stack>
              {/* <TrackProgress left={0} right={20} width={'100px'} onChange={()=>({})}></TrackProgress> */}
          </Box>
        </div>
      </div>
    );
};

export default Player;