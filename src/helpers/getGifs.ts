import { image } from "../types/image";

export const getGifs = async (category: string) => {
  const api_key = "4jJ6cwpTRWSoL4ec2gbkyWh9sGM6M7Ce";

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=12&api_key=${api_key}`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs: image[] = data.map((img: any) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
