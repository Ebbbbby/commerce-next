import React from "react";
import { client } from "../lib/sanity";
import { Products } from "../interface";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
async function getData() {
  //fetched 4 products from sanity. You can query sanity by clicking on vision. Know more about order using the sanity cheat sheet
  const query = `*[_type == "product" && onSale  == true]{
  _id,
    "imageUrl": coalesce(images[0].asset->url, images[0].url),
    price,
    name,
    salePrice,
    "slug": slug.current,
    "categoryName": category->name
}`;
  const data = await client.fetch(query);
  return data;
}
const FlashSales = async () => {
  const data: Products[] = await getData();
const calculateDiscountPercentage = (originalPrice:number, salePrice:any ) => {
  const discount = ((originalPrice - salePrice) / originalPrice) * 100;
  return Math.round(discount); // Rounds to the nearest whole number
};
  return (
    <div className=" bg-gray-100">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center bg-gray-300 py-2 px-1 rounded-t-md">
          <h2 className="text-2xl font-bold tracking-tight text-gray-800">
            Products On Sale
          </h2>
          <Link className="text-primary flex items-center gap-x-2" href="/all">
            {" "}
            See All
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <Link href={`/product/${product.slug}`} key={product._id}>
              <div
                key={product._id}
                className="group relative overflow-hidden shadow-md"
              >
                <div className=" aspect-auto w-full overflow-hidden rounded bg-gray-200 group-hover:opacity-75">
                  <Image
                    src={product?.imageUrl}
                    alt="product-image"
                    className="w-full h-full object-center object-cover lg:h-full lg:w-full "
                    width={300}
                    height={300}
                  />
                  <div className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-2 py-1 text-xs uppercase tracking-tighter text-white">
                    Sale
                  </div>
                  <div className="absolute right-0 top-0 rounded-bl-lg bg-emerald-500 px-2 py-1 text-xs tracking-tighter text-white">
                    {calculateDiscountPercentage(
                      product.price,
                      product?.salePrice
                    )}
                    % OFF
                  </div>

                  <div className="absolute top-0 bottom-0 left-0 right-0"></div>
                  <div className="mt-4 p-2 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 truncate ">
                        {product.name}
                      </h3>
                      <p className="text-xs font-medium text-gray-500">
                        {product.categoryName}
                      </p>
                    </div>

                    <p className="font-bold tracking-wide text-lg text-gray-600">
                      ${product.salePrice}
                    </p>
                  </div>
                  <div className="mt-2 px-2 flex">
                    <p className="text-sm font-semibold line-through text-red-500">
                      ${product.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
