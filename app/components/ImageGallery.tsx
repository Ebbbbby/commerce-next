'use client';
import Image from "next/image";
import React, { useState } from "react";
import { urlFor } from "../lib/sanity";


interface IAppProps {
  images: any;
}
const ImageGallery = ({ images }: IAppProps) => {
  const [bigImage, setBigImage] = useState(images[0])
  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, index: any) => (
          <div key={index} className="overflow-hidden rounded-lg bg-gray-200">
            <Image
              className="object-cover object-center cursor-pointer w-full h-full"
              src={urlFor(image).url()}
              alt={image.description}
              width={250}
              height={250}
              onClick={() => handleSmallImageClick(image)}
            />
            {/* <h2 className="text-sm font-medium text-gray-500">
              {image.description}
            </h2> */}
          </div>
        ))}
      </div>
      <div className=" relative overflow-hidden rounded-lg bg-gray-200 lg:col-span-4">
        <Image
          className="object-cover object-center cursor-pointer w-full h-full"
          src={urlFor(bigImage).url()}
          alt={bigImage.description}
          width={500}
          height={500}
        />
        <div className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Sale</div>

      </div>
    </div>
  );
};

export default ImageGallery;
