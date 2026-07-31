import React from "react"
import Image from "next/image"
import Link from "next/link"
import SectionContainer from "../UI/SectionContainer"

const EcosystemSection = () => {
  const ecosystemItems = [
    {
      number: "01",
      title: "The Exhibition",
      description: `At the heart of the ecosystem is the annual DIEMEX exhibition in Pune, India. It brings together the entire die & mould and tooling value chain, offering a high-impact platform to::

- Establish direct, face-to-face business connections with OEMs, toolroom owners, and senior decision-makers.
- Showcase advanced die & mould solutions, including tooling technologies, design & engineering software, automation, materials, and Industry 4.0 innovations.
- Engage with thousands of qualified buyers and technical professionals from automotive, EV, plastics, aerospace, and industrial manufacturing sectors—all in one place from 8–10 October 2026.`,
      image: "/images/expo-about-diemex.JPG",
      link: "/about-diemex",
      buttonText: "Know More",
    },
    {
      number: "02",
      title: "Conference",
      description: `Alongside the exhibition, DIEMEX 2026 features a comprehensive conference programme comprising technical conferences, expert forums, and industry-led sessions. These are carefully curated to encourage meaningful dialogue around die & mould technologies, tooling innovation, manufacturing trends, and future-ready production strategies.

- Gain insights from industry experts on the latest developments, challenges, and opportunities in die & mould and precision manufacturing.
- Explore emerging technologies, including advanced tooling, materials, automation, digital design, and Industry 4.0 applications.
- Build valuable professional connections with OEMs, toolroom heads, engineers, buyers, and decision-makers from across the manufacturing ecosystem.`,
      image: "/images/conference-about-diemex.JPG",
      link: "/conference",
      buttonText: "Conference Programme",
    },
    {
      number: "03",
      title: "Tooling Trends",
      description: `Tooling Trends is an online platform designed to keep the industry connected before, during, and after the exhibition. Through Molding Trends, participants can::
- Network year-round with buyers, OEMs, toolrooms, technology providers, and industry peers.
- Access curated content, including industry news, technical insights, exhibitor updates, and market trends.
- Schedule meetings, manage contacts, and follow up on business leads seamlessly through a single digital platform.`,
      image: "/images/tooling-about-diemex.png",
      link: "https://toolingtrends.com",
      buttonText: "Join Tooling Trends",
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
              className="inline-block w-fit rounded-full bg-[#388E36] px-10 py-4 font-semibold text-white transition hover:bg-mainColor4"
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
                    className="block w-full rounded-full bg-[#388E36] px-8 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-mainColor4 hover:shadow-lg"
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
