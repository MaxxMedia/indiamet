'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const partners = [
  {
    id: 1,
    name: "Apace Digital Cargo",
    logo: "/APACE_Digital_Cargo_523bc2c2a2.webp",
    slug: "apace-digital-cargo"
  },
  {
    id: 2,
    name: "Cargo Insights",
    logo: "/Cargo_Insights_e965193be1.webp",
    slug: "cargo-insights"
  },
  {
    id: 3,
    name: "International Coordinating Council for Trans-Eurasian Transportation",
    logo: "/International_Coordinating_for_Trans0_Eurasian_Transportation_965b26881c.webp",
    slug: "international-coordinating-council-for-trans-eurasian-transportation"
  },
  {
    id: 4,
    name: "LOGIRUS",
    logo: "/LOGIRUS_34da1707d5.webp",
    slug: "logirus"
  },
  {
    id: 5,
    name: "CargoTalk",
    logo: "/Cargo_Talk_ME_logo_final_ff5213a4fd.jpg",
    slug: "cargo-talk"
  },
  {
    id: 6,
    name: "Logistics 360 Magazine",
    logo: "/Logisics_360_magazine_a74756752e.webp",
    slug: "logistics-360-magazine"
  },
  {
    id: 7,
    name: "BizToday",
    logo: "/Logo_Biz_Today_International_JPG_dd5d3adcb2.jpg",
    slug: "trans-russia-partner-1"
  },
  {
    id: 8,
    name: "Logistics.ru",
    logo: "/Logistics_ru_12a920fd01.webp",
    slug: "logistics-ru"
  },
  {
    id: 9,
    name: "TravTalkME",
    logo: "/Trav_Talk_6aedd6c627.webp",
    slug: "trav-talk-me"
  },
  {
    id: 10,
    name: "The Council of Supply Chain Professionals",
    logo: "/Council_of_Supply_Chain_Professinoals_03e79f3b06.webp",
    slug: "the-council-of-supply-chain-professionals"
  }
]

export default function PartnersSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(partners.length / 2)) % Math.ceil(partners.length / 2))
  }

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      if (!isPaused) nextSlide()
    }, 4000)
  }

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  useEffect(() => {
    startAutoSlide()
    return () => stopAutoSlide()
  }, [isPaused])

  const visiblePartners = partners.slice(currentIndex * 2, currentIndex * 2 + 5)

  return (
    <section className="section-py bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="title-xl text-main-1 mb-4">Partners & Sponsors</h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            We're proud to collaborate with industry leaders who share our vision for advancing logistics and warehousing technologies.
          </p>
        </div>

        <div 
          className="relative partner-slider-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={sliderRef}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-main-2 hover:text-white transition-all duration-300 hover:scale-110 group"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-main-2 hover:text-white transition-all duration-300 hover:scale-110 group"
            aria-label="Next partners"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Slider Track */}
          <div className="partner-slider-track">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="partner-slide group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative w-full h-full p-6 flex items-center justify-center">
                  <div className="relative w-full h-16">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 100px, 150px"
                    />
                  </div>
                  
                  {/* Hover Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-main-1/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex items-end justify-center p-4">
                    <span className="text-white text-xs font-semibold text-center">
                      {partner.name}
                    </span>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-main-2/0 via-main-3/0 to-cyan-400/0 group-hover:from-main-2/20 group-hover:via-main-3/10 group-hover:to-cyan-400/20 transition-all duration-500 blur-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(partners.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-main-2 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in delay-300">
          <button className="btn btn-outline px-8 py-3 hover-lift">
            View All Partners
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}