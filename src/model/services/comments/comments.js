export async function getComments(videoId, graphqlRequest){
  const resp = await graphqlRequest(
  	`{comments(videoId: ${videoId}){
  		uri,
	    text,
	    created_on,
	    user{     
			name,
			uri,
			picture {
				width,
				height,
				link
			}
	    }
	  }
	}`);
  const comments = await resp.data;
  return comments;
};

