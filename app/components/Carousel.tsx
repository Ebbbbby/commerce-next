"use client";

import { motion, useMotionValue } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
const images = ["/shoe.jpg", "/sports.jpg", "/fashion.jpg"];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
  type: "spring",
  damping: 50,
  stiffness: 400,
  mass: 3,
};
export function CarouselDemo() {
  const [imgIndex, setImgIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragX = useMotionValue(0);
  useEffect(() => {
    const intervalRef = setInterval(() => {
 const x = dragX.get();

 if (x === 0) {
   setImgIndex((pv) => {
     if (pv === images.length - 1) {
       return 0;
     }
     return pv + 1;
   });
 }

    }, AUTO_DELAY);

    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  const onDragStart = () => {
    setDragging(true);
  };
  const onDragEnd = () => {
    setDragging(false);
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((prevIndex) => prevIndex + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <section className="flex flex-col gap-x-2 md:flex md:flex-row">
      <div className="relative overflow-hidden w-full  bg-gray-200 py-3">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${imgIndex * 55}%`,
          }}
          transition={SPRING_OPTIONS}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          className="flex cursor-grab items-center active:cursor-grabbing"
        >
          <Images imgIndex={imgIndex} />
        </motion.div>
        <CarouselDots imgIndex={imgIndex} setImgIndex={setImgIndex} />
        <GradientEdges />
      </div>
      <div className="w-full h-full">
        <VideoPlayer />
      </div>
    </section>
  );
}

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {images.map((imgSrc, index) => {
        return (
          <motion.div
            key={index}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
            }}
            animate={{
              scale: imgIndex === index ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-[70%] shrink-0 rounded-xl bg-neutral-100 object-cover "
          />
        );
      })}
    </>
  );
};
const CarouselDots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="flex justify-center mt-4 gap-2">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setImgIndex(index)}
          className={`h-3 w-3 rounded-full transition-colors  ${
            imgIndex === index
              ? "bg-primary text-white"
              : "bg-gray-500 text-gray-800"
          }`}
        />
      ))}
    </div>
  );
};
const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
