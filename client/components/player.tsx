import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import VolumeUp from '@mui/icons-material/VolumeUp';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import styles from '../styles/Home.module.css'
import antidepressant from '../public/antidepressant.jpg'
import { ITrack } from '../types/track';
import TrackProgress from './TrackProgress';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { chainPropTypes } from '@mui/utils';

let audio: object;

const Player = () => {
  const track: ITrack[] = [{_id: '1', name: 'Antidepressant', artist: 'FACE', text: 'сатань мне антидепрессантом', listens:0, picture: 'http://localhost:3333/image/4637ef5a-3853-4a49-92b2-674d78f36419.png', audio: 'http://localhost:3333/audio/ae99f18a-9b6a-4852-8154-834323dc5066.mp3'},
  {_id: '2', name: 'Юморист', artist: 'FACE', text: 'сатань мне антидепрессантом', listens:0, picture: 'http://localhost:3333/image/4637ef5a-3853-4a49-92b2-674d78f36419.png', audio: 'http://localhost:3333/audio/7031639a-b432-4e59-8b2b-98c6a6e337f2.mp3'}]
  // const [active, setActive] = useState(false)
  const{pause, volume, active, duration, currentTime} = useTypedSelector(state=> state.player)
  const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions()

  useEffect(() => {
    if(!audio){
      audio = new Audio()
    }else{
      setAudio()
      play()
    }
},[active])

  const setAudio = () =>{
    if(active){
    audio.src = active.audio
    audio.volume = volume / 100
    audio.onloadedmetadata = () => {
      setDuration(Math.ceil(audio.duration))
    }
    audio.ontimeupdate = () => {
      setCurrentTime(Math.ceil(audio.currentTime))
    }
  }
}

  const play  = () => {
    if(pause){
      playTrack()
      audio.play()
    }
    else{
      pauseTrack()
      audio.pause()
    }
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>)=>{
    let vol = Number(e.target.value)
    audio.volume = vol / 100
    setVolume(vol)
  }

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>)=>{
    let time = Number(e.target.value)
    audio.currentTime = time
    setCurrentTime(time)
  }

  if(active == null)
    return null
    
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
            {!pause 
              ? <PauseCircleIcon onClick={play} className={styles.pause} />
              : <PlayCircleIcon onClick={play} className={styles.pause} />
            }
            <SkipNextIcon className={styles.skip_next} />
          </div>
          <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}></TrackProgress>
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
              <Slider
                size="small"
                sx={{ color: "white" }}
                min={0}
                defaultValue={volume}
                step={0.1}
                max={100}
                onChange = {changeVolume}
              />
              {/* <TrackProgress left={0} right={20} style={''} onChange={()=>({})}></TrackProgress> */}
            </Stack>
              {/* <TrackProgress left={0} right={20} width={'100px'} onChange={()=>({})}></TrackProgress> */}
          </Box>
        </div>
      </div>
    );
};

export default Player;