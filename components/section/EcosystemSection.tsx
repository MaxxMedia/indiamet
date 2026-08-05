import React from "react"
import Image from "next/image"
import Link from "next/link"
import SectionContainer from "../UI/SectionContainer"

const EcosystemSection = () => {
  const ecosystemItems = [
     {
    number: "01",
    title: "The Exhibition",
    description: `At the heart of the ecosystem is INDIAMET 2027—India's first dedicated exhibition for metrology, measurement technology, quality assurance, inspection, calibration, testing, and precision engineering. The exhibition brings together the complete metrology and quality engineering value chain, offering a high-impact platform to:

- Connect face-to-face with OEMs, manufacturers, quality heads, metrology engineers, procurement leaders, and senior decision-makers.
- Showcase advanced metrology solutions, including CMMs, optical & vision inspection systems, machine vision, calibration equipment, testing technologies, precision instruments, industrial software, and smart manufacturing solutions.
- Engage with a highly qualified audience from the automotive, EV, aerospace, defence, electronics, medical devices, industrial machinery, and precision engineering sectors over three focused days of business networking and technology showcase.`,
    image: "/images/expo-about-diemex.JPG",
    link: "/about-indiamet",
    buttonText: "Know More",
  },
  {
    number: "02",
    title: "INDIAMET Summit",
    description: `Running alongside the exhibition, the INDIAMET Summit brings together industry leaders, technical experts, researchers, and manufacturing professionals for two days of knowledge sharing and technical discussions on the future of metrology and quality engineering.

- Learn from global experts on the latest developments in metrology, measurement technology, inspection, calibration, testing, and quality assurance.
- Explore emerging trends including AI-powered inspection, machine vision, digital metrology, Industry 4.0, and smart manufacturing.
- Build valuable professional connections with OEMs, quality leaders, metrology specialists, calibration laboratories, researchers, and decision-makers from across the manufacturing ecosystem.`,
    image: "/images/conference-about-diemex.JPG",
    link: "/indiamet-summit",
    buttonText: "Explore Summit",
  },
  {
    number: "03",
    title: "Global Metrology Excellence Awards (GMEA)",
    description: `The Global Metrology Excellence Awards (GMEA) recognizes outstanding achievements in metrology, measurement technology, quality assurance, inspection, calibration, testing, and precision engineering. The awards celebrate organizations and professionals driving innovation, accuracy, and manufacturing excellence.

- Honour pioneering companies, innovators, researchers, and industry leaders.
- Celebrate breakthrough technologies, best practices, and excellence in quality engineering.
- Network with award winners, global technology providers, manufacturing leaders, and distinguished guests during a prestigious industry recognition ceremony.`,
    image: "/images/tooling-about-diemex.png",
    link: "/global-metrology-excellence-awards",
    buttonText: "Explore Awards",
  },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* CONTENT LAYER */}
      <div className="relative z-10">
        <SectionContainer>
          {/* HEADER */}
          <div className="mb-14 flex max-w-8xl flex-col gap-6">
            <h2 className="title-72 text-black">
              INDIAMET: India's First Dedicated Metrology & Quality Engineering Exhibition
            </h2>

            <p className="text-lg text-black/70">
              INDIAMET 2027 is India's first dedicated exhibition for metrology, measurement technology, quality assurance, inspection, calibration, testing, and precision engineering. Designed as a focused B2B platform, it brings together global technology leaders, manufacturers, OEMs, calibration laboratories, research institutions, and solution providers to showcase the latest innovations and create valuable business opportunities.
            </p>
<p className="text-lg text-black/70">
             The exhibition serves as a meeting point for the entire metrology and quality engineering ecosystem, enabling industry professionals to discover new technologies, exchange technical knowledge, build strategic partnerships, and accelerate the adoption of advanced measurement and quality solutions across India's rapidly growing manufacturing sector.
            </p>
            {/* LINK AS BUTTON – NO <button> */}
            <Link
              href="/why-exhibit"
              className="inline-block w-fit rounded-full bg-[#AC3B61] px-10 py-4 font-semibold text-white transition hover:bg-mainColor4"
            >
              Why Exhibit
            </Link>
          </div>

          {/* CARDS */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {ecosystemItems.map((item, index) => (
              <div
                key={index}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg"
              >
                {/* IMAGE + NUMBER */}
                <div className="p-6 pb-0 xl:p-8">
                  <div className="mb-6 flex items-center justify-between">
                  <div className="relative size-16 overflow-hidden rounded-full">
  <img
    src={item.image}
    alt={item.title}
    className="h-full w-full object-cover"
  />
</div>


                    <span className="text-2xl font-semibold text-black/60">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="title-32 mb-4 font-semibold text-black">
                    {item.title}
                  </h4>
                </div>

                {/* DESCRIPTION */}
                <div className="flex-1 px-6 xl:px-8">
                  <p className="whitespace-pre-line leading-relaxed text-black/80">
                    {item.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-auto p-6 pt-4 xl:p-8">
                  <Link
                    href={item.link}
                    className="block w-full rounded-full bg-[#AC3B61] px-8 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-mainColor4 hover:shadow-lg"
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </div>

      {/* BACKGROUND SHAPE (CAN'T BLOCK CLICKS) */}
      {/* <div className="pointer-events-none absolute right-0 top-0 z-0 hidden lg:block">
        <Image
          src="/imgs/shape.png"
          alt="Decorative Shape"
          width={900}
          height={900}
          className="object-contain"
        />
      </div> */}
    </section>
  )
}

export default EcosystemSection
