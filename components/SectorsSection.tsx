// components/SectorsSection.tsx - WITH HOVER DESCRIPTION
'use client';

import SectionContainer from './UI/SectionContainer';
import { useState } from 'react';
import Link from 'next/link';

export default function SectorsSection() {
const sectors = [
  {
    title: 'Metrology & Precision Measurement Systems',
    slug: 'metrology-precision-measurement',
    image: '/images/sectors/metrology.jpg',
    description:
      'CMMs, vision measuring systems, laser scanners, gauges, coordinate measuring technologies, and precision inspection equipment.'
  },
  {
    title: 'Calibration & Testing Equipment',
    slug: 'calibration-testing',
    image: '/images/sectors/calibration.jpg',
    description:
      'Calibration laboratories, dimensional standards, pressure, temperature, torque, electrical and mass calibration solutions.'
  },
  {
    title: 'Quality Control & Inspection',
    slug: 'quality-control-inspection',
    image: '/images/sectors/quality.jpg',
    description:
      'Industrial inspection systems, quality assurance solutions, SPC software, gauges, measuring instruments, and testing equipment.'
  },
  {
    title: 'Machine Vision & Optical Inspection',
    slug: 'machine-vision',
    image: '/images/sectors/machine-vision.jpg',
    description:
      'Industrial cameras, AI vision systems, optical inspection, image processing, automated defect detection, and smart vision solutions.'
  },
  {
    title: 'Non-Destructive Testing (NDT)',
    slug: 'ndt',
    image: '/images/sectors/ndt.jpg',
    description:
      'Ultrasonic, radiography, eddy current, magnetic particle, dye penetrant, and advanced NDT technologies.'
  },
  {
    title: 'Automation, Robotics & Industry 4.0',
    slug: 'automation-robotics',
    image: '/images/sectors/automation.jpg',
    description:
      'Industrial robots, cobots, smart factories, IoT-enabled manufacturing, AI, digital transformation, and factory automation.'
  },
  {
    title: 'Sensors & Industrial Instrumentation',
    slug: 'sensors-instrumentation',
    image: '/images/sectors/sensors.jpg',
    description:
      'Industrial sensors, transmitters, data acquisition systems, monitoring devices, and process instrumentation.'
  },
  {
    title: 'Surface Measurement & Material Testing',
    slug: 'surface-material-testing',
    image: '/images/sectors/material-testing.jpg',
    description:
      'Surface roughness testers, hardness testers, tensile testing machines, material analysis, and laboratory instruments.'
  },
  {
    title: 'CAD/CAM, Metrology Software & Digital Manufacturing',
    slug: 'cad-cam-software',
    image: '/images/sectors/software.jpg',
    description:
      'CAD/CAM, reverse engineering, digital twins, metrology software, inspection software, simulation, and manufacturing analytics.'
  }
];
  return (
    <section className="bg-white py-32">
      <SectionContainer>
        {/* ================= HEADER ================= */}
        <div className="mb-12 lg:mb-15 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          {/* LEFT */}
          <div className="max-w-7xl">
            {/* LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <img
                src="/images/logo-icon-3.png"
                alt="Sectors"
                className="h-6 w-6"
              />
              <span className="text-sm font-medium text-gray-700">
                Sectors
              </span>
            </div>

            {/* TITLE */}
            <h2 className="
  text-4xl
  lg:text-5xl
  xl:text-6xl
  font-[600]
  leading-[0.95]
  tracking-tight
">
  Explore the Future of Metrology, Measurement & Quality Technologies
</h2>

<p className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
  INDIAMET brings together global leaders in industrial metrology, precision
  measurement, calibration, quality control, machine vision, NDT, automation,
  and smart manufacturing technologies—all under one roof.
</p>
          </div>

          {/* RIGHT BUTTON */}
          <div className="mt-6 lg:mt-0">
            <Link href="/sectors">
              <button className="
                rounded-full 
                bg-[#1da428] 
                px-8 lg:px-10 
                py-3 lg:py-4 
                text-white 
                font-semibold 
                transition 
                hover:bg-[#0074D9]
              ">
                Explore Sectors
              </button>
            </Link>
          </div>
        </div>

        {/* ================= CARDS WITH HOVER EFFECTS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <SectorCard key={i} sector={sector} index={i} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

// Separate client component for sector card with hover effects
function SectorCard({ sector, index }: { sector: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/sectors/${sector.slug}`}
      className="group relative h-[400px] lg:h-[460px] overflow-hidden block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE WITH ZOOM EFFECT */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${sector.image})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />

      {/* GRADIENT OVERLAY - CHANGES ON HOVER */}
      <div className="absolute inset-0 transition-all duration-500"
        style={{
          background: isHovered 
            ? 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5))'
            : 'linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.4))'
        }}
      />

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transition-all duration-500"
        style={{
          transform: isHovered ? 'translateY(0)' : 'translateY(0)',
          paddingBottom: isHovered ? '5rem' : '1.5rem',
        }}
      >
        {/* TITLE */}
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 transition-all duration-300"
          style={{
            transform: isHovered ? 'translateY(0)' : 'translateY(0)'
          }}>
          {sector.title}
        </h3>

        {/* DESCRIPTION - SLIDES UP ON HOVER */}
        <div className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: isHovered ? '100px' : '0',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)'
          }}
        >
          <p className="text-white/80 text-base lg:text-lg leading-relaxed pt-2">
            {sector.description}
          </p>
          
          {/* EXPLORE BUTTON - APPEARS ON HOVER */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-blue-300 font-medium">Explore Sector</span>
            <svg 
              className="w-5 h-5 text-blue-300 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>

      {/* HOVER INDICATOR LINE */}
      <div className="absolute bottom-0 left-6 lg:left-8 h-1 bg-blue-500 transition-all duration-300"
        style={{
          width: isHovered ? '80px' : '40px',
          opacity: isHovered ? 1 : 0.7,
        }}
      />
    </Link>
  );
}