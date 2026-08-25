"use client";
import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";
import SectionContainer from "@/components/UI/SectionContainer";
import { motion } from 'framer-motion';
import Image from "next/image";
import { useState } from "react";

const stats = [
    ["15+", "Award Categories"],
    ["200+", "Nominations Expected"],
    ["500+", "Industry Leaders"],
    ["25+", "Expert Jury Members"],
];

const whyParticipate = [
    ["🏆", "Industry Recognition", "Gain recognition among global leaders in metrology and precision engineering."],
    ["🌐", "Global Visibility", "Showcase your achievements on an international platform."],
    ["🤝", "Business Networking", "Connect with key decision makers and expand your business network."],
    ["📈", "Brand Credibility", "Strengthen your brand image and build trust with customers."],
    ["🚀", "Innovation Leadership", "Position your organization as an innovator and industry trailblazer."],
    ["⭐", "Benchmark Against Industry", "Measure your performance and stand out from the competition."],
];

const categories = [
    ["⚙️", "Outstanding Metrology Solution"],
    ["📐", "Best Measurement Innovation"],
    ["🏅", "Quality Excellence Award"],
    ["📋", "Calibration Excellence"],
    ["🔍", "Inspection Technology Award"],
    ["📷", "Machine Vision Award"],
    ["🖥️", "CMM Technology Award"],
    ["🏭", "Smart Manufacturing Award"],
    ["🏆", "Lifetime Achievement Award"],
    ["🌟", "Young Professional Award"],
    ["🌍", "Sustainability Award"],
    ["⚛️", "Excellence in R&D"],
];

const process = [
    ["📝", "NOMINATION", "Submit your nomination"],
    ["🔎", "SCREENING", "Initial screening of nominations"],
    ["👥", "EXPERT JURY EVALUATION", "Evaluation by expert jury panel"],
    ["📢", "FINALISTS ANNOUNCEMENT", "Selection of finalists"],
    ["🏆", "AWARDS CEREMONY", "Winners felicitated at GMEA Awards Night"],
];

const jury = [
    { name: "Dr. Klaus Weckenmann", role: "Chairman", company: "President Emeritus, PTB, Germany" },
    { name: "Dr. Gail Peters", role: "International Expert", company: "CEO, Peters Research, USA" },
    { name: "Mr. Ramesh Kaul", role: "Industry Leader", company: "Managing Director, Hexagon Manufacturing Intelligence" },
    { name: "Prof. Chris Wang", role: "Academic Expert", company: "Director, Precision Engineering, Tsinghua University, China" },
];


const sponsors = [
    { name: "HEXAGON", role: "Platinum Sponsor" },
    { name: "Mitutoyo", role: "Gold Sponsor" },
    { name: "ZEISS", role: "Silver Sponsor" },
    { name: "RENISHAW", role: "Supporting Sponsor" },
    { name: "NPL", role: "Knowledge Sponsor" },
    { name: "TOOLING TRENDS", role: "Media Sponsor" },
];

const evaluation: [string, number][] = [
    ["Innovation", 35],
    ["Technical Excellence", 25],
    ["Industry Impact", 20],
    ["Business Growth", 10],
    ["Sustainability", 10],
];

const supporters = [
    { name: "HEXAGON", role: "Platinum Partner" },
    { name: "Mitutoyo", role: "Gold Partner" },
    { name: "ZEISS", role: "Silver Partner" },
    { name: "RENISHAW", role: "Supporting Partner" },
    { name: "NPL", role: "Knowledge Partner" },
    { name: "TOOLING TRENDS", role: "Media Partner" },
];

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

const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 }
    }
};

interface RingProps {
    percent: number;
    label: string;
}

