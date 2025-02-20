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
    <div className="grid gap-4 h-5/6 mt-4">
      <div className="flex rounded-md">
        <Image
          className="object-cover object-center cursor-pointer w-full rounded-md "
          src={urlFor(bigImage).url()}
          alt='big-image'
          width={500}
          height={500}
        />
      </div>
      <div className="inline-flex h-20 gap-x-4 mb-4">
        {images.map((image: any, index: any) => (
          <div
            key={index}
            className="rounded-sm bg-gray-200 w-full h-full"
          >
            <Image
              className="object-cover object-center cursor-pointer w-full h-full rounded-md"
              src={urlFor(image).url()}
              alt='images'
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
