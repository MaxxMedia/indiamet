"use client";
import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import SideCard, { CheckItem, DateItem } from "@/components/SideCard";
import TrustStrip from "@/components/TrustStrip";
import { Field, TextInput, TextArea, Select } from "@/components/FormFields";
import SectionContainer from "@/components/UI/SectionContainer";
import { motion } from 'framer-motion';

const steps = ["Nominee Details", "Category Selection", "Nominee Information", "Supporting Details", "Review & Submit"];

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

const NominatePage: NextPage = () => {
    const [active] = useState<number>(0);

    return (
        <>
            <Head>
                <title>Nomination Form | GMEA 2027</title>
            </Head>

            <main className="bg-white overflow-hidden">
                {/* ================= HERO SECTION ================= */}
                <section className="relative min-h-[70vh] lg:min-h-[80vh] w-full overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                        <motion.div
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url("https://media.istockphoto.com/id/2023122586/vector/golden-star-trophy-with-light-effects.jpg?s=2048x2048&w=is&k=20&c=klnmaesjpdPhxhm-U6hRkkwK-pSqdZ2QGgPeKu69AoQ=")`,
                            }}
                        />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#01163A]/95 via-[#01163A]/80 to-[#01163A]/40" />

                    {/* Content */}
                    <div className="relative z-10 flex items-center min-h-[70vh] lg:min-h-[80vh] pt-40 lg:pt-44 xl:pt-48">
                        <SectionContainer>
                            <div className="max-w-4xl text-white">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span className="inline-block text-[17px] tracking-widest text-[#FF6A00] border border-[#FF6A00]/40 rounded-full px-3 py-1 mb-4">
                                        GLOBAL METROLOGY EXCELLENCE AWARDS (GMEA)
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="font-parabolica text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                                >
                                    NOMINATION FORM
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="mt-4 text-sm sm:text-base lg:text-lg text-white/90 max-w-5xl"
                                >
                                    Recognize. Celebrate. Inspire Excellence. Nominate the best organizations and
                                    individuals who are shaping the future of metrology, measurement, inspection
                                    and quality excellence.
                                </motion.p>
                            </div>
                        </SectionContainer>
                    </div>
                </section>

                {/* ================= STEP PROGRESS ================= */}
                <section className="py-8 bg-gray-50">
                    <SectionContainer>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex items-center"
                        >
                            {steps.map((label, i) => (
                                <div key={label} className="flex items-center flex-1 last:flex-none">
                                    <div className="flex flex-col items-center gap-2">
                                        <div
                                            className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 ${i === active
                                                ? "bg-[#FF6A00] border-[#FF6A00] text-white"
                                                : "border-gray-300 text-gray-700 bg-white"
                                                }`}
                                        >
                                            {i + 1}
                                        </div>
                                        <span className={`text-xs whitespace-nowrap ${i === active ? "text-[#FF6A00] font-semibold" : "text-gray-700"
                                            }`}>
                                            {label}
                                        </span>
                                    </div>
                                    {i < steps.length - 1 && (
                                        <span className="flex-1 h-px bg-gray-300 mx-2 mb-5" />
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </SectionContainer>
                </section>

                {/* ================= FORM + SIDEBAR ================= */}
                <section className="py-10 lg:py-16" id="form">
                    <SectionContainer>
                        <div className="grid lg:grid-cols-[1fr_340px] gap-8">
                            {/* FORM */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm"
                            >
                                <h2 className="text-[#FF6A00] font-bold text-base mb-4">1. NOMINATOR DETAILS</h2>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <Field label="Name of Nominator / Organization" required className="md:col-span-2">
                                        <TextInput placeholder="Enter your name or organization" />
                                    </Field>
                                    <Field label="Contact Person" required>
                                        <TextInput placeholder="Enter contact person name" />
                                    </Field>
                                    <Field label="Designation" required>
                                        <TextInput placeholder="Enter designation" />
                                    </Field>
                                    <Field label="Email Address" required>
                                        <TextInput type="email" placeholder="Enter email address" />
                                    </Field>
                                    <Field label="Mobile Number" required>
                                        <TextInput prefix="+91" placeholder="Enter mobile number" />
                                    </Field>
                                    <Field label="Country" required>
                                        <Select placeholder="Select country" options={["India", "USA", "Germany", "China"]} />
                                    </Field>
                                </div>

                                <h2 className="text-[#FF6A00] font-bold text-base mt-8 mb-4">2. NOMINEE DETAILS</h2>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <Field label="Name of Nominee (Organization / Individual)" required className="md:col-span-2">
                                        <TextInput placeholder="Enter nominee name" />
                                    </Field>

                                    <div className="md:col-span-2 flex items-center gap-6 text-sm text-gray-700">
                                        <span className="font-medium">
                                            Type of Nominee <span className="text-[#FF6A00]">*</span>
                                        </span>
                                        <label className="flex items-center gap-2">
                                            <input type="radio" name="nomineeType" defaultChecked className="accent-[#FF6A00]" />
                                            Organization
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="radio" name="nomineeType" className="accent-[#FF6A00]" />
                                            Individual
                                        </label>
                                    </div>

                                    <Field label="Website">
                                        <TextInput placeholder="Enter website (if applicable)" />
                                    </Field>
                                    <Field label="Address" required className="md:col-span-2">
                                        <TextArea placeholder="Enter complete address" rows={2} />
                                    </Field>
                                    <Field label="City" required>
                                        <TextInput placeholder="Enter city" />
                                    </Field>
                                    <Field label="State / Province" required>
                                        <TextInput placeholder="Enter state" />
                                    </Field>
                                    <Field label="Country" required>
                                        <Select placeholder="Select country" options={["India", "USA", "Germany", "China"]} />
                                    </Field>
                                    <Field label="PIN / ZIP Code" required>
                                        <TextInput placeholder="Enter PIN / ZIP" />
                                    </Field>
                                    <Field label="Email" required>
                                        <TextInput type="email" placeholder="Enter email address" />
                                    </Field>
                                    <Field label="Phone / Mobile" required>
                                        <TextInput prefix="+91" placeholder="Enter number" />
                                    </Field>
                                </div>

                                <h2 className="text-[#FF6A00] font-bold text-base mt-8 mb-4">3. CATEGORY SELECTION</h2>
                                <Field label="Select Award Category" required>
                                    <Select
                                        placeholder="-- Select Award Category --"
                                        options={[
                                            "Outstanding Metrology Solution",
                                            "Best Measurement Innovation",
                                            "Quality Excellence Award",
                                            "Calibration Excellence",
                                            "Inspection Technology Award",
                                            "Machine Vision Award",
                                            "CMM Technology Award",
                                            "Smart Manufacturing Award",
                                            "Lifetime Achievement Award",
                                            "Young Professional Award",
                                            "Sustainability Award",
                                            "Excellence in R&D",
                                        ]}
                                    />
                                </Field>

                                <div className="flex items-center justify-between gap-4 mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#FF6A00] text-xl">🏆</span>
                                        <p className="text-gray-700 text-sm">
                                            Not sure which category to choose?
                                        </p>
                                    </div>
                                    <button className="text-xs font-semibold text-[#FF6A00] border border-[#FF6A00]/50 rounded-md px-3 py-2 hover:bg-[#FF6A00]/10 transition-colors whitespace-nowrap">
                                        VIEW CATEGORIES & GUIDELINES ⟶
                                    </button>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-8 inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                                >
                                    SAVE & CONTINUE →
                                </button>
                            </motion.div>

                            {/* SIDEBAR */}
                            <aside className="flex flex-col gap-6">
                                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <h3 className="text-[#FF6A00] font-bold text-base mb-3">ABOUT GMEA AWARDS</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        The Global Metrology Excellence Awards (GMEA) honor outstanding achievements,
                                        innovation, and leadership in the field of metrology, measurement, inspection
                                        and quality assurance.
                                    </p>
                                    <button className="text-sm font-semibold text-[#FF6A00] hover:underline">
                                        ABOUT THE AWARDS →
                                    </button>
                                </div>

                                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <h3 className="text-[#FF6A00] font-bold text-base mb-3">WHY NOMINATE?</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF6A00]">✓</span>
                                            <span>Gain global recognition</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF6A00]">✓</span>
                                            <span>Enhance brand reputation</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF6A00]">✓</span>
                                            <span>Showcase innovation & excellence</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF6A00]">✓</span>
                                            <span>Benchmark against industry leaders</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF6A00]">✓</span>
                                            <span>Expand business opportunities</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <h3 className="text-[#FF6A00] font-bold text-base mb-3">📅 IMPORTANT DATES</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-gray-500 text-xs">Nominations Open</p>
                                            <p className="text-gray-800 font-semibold text-sm">01 November 2026</p>
                                        </div>
                                        <div className="border-t border-gray-100 pt-3">
                                            <p className="text-gray-500 text-xs">Last Date to Nominate</p>
                                            <p className="text-gray-800 font-semibold text-sm">31 January 2027</p>
                                        </div>
                                        <div className="border-t border-gray-100 pt-3">
                                            <p className="text-gray-500 text-xs">Finalists Announcement</p>
                                            <p className="text-gray-800 font-semibold text-sm">15 March 2027</p>
                                        </div>
                                        <div className="border-t border-gray-100 pt-3">
                                            <p className="text-gray-500 text-xs">Awards Ceremony</p>
                                            <p className="text-[#FF6A00] font-bold text-sm">23 April 2027</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <h3 className="text-[#FF6A00] font-bold text-base mb-3">🎧 NEED HELP?</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Our team is here to assist you with your nomination.
                                    </p>
                                    <p className="text-sm text-gray-700">📞 +91 80 4127 0101</p>
                                    <p className="text-sm text-gray-700">✉️ awards@indiamet.com</p>
                                    <p className="text-sm text-gray-700">🌐 www.indiamet.com/awards</p>
                                </div>
                            </aside>
                        </div>
                    </SectionContainer>
                </section>

                {/* ================= TRUST STRIP ================= */}
                <section className="py-8 bg-gray-50">
                    <SectionContainer>
                        <TrustStrip
                            items={[
                                { icon: "🔒", label: "Secure & Confidential — All nominations are treated with the utmost confidentiality" },
                                { icon: "📄", label: "Easy Nomination Process — Simple 5-step process to submit securely online" },
                                { icon: "🏅", label: "Celebrate Excellence — Join us at the GMEA Awards Night" },
                            ]}
                        />
                    </SectionContainer>
                </section>
            </main>
        </>
    );
};

export default NominatePage;