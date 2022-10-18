import { TableCell } from '@mui/material';
import React, { useState } from 'react';
import { ITrack } from '../types/track';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import styles from '../styles/Home.module.css'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface TrackRowProps {
    track: ITrack;
}


const TrackRow: React.FC<TrackRowProps> = ({track}) => {

    const [like, setLike] = useState(false)

    const Liked = () => {
        setLike(!like)
    }

    const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions()
    const {pause, volume, active, duration, currentTime} = useTypedSelector(state=> state.player)


  const playThisTrack = (e) =>{
    e.stopPropagation()
    setActiveTrack(track)
    if(!pause)
      pauseTrack()
  }
    return (
        <>
            <TableCell align="left" onClick={playThisTrack}>
                <picture >
                    <img src={'http://localhost:3333/'+track.picture} className={styles.track_card_img} />
                </picture>
              </TableCell>
              <TableCell align="left">
                <p>{track.name}</p>
                <p>{track.artist}</p>
              </TableCell>
              <TableCell align="left">{track.listens}</TableCell>
              <TableCell align="left"> 
                {like ?
                    <FavoriteBorderIcon onClick ={Liked}/>
                    :
                    <FavoriteIcon onClick ={Liked}/>
                }
              </TableCell>
        </>
    );
};

export default TrackRow;