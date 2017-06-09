import { GraphQLList as List, GraphQLInt as IntType, } from 'graphql';
import fetch from 'isomorphic-fetch';
import VideoList from '../../dtos/VideoListDto';

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
let page = 1;
let perPage = 8;

const videos = {
  type: VideoList,
  args: {
    page:{
        type : IntType,
    },
    perPage:{
        type : IntType,
    }
  },
  async resolve(headers, params) {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if(params.page){
      page = params.page;
    }

    if(params.perPage){
      perPage = params.perPage;
    }

    let fetchQuery = `${url}?page=${page}&per_page=${perPage}`;

    let result = await fetch(fetchQuery, fetchConfig)
      .then(response => {return response.json()})
      .then((data) => {
        if (data.total > 0 && data.data) {
          data.data = data.data.map(e => {
            e.picture = e.pictures.sizes[2];
            if(e.user && e.user.pictures)
              e.user.picture = e.user.pictures.sizes[1];
            return e;
          });
          return data;
        }
        return null;
      })
      .catch((err) => {
        throw err;
        return null;
    });

    return result;
  },
};

export default videos;
