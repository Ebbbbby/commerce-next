import Image from "next/image";
// import Hero from "./components/Hero";
import Newest from "./components/Newest";
import { CarouselDemo } from "./components/Carousel";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className=" bg-white sm:pb-8 lg:pb-12">
      <CarouselDemo />

      {/* <Hero/> */}
      <Newest />
   
    </div>
  );
}
