import { AnyAction, Store} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import {createWrapper, Context, HYDRATE, MakeStore, } from 'next-redux-wrapper';
import { reducer, RootState } from './reducers';
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

//export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>