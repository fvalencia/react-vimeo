import {
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions/home';

export default function news(state = {}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload.videos,
        lastUpdated: action.payload.receivedAt
      });
    default:
      return state
  }
}
