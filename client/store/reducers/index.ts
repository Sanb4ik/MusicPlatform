import { combineReducers } from "redux";
import { playerReducer } from './playerReducer'
import { AnyAction} from 'redux';
import { HYDRATE} from 'next-redux-wrapper';

const rootReducer = combineReducers({
    player: playerReducer
})

export const reducer = (state, action) => {
    switch (action.type) {
      case HYDRATE:
        // Attention! This will overwrite client state! Real apps should use proper reconciliation.
        return {...state, ...action.payload};
      case 'TICK':
        return {...state, tick: action.payload};
      default:
        return rootReducer(state, action);
    }
  };

export type RootState = ReturnType<typeof rootReducer>