import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import contact from './contact'

export default combineReducers({
  user,
  runtime,
  contact
});
