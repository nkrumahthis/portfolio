"use client"
import React from "react";
import Image from "next/image";

export default function ProjectCardImage({
  png,
  gif,
  title,
}: {
  png?: string;
  gif?: string;
  title: string;
}) {
  return (
    <div className="border-solid border-2 border-gray-100 relative w-full">
        
      {(png || gif) ? (
        <Image
          src={gif! ?? png!}
          height={0}
          width={0}
          alt={title}
          sizes="100vw"
          className="transition-opacity w-full h-auto opacity-0 duration-[1s]"
          layout="responsive"
          onLoadingComplete={image => image.classList.remove("opacity-0")}
          placeholder="blur"
          blurDataURL={png!}
        />
      ): <></>}
      
    </div>
  );
}
