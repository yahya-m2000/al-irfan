import React from "react";
import Card from "@/components/Card";
import HeroImage from "@/components/HeroImage";
import Video from "@/components/Video";
import { fetchSubContent } from "@/lib/fetchContent";

type SubPageProps = {
  params: {
    slug: string;
    subslug: string;
  };
};

export default async function SubPage({ params }: SubPageProps) {
  const { slug, subslug } = params;
  const data = await fetchSubContent(slug, subslug);

  // Centralize the variables by destructuring
  const { hero, card, video } = data;

  return (
    <div>
      <h1>
        {slug.toUpperCase()} - {subslug.toUpperCase()}
      </h1>

      {/* Conditionally render components */}
      {hero && <HeroImage image={hero.image} video={hero.video} />}
      {card && <Card title={card.title} description={card.description} />}
      {video && <Video video={video} />}
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "about", subslug: "mission-vision" },
    { slug: "about", subslug: "history" },
    { slug: "academics", subslug: "ba-program" },
    { slug: "academics", subslug: "ma-program" },
  ];
}
