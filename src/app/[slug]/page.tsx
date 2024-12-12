import React from "react";
import Card from "@/components/Card";
import HeroImage from "@/components/HeroImage";
import Video from "@/components/Video";
import { fetchContent } from "@/lib/fetchContent";

type PageProps = Promise<{
  slug: string;
}>;

export default async function Page({ params }: { params: PageProps }) {
  const { slug } = await params;
  const data = await fetchContent(slug);

  if (!data) {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>We couldn&apos;t find content for the slug: {slug}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{data.title}</h1>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {data.components?.map((component: any, index: number) => {
        switch (component._type) {
          case "hero":
            return (
              <HeroImage
                key={index}
                image={component.image}
                video={component.video}
                title={component.title}
                subtitle={component.subtitle}
              />
            );
          case "card":
            return (
              <Card
                key={index}
                title={component.title}
                description={component.description}
                image={component.image}
              />
            );
          case "video":
            return <Video key={index} video={component.video} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
