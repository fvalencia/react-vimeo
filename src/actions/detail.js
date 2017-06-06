/* eslint-disable import/prefer-default-export */
import {getDetail} from '../model/services/detail/detail';

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestDetail() {
  return {
    type: REQUEST_POSTS
  }
}


export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receiveDetail(json) {
  return {
    type: RECEIVE_POSTS,
    payload: {
      detail: json.detail,
      receivedAt: Date.now()
    }
  }
}

export function fetchDetail() {
  return (dispatch, getState, {graphqlRequest}) => {
    dispatch(requestDetail());
    return getDetail(graphqlRequest).then(detail => {
      return dispatch(receiveDetail(detail));
    });
  }
}

