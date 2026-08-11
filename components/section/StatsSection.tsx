import React from "react"
import Link from "next/link"
import SectionContainer from "../UI/SectionContainer"

const StatsSection = () => {
  const stats = [
    { value: "10,000", label: "Visitors" },
    { value: "150+", label: "Exhibitors" },
    { value: "12+", label: "Countries" },
    { value: "10", label: "Event Sectors" },
  ]

  return (
    <section className="relative z-[1] bg-white mt-10">
      {/* CONTENT */}
      <SectionContainer className="pt-24 pb-16">
        <div className="max-w-10xl">
          <h2 className="text-[56px] leading-[1.1] font-bold text-black mb-6">
            Shaping the Future of Metrology, Measurement & Quality Engineering
          </h2>

          <p className="text-lg leading-relaxed text-black/80 max-w-8xl mb-10">
            INDIAMET 2027 is India's first dedicated exhibition for metrology, measurement technology, quality assurance, inspection, calibration, testing, and precision engineering. The exhibition brings together global technology leaders, equipment manufacturers, calibration laboratories, quality professionals, research institutions, and solution providers across the complete measurement and quality engineering ecosystem.
          </p>

  <p className="text-lg leading-relaxed text-black/80 max-w-8xl mb-10">
            Taking place from 23–25 April 2027 at the Auto Cluster Exhibition Centre, Pune, India, INDIAMET 2027 provides a focused B2B platform to showcase the latest innovations in precision measurement, coordinate measuring machines (CMM), optical and vision inspection, machine vision, testing equipment, industrial software, automation, and smart metrology solutions to a highly qualified audience of manufacturers, OEMs, and industry decision-makers.
          </p>
          <Link href="/why-exhibit">
            <button className="rounded-full bg-[#FF6A00] px-10 py-4 text-white font-semibold text-base transition hover:bg-[#083E82]">
              Why Exhibit
            </button>
          </Link>
        </div>
      </SectionContainer>

{/* STATS BAR – TRUE FULL WIDTH */}
<div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#F3F8FC] py-10">
  <SectionContainer>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
      {stats.map((stat, index) => (
        <div key={index}>
          <h3 className="text-[52px] font-bold text-[#FF6A00] mb-2">
            {stat.value}
          </h3>

          <p className="text-base text-black/80 mb-4">
            {stat.label}
          </p>

          <div className="h-px w-36 bg-black/10" />
        </div>
      ))}
    </div>
  </SectionContainer>
</div>


    </section>
  )
}

export default StatsSection
