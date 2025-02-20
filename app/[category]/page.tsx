import React from "react";
import { client } from "../lib/sanity";
import { Products } from "../interface";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
async function getData(category: string) {
  const query = `*[_type == "product" && category->name == "${category}"]{
  _id,
    "imageUrl":images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name
}`;

  const data = await client.fetch(query);
  return data;
}

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const data: Products[] = await getData(params.category);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products for {params.category}
          </h2>
          <Link className="text-primary flex items-center gap-x-2" href="/all">
            {" "}
            See All
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (

              <div
                key={product._id}
                className="group relative overflow-hidden rounded-md shadow-md mt-4"
              >
                <div className=" aspect-auto w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                  <Image
                    src={product?.imageUrl}
                    alt="product-image"
                    className="w-full h-full object-center object-cover lg:h-full lg:w-full "
                    width={300}
                    height={300}
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-transparent to-black opacity-50"></div>
                  <div className="mt-4 p-2 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-xs font-medium text-gray-500">
                        {product.categoryName}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${product.price}
                    </p>
                  </div>
                </div>
              </div>

          ))}

        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
