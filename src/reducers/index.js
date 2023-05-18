//this file contains all the paths of different  reducers hence we can export all reducers at a time...
import changeTheNumber from './upDown';

//to combine/store all the reducer we need to use function from redux
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  changeTheNumber: changeTheNumber,
});

export default rootReducer;
