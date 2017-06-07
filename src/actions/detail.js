/* eslint-disable import/prefer-default-export */
import {getDetail} from '../model/services/detail/detail';

export const REQUEST_DETAIL_VIDEO = 'REQUEST_DETAIL_VIDEO'
function requestDetail() {
  return {
    type: REQUEST_DETAIL_VIDEO
  }
}


export const RECEIVE_DETAIL_VIDEO = 'RECEIVE_DETAIL_VIDEO'
function receiveDetail(json) {
  return {
    type: RECEIVE_DETAIL_VIDEO,
    payload: {
      detail: json.detail,
      receivedAt: Date.now()
    }
  }
}

export function fetchDetail(videoId) {
  return (dispatch, getState, {graphqlRequest}) => {
    dispatch(requestDetail());
    return getDetail(videoId, graphqlRequest).then(detail => {
      return dispatch(receiveDetail(detail));
    });
  }
}

