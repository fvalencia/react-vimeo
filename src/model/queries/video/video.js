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
const url = 'https://api.vimeo.com/categories/comedy/videos';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const videos = {
  type: new List(VideoItemDto),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if ((new Date() - lastFetchTime) > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url, fetchConfig)
        .then(response => { return response.json()})
        .then((data) => {
          if (data.total > 0 && data.data) {
            items = data.data;
            items = items.map(e => {
              e.picture = e.pictures.sizes[2];
              return e;
            });
          }

          console.log(items)
          lastFetchTask = null;
          return items;
        })
        .catch((err) => {
          lastFetchTask = null;
          throw err;
        });

      if (items.length) {
        return items;
      }

      return lastFetchTask;
    }

    return items;
  },
};

export default videos;
