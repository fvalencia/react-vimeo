import { GraphQLString as StringType, GraphQLInt as IntType, GraphQLList as List } from 'graphql';
import fetch from 'isomorphic-fetch';
import CommentItemDto from '../../dtos/CommentItemDto';

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
const url = 'https://api.vimeo.com/videos/';

const comments = {
  type: new List(CommentItemDto),
  args: {
    videoId:{
        type : IntType,
    }
  },
  async resolve(headers, params, ...args)  {
    if(!params.videoId){
      console.log('Error'); //Poner un throw here
    }

    let fetchUrl = `${url}${params.videoId}` + '/comments';
    let result = await fetch(fetchUrl, fetchConfig)
      .then(response => {return response.json()})
      .then((data) => {
        if (data.total > 0 && data.data) {
            let index = data.data;
            index = index.map(e => {
                e.user.picture = e.user.pictures ? e.user.pictures.sizes[2] : {link: 'https://placeimg.com/80/80/animals'};
                return e;
              });
            return index;
        }else{
          return null;
        }
      }).catch((err) => {
          throw err;
          return null;
      })

    return result;
  },
};

export default comments;
