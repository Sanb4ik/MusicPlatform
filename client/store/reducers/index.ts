import { combineReducers } from "redux";
import { playerReducer } from './playerReducer'
import { AnyAction} from 'redux';
import { HYDRATE} from 'next-redux-wrapper';
import { trackReducer } from "./trackReducer";

const rootReducer = combineReducers({
    player: playerReducer,
    track: trackReducer
})

export const reducer = (state, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log(state)
        const nextState = {
          ...state, // use previous state
        
          ...action.payload, // apply delta from hydration
        };
        if (state.player.active){
          nextState.player.active= state.player.active;
          nextState.player.currentTime = state.player.currentTime
          nextState.player.duration = state.player.duration
        }
          // preserve count value on client side navigation
        return {...state, ...action.payload};// Attention! This will overwrite client state! Real apps should use proper reconciliation.

      case 'TICK':
        return {...nextState, tick: action.payload};
      default:
        return rootReducer(state, action);
    }
  };

export type RootState = ReturnType<typeof rootReducer>