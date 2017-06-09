import {
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions/home';

export default function news(state = { data: [] }, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        data: []
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload.data,
        total: action.payload.total,
        page: action.payload.page,
        per_page: action.payload.per_page,
        lastUpdated: action.payload.receivedAt
      });
    default:
      return state
  }
}
