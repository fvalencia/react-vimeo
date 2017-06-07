import {
  REQUEST_DETAIL_VIDEO, RECEIVE_DETAIL_VIDEO
} from '../actions/detail';

export default function detail(state = {}, action) {
  switch (action.type) {
    case REQUEST_DETAIL_VIDEO:
      return Object.assign({}, state, {
        isFetching: true,
        videoId: action.videoId
      });
    case RECEIVE_DETAIL_VIDEO:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload.detail,
        lastUpdated: action.payload.receivedAt
      });
    default:
      return state
  }
}

