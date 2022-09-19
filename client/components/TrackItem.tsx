import React from 'react';
import Image from 'next/image';
import { ITrack } from '../types/track';
import styles from '../styles/Home.module.css'

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track,active = false}) => {
    console.log(track.picture)
    return (
      <div className={styles.track_card}>
        <div>
         <picture >
            <img src={track.picture} className={styles.track_card_img} />
            {/* width={"100vh"} height={"100vh"} */}
          </picture>
        </div>

        <div style={{marginLeft:'10px'}}>{track.name}</div>
      </div>
    );
};

export default TrackItem;