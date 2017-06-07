/* eslint-disable import/prefer-default-export */
import {getComments} from '../model/services/comments/comments';

export const REQUEST_COMMENTS_VIDEO = 'REQUEST_COMMENTS_VIDEO'
function requestComments() {
  return {
    type: REQUEST_COMMENTS_VIDEO
  }
}


export const RECEIVE_COMMENTS_VIDEO = 'RECEIVE_COMMENTS_VIDEO'
function receiveComments(json) {
  return {
    type: RECEIVE_COMMENTS_VIDEO,
    payload: {
      comments: json.comments,
      receivedAt: Date.now()
    }
  }
}

export function fetchComments(videoId) {
  return (dispatch, getState, {graphqlRequest}) => {
    dispatch(requestComments());
    return getComments(videoId, graphqlRequest).then(comments => {
      return dispatch(receiveComments(comments));
    });
  }
}
