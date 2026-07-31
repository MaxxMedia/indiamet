import React from "react"
import SectionContainer from "@/components/UI/SectionContainer"

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end">
      {/* BACKGROUND IMAGE - Full Width */}
      <img
        src="/images/about-header.jpg"
        alt="Diemex©2026"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* GRADIENT (BOTTOM ONLY) */}
      <div className="absolute bottom-0 h-[45%] w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* CONTENT with SectionContainer */}
      <SectionContainer className="relative z-10">
        <div className="flex h-full items-end">
          <div className="pb-25 text-white">
            <h2 className="title-72">About INDIAMET 2027</h2>
            <p className="mt-4 max-w-6xl text-lg">
              
              Shaping the Future of Metrology, Measurement & Quality Engineering.
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export default HeroSection