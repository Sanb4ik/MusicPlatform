import React from 'react';
import styles from '../styles/Home.module.css'
import TrackItem from './TrackItem';

const Content = () => {
    return (
        <div className={styles.content}>
        {/* TrackList */}
        <div className={styles.last_tracks}>
          <div className={styles.title}>
            <h1 style={{marginTop:"10px"}}>Good evening</h1>
            <h1>Last tracks</h1>
          </div>
          {/* TrackItem */}
          <div className={styles.track_card}>song</div>
          <div className={styles.track_card}>song</div>
          <div className={styles.track_card}>song</div>
          <div className={styles.track_card}>song</div>
          <div className={styles.track_card}>song</div>
          <div className={styles.track_card}>song</div>
          <div className={styles.track_card}>song</div>
          <div className={styles.track_card}>song</div>
          <div className={styles.track_card}>song</div>
        </div>
        <div className={styles.playlists}>
          <div className={styles.title}>
            <h1>Playlists for you</h1>
          </div>
          <div className={styles.playlist_card}></div>
          <div className={styles.playlist_card}></div>
          <div className={styles.playlist_card}></div>
          <div className={styles.playlist_card}></div>
          <div className={styles.playlist_card}></div>
          <div className={styles.playlist_card}></div>
          <div className={styles.playlist_card}></div>
          <div className={styles.playlist_card}></div>
          <div className={styles.playlist_card}></div>
        </div>
      </div>
    );
};

export default Content;;