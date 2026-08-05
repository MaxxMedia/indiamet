// components/ImpactSection.tsx - FIXED
'use client';

import { useState } from 'react';
import SectionContainer from './UI/SectionContainer'

export default function ImpactSection() {
  const impacts = [
    {
      title: 'Find the Right Platform to Accelerate Your Business Growth',

      content:
        'INDIAMET 2027 provides an unparalleled opportunity for visitors to discover the latest innovations in metrology, measurement technology, quality assurance, inspection systems, calibration, testing equipment, machine vision, NDT, and precision engineering solutions—all under one roof.',
      image: '/images/tooling.JPG',
      stat: {
        value: '',
        label: 'Connect directly with leading technology providers, compare cutting-edge solutions, evaluate live demonstrations, and build valuable partnerships with global manufacturers, OEMs, quality professionals, and industrial solution providers driving the future of precision manufacturing.',
      },
    },
    {
      title: 'Expand your business with the right partners',
      content:
        'INDIAMET 2027 connects you with leading metrology, measurement, inspection, calibration, testing, machine vision, and quality assurance solution providers from India and around the world. Explore innovative technologies, evaluate solutions firsthand, and engage directly with manufacturers, OEMs, distributors, research institutions, and industry experts to identify the right partners for your business growth.',
      image: '/images/raj.JPG',
      stat: {
        value: '',
        label: 'Build valuable business relationships, discover new technologies, and unlock opportunities that enhance productivity, quality, and manufacturing excellence.',
      },
    },
    {
      title: 'Build long-term business connections',
      content:
        'Forge valuable relationships with industry leaders, quality professionals, manufacturing executives, OEMs, technology providers, and decision-makers from across the manufacturing ecosystem.',
      image: '/images/japan.JPG',
      stat: {
        value: '',
        label: 'Network with the right partners, exchange knowledge, and create strategic collaborations that drive innovation, business growth, and long-term success in the metrology and quality engineering industry.',
      },
    },
    {
      title: 'Showcase innovation to the right audience',
      content:
        'Present your latest metrology, measurement, inspection, calibration, testing, machine vision, and quality assurance solutions to a highly targeted audience of manufacturers, OEMs, quality professionals, production engineers, R&D teams, calibration laboratories, and industrial decision-makers.',
      image: '/images/hottip.JPG',
      stat: {
        value: '',
        label: 'Demonstrate your technologies through live interactions, generate qualified business opportunities, and position your brand at the forefront of precision manufacturing and quality excellence.',
      },
    },
  ];

  const ITEMS_PER_VIEW = 2;
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex + ITEMS_PER_VIEW < impacts.length) {
      setCurrentIndex(currentIndex + ITEMS_PER_VIEW);
    }
  };

  const prev = () => {
    if (currentIndex - ITEMS_PER_VIEW >= 0) {
      setCurrentIndex(currentIndex - ITEMS_PER_VIEW);
    }
  };

  return (
    <section className="py-32 bg-white">
      <SectionContainer>
        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-6xl">
            <div className="mb-6 flex w-fit items-center gap-3">
              <img src="/images/logo-icon-3.png" alt="Numbers" className="w-6" />
              <span className="text-sm font-medium text-gray-700">Numbers</span>
            </div>

            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6">
              INDIAMET 2027 – The Industry Impact
            </h2>

            <p className="text-lg text-[#4D4D4D]">
              Discover the vision, opportunity, and industry significance of INDIAMET 2027—India's first dedicated exhibition for metrology, measurement technology, quality assurance, inspection, calibration, and precision engineering. Bringing together global technology leaders, manufacturers, OEMs, quality professionals, and industrial decision-makers, INDIAMET is set to become the nation's premier platform for advancing precision manufacturing, quality excellence, and industrial innovation.
            </p>
          </div>

          {/* ARROWS */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9BB6D9] text-white disabled:opacity-40 hover:bg-[#116466] transition-colors"
            >
              ←
            </button>
            <button
              onClick={next}
              disabled={currentIndex + ITEMS_PER_VIEW >= impacts.length}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#116466] text-white disabled:opacity-40 hover:bg-[#00264d] transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* ================= SLIDER ================= */}
        <div className="grid md:grid-cols-2 gap-8">
          {impacts
            .slice(currentIndex, currentIndex + ITEMS_PER_VIEW)
            .map((impact, i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-2xl bg-[#116466] text-white"
              >
                <div className="p-8 lg:p-10">
                  <h3 className="mb-5 text-2xl lg:text-3xl font-bold leading-tight">
                    {impact.title}
                  </h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    {impact.content}
                  </p>
                </div>

                <div
                  className="h-[280px] lg:h-[320px] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${impact.image})` }}
                />

                <div className="bg-[#116466] p-6 lg:p-8">
                  <h4 className="mb-2 text-4xl lg:text-5xl font-bold">
                    {impact.stat.value}
                  </h4>
                  <p className="text-base lg:text-lg opacity-90">
                    {impact.stat.label}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </SectionContainer>
    </section>
  );
}