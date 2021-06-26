import {combineReducers} from 'redux';
import gameReducer from './gameReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  gameReducer,
  loadingReducer,
});

export default rootReducer;
