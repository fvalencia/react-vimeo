
export async function getDetail(videoId, graphqlRequest){
  //console.log('videoId', videoId);
  const resp = await graphqlRequest(
  	`{
      detail(videoId: ${videoId}) {
        uri,
        name,
        description,
        duration,
        embed{
          html
        }
      }
	  }`
  );
  const detail = await resp.data;
  return detail;
};

