import React from 'react';
import { ITrack } from '../types/track';
import styles from '../styles/Home.module.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useRouter } from 'next/router';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {

  const router = useRouter()
    return (
      <div 
        className={styles.track_card}
        onClick={() => router.push('/tracks/' + track._id)}
      >
        <div >
         <picture >
            <img src={track.picture} className={styles.track_card_img} />
          </picture>
        </div>

        <div style={{marginLeft:'10px'}}>
          {track.name}
        </div>
        <div onClick={e =>e.stopPropagation()}>
        {active
            ? <></>
            : <PlayCircleIcon />
          }
        </div>
      </div>
    );
};

export default TrackItem;