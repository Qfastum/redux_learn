import {createStore} from 'redux';
import { combineReducers } from 'redux';
import actionListReducer from './actionListReducer';

const reducers = combineReducers({actionListReducer});

const store = createStore(actionListReducer);

export default store;
