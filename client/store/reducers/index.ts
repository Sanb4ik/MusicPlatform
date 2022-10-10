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
        
        // const stateDiff = diff(state, action.payload) as any;
        // const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith('X'); // or any other criteria
        
        return {...state, ...action.payload};// Attention! This will overwrite client state! Real apps should use proper reconciliation.
      case 'TICK':
        return {...state, tick: action.payload};
      default:
        return rootReducer(state, action);
    }
  };

export type RootState = ReturnType<typeof rootReducer>