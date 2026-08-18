import React from "react"
import Link from "next/link"
import Image from "next/image"
import SectionContainer from "../UI/SectionContainer"

const ExhibitorsSection = () => {
  return (
    <SectionContainer className="py-16 lg:py-24">
      {/* Heading */}
      <h2 className="title-72 text-black mb-6">
        Meet the Leading Brands Driving Metrology Innovation
      </h2>

      <p className="title-40 font-semibold text-gray-700 mb-12 lg:mb-16">
        Showcase your innovations at INDIAMET 2027 and connect with manufacturers, OEMs, quality professionals, and industry leaders shaping the future of metrology, measurement, inspection, calibration, testing, and precision engineering.
      </p>

      {/* Single Banner Image with All Logos */}
    <div className="relative w-full mb-12 lg:mb-16 overflow-hidden rounded-2xl shadow-xl">
  <div className="relative w-full h-[500px] lg:h-[550px]">
    <Image
      src="/images/exhibitors.png"
      alt="Our Past Exhibitors Banner"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>

      {/* CTA */}
      <div className="flex justify-center">
        <Link href="/exhibition-directory" target="_blank" rel="noopener noreferrer">
          <button className="group flex items-center gap-3 rounded-full px-10 py-4 text-[18px] font-semibold bg-[#B80A26] text-white transition hover:bg-mainColor4 hover:shadow-xl">
            View Our 2027 Exhibitor List
          </button>
        </Link>
      </div>
    </SectionContainer>
  )
}

export default ExhibitorsSection