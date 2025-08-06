// src/components/Carousel.tsx
"use client";

import React, { useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";
import "./carousel.css";

const slides = [
  {
    imgSrc: "/images/carousel-5.jpg",
    title: "Smart School & Classroom",
    description:
      "Delivering intelligent education environments powered by digital technology for the future of learning.",
    link: "/smart-school-classroom",
  },
  {
    imgSrc: "/images/carousel-4.jpg",
    title: "Data Center & Network Infrastructure",
    description:
      "Robust and scalable infrastructure designed for high-performance connectivity, security, and uptime.",
    link: "/data-center-infrastructure",
  },
  {
    imgSrc: "/images/carousel-2.jpg",
    title: "Hybrid Solutions & Renewable Energy",
    description:
      "Sustainable power and integrated hybrid solutions tailored for today’s business needs.",
    link: "/hybrid-renewable-solutions",
  },
];

export default function Carousel() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    return () => emblaApi?.destroy();
  }, [emblaApi]);

  return (
    <div
      className="relative embla"
      ref={emblaRef}
      onMouseEnter={() => autoplay.current?.stop()}
      onMouseLeave={() => autoplay.current?.play()}
    >
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <div className="relative w-full h-[500px] group overflow-hidden">
              <Image
                src={slide.imgSrc}
                alt={slide.title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                priority={index === 0} // Prioritize loading the first image
              />
              <div className="absolute bottom-0 left-0 w-full p-6 text-white transition-all duration-700 transform translate-y-8 bg-gradient-to-t from-black via-transparent to-transparent group-hover:translate-y-0">
                <h2 className="text-2xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-sm">{slide.description}</p>
                <Link href={slide.link}>
                  <span className="inline-block px-5 py-2 mt-4 text-white transition-transform bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105">
                    Read More →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="embla__button embla__button--prev"
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        className="embla__button embla__button--next"
      >
        ›
      </button>
    </div>
  );
}
