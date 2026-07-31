import SectionContainer from "@/components/UI/SectionContainer"
import QuickNavigation from "@/components/QuickNavigation"
import PartnersSection from "@/components/section/PartnersSection"
import Link from "next/link"
import BackToTop from "../exhibitor-resource-center/component/BackToTop"

// Mock data - replace with actual data
const IndiametSectors = [
  {
    id: 1,
    title: 'Metrology & Precision Measurement Systems',
    slug: 'metrology-measurement',
    image: '/images/metrology.jpg',
    description: 'Advanced metrology instruments, dimensional measurement systems, gauges, comparators, and precision measurement solutions for industrial quality control and manufacturing.'
  },
  {
    id: 2,
    title: 'Coordinate Measuring Machines (CMM) & Gauging',
    slug: 'cmm-gauging',
    image: '/images/cmm.jpg',
    description: 'Bridge, gantry, horizontal arm, portable CMMs, precision gauges, probing systems, and dimensional inspection technologies for high-accuracy measurements.'
  },
  {
    id: 3,
    title: 'Optical, Vision & Laser Inspection Systems',
    slug: 'vision-inspection',
    image: '/images/vision.jpg',
    description: 'Machine vision, optical metrology, laser scanners, 3D measurement systems, industrial microscopes, profile projectors, and non-contact inspection technologies.'
  },
  {
    id: 4,
    title: 'Calibration, Testing & Non-Destructive Testing (NDT)',
    slug: 'calibration-testing-ndt',
    image: '/images/calibration.jpg',
    description: 'Calibration equipment, accredited laboratory services, testing instruments, hardness testing, force measurement, and advanced non-destructive testing (NDT) solutions.'
  },
  {
    id: 5,
    title: 'Quality Assurance, Metrology Software & Smart Manufacturing',
    slug: 'quality-software',
    image: '/images/software.jpg',
    description: 'Quality management software, SPC, digital inspection, AI-powered analytics, industrial automation, Industry 4.0, and smart metrology solutions.'
  },
  {
    id: 6,
    title: 'Precision Instruments, Sensors & Measurement Accessories',
    slug: 'precision-instruments',
    image: '/images/instruments.jpg',
    description: 'Precision measuring instruments, sensors, probes, encoders, transducers, measurement accessories, and engineering solutions for accurate inspection and process control.'
  }
];



export default function SectorsPage() {
  return (
    <>
    
    <div className="min-h-screen font-parabolica">
      {/* Hero Section - COMPACT */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/sectorheader.jpg)" }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <SectionContainer>
          <div className="relative z-20 text-white pb-6 md:pb-10 pt-20">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-3">
              Event Sectors
            </h1>
            <p className="text-lg lg:text-xl max-w-full text-white/90">
  INDIAMET 2027 showcases the complete spectrum of metrology, measurement technology, quality assurance, inspection systems, calibration, testing equipment, machine vision, non-destructive testing (NDT), precision instruments, industrial software, automation, and smart manufacturing solutions, bringing together the latest innovations driving quality and precision across modern manufacturing.
</p>
          </div>
        </SectionContainer>
      </section>

      {/* Diemex Sectors - COMPACT */}
      <section className="py-16 lg:py-24">
        <SectionContainer>
          <div className="mb-6 lg:mb-8">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-3 w-full">
  INDIAMET 2027 Event Sectors
</h2>

<p className="text-gray-600 text-lg lg:text-xl w-full">
  Covers metrology & precision measurement systems, coordinate measuring machines (CMM), optical & vision inspection, calibration equipment & services, testing & quality assurance, non-destructive testing (NDT), precision measuring instruments, industrial software, machine vision, AI-enabled inspection, automation, Industry 4.0, and smart metrology solutions.
</p>
          </div>
          <SectorGrid sectors={IndiametSectors} />
        </SectionContainer>
      </section>

    
      
      <QuickNavigation/>
      <PartnersSection/>
    </div>
    <BackToTop/>
    </>
  )
}

// SectorGrid Component
function SectorGrid({
  sectors,
}: {
  sectors: Array<{
    id: number
    title: string
    slug: string
    image: string
    description: string
  }>
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sectors.map((sector) => (
        <Link
          key={sector.id}
          href={`/sectors/${sector.slug}`}
          className="group relative h-[320px] overflow-hidden rounded-lg"
        >
          {/* Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${sector.image})` }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300"></div>

          {/* Content */}
          <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
            <h3 className="text-xl font-semibold leading-snug">
              {sector.title}
            </h3>

            {/* Blue underline */}
            <div className="mt-3 h-[3px] w-10 bg-blue-500 group-hover:w-16 transition-all duration-300"></div>
          </div>
        </Link>
      ))}
    </div>
  )
}
