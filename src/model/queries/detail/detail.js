import { GraphQLString as StringType, GraphQLInt as IntType } from 'graphql';
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

const url = 'https://api.vimeo.com/videos/';

const detail = {
  type: VideoItemDto,
  args: {
    videoId:{
        type : IntType,
    }
  },
  async resolve(headers, params, ...args)  {
    if(!params.videoId){
      console.log('Error'); //Poner un throw here
    }

    let fetchUrl = `${url}${params.videoId}`;

    let result = await fetch(fetchUrl, fetchConfig)
      .then(response => {return response.json()})
      .then((data) => {
        if (data) {
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

export default detail;
