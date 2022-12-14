import axios from "axios";
import { Dispatch } from "react";
import { TrackAction, TrackActionTypes } from "../../types/track";

export const fetchTracks = async() => {
    return async (dispatch: Dispatch<TrackAction>) =>{
        try {
            const response = await axios.get('http://localhost:3333/tracks')
            console.log("get RESPONSE",response);
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data});
        }catch (err){
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'fetchTracks failed'
            });
        }
    }
}

export const fetchTrack = async(url: string) => {
    return async (dispatch: Dispatch<TrackAction>) =>{
        try {
            const response = await axios.get('http://localhost:3333/tracks'+url)
             console.log(response);
            dispatch({type: TrackActionTypes.FETCH_TRACK, payload: response.data});
        }catch (err){
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'fetchTrack failed'
            });
        }
    }
}