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
import { ConstructionOutlined } from '@mui/icons-material';
import { info } from 'console';

var audio: object;

const Player = () => {
  
  const{pause, volume, active, duration, currentTime} = useTypedSelector(state=> state.player)
  const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions()

  useEffect(() => {
    console.log('Player constructor');
    // console.log)
    if(!audio){
      audio = new Audio()
    }
    else{
      setAudio()
      play()
    }
},[active, duration])

const {tracks, error} = useTypedSelector(state => state.track)
if(error){
  return null;
}

const setAudio = () => {
  if(active){
    console.log(active.audio)
    audio.src = 'http://localhost:3333/'+active.audio
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
      audio.pause()
      console.log("pauseTrack")
    }
    else{
      pauseTrack()
      audio.play()
      console.log("playTrack")
      // audio.currentTime = 0
      // audio.play()
    }
}

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>)=>{
    let vol = Number(e.target.value)
    audio.volume = vol / 100
    setVolume(vol)
  }

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>)=>{
    let time = Number(e.target.value)
    console.log(time)
    audio.currentTime = time
    setCurrentTime(time)
  }

  const [tr_index, setTrIndex] = useState(1 ) 

  const getRandIndex =()=>{
    return Math.floor(Math.random() * tracks.length)
  }

  const getNextIndex =()=>{
    setTrIndex(tr_index+1)

    if(tr_index == tracks.length-1)
      setTrIndex(0)

    return tr_index
  }

  const getPreviousIndex =()=>{
    setTrIndex(tr_index-1)

    if(tr_index == 0)
      setTrIndex(tracks.length - 1)

    return tr_index
  }

  const skipNext = () => {
    console.log("skipNext")
    getNextIndex()
    setActiveTrack(tracks[tr_index])
  }

  const skipPrevious = () => {
    getPreviousIndex()

    setActiveTrack(tracks[tr_index])
  }

  useEffect(()=>{
    if(currentTime == duration-1)
      skipNext()
  },[currentTime])

  if(active == null)
    return null

    
    return (
      <div className={styles.player}>
        <div className={styles.prewiev}>
          <div className={styles.img}>
            <picture >
              <img src={'http://localhost:3333/'+active.picture} className={styles.track_card_img} />
            </picture>
          </div>
          <div className={styles.info}>{active.name}</div>
          <div className={styles.info}>{active.artist}</div>
        </div>
        <div className={styles.play_module}>
          <div className={styles.module_btns}>
            <SkipPreviousIcon onClick={skipPrevious} className={styles.skip_back} />
            {pause 
              ? <PauseCircleIcon onClick={play} className={styles.pause} />
              : <PlayCircleIcon onClick={play} className={styles.pause} />
            }
            <SkipNextIcon onClick={skipNext} className={styles.skip_next} />
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
            </Stack>
          </Box>
        </div>
      </div>
    );
};

export default Player;