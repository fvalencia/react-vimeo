import { GraphQLList as List } from 'graphql';
import fetch from 'isomorphic-fetch';
import VideoItemDto from '../../dtos/VideoItemDto';

const token = '787aea26e3877f7815dc2339177b581a';
const fetchConfig = {
  method: 'get',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
};

// React.js News Feed (RSS)
const url = 'https://api.vimeo.com/videos/94502406';

let item = {};
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const detail = {
  type: VideoItemDto,
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if ((new Date() - lastFetchTime) > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url, fetchConfig)
        .then(response => {return response.json()})
        .then((data) => {
          if (data.name) {
            item = data;
          }

          lastFetchTask = null;
          return item;
        })
        .catch((err) => {
          lastFetchTask = null;
          throw err;
        });

      if (item.name) {
        return item;
      }

      return lastFetchTask;
    }

    return item;
  },
};

export default detail;
