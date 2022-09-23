export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=zXVoqhqnX3d3YZKpoXlfQqJAPKEsIlp9&q=${category}&limit=10`;

  const res = await fetch(url);

  const { data = [] } = await res.json();

  const gifs = data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    }) => ({
      id,
      title,
      url,
    })
  );

  return gifs;
};
