"use client";

// import PartnersSection from "@/components/section/PartnersSection"
import SectionContainer from "@/components/UI/SectionContainer"
import Link from "next/link"
import { motion } from 'framer-motion'
import Image from "next/image";
import { HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi"
import BrochureSection from "@/components/section/BrochureSection";
import BackToTop from "../exhibitor-resource-center/component/BackToTop";
import PartnersSection from "@/components/section/PartnersSection";

  const countries = [
    { name: 'China', flag: '/images/China.png' },
    { name: 'India', flag: '/images/India.webp' },
    { name: 'Japan', flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAb1BMVEX///+8AC27ACq3AAC6ACG7ACa6ACO5ABi5ABy7ACj9+fq4ABS4ABC4AAu3AAP14OTcl6D78fPPbnnakZrpv8W+IDfw0dbJU2LBLkPUe4blsrnsxszWhY7eoKbmt7z46OvFRlXhqq/OZnPKW2fDO00P6eL9AAAER0lEQVR4nO3d23aqMBAGYEkChJMUVCoeCrZ9/2fcoNtltVUQMyTR/7vsFTMLJ5NJtJMJAAAAAAAAAAAAAAAAAAAAAMDTC7O02EuzUPezaBAWu/J9GXM+TRpTzuPle7krXicVYbH99mNfuIHzQ+CK5o/120skoigXXLrOFa7ki7LQ/Yy0qrcFF+xaBg6Y4M6s0v2kZNJc+h0Z+J8HKfNU99OSSHMu+mTgQPDP50tDVt6TgkMaykz3U6u1c+V9KWhJd6f7uRWq6qRXLbjEkvppKuRKekNS0PLkSvfTq5HzoSlo8Vz38ytQLQdUg5/k0vqPRMqudod9uczyxXKdBN1Rdgmma91xPGI+bFW4xJK57kiGU5QDq7NQPLQsnOOWfiJSqeg9aDFpZXXMmIKaeBIwG3cS9Z0bpi6i1h3R/TaR2hw4TrTRHdO91gqL4tHUsiUicxUWxSPm2lUWcsUF4UBYtZlaTylyYFm3sFS6Op4ES92R9beNaXLQrBBb3bH1FfpUOXAc35YDqtmDY5SbSZjpjq6fMCBYHo9YYMersFXeK/5kSVVwCF+E5lVwdMfXx5psaTiIbegVPgcfMvTjfeqOsFtI/CI0VcH80rgiT0Js/qHU18PnDF3cL90xdslo14YWc0zfURcJdQ4cJzH9UhNly3wkTW+da/KS0BSFWneUHcjXhlasO8rbUoL56m/c7IOYOenm6Sgye+y8HaEuNpXR7J1kSTJlviRK3XHeRN8vtgzvGWuiMfNFEmrdcd5ENWs/Z/bkPVyQ7xxabGnybnqsJCyQBCQBSbAjCWOtDiYnYaQ+Iah1x3kTOsZGTnzocOCZfWNljOma8fO1FeHVhBPf7JOHguiy0rmp2ePmcJzxmtEr5GQyRrfEFrqj7DDGaMnwwdJk8jHCzD3+0B1lh2qMEyjjvx5Hv3swe660R98uGd4qtejPoAw/f9r7Jv48BN+6I+xhR9w5+zb8nkBGfBwZmX5PZY/mCx9HlnzxIyW9sZNYUBZbX4STFc/sodIJ5Sppw/p48ElWFYQFd3r/q8hWSd/4bcPJjCgLtnzv5WBB0jYGpk9TztHMGo2/ynqhJOgbI9MnSr98Kz+Lcm3YOZ2rIsUjVxZZtDIczRW3TNzsG5xXbJXuIRKzL3BeVSqcPMfWFcWjXNkSEdnTLv+iKguRHUOEK3IldSGxOgeTyUZBFhLrflbn0o4/2C8wbum68FPBHho0eYFlG4a/Ze8PlMfo3cI+8U9vfOBGwuVvup9dnaqOB1QGFj/PLxbvrcTdB7VS2HDWdJdw5t/z+4xM+hvDbyYNkm3cfj/q36TAdzdWnLYNkG0d7nXmgXnc2T5rCvaK3Ilv/ZsLJmInf4rO4KZwXi7iSPyxaLoiip1y/oyl4C/pR1lLnvhSCK8hhPQTLutyZc0hmyJhVax2mzJvlJvdqqhe5Q0AAAAAAAAAAAAAAAAAAAAAgNf1D53+Qj8zo+6sAAAAAElFTkSuQmCC' },
    { name: 'Taiwan', flag: 'data:image/png;base64,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' },
    { name: 'Germany', flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACcCAMAAACulCWiAAAAElBMVEUAAAD/zgDdAADrAADZAAD/3AApfWWWAAAAz0lEQVR4nO3QwVEDQBAEsZu1yT9lqI6ChxSC3gMAAAAAAAAAAAAAAAD4xz583nESTkIknIRIOAmRcBIi4SREwkmIhJMQCSchEk5CJJyESDgJkXASIuEkRMJJiISTEAknIRJOQiSchEg4CZFwEiLhJETCSYiEkxAJJyES/rwv3/fDzxuTMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAn5BcTHpY30S2AzAAAAAElFTkSuQmCC' },
  ]

export default function WhyVisit() {
  // Animation variants
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
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

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
      <main className="bg-white overflow-hidden font-parabolica">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/why_visit_header.png)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10" />
          <SectionContainer>
            <div className="relative z-10 pb-8 sm:pb-12 md:pb-16 lg:pb-24 px-4 sm:px-0">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 max-w-4xl"
              >
                Why Visit INDIAMET 2027
              </motion.h1>
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="
    text-base sm:text-lg lg:text-xl 
    text-white/90 
    mb-6 sm:mb-8 
    max-w-10xl
    line-clamp-2 lg:line-clamp-none
  "
>
  Discover India's first dedicated B2B exhibition for metrology, measurement technology, 
  quality assurance, inspection, calibration, testing, and precision engineering. INDIAMET 2027 
  offers visitors the opportunity to explore the latest technologies, connect directly with global 
  solution providers, compare innovative products, and gain valuable insights into the trends driving 
  quality, precision, and smart manufacturing across India's industrial sectors.
</motion.p>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-white"
              >
                <div className="flex items-center gap-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-5 shrink-0 fill-blue-800 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path></svg>
                  <span className="text-sm sm:text-lg font-medium">22 - 24 April 2027</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-5 shrink-0 fill-blue-800 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path></svg>
                  <span className="text-sm sm:text-lg font-medium">Auto Cluster Exhibition Centre, Pune, India</span>
                </div>
              </motion.div>
            </div>
          </SectionContainer>
        </section>

        {/* Main Content */}
        <div className="py-8 sm:py-12 lg:py-20">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="bg-white py-12 sm:py-16 lg:py-28"
          >
            <SectionContainer>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 max-w-10xl leading-tight">
                The Complete Metrology, Measurement & Quality Engineering Ecosystem Under One Roof
              </h2>

              <p className="text-gray-700 text-sm sm:text-base md:text-[10] max-w-10xl mb-6 sm:mb-10 leading-relaxed">
                As India's manufacturing industry embraces Industry 4.0, automation, and digital quality transformation, 
                INDIAMET 2027 provides the country's first dedicated platform for the metrology, measurement, inspection, 
                calibration, testing, machine vision, and quality engineering community to connect, collaborate, and grow.
              </p>
               <p className="text-gray-700 text-sm sm:text-base md:text-[10] max-w-10xl mb-6 sm:mb-10 leading-relaxed">
                The exhibition brings together global technology leaders, manufacturers, OEMs, quality professionals, 
                calibration laboratories, research institutions, system integrators, and solution providers to showcase 
                the latest innovations, exchange technical knowledge, build strategic partnerships, and accelerate the 
                adoption of world-class measurement and quality technologies across India's manufacturing sectors.
              </p>
              <Link href='/contact-us'>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FF6A00] hover:bg-blue-800 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  Contact Us
                </motion.button>
              </Link>
            </SectionContainer>
          </motion.section>

          {/* Stats Grid */}
          <section className="bg-blue-50 py-12 sm:py-16 lg:py-20">
            <SectionContainer>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16"
              >
                {[
                  { value: "10,000", label: "Visitors" },
                  { value: "150+", label: "Exhibitors" },
                  { value: "5+", label: "Countries" },
                  { value: "10", label: "Event Sectors" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#ffffff",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                    }}
                    className="p-4 sm:p-6 rounded-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FF6A00] mb-2 sm:mb-4 hover:text-blue-800 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-800 mb-4 sm:mb-6">{stat.label}</p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-px bg-[#FF6A00]"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </SectionContainer>
          </section>

          {/* GLOBAL LOGISTICS NETWORK */}
          <section className="relative bg-blue-50 py-12 sm:py-16 lg:py-28 overflow-hidden">
            <div
              className="absolute inset-0 bg-no-repeat bg-center opacity-20 bg-contain sm:bg-cover"
              style={{ backgroundImage: "url(/images/world-map-dotted.png)" }}
            />

            <SectionContainer>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-0"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                  Connect with the Global Metrology & Quality Engineering
                  <br className="hidden sm:block" />
                  Community at INDIAMET
                </h2>

                <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-10 leading-relaxed">
                  INDIAMET 2027 brings together global leaders in metrology, measurement technology, quality assurance, inspection systems, 
                  calibration, testing, machine vision, precision instruments, industrial automation, and smart manufacturing. Over three 
                  focused days, the exhibition provides a dedicated platform to showcase innovations, exchange technical expertise, build 
                  strategic partnerships, and create new business opportunities across India's rapidly growing manufacturing and quality 
                  engineering ecosystem.
                </p>
                <Link href="/exhibition-directory">
                 <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FF6A00] hover:bg-blue-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 mb-6 sm:mb-0 w-full sm:w-auto"
                >
                  Explore the Exhibitor list
                </motion.button>
                </Link>
               

                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-14">
                  {countries.map((country, index) => (
                    <motion.div
                      key={country.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{
                        scale: 1.08,
                        y: -3,
                        backgroundColor: "#eff6ff",
                      }}
                      className="
                        flex items-center gap-2 sm:gap-3 
                        bg-white px-3 sm:px-4 py-1 sm:py-2 
                        rounded-full shadow-sm 
                        text-xs sm:text-sm text-gray-800 
                        transition-all duration-300 
                        cursor-pointer
                      "
                    >
                      {/* Flag */}
                      <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                        <Image
                          src={`${country.flag}`}
                          alt={country.name}
                          fill
                          className="rounded-full object-cover"
                          unoptimized
                        />
                      </div>

                      {/* Country Name */}
                      <span className="font-parabolica whitespace-nowrap">{country.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </SectionContainer>
          </section>

          {/* WHY ATTEND DIEMEX */}
          <section className="py-12 sm:py-16 lg:py-28 bg-white">
            <SectionContainer>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center sm:text-left"
              >
                Why Attend INDIAMET 2027
              </motion.h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
              >
               {[
  {
    image: "/images/pic1.JPG",
    title: "Connect with Global Metrology Leaders",
    text: "Meet leading manufacturers, technology providers, calibration laboratories, quality professionals, and solution providers from India and around the world, all under one roof at INDIAMET 2027."
  },
  {
    image: "/images/pic2.JPG",
    title: "Discover Next-Generation Measurement Technologies",
    text: "Explore the latest innovations in metrology, coordinate measuring machines (CMM), optical inspection, machine vision, calibration, testing, and precision measurement solutions designed for modern manufacturing."
  },
  {
    image: "/images/pic3.JPG",
    title: "Build Strategic Business Partnerships",
    text: "Connect directly with OEMs, manufacturers, procurement leaders, quality heads, and industrial decision-makers to evaluate technologies, discuss business opportunities, and establish long-term partnerships."
  },
  {
    image: "/images/pic4.JPG",
    title: "Stay Ahead with Industry Insights",
    text: "Discover emerging trends in metrology, quality engineering, smart manufacturing, AI-powered inspection, automation, and Industry 4.0 through expert-led conferences, technical presentations, and live technology demonstrations."
  }

                ].map((card, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                    }}
                    className="relative h-64 sm:h-[280px] lg:h-[320px] xl:h-[360px] overflow-hidden rounded-lg transition-all duration-300"
                    style={{ backgroundImage: `url(${card.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10" />
                    <div className="absolute bottom-0 p-4 sm:p-6 lg:p-8 text-white max-w-md">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 hover:text-blue-300 transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed line-clamp-3 sm:line-clamp-4">
                        {card.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </SectionContainer>
          </section>

          {/* E-Brochure Section */}
      <BrochureSection/>

          {/* Proven Success Stats */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="bg-white py-12 sm:py-16 lg:py-28"
            >
              <SectionContainer>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 max-w-12xl leading-tight">
                  Why Attend INDIAMET 2027
                </h2>

                <p className="text-gray-700 text-sm sm:text-base md:text-[10] max-w-8xl mb-6 sm:mb-10 leading-relaxed">
                  Experience India's first dedicated exhibition for metrology and quality engineering, where manufacturers, OEMs, technology providers, and quality professionals come together to discover innovations, exchange knowledge, and create new business opportunities.
                </p>
                <Link href='/post-show-report'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#FF6A00] hover:bg-blue-800 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                  >
                    Download Brochure
                  </motion.button>
                </Link>
              </SectionContainer>
            </motion.section>

            <section className="bg-blue-50 py-8 sm:py-10">
              <SectionContainer>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16"
                >
                  {[
                      {
    value: "100%",
    label: "Dedicated to Metrology, Measurement & Quality Engineering"
  },
  {
    value: "B2B",
    label: "Focused Business Platform for Manufacturers, OEMs & Technology Providers"
  },
  {
    value: "Global",
    label: "International Participation from Leading Technology Brands & Industry Experts"
  },
  {
    value: "3 Days",
    label: "Networking, Technology Showcases & Business Opportunities"
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
                      className="p-4 sm:p-6 rounded-xl transition-all duration-300 cursor-pointer"
                    >
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FF6A00] mb-2 sm:mb-4 hover:text-blue-800 transition-colors duration-300">
                        {stat.value}
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-800 mb-4 sm:mb-6">{stat.label}</p>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="h-px bg-[#FF6A00]"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </SectionContainer>
            </section>
          </div>

          {/* WHO IS DIEMEX FOR */}
          <section className="py-12 sm:py-16 lg:py-28 bg-white">
            <SectionContainer>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center sm:text-left"
              >
                Who Should Visit INDIAMET 2027?
              </motion.h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {[
                   [
    "Quality Heads, QA/QC Managers & Quality Engineers",
    "Metrology Engineers & Measurement Specialists",
    "Calibration Laboratories & Testing Centres",
    "Inspection & Non-Destructive Testing (NDT) Professionals",
    "Manufacturing Heads & Plant Managers",
    "Production Engineers & Process Improvement Teams",
    "OEMs & Tier-1 / Tier-2 Manufacturing Suppliers"
  ],
  [
    "Automotive, EV, Aerospace & Defence Manufacturers",
    "Electronics, Semiconductor & Medical Device Manufacturers",
    "Precision Engineering & Industrial Machinery Companies",
    "Industrial Automation & Industry 4.0 Specialists",
    "Machine Vision & Optical Inspection Professionals",
    "Coordinate Measuring Machine (CMM) Users",
    "Procurement & Strategic Sourcing Professionals"
  ],
  [
    "Research Institutions, Universities & Technical Training Centres",
    "Standards, Certification & Accreditation Bodies",
    "Government Organizations & Industry Associations",
    "Industrial Distributors, Dealers & Solution Providers",
    "Engineering Consultants & System Integrators",
    "Business Owners, Entrepreneurs & Senior Decision-Makers",
    "R&D, Design & Product Development Teams"
  ]
                ].map((list, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ 
                      y: -5,
                      backgroundColor: "#eff6ff",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                    }}
                    className="bg-blue-50 p-4 sm:p-6 lg:p-8 rounded-lg transition-all duration-300"
                  >
                    <ul className="space-y-2 sm:space-y-4 text-gray-800">
                      {list.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.05 }}
                          whileHover={{ x: 5, color: "#1d4ed8" }}
                          className="flex items-start sm:items-center gap-2 transition-all duration-300 cursor-pointer text-sm sm:text-base"
                        >
                          <span className="text-blue-600 mt-1 sm:mt-0">▪</span>
                          <span className="flex-1">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </SectionContainer>
          </section>

          {/* A SNAPSHOT OF EXHIBITORS */}
        <section className="py-12 sm:py-16 lg:py-24">
  <SectionContainer>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center sm:text-left"
    >
      Who You Will Meet
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-6 sm:mb-8"
    >
      <div className="relative w-full h-[700px] sm:h-[750px] md:h-[800px] lg:h-[850px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/segments.png" // Replace with your image path
          alt="Who you will meet at the exhibition"
          fill
          className="object-cover"
          priority
        />
      </div>
    </motion.div>

    <div className="text-center sm:text-left">
      <Link href="/exhibition-directory">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FF6A00] hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 w-full sm:w-auto"
        >
          View Exhibitor List
        </motion.button>
      </Link>
    </div>
  </SectionContainer>
</section>

          {/* EVENT SECTORS ON DISPLAY */}
          <section className="py-12 sm:py-16 lg:py-28 bg-white">
            <SectionContainer>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center sm:text-left"
              >
                Event Sectors On Display
              </motion.h2>

        <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={staggerContainer}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16"
>
                {[
  { 
    id: 1, 
    title: 'Metrology & Precision Measurement Systems',

    slug: 'precision-moulds',
     image: '/images/precision.jpg',
     description: 'Comprehensive die & mould manufacturing, tooling systems, design engineering, and end-to-end production solutions supporting high-precision industrial applications.'
     },
  { 
    id: 2, 
     title: 'Tooling, Mould Bases & Standard Components',

                  slug: 'tooling-mould-base',
                  image: '/images/mouldbase.jpg',
                  description: 'High-quality mould bases, precision components, hot runner systems, and standard tooling elements supporting efficient and reliable die & mould production.'
                },
  { 
    id: 3, 
   title: 'Machining & Finishing Technologies',

                  slug: 'machining-finishing',
                  image: '/images/finishing.jpg',
                  description: 'High-precision CNC machining, EDM, wire-cut, surface finishing, and polishing solutions for toolroom operations.'
                },
  { 
    id: 4, 
     title: 'Automation & Industry 4.0 Solutions',

                  slug: 'automation-industry',
                  image: '/images/automation.jpg',
                  description: 'Smart automation, robotics, digital manufacturing, and smart factory technologies for modern die & mould production.'
                },
  { 
    id: 5, 
    title: 'Design, CAD/CAM & Engineering Software',
                  slug: 'cad-cam',
                  image: '/images/cad.jpg',
                  description: 'Advanced design, simulation, and manufacturing software enabling accurate tooling development and reduced time-to-market.'
                },
  { 
    id: 6, 
    title: 'Tool Steel & Advanced Materials',
                  slug: 'tool-steel',
                  image: '/images/toolsteel.jpg',
                  description: 'High-performance tool steels, alloy steels, special metals, and advanced materials engineered for durability, precision, and long tool life in die & mould applications.'
                },
  
].map((sector, index) => (
  <Link
    key={index}
    href={`/sectors/${sector.slug}`}
    className="group relative h-[320px] overflow-hidden"
  >
    {/* Background Image */}
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
              </motion.div>

              <div className="text-center">
                <Link href='/sectors'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#FF6A00] hover:bg-blue-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 w-full sm:w-auto"
                  >
                    Explore All the Event Sectors
                  </motion.button>
                </Link>
              </div>
            </SectionContainer>
          </section>

          {/* MORE THAN JUST AN EXHIBITION */}
          <section className="py-12 sm:py-16 lg:py-28 bg-white">
            <SectionContainer>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-start justify-between mb-8 sm:mb-12 gap-4 sm:gap-0"
              >
                <div className="max-w-3xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                    More Than Just an Exhibition
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    A dedicated platform for metrology, measurement technology, quality assurance, inspection, calibration, testing, and precision engineering that combines live technology demonstrations, technical conferences, expert-led knowledge sharing, and high-value business networking.
                  </p>
                </div>

                <div className="flex gap-3 self-start sm:self-center">
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center transition-all duration-300"
                  >
                    ←
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#1d4ed8" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FF6A00] text-white flex items-center justify-center transition-all duration-300"
                  >
                    →
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
              >
                {[
                  {
                    title: "INDIAMET Summit",
                    text: "A 2-day industry summit featuring expert speakers, technical presentations, panel discussions, and case studies on the latest developments in metrology, measurement technology, quality assurance, inspection, calibration, testing, machine vision, AI-powered quality systems, Industry 4.0, and precision manufacturing. Gain practical insights into emerging technologies, global best practices, and the future of quality engineering.",
                    image:  "/images/conferen.jpg",
                    link: "/summit",
                    external:true
                  },
                  {
                   title: "Global Metrology Excellence Awards (GMEA)",
                text: "The Global Metrology Excellence Awards (GMEA) celebrates outstanding achievements in metrology, measurement technology, quality assurance, inspection, calibration, testing, and precision engineering. The awards recognize organizations, innovators, technology leaders, and industry professionals who are driving excellence, innovation, and quality across the global manufacturing ecosystem.",
                image: "/images/tooling-visit.png",
                link: "https://toolingtrends.com",
                external: true
                  }
                ].map((card, index) => {
  const Wrapper = card.external ? 'a' : Link

  return (
    <motion.div key={index} variants={scaleIn}>
      <Wrapper
        href={card.link}
        {...(card.external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        className="block h-full"
      >
        <motion.div
          whileHover={{
            y: -5,
            boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
          }}
          className="rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 cursor-pointer h-full"
        >
          <div className="bg-[#01163A] text-white p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 hover:text-blue-300 transition-colors duration-300">
              {card.title}
            </h3>
            <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed line-clamp-3 sm:line-clamp-4">
              {card.text}
            </p>
          </div>

          <div className="h-48 sm:h-56 lg:h-64 xl:h-72 overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </Wrapper>
    </motion.div>
  )
})}
              </motion.div>
            </SectionContainer>
          </section>

          {/* QUICK NAVIGATION */}
          <section className="py-12 sm:py-16 lg:py-24">
            <SectionContainer>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-2"
              >
                Quick Navigation
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xs sm:text-sm text-[#4D4D4D] mb-1 sm:mb-2"
              >
                Simplifying Your Participation Journey
              </motion.h3>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {[
                  {
    icon: "📦",
    number: "01",
    title: "Become an Exhibitor",
    description: "Showcase your metrology, measurement, inspection, calibration, testing, quality assurance, and precision engineering solutions while connecting with OEMs, manufacturers, quality professionals, and key decision-makers over three focused business days.",
    buttonText: "Become an Exhibitor",
    href: "/exhibiting-enquiry"
  },
  {
    icon: "📘",
    number: "02",
    title: "Download Event Brochure",
    description: "Explore everything about INDIAMET 2027, including exhibitor benefits, product sectors, visitor profile, event highlights, sponsorship opportunities, and how your business can be part of India's first dedicated metrology exhibition.",
    buttonText: "Download Brochure",
    href: "/event-brochure"
  },
  {
    icon: "👥",
    number: "03",
    title: "Become a Visitor",
    description: "Register to discover the latest innovations in metrology, measurement technology, quality assurance, inspection, calibration, testing, machine vision, and precision engineering while networking with industry leaders and global technology providers.",
    buttonText: "Visitor Registration",
    href: "/visitor-registration"
  }
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      backgroundColor: "#f8fafc"
                    }}
                    className="border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#FF6A00] rounded-full flex items-center justify-center">
                        <span className="text-lg sm:text-xl lg:text-2xl">{card.icon}</span>
                      </div>
                      <motion.span
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-300"
                      >
                        {card.number}
                      </motion.span>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 hover:text-blue-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 line-clamp-3">{card.description}</p>
                    <Link href={card.href}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#FF6A00] hover:bg-blue-700 text-white py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base"
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
          <section className="py-12 sm:py-16 lg:py-24">
            <SectionContainer>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12"
              >
                When and Where
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(37, 99, 235, 0.1)" }}
                  className="bg-blue-50 p-4 sm:p-6 lg:p-8 rounded-lg transition-all duration-300"
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#4D4D4D] mb-2 sm:mb-4">Venue</h3>
                  <p className="text-gray-800 font-medium text-sm sm:text-base lg:text-lg">Auto Cluster Exhibition Centre, Pune, India</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(37, 99, 235, 0.1)" }}
                  className="bg-blue-50 p-4 sm:p-6 lg:p-8 rounded-lg transition-all duration-300"
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#4D4D4D] mb-2 sm:mb-4">Opening Hours</h3>
                  <p className="text-gray-800 font-medium text-sm sm:text-base lg:text-lg">22-24 April 2027, 10:00 - 18:00</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
                className="bg-gray-200 rounded-lg h-48 sm:h-56 lg:h-64 xl:h-80 overflow-hidden transition-all duration-300"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4110.374496455856!2d73.7990458754672!3d18.638844465550328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84992d04bbd%3A0x9f1c44fb853ba461!2sAuto%20Cluster%20Exhibition%20Center%2C%20Chinchwad%2C%20Pune!5e1!3m2!1sen!2sin!4v1768501548011!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </SectionContainer>
          </section>
          <PartnersSection/>
        </div>
      </main>
      <BackToTop/>
    </>
  )
}