import fs from "fs";
import path from "path";

import Slideshow from "@/components/Slideshow";

function getImagesFromPublicFolder(folder: string): string[] {
  const imagesDirectory = path.join(process.cwd(), "public", folder);
  const imageFiles = fs.readdirSync(imagesDirectory);

  return imageFiles.map((file) => `/${folder}/${file}`);
}

const images = getImagesFromPublicFolder("al-irfan"); // Replace 'images' with your folder name

export default function Home() {
  return (
    <div className="w-screen h-screen relative flex justify-center">
      <Slideshow images={images} />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-white md:text-4xl text-2xl font-bold">
          HOYGA CULUUMTA DIINTA EE JAAMACADA AL-CIRFAAN
        </h1>
        <h1 className="text-red-100 md:text-4xl text-2xl font-extrabold bg-red-600 p-8">
          UNDER CONSTRUCTION
        </h1>
      </div>
    </div>
  );
}
