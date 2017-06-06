import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import videos from './contact';
import detail from './detail';

export default combineReducers({
  user,
  runtime,
  videos,
  detail
});
