import React, {useState} from 'react';
import { ITrack } from '../types/track';
import styles from '../styles/Home.module.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { useRouter } from 'next/router';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface TrackItemProps {
    track: ITrack;
}

const TrackItem: React.FC<TrackItemProps> = ({track}) => {
  const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions()
  const {pause, volume, active, duration, currentTime} = useTypedSelector(state=> state.player)


  const playThisTrack = (e) =>{
    e.stopPropagation()
    setActiveTrack(track)
    if(!pause)
      pauseTrack()
  }
  
  const router = useRouter()
    return (
      <div 
        className={styles.track_card}
        onClick={() => router.push('/tracks/' + track._id)}
      >
        <div>
         <picture >
            <img src={'http://localhost:3333/'+track.picture} className={styles.track_card_img} />
          </picture>
        </div>

        <div style={{marginLeft:'10px'}}>
          {track.name}
        </div>
        <div onClick={playThisTrack}>
        {active?.audio === track.audio
            ? <PauseCircleIcon/>
            : <PlayCircleIcon />
        }
        </div>
      </div>
    );
};

export default TrackItem;