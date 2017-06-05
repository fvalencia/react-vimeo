/* eslint-disable import/prefer-default-export */
import {getVideos} from '../model/services/video/video';

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestNews() {
  return {
    type: REQUEST_POSTS
  }
}


export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receiveNews(json) {
  return {
    type: RECEIVE_POSTS,
    payload: {
    	videos: json.videos,
    	receivedAt: Date.now()
    } 
  }
}

export function fetchNews() {
  return (dispatch, getState, {graphqlRequest}) => {
    dispatch(requestNews());
    return getVideos(graphqlRequest).then(videos => {
      return dispatch(receiveNews(videos));
    });
  }
}

