
export async function getVideos(graphqlRequest){
  const resp = await graphqlRequest(
  	`{videos{
  		uri,
  		name,
		description,
		duration,
		picture{
			width,
			height,
			link,
			link_with_play_button
		}
	  }
	}`);
  const videos = await resp.data;
  return videos;
};

