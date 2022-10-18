import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../store'
import { fetchTracks } from '../../store/action-creators/track'
// import TrackList from '../../components/TrackList'

import styles from '../../styles/Home.module.css'


export default function AllTracksTable() {
    const {tracks, error} = useTypedSelector(state => state.track)

    console.log(tracks.length, tracks, error);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Artist</TableCell>
            <TableCell align="right">Listens</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks.map((track) => (
            <TableRow
              key={track.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="left">
                <picture >
                    <img src={'http://localhost:3333/'+track.picture} className={styles.track_card_img} />
                </picture>
              </TableCell>
              <TableCell align="left">{track.name}  {track.artist}</TableCell>
              <TableCell align="left">{track.listens}</TableCell>
            </TableRow>
          ))}
          {/* <TrackList tracks={tracks}/> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch
      await dispatch(await fetchTracks())
  });