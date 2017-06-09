
import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLList as List
} from 'graphql';

import VideoItemDto from './VideoItemDto';

const VideoList = new ObjectType({
  name: 'VideoList',
  fields: {
    data: { type: new List(VideoItemDto) },
    total: { type: IntType },
    page: { type: IntType },
    per_page: { type: IntType }
  },
});

export default VideoList;
