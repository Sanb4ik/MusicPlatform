import React from 'react';
import { ITrack } from '../types/track';
import styles from '../styles/Home.module.css'
import TrackItem from './TrackItem'

interface TrackListProps{
    tracks: ITrack[];
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    return (
        <div className={styles.last_tracks}>
          <div className={styles.title}>
            <h1 style={{marginTop:"30px"}}>Good evening</h1>
            <h1>Last tracks</h1>
          </div>
          {
            tracks.slice(0,6).map( track =>
                <TrackItem 
                    key={track._id}
                    track={track}
                    active={true}
                />
                )
          }
          {/* TrackItem */}
        </div>
    );
};

export default TrackList;