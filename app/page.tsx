import Image from "next/image";
// import Hero from "./components/Hero";
import Newest from "./components/Newest";
import { CarouselDemo } from "./components/Carousel";
import Sponsored from "./components/Sponsored";
import FlashSales from "./components/FlashSales";

export default function Home() {
  return (
    <div className=" bg-white sm:pb-8">
      <CarouselDemo />

      {/* <Hero/> */}
     <Newest />
      <Sponsored/>
      <FlashSales/>

    </div>
  );
}
