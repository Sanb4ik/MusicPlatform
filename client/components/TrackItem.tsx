import React from 'react';
import { ITrack } from '../types/track';
import styles from '../styles/Home.module.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { useRouter } from 'next/router';
import { useActions } from '../hooks/useActions';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active}) => {
  const {playTrack, pauseTrack, setActiveTrack} = useActions()

  const play = (e) =>{
    e.stopPropagation()
    setActiveTrack(track)
    playTrack()
  }
  const router = useRouter()
    return (
      <div 
        className={styles.track_card}
        onClick={() => router.push('/tracks/' + track._id)}
      >
        <div>
         <picture >
            <img src={track.picture} className={styles.track_card_img} />
          </picture>
        </div>

        <div style={{marginLeft:'10px'}}>
          {track.name}
        </div>
        <div onClick={play}>
        {active
            ? <PauseCircleIcon/>
            : <PlayCircleIcon />
        }
        </div>
      </div>
    );
};

export default TrackItem;