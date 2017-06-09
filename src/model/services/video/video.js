
export async function getVideos(graphqlRequest, page = 1){
  const resp = await graphqlRequest(
  	`{videos(page: ${page}){
  		total,
  		page,
  		per_page,
  		data{
	  		uri,
	  		name,
			description,
			duration,
			picture{
				width,
				height,
				link,
				link_with_play_button
			},
			user{
				name,
				link,
				picture{
					width,
					height,
					link,
				}
			}
		}
  	  }	
	}`);
  const videos = await resp.data;
  return videos;
};