function Ring({ percent, label }: RingProps) {
    const r = 42;
    const c = 2 * Math.PI * r;
    const offset = c - (percent / 100) * c;

    return (
        <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-4 w-40 md:w-44"
        >
            <div className="relative">
                <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    className="w-28 h-28 md:w-32 md:h-32"
                >
                    {/* Background circle */}
                    <circle
                        cx="60"
                        cy="60"
                        r={r}
                        stroke="#e5e7eb"
                        strokeWidth="10"
                        fill="white"
                    />

                    {/* Progress circle */}
                    <circle
                        cx="60"
                        cy="60"
                        r={r}
                        stroke="#B80A26"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={c}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        transform="rotate(-90 60 60)"
                    />

                    {/* Percentage */}
                    <text
                        x="60"
                        y="68"
                        textAnchor="middle"
                        className="fill-gray-900 font-bold text-lg md:text-xl"
                    >
                        {percent}%
                    </text>
                </svg>
            </div>

            <p className="text-black text-sm md:text-base font-semibold tracking-wide uppercase text-center leading-snug">
                {label}
            </p>
        </motion.div>
    );
}
const Awards: NextPage = () => {
    const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

    const handleImageError = (src: string) => {
        setImageErrors(prev => ({ ...prev, [src]: true }));
    };

    return (
        <>
            <Head>
                <title>Global Metrology Excellence Awards (GMEA) 2027</title>
            </Head>

            <main className="bg-white overflow-hidden">
                {/* ================= HERO SECTION ================= */}
                <section className="relative min-h-[60vh] lg:min-h-[70vh] w-full overflow-hidden">
                    {/* Background Video (poster shows instantly, and stays visible
                        as a fallback if the video file 404s or fails to load) */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            poster="/images/awards-header.jpg"
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source
                                src="/images/awards-vote-banner.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>

                    {/* Overlay — matches why-exhibit exactly */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

                    {/* Content — pt-* clears the fixed navbar (this was missing
                        before and caused the title to sit under/behind the nav).
                        items-center matches why-exhibit's vertical centering. */}
                    <div className="relative z-10 min-h-[60vh] lg:min-h-[70vh] flex items-center pt-[130px] sm:pt-[140px] lg:pt-[100px]">
                        <SectionContainer>
                            <div className="max-w-4xl text-white">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span className="inline-block text-[25px] tracking-widest text-[#B80A26] border border-[#B80A26]/40 rounded-full px-3 py-1 mb-4">
                                        POWERED BY INDIAMET 2027
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="font-parabolica text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight"
                                >
                                    GLOBAL METROLOGY
                                    <br />
                                    <span className="text-[#B80A26]">EXCELLENCE AWARDS (GMEA)</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="mt-4 text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl"
                                >
                                    Recognizing Excellence in Metrology, Measurement Technology, Quality Assurance
                                    &amp; Precision Engineering.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="flex flex-wrap gap-4 mt-6"
                                >
                                    <Link
                                        href="/Sponsor"
                                        className="border border-[#B80A26]/60 text-[#B80A26] hover:bg-[#B80A26]/10 font-semibold px-6 py-3 rounded-full text-sm transition-colors text-center"
                                    >
                                        SPONSOR NOW
                                    </Link>
                                    <Link
                                        href="/Nominate"
                                        className="bg-[#B80A26] hover:bg-[#B80A26]/90 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors text-center"
                                    >
                                        NOMINATE NOW ↗
                                    </Link>
                                </motion.div>
                            </div>
                        </SectionContainer>
                    </div>
                </section>

                {/* ================= ABOUT GMEA ================= */}
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
                                <div className="flex gap-2 mb-4">
                                    <img src="/images/logo-icon-3.png" alt="" className="h-5" />
                                    <h3 className="text-sm text-[#4D4D4D] font-semibold mb-2">About GMEA</h3>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                    Global Metrology Excellence Awards
                                </h2>
                                <p className="text-[#4D4D4D] text-lg mb-6">
                                    The Global Metrology Excellence Awards (GMEA) honour individuals, teams and
                                    organizations that demonstrate outstanding achievement, innovation and leadership
                                    in metrology, measurement, inspection, calibration, quality assurance and allied
                                    technologies.
                                </p>
                                <p className="text-[#4D4D4D] text-lg mb-8">
                                    Recognizing excellence across the entire metrology and quality engineering ecosystem,
                                    GMEA celebrates the pioneers, innovators, and leaders who are shaping the future of
                                    precision manufacturing and quality assurance.
                                </p>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
                                    {stats.map(([n, l]) => (
                                        <motion.div
                                            key={l}
                                            whileHover={{ scale: 1.05 }}
                                            className="border-l-2 border-[#B80A26] pl-4"
                                        >
                                            <p className="text-[#B80A26] font-bold text-2xl">{n}</p>
                                            <p className="text-[#4D4D4D] text-xs mt-1">{l}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                className="relative h-80 lg:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-[#B80A26]/20 to-[#171A1B]/20 border-2 border-[#B80A26]/20 transition-all duration-300 flex items-center justify-center"
                            >
                                <img src="https://media.istockphoto.com/id/1676141013/vector/trophy-gold-star-on-podium-with-ribbon-elements-and-glitter-light-effects-decorations-and.jpg?s=612x612&w=0&k=20&c=FRr9rp2D5tZmCMs51AkP4_-IN9cOUTinnYSghLHYuak=" alt="Trophy" className="w-full h-full object-cover" />
                            </motion.div>
                        </motion.div>
                    </SectionContainer>
                </section>

                {/* ================= WHY PARTICIPATE ================= */}
                <section className="py-16 lg:py-24 bg-gray-50 font-parabolica">
                    <SectionContainer>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-12"
                        >
                            <div className="flex gap-2 justify-center mb-4">
                                <img src="/images/logo-icon-3.png" alt="" className="h-5" />
                                <h3 className="text-sm text-[#4D4D4D] font-semibold mb-2">Benefits</h3>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold">Why Participate?</h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {whyParticipate.map(([icon, title, desc]) => (
                                <motion.div
                                    key={title}
                                    variants={scaleIn}
                                    whileHover={{
                                        y: -6,
                                        boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                                        transition: { duration: 0.25 },
                                    }}
                                    className="bg-white border border-gray-200 rounded-lg p-6"
                                >
                                    <span className="text-3xl text-[#B80A26] block mb-3">{icon}</span>
                                    <h3 className="font-semibold text-lg mb-2 text-gray-900">{title}</h3>
                                    <p className="text-gray-600 text-sm">{desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </SectionContainer>
                </section>

                {/* ================= AWARD CATEGORIES ================= */}
                <section className="py-16 lg:py-24 font-parabolica">
                    <SectionContainer>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-12"
                        >
                            <div className="flex gap-2 justify-center mb-4">
                                <img src="/images/logo-icon-3.png" alt="" className="h-5" />
                                <h3 className="text-sm text-[#4D4D4D] font-semibold mb-2">Categories</h3>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold">Award Categories</h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
                        >
                            {categories.map(([icon, title]) => (
                                <motion.div
                                    key={title}
                                    variants={scaleIn}
                                    whileHover={{
                                        y: -6,
                                        boxShadow: "0 12px 25px rgba(0,0,0,0.10)",
                                        borderColor: "#B80A26",
                                    }}
                                    className="min-h-[150px] border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 bg-white hover:border-[#B80A26] transition-all duration-300"
                                >
                                    <span className="text-4xl md:text-5xl leading-none">
                                        {icon}
                                    </span>

                                    <p className="text-black text-sm md:text-base font-semibold leading-snug">
                                        {title}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </SectionContainer>
                </section>

                {/* ================= AWARDS PROCESS ================= */}
                <section className="py-16 lg:py-24 bg-gray-50 font-parabolica">
                    <SectionContainer>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-12"
                        >
                            <div className="flex gap-2 justify-center mb-4">
                                <img src="/images/logo-icon-3.png" alt="" className="h-5" />
                                <h3 className="text-sm text-[#4D4D4D] font-semibold mb-2">Process</h3>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold">Awards Process</h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="flex flex-col md:flex-row items-stretch md:items-start justify-between gap-10 md:gap-4"
                        >
                            {process.map(([icon, title, desc], i) => (
                                <motion.div
                                    key={title}
                                    variants={scaleIn}
                                    className="flex md:flex-1 items-start w-full md:w-auto"
                                >
                                    <div className="flex flex-col items-center text-center gap-4 flex-1">

                                        {/* BIGGER CIRCLE */}
                                        <motion.div
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 0.2 }}
                                            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-3 border-[#B80A26] flex items-center justify-center text-4xl md:text-5xl bg-white shadow-md"
                                        >
                                            {icon}
                                        </motion.div>

                                        {/* PROCESS TITLE */}
                                        <p className="text-[#B80A26] text-sm md:text-base font-bold tracking-wide leading-snug">
                                            {title}
                                        </p>

                                        {/* PROCESS DESCRIPTION */}
                                        <p className="text-black text-sm md:text-base font-medium leading-relaxed max-w-[13rem]">
                                            {desc}
                                        </p>
                                    </div>

                                    {/* ARROW */}
                                    {i < process.length - 1 && (
                                        <span className="hidden md:flex items-center justify-center text-[#B80A26] text-3xl font-bold mx-2 h-28">
                                            →
                                        </span>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </SectionContainer>
                </section>

                {/* ================= MEET THE JURY ================= */}
                <section className="py-16 lg:py-24 font-parabolica">
                    <SectionContainer>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-12"
                        >
                            <div className="flex gap-2 justify-center mb-4">
                                <img src="/images/logo-icon-3.png" alt="" className="h-5" />
                                <h3 className="text-sm text-[#4D4D4D] font-semibold mb-2">Jury</h3>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold">Meet the Jury</h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {jury.map((member) => (
                                <motion.div
                                    key={member.name}
                                    variants={scaleIn}
                                    whileHover={{
                                        y: -6,
                                        boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                                    }}
                                    className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
                                >
                                    <div className="h-48 bg-gradient-to-br from-[#B80A26]/10 to-[#171A1B]/10 flex items-center justify-center">
                                        <span className="text-6xl">👤</span>
                                    </div>
                                    <div className="p-4">
                                        <span className="inline-block text-[10px] tracking-wide text-[#B80A26] border border-[#B80A26]/40 rounded px-2 py-0.5 mb-2">
                                            {member.role.toUpperCase()}
                                        </span>
                                        <h3 className="text-gray-900 font-semibold text-sm">{member.name}</h3>
                                        <p className="text-gray-600 text-xs mt-1">{member.company}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mt-8"
                        >
                            <p className="text-gray-600 text-sm max-w-xl mx-auto mb-4">
                                Our jury comprises global experts from industry, academia and research institutions.
                            </p>
                            <Link
                                href="/jury"
                                className="inline-block border border-[#B80A26] text-[#B80A26] hover:bg-[#B80A26]/10 px-6 py-2 rounded-full text-sm font-medium transition-colors"
                            >
                                VIEW ALL JURY
                            </Link>
                        </motion.div>
                    </SectionContainer>
                </section>

                {/* ================= EVALUATION CRITERIA ================= */}
                <section className="py-16 lg:py-24 bg-gray-50 font-parabolica">
                    <SectionContainer>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-12"
                        >
                            <div className="flex gap-2 justify-center mb-4">
                                <img src="/images/logo-icon-3.png" alt="" className="h-5" />
                                <h3 className="text-sm text-[#4D4D4D] font-semibold mb-2">Criteria</h3>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold">Evaluation Criteria</h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-start gap-8 md:gap-4"
                        >
                            {evaluation.map(([label, pct]) => (
                                <Ring key={label} percent={pct} label={label} />
                            ))}
                        </motion.div>
                    </SectionContainer>
                </section>


                {/* ================= SPONSORS ================= */}
                <section className="py-16 lg:py-24 font-parabolica overflow-hidden">
                    <SectionContainer>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-12"
                        >
                            <div className="flex gap-2 justify-center mb-4">
                                <img
                                    src="/images/logo-icon-3.png"
                                    alt=""
                                    className="h-5"
                                />

                                <h3 className="text-sm text-[#4D4D4D] font-semibold">
                                    Sponsors
                                </h3>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold">
                                Our Sponsors
                            </h2>

                            <p className="text-[#4D4D4D] text-base md:text-lg mt-4 max-w-2xl mx-auto">
                                Proudly supported by leading organizations sponsoring
                                the Global Metrology Excellence Awards.
                            </p>
                        </motion.div>

                        {/* SPONSOR SLIDER */}
                        <div className="relative overflow-hidden">
                            <motion.div
                                className="flex gap-6 cursor-grab active:cursor-grabbing"
                                drag="x"
                                dragConstraints={{ left: -1200, right: 0 }}
                                dragElastic={0.08}
                                animate={{ x: [0, -600] }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 18,
                                        ease: "linear",
                                    },
                                }}
                                whileTap={{ cursor: "grabbing" }}
                            >
                                {[...sponsors, ...sponsors].map((sponsor, index) => (
                                    <motion.div
                                        key={`${sponsor.name}-${index}`}
                                        whileHover={{
                                            y: -6,
                                            boxShadow:
                                                "0 12px 30px rgba(0,0,0,0.08)",
                                        }}
                                        className="flex-shrink-0 w-[220px] md:w-[260px] min-h-[180px] bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-[#B80A26] transition-all duration-300"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#B80A26]/10 to-[#171A1B]/10 flex items-center justify-center">
                                            <span className="text-2xl font-bold text-[#B80A26]">
                                                {sponsor.name.charAt(0)}
                                            </span>
                                        </div>

                                        <div className="text-center">
                                            <p className="text-gray-900 text-lg font-bold">
                                                {sponsor.name}
                                            </p>

                                            <p className="text-[#B80A26] text-sm font-semibold mt-1 uppercase tracking-wide">
                                                {sponsor.role}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </SectionContainer>
                </section>



                {/* ================= SUPPORTERS ================= */}
                <section className="py-16 lg:py-24 bg-gray-50 font-parabolica overflow-hidden">
                    <SectionContainer>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-12"
                        >
                            <div className="flex gap-2 justify-center mb-4">
                                <img
                                    src="/images/logo-icon-3.png"
                                    alt=""
                                    className="h-5"
                                />

                                <h3 className="text-sm text-[#4D4D4D] font-semibold mb-2">
                                    Supporters
                                </h3>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold">
                                Our Supporters
                            </h2>
                        </motion.div>

                        {/* ================= AUTO SLIDER ================= */}
                        <div className="relative overflow-hidden">
                            <motion.div
                                className="flex gap-6 cursor-grab active:cursor-grabbing"
                                drag="x"
                                dragConstraints={{ left: -1200, right: 0 }}
                                dragElastic={0.08}
                                animate={{ x: [0, -600] }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 18,
                                        ease: "linear",
                                    },
                                }}
                                whileTap={{ cursor: "grabbing" }}
                            >
                                {/* Duplicate items for continuous slider */}
                                {[...supporters, ...supporters].map((supporter, index) => (
                                    <motion.div
                                        key={`${supporter.name}-${index}`}
                                        whileHover={{ y: -6 }}
                                        className="flex-shrink-0 w-[210px] md:w-[240px] min-h-[180px] flex flex-col items-center justify-center gap-3 bg-white p-6 rounded-xl border border-gray-200 hover:border-[#B80A26] transition-all duration-300"
                                    >
                                        {/* Icon */}
                                        <div className="w-20 h-20 bg-gradient-to-br from-[#B80A26]/10 to-[#171A1B]/10 rounded-full flex items-center justify-center">
                                            <span className="text-3xl font-bold text-[#B80A26]">
                                                {supporter.name.charAt(0)}
                                            </span>
                                        </div>

                                        {/* Role */}
                                        <p className="text-[#4D4D4D] text-xs tracking-wide uppercase text-center">
                                            {supporter.role}
                                        </p>

                                        {/* Name */}
                                        <p className="text-gray-900 font-bold text-base text-center">
                                            {supporter.name}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </SectionContainer>
                </section>
            </main>
        </>
    );
};

export default Awards;