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
    const r = 34;
    const c = 2 * Math.PI * r;
    const offset = c - (percent / 100) * c;
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 w-28"
        >
            <svg width="90" height="90" viewBox="0 0 90 90">
                <circle cx="45" cy="45" r={r} stroke="#e5e7eb" strokeWidth="8" fill="none" />
                <circle
                    cx="45"
                    cy="45"
                    r={r}
                    stroke="#FF6A00"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={c}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 45 45)"
                />
                <text x="45" y="50" textAnchor="middle" className="fill-gray-900 font-bold text-sm">
                    {percent}%
                </text>
            </svg>
            <p className="text-xs text-gray-600 tracking-wide uppercase text-center">{label}</p>
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
                <section className="relative min-h-[100vh] lg:min-h-[110vh] w-full overflow-hidden">
                    {/* Background Image */}
                    {/* ================= HERO VIDEO BACKGROUND ================= */}
                    <div className="absolute inset-0 w-full h-[100vh] lg:h-[110vh] overflow-hidden">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source
                                src="/images/awards-vote-banner.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#01163A]/95 via-[#01163A]/80 to-[#01163A]/40" />

                    {/* Content */}
                    <div className="relative z-10 flex items-end min-h-[100vh] lg:min-h-[110vh] pb-20 lg:pb-24 xl:pb-28">
                        <SectionContainer>
                            <div className="max-w-4xl text-white">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span className="inline-block text-[17px] tracking-widest text-[#FF6A00] border border-[#FF6A00]/40 rounded-full px-3 py-1 mb-4">
                                        POWERED BY INDIAMET 2027
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="font-parabolica text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                                >
                                    GLOBAL METROLOGY
                                    <br />
                                    <span className="text-[#FF6A00]">EXCELLENCE AWARDS (GMEA)</span>
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
                                        className="border border-[#FF6A00]/60 text-[#FF6A00] hover:bg-[#FF6A00]/10 font-semibold px-6 py-3 rounded-full text-sm transition-colors text-center"
                                    >
                                        SPONSOR NOW
                                    </Link>
                                    <Link
                                        href="/Nominate"
                                        className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors text-center"
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
                                            className="border-l-2 border-[#FF6A00] pl-4"
                                        >
                                            <p className="text-[#FF6A00] font-bold text-2xl">{n}</p>
                                            <p className="text-[#4D4D4D] text-xs mt-1">{l}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                className="relative h-80 lg:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-[#FF6A00]/20 to-[#01163A]/20 border-2 border-[#FF6A00]/20 transition-all duration-300 flex items-center justify-center"
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
                                    <span className="text-3xl text-[#FF6A00] block mb-3">{icon}</span>
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
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                        >
                            {categories.map(([icon, title]) => (
                                <motion.div
                                    key={title}
                                    variants={scaleIn}
                                    whileHover={{
                                        y: -4,
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                                        borderColor: '#FF6A00',
                                    }}
                                    className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 bg-white hover:border-[#FF6A00] transition-all duration-300"
                                >
                                    <span className="text-2xl">{icon}</span>
                                    <p className="text-gray-800 text-xs font-medium leading-snug">{title}</p>
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
                            className="flex flex-col md:flex-row items-stretch md:items-start justify-between gap-8 md:gap-4"
                        >
                            {process.map(([icon, title, desc], i) => (
                                <motion.div
                                    key={title}
                                    variants={scaleIn}
                                    className="flex md:flex-1 items-start w-full md:w-auto"
                                >
                                    <div className="flex flex-col items-center text-center gap-3 flex-1">
                                        <div className="w-16 h-16 rounded-full border-2 border-[#FF6A00] flex items-center justify-center text-xl text-[#FF6A00] bg-white">
                                            {icon}
                                        </div>
                                        <p className="text-[#FF6A00] text-xs font-bold tracking-wide">{title}</p>
                                        <p className="text-gray-600 text-xs max-w-[9rem]">{desc}</p>
                                    </div>
                                    {i < process.length - 1 && (
                                        <span className="hidden md:flex items-center justify-center text-[#FF6A00]/50 text-2xl mx-2 h-16">→</span>
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
                                    <div className="h-48 bg-gradient-to-br from-[#FF6A00]/10 to-[#01163A]/10 flex items-center justify-center">
                                        <span className="text-6xl">👤</span>
                                    </div>
                                    <div className="p-4">
                                        <span className="inline-block text-[10px] tracking-wide text-[#FF6A00] border border-[#FF6A00]/40 rounded px-2 py-0.5 mb-2">
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
                                className="inline-block border border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00]/10 px-6 py-2 rounded-full text-sm font-medium transition-colors"
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

                {/* ================= PAST WINNERS & GALLERY ================= */}
                <section className="py-16 lg:py-24 font-parabolica">
                    <SectionContainer>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Past Winners */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <div className="flex gap-2 mb-4">
                                    <img src="/images/logo-icon-3.png" alt="" className="h-5" />
                                    <h3 className="text-sm text-[#4D4D4D] font-semibold mb-2">🏆 Past Winners</h3>
                                </div>
                                <motion.div
                                    whileHover={{ boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
                                    className="border border-gray-200 rounded-lg overflow-hidden bg-white transition-all duration-300"
                                >
                                    <div className="h-48 bg-gradient-to-br from-[#FF6A00]/10 to-[#01163A]/10 flex items-center justify-center">
                                        <span className="text-6xl">🏭</span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-gray-900 font-semibold text-lg">Hexagon Manufacturing Intelligence</h3>
                                        <p className="text-gray-600 text-sm mt-1">
                                            Winner — Outstanding Metrology Solution Award 2025, INDIAMET 2025
                                        </p>
                                        <Link
                                            href="/past-winners"
                                            className="text-[#FF6A00] text-sm font-semibold mt-3 hover:underline inline-block"
                                        >
                                            VIEW ALL WINNERS →
                                        </Link>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Gallery */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <div className="flex gap-2 mb-4">
                                    <img src="/images/logo-icon-3.png" alt="" className="h-5" />
                                    <h3 className="text-sm text-[#4D4D4D] font-semibold mb-2">📸 Awards Night Gallery</h3>
                                </div>
                                <motion.div
                                    variants={staggerContainer}
                                    className="grid grid-cols-3 gap-3"
                                >
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            variants={scaleIn}
                                            whileHover={{ scale: 1.05 }}
                                            className="aspect-square rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                                        >
                                            <span className="text-3xl">🎉</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </SectionContainer>
                </section>

                {/* ================= SUPPORTERS ================= */}
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
                                <h3 className="text-sm text-[#4D4D4D] font-semibold mb-2">Supporters</h3>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold">Our Supporters</h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
                        >
                            {supporters.map((supporter) => (
                                <motion.div
                                    key={supporter.name}
                                    variants={scaleIn}
                                    whileHover={{ y: -4 }}
                                    className="flex flex-col items-center gap-2 bg-white p-4 rounded-lg border border-gray-200 hover:border-[#FF6A00] transition-all duration-300"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00]/10 to-[#01163A]/10 rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-bold text-[#FF6A00]">{supporter.name.charAt(0)}</span>
                                    </div>
                                    <p className="text-[#4D4D4D] text-[10px] tracking-wide uppercase">{supporter.role}</p>
                                    <p className="text-gray-900 font-semibold text-sm text-center">{supporter.name}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </SectionContainer>
                </section>
            </main>
        </>
    );
};

export default Awards;