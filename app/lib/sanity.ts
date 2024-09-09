import  ImageUrlBuilder  from '@sanity/image-url';
import { createClient } from "next-sanity";
//wire our sanity with our fe code in order to fetch content from the sanity studio
export const client = createClient({
  projectId: "nu5rbwnf",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true, // if you want to use CDN for images
});

// sanity does not give image url when data is fetched, it provides just the ID; This function returns the image url.

const builder = ImageUrlBuilder(client)
export const urlFor = (source:any) => {
  return builder.image(source)
}
