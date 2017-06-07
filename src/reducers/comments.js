import {
  REQUEST_COMMENTS_VIDEO, RECEIVE_COMMENTS_VIDEO
} from '../actions/comments';

export default function comments(state = {}, action) {
  switch (action.type) {
    case REQUEST_COMMENTS_VIDEO:
      return Object.assign({}, state, {
        isFetching: true,
        videoId: action.videoId,
        data: null
      });
    case RECEIVE_COMMENTS_VIDEO:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload.comments,
        lastUpdated: action.payload.receivedAt
      });
    default:
      return state
  }
}

