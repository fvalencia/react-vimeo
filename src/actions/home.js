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
    	data: json.videos.data,
      total: json.videos.total,
      page: json.videos.page,
      per_page: json.videos.per_page,
    	receivedAt: Date.now()
    } 
  }
}

export function fetchNews(page) {
  return (dispatch, getState, {graphqlRequest}) => {
    dispatch(requestNews());
    return getVideos(graphqlRequest, page).then(videos => {
      return dispatch(receiveNews(videos));
    });
  }
}
