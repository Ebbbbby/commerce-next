"use client";
import Image from "next/image";
import React, { useState } from "react";
import { urlFor } from "../lib/sanity";

interface IAppProps {
  images: any;
}
const ImageGallery = ({ images }: IAppProps) => {
  const [bigImage, setBigImage] = useState(images[0]);
  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 border h-5/6 ">
      <div className="flex rounded-md">
        <Image
          className="object-cover object-center cursor-pointer w-full "
          src={urlFor(bigImage).url()}
          alt={bigImage.description}
          width={500}
          height={500}
        />
      </div>
      <div className="flex gap-x-4 border border-red-500">
        {images.map((image: any, index: any) => (
          <div
            key={index}
            className="rounded-sm bg-gray-200 w-full h-3/6"
          >
            <Image
              className="object-cover object-center cursor-pointer w-full h-full"
              src={urlFor(image).url()}
              alt={image.description}
              width={250}
              height={250}
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
