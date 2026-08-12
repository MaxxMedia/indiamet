// app/why-exhibit/page.tsx - UPDATED WITH NEW LAYOUT
"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PartnersSection from "@/components/section/PartnersSection"
import SectionContainer from "@/components/UI/SectionContainer"
import Image from "next/image";
import Link from "next/link"
import { motion } from 'framer-motion'
import { HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi"
import BrochureSection from "@/components/section/BrochureSection"
import BackToTop from "../exhibitor-resource-center/component/BackToTop"
import { indiametSectors } from "../sectors/data"

const data = [
  {
    title: 'Looking to Expand Your Global Reach??',
    text: 'Connect with manufacturers, OEMs, quality professionals, distributors, and industrial decision-makers from India and around the world who visit INDIAMET 2027 to discover the latest innovations in metrology, measurement technology, inspection, calibration, testing, and quality assurance solutions.',
    image: '/images/Why-Exhibit/globe.png',
  },
  {
    title: 'Maximize Your Exhibition Success?',
    text: 'INDIAMET 2027 provides a focused platform to generate high-quality business leads, connect with qualified buyers, launch innovative technologies, strengthen customer relationships, and build strategic partnerships with key decision-makers from the manufacturing and quality engineering industries.',
    image: '/images/Why-Exhibit/market.png',
  },
  {
    title: 'Looking to Enter New Manufacturing Markets?',
    text: 'Gain direct access to quality leaders, manufacturing heads, plant managers, procurement professionals, R&D teams, OEMs, and industrial decision-makers seeking advanced metrology, measurement, inspection, calibration, testing, and quality assurance solutions across India"s rapidly growing manufacturing sectors.',
    image: '/images/Why-Exhibit/filtering.png',
  },
  {
    title: 'Looking to Improve Quality, Accuracy & Productivity?',
    text: 'Meet leading technology providers and solution partners offering advanced metrology, measurement, inspection, calibration, testing, and quality assurance solutions that help enhance product quality, improve manufacturing accuracy, optimize production processes, and increase operational efficiency.',
    image: '/images/Why-Exhibit/conversion.png',
  },
  {
    title: 'Looking to Generate High-Quality Business Leads?',
    text: 'Connect with qualified buyers and decision-makers from the automotive, EV, aerospace, electronics, medical devices, defence, industrial machinery, precision engineering, and general manufacturing sectors actively seeking advanced metrology, measurement, inspection, calibration, testing, and quality assurance solutions.',
    image: '/images/Why-Exhibit/opportunity.png',
  },
  {
    title: 'Want to Increase Your Brand Visibility?',
    text: 'Showcase your latest metrology, measurement, inspection, calibration, testing, and quality assurance solutions to a highly targeted audience of manufacturers, OEMs, quality professionals, engineers, and key decision-makers, positioning your brand as a leader in precision manufacturing and industrial quality.',
    image: '/images/Why-Exhibit/worldwide.png',
  },
];

export default function WhyExhibit() {
  const testimonials = [
    {
      logo: "/images/Why-Exhibit/raj.png",
      text: "INDIAMET provides an excellent platform for tooling manufacturers to connect with serious buyers from the automotive, electronics, and engineering sectors.",
      author: "RAJSHEKAR HUGHAR",
      company: "Managing Director, Raj Tools & Stampings Pvt Ltd",
    },
    {
      logo: "/images/Why-Exhibit/trove.png",
      text: "We gained valuable business leads and met key decision-makers from major manufacturing companies. INDIAMET is becoming an important event for the tooling industry.",
      author: "SUCHEENDRAN KUNDUVARAVALAPIL",
      company: "Managing Director , The Tooling Trove",
    },
    {
      logo: "/images/Why-Exhibit/pawan.png",
      text: "The quality of visitors and industry professionals attending INDIAMET is impressive. It’s a great opportunity to showcase our latest die and mould innovations.",
      author: "AMIT A, DHARURKAR",
      company: "Marketing Engineer, Pawan Precisions Pvt. Ltd.",
    },
    {
      logo: "/images/Why-Exhibit/richcam.png",
      text: "INDIAMET helps us demonstrate advanced automation and machining solutions directly to manufacturers looking to upgrade their tool rooms.",
      author: "ABHIJEET C KHOLLAM",
      company: "Chief Operating Officer, Rich Cam Auto Engg (I) Pvt. Ltd",
    },
    {
      logo: "/images/Why-Exhibit/vasantha.svg",
      text: "The exhibition brings together the entire die and mould ecosystem — from raw materials and cutting tools to advanced machining and metrology solutions.",
      author: "RANJITH",
      company: "Manager, Vasantha Tool Craft Pvt. Ltd. ",
    },
    {
      logo: "/images/Why-Exhibit/rajamane.png",
      text: "Participating at INDIAMET helped us expand our market presence and connect with OEM manufacturers across multiple industries.",
      author: "MAHESH RAJAMANE",
      company: "CEO, Rajamane Solutions",
    },
    {
      logo: "/images/Why-Exhibit/prenac.webp",
      text: "INDIAMET is an excellent platform for networking, discovering new technologies, and building partnerships within the die and mould industry.",
      author: "Ms. CHERRY YASIS",
      company: "Sales Assnt, Sohbi Kohgei (Phil)., Inc",
    },
    {
      logo: "/images/Why-Exhibit/prenac.webp",
      text: "We look forward to participating in INDIAMET again. The event provides great exposure and meaningful interactions with buyers and industry experts.",
      author: "NAVEEN",
      company: "Managing Director, Prenac Tools",
    },
    {
      logo: "/images/Why-Exhibit/hottip.jpg",
      text: "We look forward to participating in INDIAMET again. The event provides great exposure and meaningful interactions with buyers and industry experts.",
      author: "MOHAMMED FAHEMUDAIN",
      company: "Managing Director, Hottip India",
    },
    {
      logo: "/images/Why-Exhibit/jai.jpg",
      text: "We look forward to participating in INDIAMET again. The event provides great exposure and meaningful interactions with buyers and industry experts.",
      author: "SANTHOSH RAI",
      company: "Director,  Jai Ambay Etching Process",
    },
  ]

  const [testimonialIndex, setTestimonialIndex] = useState(0)
  // Add these animation variants after your scaleIn definition
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length]);


  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <main className="bg-white overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden">
          {/* Background */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/images/why-exhibit-header.JPG)",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

          <SectionContainer>
            <div className="relative z-10 min-h-[60vh] lg:min-h-[70vh] flex items-center">

              {/* LEFT CONTENT */}
              <div className="max-w-7xl text-white">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="font-parabolica text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mt-30"
                >
                  Unlock New Opportunities at INDIAMET
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-4 text-sm sm:text-base lg:text-lg text-white/90"
                >
                  Discover new possibilities at INDIAMET 2027—where industry leaders connect,
                  collaborate, and innovate.
                </motion.p>

                <div className="flex flex-wrap gap-4 mt-6 text-white/90 text-sm sm:text-base">
                  <span className="flex items-center gap-2">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-5 shrink-0 fill-[#FF6A00]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path>
                    </svg>
                    22 - 24 April 2027
                  </span>

                  <span className="flex items-center gap-2">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-5 shrink-0 fill-[#FF6A00]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path>
                    </svg>
                    Pune, India
                  </span>
                </div>

                <Link href="/exhibiting-enquiry">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-[#FF6A00] hover:bg-blue-700 px-8 py-3 rounded-full font-medium"
                  >
                    Enquire to Exhibit
                  </motion.button>
                </Link>
              </div>
            </div>
          </SectionContainer>
        </section>


        {/* WHERE METROLOGY COMES TOGETHER */}
        <section className="py-16 lg:py-24">
          <SectionContainer>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="font-parabolica grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold">Where the Metrology & Quality Engineering Industry Comes Together</h2>
                <p className="text-[#4D4D4D] mb-6 text-lg">
                  INDIAMET 2027 is India's first dedicated international exhibition for metrology, measurement technology, quality assurance, inspection, calibration, testing, and precision engineering, bringing together the entire quality ecosystem under one roof.
                </p>
                <p className="text-[#4D4D4D] mb-8 text-lg">
                 With India's rapidly expanding manufacturing sectors—including automotive, EV, aerospace, electronics, medical devices, defence, and industrial engineering—supported by initiatives such as Make in India, Atmanirbhar Bharat, and smart manufacturing, the country presents exceptional opportunities for companies to expand their market presence, introduce innovative technologies, and build long-term partnerships with manufacturers, OEMs, and quality professionals.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#4D4D4D] font-bold text-[20px] leading-none">•</span>
                    <motion.span
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="text-[#4D4D4D] text-[30px] cursor-pointer"
                    >
                      <strong>10,000 Visitors</strong>
                    </motion.span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-[#4D4D4D] font-bold text-[30px] leading-none">•</span>
                    <motion.span
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="text-[#4D4D4D] text-[30px] cursor-pointer"
                    >
                      <strong>150+ Exhibitors</strong>
                    </motion.span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-[#4D4D4D] font-bold text-[20px] leading-none">•</span>
                    <motion.span
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="text-[#4D4D4D] text-[30px] cursor-pointer"
                    >
                      <strong>12+ Countries</strong>
                    </motion.span>
                  </li>
                </ul>

                <Link href="/exhibiting-enquiry">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="font-parabolica bg-[#FF6A00] hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                  >
                    Enquire to Exhibit
                  </motion.button>
                </Link>
              </div>

              <motion.div
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                className="relative h-120 overflow-hidden transition-all duration-300"
              >
                <img
                  src="/images/con-highlight.JPG"
                  alt="Conference"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white font-parabolica text-3xl font-bold"
                  >
                   
                  </motion.h2>
                </div>
              </motion.div>
            </motion.div>
          </SectionContainer>
        </section>

        {/* REASONS TO EXHIBIT */}
        <section className="py-16 lg:py-24 bg-gray-50 font-parabolica">
          <SectionContainer>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12"
            >
              <div className="mb-8 lg:mb-0">
                <div className="flex gap-2 mb-4">
                  <img src="/images/logo-icon-3.png" alt="" className="h-5" />
                  <h3 className="text-sm text-[#4D4D4D] font-semibold mb-2">Key Benefits</h3>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold">Reasons Why You Should Exhibit</h2>
              </div>
            </motion.div>

            <p className="text-gray-700 mb-8 max-w-8xl text-lg">
              INDIAMET 2027 provides a dedicated platform for manufacturers and solution providers in metrology, measurement technology, quality assurance, inspection, calibration, testing, machine vision, and precision engineering to showcase their latest innovations to a highly targeted audience of OEMs, quality professionals, manufacturing leaders, plant heads, R&D teams, procurement specialists, and key decision-makers.
            </p>
            <p className="text-gray-700 mb-12 max-w-8xl text-lg">
              As India's manufacturing sector continues to invest in precision, automation, digital quality, and smart manufacturing, exhibiting at INDIAMET 2027 enables you to generate qualified business leads, strengthen your brand presence, launch new technologies, build strategic partnerships, and expand your footprint in one of the world's fastest-growing industrial markets.
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{
                    y: -6,
                    boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                    transition: { duration: 0.25 },
                  }}
                  className="bg-white border border-gray-200 rounded-lg p-6 flex flex-row h-full"
                >
                  {/* CONTENT */}
                  <div className="grid flex-1">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div className="ml-4 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-10 w-auto"
                      onError={(e) => {
                        console.error(`Failed to load image: ${item.image}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Link href='/exhibiting-enquiry'>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-[#FF6A00] hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                Enquire to Exhibit
              </motion.button>
            </Link>
          </SectionContainer>
        </section>

        {/* WHY EXPAND TO INDIAMET*/}
        <section className="py-16 lg:py-24 bg-gray-50 font-parabolica">
          <SectionContainer>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-12"
            >
              Why Expand in India's Metrology & Measurement Industry?
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center"
            >
              {[
                {
                  title: "A Fast-Growing Manufacturing Economy",
                  text: "India is one of the world's fastest-growing manufacturing economies, driven by rapid investments in automotive, electric vehicles, aerospace, electronics, medical devices, defence, semiconductors, and industrial engineering. This growth is creating increasing demand for advanced metrology, precision measurement, quality inspection, calibration, testing, and smart manufacturing technologies across every sector.",
                  image: "/images/mfg-economy.jpg"
                },
                {
                  title: "Rising Demand for Precision Measurement & Quality Solutions",
                  text: "As manufacturers embrace automation, digital transformation, and higher quality standards, the demand for advanced metrology, precision measurement, inspection systems, calibration, testing equipment, machine vision, and quality assurance technologies continues to grow across diverse industries.",
                  image: "/images/demand.jpg"
                },
                {
                  title: "Long-Term Growth & Investment Potential",
                  text: "India's metrology, measurement, and quality engineering market is poised for sustained growth, driven by Industry 4.0 adoption, smart manufacturing, automation, digital quality systems, and increasing investments in precision manufacturing. This creates significant opportunities for technology providers, equipment manufacturers, calibration laboratories, software companies, and solution partners to expand their presence in one of the world's fastest-growing industrial markets.",
                  image: "/images/investment.jpg"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
                    transition: { duration: 0.3 }
                  }}
                  className="relative w-full max-w-[466px] h-[500px] overflow-hidden rounded-lg cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      console.error(`Failed to load image: ${item.image}`);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 p-8 hover:bg-black/70 transition-all duration-300">
                    <div className="text-white h-full flex flex-col justify-end">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-300 text-lg">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </SectionContainer>
        </section>

        {/* EVENT SECTORS */}
        <section className="py-16 lg:py-24 bg-gray-50 font-parabolica">
          <SectionContainer>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12"
            >
              <div>
                <div className="flex gap-2 mb-4">
                  <img src="/images/logo-icon-3.png" alt="" className="h-5" />
                  <h3 className="text-sm text-[#4D4D4D] font-semibold mb-2">Event Sectors</h3>
                </div>
                <h2 className="text-4xl lg:text-6xl font-[450] max-w-7xl">
                  Discover the Core Sectors Driving Metrology & Quality Engineering
                </h2>
              </div>
              <Link href="/sectors">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-16 lg:mt-24 bg-[#FF6A00] hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                >
                  Explore Event Sectors
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {indiametSectors.slice(0, 6).map((sector) => (
                <Link
                  key={sector.id}
                  href={`/sectors/${sector.slug}`}
                  className="group relative w-full min-h-[600px] overflow-hidden block"
                >
                  <motion.div
                    variants={scaleIn}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="absolute inset-0"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${sector.image})` }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="absolute bottom-0 left-0 p-6 text-white text-xl lg:text-2xl font-bold leading-snug max-w-xs group-hover:text-blue-300 transition-colors duration-300">
                      {sector.title}
                    </h3>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </SectionContainer>
        </section>

        {/* DOWNLOAD BROCHURE */}
        <BrochureSection />

        {/* TESTIMONIALS  */}
        {/* <section className="py-20 lg:py-28 bg-white font-parabolica">
          <SectionContainer>
            <div className="flex gap-2 mb-4">
              <img src="/images/logo-icon-3.png" alt="" className="h-5" />
              <h3 className="text-sm text-[#4D4D4D] font-semibold mb-2">Testimonials</h3>
            </div>

            <div className="relative flex items-center justify-between mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}./.
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold"
              >
                Trusted by Industry Leaders
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-3 z-10"
              >
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                  className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#1d4ed8" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setTestimonialIndex((i) => (i + 1) % testimonials.length)}
                  className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>

            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-start gap-16"
            >
              <div className="min-w-[200px]">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-32 h-32 relative"
                >
                  <Image
                    src={testimonials[testimonialIndex].logo}
                    alt="Company logo"
                    fill
                    className="object-contain"
                    onError={(e) => {
                      console.error(`Failed to load logo: ${testimonials[testimonialIndex].logo}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </motion.div>
              </div>

              <div className="max-w-5xl">
                <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                  {testimonials[testimonialIndex].text}
                </p>
                <div className="w-full h-[1px] bg-gray-300 mb-5"></div>
                <div>
                  <p className="font-bold text-gray-900 text-lg uppercase hover:text-blue-600 transition-colors duration-300">
                    {testimonials[testimonialIndex].author}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[testimonialIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </SectionContainer>
        </section>

        {/* VISITOR PROFILE */}
        <section className="bg-white font-parabolica">
          <div className="py-20 lg:py-28">
            <SectionContainer>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-6xl font-bold mb-8"
              >
                Visitor Profile
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-700 text-xl max-w-8xl mb-6 leading-relaxed"
              >
Discover the professionals driving the future of metrology, measurement, quality assurance, inspection, calibration, and precision manufacturing. INDIAMET 2027 attracts a highly targeted audience of decision-makers, industry leaders, quality professionals, manufacturing experts, and technology innovators from India and international markets.              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-700 text-xl max-w-8xl mb-10 leading-relaxed"
              >
From quality heads, metrology engineers, plant managers, manufacturing leaders, R&D professionals, procurement specialists, OEMs, calibration laboratories, and testing organizations to precision engineering companies, visitors attend INDIAMET 2027 to discover the latest technologies, evaluate innovative solutions, connect with global suppliers, and build strategic business partnerships.              </motion.p>

              <Link href="/post-show-report">
                {/* <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FF6A00] hover:bg-blue-800 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300"
                >
                  Know More Insights
                </motion.button> */}
              </Link>
            </SectionContainer>
          </div>

          <div className="bg-blue-50 py-20">
            <SectionContainer>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16"
              >
                {[
               {
  value: "Quality",
  label: "Quality Heads, QA/QC Managers, Metrology Engineers & Inspection Professionals"
},
{
  value: "OEMs",
  label: "OEMs, Automotive, EV, Aerospace, Defence, Electronics, Medical Devices & Industrial Manufacturers"
},
{
  value: "Leaders",
  label: "Plant Heads, Manufacturing Leaders, Procurement Managers, R&D Teams & Senior Decision-Makers"
},
{
  value: "Experts",
  label: "Calibration Laboratories, Testing Centers, Machine Vision, CMM, NDT, Automation & Metrology Solution Providers"
}
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#ffffff",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                    }}
                    className="p-6 rounded-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-6xl font-bold text-[#FF6A00] mb-4 hover:text-blue-800 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <p className="text-lg text-gray-800 mb-6">{stat.label}</p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-px bg-gradient-to-r from-blue-400 to-blue-600"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </SectionContainer>
          </div>
        </section>

        {/* A SNAPSHOT OF EXHIBITORS */}
        <section className="py-16 lg:py-24 font-parabolica">
          <SectionContainer>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold mb-8"
            >
              A Snapshot of Our Key Exhibitors
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="relative w-full h-[520px] lg:h-[580px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={""}
                  alt="Exhibitors showcase"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    console.error('Failed to load exhibitors image');
                  }}
                />
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/exhibition-directory"
                className="inline-block bg-[#FF6A00] hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base font-medium"
              >
                View Exhibitor List
              </Link>
            </motion.button>
          </SectionContainer>
        </section>

        {/* JOURNEY CTA */}
        <section
          className="relative font-parabolica py-16 lg:py-24 text-white bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/punecity.jpg')",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-center"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Your Journey Starts Here: Essential Travel Info for INDIAMET 2027
              </h2>

              <p className="text-lg mb-8 max-w-3xl mx-auto">
                Whether you're travelling from within India or overseas, find everything you need to plan a smooth and 
                comfortable visit to INDIAMET 2027 at the Auto Cluster Exhibition Centre, Pune, India. From travel and 
                accommodation to local transportation and venue information, we've got you covered.
              </p>

              <Link href="/plan-your-travel">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#f8fafc",
                    boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 px-6 py-3 rounded-full font-medium transition-all duration-300"
                >
                  Plan Your Travel
                </motion.button>
              </Link>
            </motion.div>
          </SectionContainer>
        </section>

        {/* QUICK NAVIGATION */}
        <section className="font-parabolica py-16 lg:py-24">
          <SectionContainer>
            <div className="flex gap-2 mb-4">
              <img src="/images/logo-icon-3.png" alt="" className="h-5" />
              <h3 className="text-sm text-[#4D4D4D] font-semibold mb-2">INDIAMET</h3>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold mb-3"
            >
              Quick Navigation
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm text-[#4D4D4D] font-semibold mb-5"
            >
              Simplifying Your Participation Journey
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: "📦",
                  number: "01",
                  title: "Become an Exhibitor",
                  description: "Join 150+ exhibitors in presenting your solutions for 3 days for unmatched networking opportunities.",
                  buttonText: "EXHIBITOR REGISTRATION",
                  href: "/exhibiting-enquiry"
                },
                {
                  icon: "📘",
                  number: "02",
                  title: "Download Event Brochure",
                  description: "Find out what we and how our brochure has the key information to prepare up to date brochure.",
                  buttonText: "Download Now",
                  href: "/event-brochure"
                },
                {
                  icon: "👥",
                  number: "03",
                  title: "Become a Visitor",
                  description: "Why not visit the market? Why not visit the show and what to expect for the following edition.",
                  buttonText: "VISITOR REGISTRATION",
                  href: "/visitor-registration"
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    backgroundColor: "#f8fafc"
                  }}
                  className="border border-gray-200 rounded-lg p-8 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{card.icon}</span>
                    </div>
                    <motion.span
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      className="text-3xl font-bold text-gray-300"
                    >
                      {card.number}
                    </motion.span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 hover:text-blue-600 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-6">{card.description}</p>
                  <Link href={card.href}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#FF6A00] hover:bg-blue-700 text-white py-3 rounded-full font-medium transition-all duration-300"
                    >
                      {card.buttonText}
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </SectionContainer>
        </section>

        {/* WHERE & WHEN */}
        <section className="font-parabolica py-16 lg:py-24">
          <SectionContainer>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold mb-12"
            >
              When and Where
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(37, 99, 235, 0.1)" }}
                className="bg-blue-50 p-8 rounded-lg transition-all duration-300"
              >
                <h3 className="text-lg lg:text-xl font-semibold text-[#4D4D4D] mb-4">Venue</h3>
                <p className="text-gray-800 font-medium text-lg"> Auto Cluster Exhibition Centre, Pune, India</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(37, 99, 235, 0.1)" }}
                className="bg-blue-50 p-8 rounded-lg transition-all duration-300"
              >
                <h3 className="text-lg lg:text-xl font-semibold text-[#4D4D4D] mb-4">Opening Hours</h3>
                <p className="text-gray-800 font-medium text-lg">22-24 April 2027, 10:00 -18:00</p>
                             </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              className="bg-gray-200 rounded-lg h-64 lg:h-80 overflow-hidden transition-all duration-300"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5601269562317!2d73.79904587592934!3d18.638844465549226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84992d04bbd%3A0x9f1c44fb853ba461!2sAuto%20Cluster%20Exhibition%20Center%2C%20Chinchwad%2C%20Pune!5e0!3m2!1sen!2sin!4v1768810852287!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </SectionContainer>
        </section>

        {/* PARTNERS & SPONSORS */}
        <section className="py-16 lg:py-24">
          <SectionContainer>
            <PartnersSection />
          </SectionContainer>
        </section>
      </main>
      <BackToTop />
    </>
  )
}
