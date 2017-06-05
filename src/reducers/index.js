import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import videos from './contact'

export default combineReducers({
  user,
  runtime,
  videos
});
