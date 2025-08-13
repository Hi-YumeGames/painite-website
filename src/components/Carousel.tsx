"use client";

import { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';

interface CarouselProps {
  items: ReactNode[];
  itemsDesktop?: number;
  itemsMobile?: number;
  leftArrow?: string;
  rightArrow?: string;
}

const Carousel = ({ items, itemsDesktop = 1, itemsMobile = 1, leftArrow = "", rightArrow = "" }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(items.length - itemsMobile, 0);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(items.length - itemsMobile, 0);
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  if (!isMobile && !(itemsDesktop === 1)) {
    return (
      <div className="flex items-center justify-center w-full gap-[clamp(11px,2vw,30px)]">
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 px-2.5 box-border">
            {item}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full flex items-center justify-center md:overflow-visible">
      <button 
        onClick={prevSlide} 
        className="text-white border-none cursor-pointer z-10 transition-all duration-300 ease-in-out mx-2.5 hover:pb-4"
        aria-label="Previous slide"
      >
        <Image src={leftArrow} alt="arrow" width={30} height={30}/>
      </button>
      
      <div className="w-4/5 overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out w-full"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsMobile)}%)` 
          }}
        >
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex-none px-2.5 box-border"
              style={{ width: `${100 / itemsMobile}%` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={nextSlide} 
        className="text-white border-none cursor-pointer z-10 transition-all duration-300 ease-in-out mx-2.5 hover:pb-4"
        aria-label="Next slide"
      >
        <Image src={rightArrow} alt="arrow" width={30} height={30}/>
      </button>
    </div>
  );
};

export default Carousel;