
import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLInt as IntType
} from 'graphql';

const VideoItemDto = new ObjectType({
  name: 'VideoItem',
  fields: {
    uri: { type: new NonNull(StringType)},
    name: { type: new NonNull(StringType) },
    description: { type: StringType },
    duration: { type: new NonNull(IntType) },
    pictures: { 
      type: new ObjectType({
        name: 'PictureItem',
        fields: {
          width: { type: IntType},
          height: { type: IntType},
          link: { type: StringType},
          link_with_play_button: { type: StringType},
        }
      })
    }
  },
});

export default VideoItemDto;
