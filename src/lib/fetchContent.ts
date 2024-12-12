import { createClient } from "next-sanity";

const client = createClient({
    projectId: "ytl8bvpp",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true,
});

export async function fetchContent(slug: string) {
  const query = `
    *[_type == "page" && slug.current == $slug][0]{
      title,
      components[] {
        _type == "hero" => {
          _type,
          title,
          subtitle,
          "image": image.asset->url,
          "video": video
        },
        _type == "card" => {
          _type,
          title,
          description,
          "image": image.asset->url
        },
        _type == "video" => {
          _type,
          "video": url
        }
      }
    }
  `;

  const data = await client.fetch(query, { slug });
  return data || null; // Return null if no data is found
}

export async function generateStaticParams() {
    const query = `*[_type == "page"]{ "slug": slug.current }`;
    const pages = await client.fetch(query);
  
    return pages.map((page: { slug: string }) => ({
      slug: page.slug,
    }));
  }