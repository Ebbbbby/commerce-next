import AddToCart from "@/app/components/AddToCart";
import ImageGallery from "@/app/components/ImageGallery";
import { SingleProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import React from "react";
async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
  _id,
    images,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name
}`;
  const data = await client.fetch(query);
  return data;
}

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const data: SingleProduct = await getData(params.slug);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-4 ">
        <div className="grid md:grid-cols-2  gap-x-6">
          <ImageGallery images={data.images} />
          <div className="md:py-4">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {" "}
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-500 ">{data.name}</h2>
            </div>
            {/* <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm ">4.2</span>
                <Star className="h-5 w-5 " />
              </Button>
              <span className="text-sm text-gray transition duration-100">
                56 Ratings
              </span>
            </div> */}
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck />
              <span className="text-sm">2-4 Days Shipping</span>
            </div>
            <div className="flex gap-2.5">
              <AddToCart
                description={data?.description}
                image={data.images[0]}
                name={data?.name}
                price={data?.price}
                key={data?.price}
                currency="USD"
                id={data._id}
              />
            </div>
            <p className="mt-12 text-xs text-gray-500 lg:text-sm tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
