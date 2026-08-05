import React from "react"
import Image from "next/image"
import Link from "next/link"
import SectionContainer from "../UI/SectionContainer"

const SectorsSection = () => {
  const sectors = [
 {
    title: "Metrology & Precision Measurement Systems",
    description:
      "Advanced metrology instruments, dimensional measurement systems, precision gauges, comparators, and measurement solutions for accurate quality control and manufacturing.",
    image: "/images/precision.jpg",
    link: "/sectors/metrology-measurement",
  },
  {
    title: "Coordinate Measuring Machines (CMM) & Gauging",
    description:
      "Bridge, gantry, horizontal arm, and portable CMMs, precision gauges, probing systems, and dimensional inspection technologies for high-accuracy measurements.",
    image: "/images/mouldbase.jpg",
    link: "/sectors/cmm-gauging",
  },
  {
    title: "Optical Inspection, Machine Vision & Smart Metrology",
    description:
      "Optical metrology, machine vision, laser scanning, 3D measurement, AI-powered inspection, industrial software, and smart metrology solutions for modern manufacturing.",
    image: "/images/finishing.jpg",
    link: "/sectors/optical-machine-vision",
  },
  ]

  return (
    <SectionContainer className="py-16 lg:py-24">
      {/* Header */}
      <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-9">
          <h2 className="title-72 text-black ">
            10 Event Sectors Covering the Complete Metrology & Quality Engineering Ecosystem
          </h2>
        </div>

        <div className="flex lg:col-span-3 lg:justify-end">
          <Link href="/sectors">
            <button className="flex items-center gap-2 rounded-full px-10 py-3 text-[16px] font-semibold bg-[#116466] text-white transition hover:bg-mainColor4">
              Explore All Our Event Sector
            </button>
          </Link>
        </div>
      </div>

      {/* Sectors Grid */}
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sectors.map((sector, index) => (
          <Link
            key={index}
            href={sector.link}
            className="group relative flex min-h-[600px] w-full flex-col justify-end overflow-hidden rounded-xl p-5 text-white"
          >
            {/* Background Image */}
            <Image
              src={sector.image}
              alt={sector.title}
              fill
              className="absolute inset-0 z-[-2] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Content */}
            <h5 className="title-32 font-semibold mb-2">
              {sector.title}
            </h5>

            <p className="text-sm leading-relaxed transition-all duration-300 line-clamp-2 opacity-0 group-hover:opacity-100">
              {sector.description}
            </p>
          </Link>
        ))}
      </div>
    </SectionContainer>
  )
}

export default SectorsSection
