
import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLInt as IntType
} from 'graphql';

const CommentItemDto = new ObjectType({
  name: 'CommentItem',
  fields: {
    uri: { type: new NonNull(StringType)},
    text: { type: StringType },
    created_on: { type: StringType },
    user: {
      type: new ObjectType({
        name: 'User',
        fields: () => ({
          uri: { type: new NonNull(StringType)},
          name: { type: StringType},
          picture: {
            type: new ObjectType({
              name: 'UserPicture',
              fields: {
                width: { type: IntType},
                height: { type: IntType},
                link: { type: StringType}
              }
            })
          },
        })
      })
    }
  },
});

export default CommentItemDto;
