import {
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions/detail';

export default function detail(state = {}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload.detail,
        lastUpdated: action.payload.receivedAt
      });
    default:
      return state
  }
}
