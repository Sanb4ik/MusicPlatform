import React, {useState} from 'react';
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
import TrackTable from '../../components/TrackTable';

export default function AllTracksTable() {
    const {tracks, error} = useTypedSelector(state => state.track)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300}} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Listens</TableCell>
            <TableCell align="left">Like</TableCell>
          </TableRow>
        </TableHead>
        <TrackTable tracks={tracks}>
        </TrackTable>
      </Table>
    </TableContainer>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch
      await dispatch(await fetchTracks())
  });