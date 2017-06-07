
export async function getDetail(videoId, graphqlRequest){
  console.log('videoId', videoId);
  //(videoId: videoId)
  const resp = await graphqlRequest(
  	`{
      detail {
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

