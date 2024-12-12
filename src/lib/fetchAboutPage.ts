import { createClient } from "next-sanity";

const client = createClient({
  projectId: "ytl8bvpp",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
});

export async function fetchAboutPage() {
  const query = `
    *[_type == "page" && slug.current == "about-us"][0]{
      title,
      body,
      components[] {
        _type == "hero" => {
          _type,
          title,
          subtitle,
          "imageUrl": image.asset->url
        },
        _type == "card" => {
          _type,
          title,
          description,
          link,
          "imageUrl": image.asset->url
        }
      }
    }
  `;

  return await client.fetch(query);
}
