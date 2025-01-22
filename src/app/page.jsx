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
      className="flex flex-col items-center justify-start min-h-screen"
      style={{
        backgroundImage: "url('/images/Rectangle 1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundColor: "white",
        fontFamily: "Kalam, sans-serif",
      }}
    >
      {/* Carousel */}
      <div className="relative w-full max-w-4xl h-[500px] overflow-visible">
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

        {/* Navigatieknoppen */}
        <button
          onClick={prevSlide}
          className="absolute -left-40 top-1/2 -translate-y-1/2 z-30"
        >
          <Image
            src="/images/left.svg"
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
            src="/images/right.svg"
            alt="Next"
            width={25}
            height={25}
          />
        </button>
      </div>

      {/* Productnaam en Prijs */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">SpeelSlim Startpakket</h2>
        <p className="text-xl text-gray-700">€2,50</p>
      </div>

      {/* Productbeschrijving */}
      <div className="p-8 bg-white/80 rounded-lg shadow-lg w-full max-w-4xl mb-10">
        <div className="flex justify-end space-x-4 mb-4">
          {/* Winkelwagen en Favorieten knoppen */}
          <button className="flex items-center bg-purple-200 text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-purple-300 transition">
            <Image
              src="/images/cart.svg"
              alt="Winkelwagen"
              width={20}
              height={20}
              className="mr-2"
            />
            Winkelwagen
          </button>
          <button className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-gray-300 transition">
            <Image
              src="/images/heart.svg"
              alt="Favorieten"
              width={20}
              height={20}
            />
          </button>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Product beschrijving
        </h1>
        <p className="text-gray-700 mb-6">
          Geef jonge ontdekkers een vliegende start met het SpeelSlim
          Startpakket! Dit zorgvuldig samengestelde pakket zit boordevol
          kleurrijke materialen en speelse activiteiten om kinderen in groep 1-2
          kennis te laten maken met de basisvaardigheden. Van letters herkennen
          tot vormen leren en fijne motoriek ontwikkelen – alles is ontworpen
          om leren leuk en toegankelijk te maken. Perfect voor thuis, in de
          klas of als extra oefening!
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Wat zit erin?
        </h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Activiteitenboekjes met uitdagende maar toegankelijke opdrachten</li>
          <li>Kleurrijke wormpuzzels om logisch denken te stimuleren</li>
          <li>Flashcards om letters, cijfers en kleuren te oefenen</li>
          <li>
            <strong>Bonus:</strong> Een beloningskaartsysteem om motivatie hoog
            te houden!
          </li>
        </ul>
        <p className="text-gray-700 mt-6">
          Laat leren een avontuur worden – spelenderwijs groeien en ontdekken
          met het SpeelSlim Startpakket!
        </p>
      </div>
    </div>
  );
}
