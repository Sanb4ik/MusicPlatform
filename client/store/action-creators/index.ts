import { PlayerAction } from "../../types/player";
import { PlayerActionTypes } from "../../types/player";

export const playTrack = (): PlayerAction =>{
    return {type: PlayerActionTypes.PLAY}
}