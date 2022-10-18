import { TableBody, TableRow } from '@mui/material';
import React from 'react';
import { ITrack } from '../types/track';
import TrackRow from './TrackRow';

interface TrackTableProps{
    tracks: ITrack[];
}


const TrackTable : React.FC<TrackTableProps> = ({tracks}) => {
    return (
        <TableBody>
          {tracks.map((track) => (
            <TableRow
              key={track.name}
            >
              <TrackRow track = {track}/>
            </TableRow>
          ))}
        </TableBody>
    );
};

export default TrackTable;