import { combineReducers } from 'redux';
import covidReducer from './covidSlice';

const rootReducer = combineReducers({
  covidData: covidReducer,
});

export default rootReducer;
