"use client";

import { useState } from "react";
import Image from "next/image";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const images = [
    { id: 0, url: "/images/PPplaceholder1.png" },
    { id: 1, url: "/images/PPplaceholder2.png" },
    { id: 2, url: "/images/PPplaceholder1.png" },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url('/images/Rectangle 1.svg')", // Voeg hier je eigen achtergrondafbeelding toe
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "white",
      }}
    >
      <div className="relative w-full max-w-4xl h-[500px] overflow-visible bg-transparent">
        <div className="flex items-center justify-center h-full">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`absolute transition-all duration-300 ease-in-out ${
                index === activeIndex
                  ? "scale-100 opacity-100 z-20"
                  : index === activeIndex - 1 ||
                    (activeIndex === 0 && index === images.length - 1)
                  ? "scale-75 opacity-70 -translate-x-full z-10"
                  : index === activeIndex + 1 ||
                    (activeIndex === images.length - 1 && index === 0)
                  ? "scale-75 opacity-70 translate-x-full z-10"
                  : "scale-50 opacity-0"
              }`}
            >
              <Image
                src={image.url || "/placeholder.svg"}
                alt={`Slide ${image.id}`}
                width={400}
                height={500}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Vervang de knoppen door eigen afbeeldingen */}
        <button
          onClick={prevSlide}
          className="absolute -left-40 top-1/2 -translate-y-1/2 z-30"
        >
          <Image
            src="/images/left.svg" // Voeg je eigen afbeelding toe voor de vorige-knop
            alt="Previous"
            width={25}
            height={25}
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-40 top-1/2 -translate-y-1/2 z-30"
        >
          <Image
            src="/images/right.svg" // Voeg je eigen afbeelding toe voor de volgende-knop
            alt="Next"
            width={25}
            height={25}
          />
        </button>

        <div className="absolute -bottom-10 left-0 right-0 text-center">
          <h2 className="text-2xl font-bold text-black">SpeelSlim Startpakket</h2>
          <p className="text-xl text-black">€2,50</p>
        </div>
      </div>
    </div>
  );
}
