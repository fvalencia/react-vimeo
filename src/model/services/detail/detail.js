
export async function getDetail(graphqlRequest){
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

