"use client";
import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";
import EventBar from "@/components/EventBar";
import Trophy from "@/components/Trophy";
import SideCard, { CheckItem, DateItem } from "@/components/SideCard";
import TrustStrip from "@/components/TrustStrip";
import { Field, TextInput, TextArea, Select } from "@/components/FormFields";

const steps = ["Nominee Details", "Category Selection", "Nominee Information", "Supporting Details", "Review & Submit"];

const NominatePage: NextPage = () => {
    const [active] = useState<number>(0);

    return (
        <div className="bg-[#121212] text-white">

            <Head>
                <title>Nomination Form | GMEA 2027</title>
            </Head>
            <main className="min-h-screen bg-navy-900 text-slate-200 pt-[155px]">
                {/* Hero */}
                <section className="bg-gradient-to-b from-navy-950 to-navy-900 border-b border-gold-600/20 px-6 md:px-12 pt-8 pb-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-[1fr_auto_auto] gap-8 items-center">
                            <div>
                                <p className="text-gold-500 font-semibold tracking-widest text-sm mb-2">
                                    GLOBAL METROLOGY EXCELLENCE AWARDS (GMEA)
                                </p>
                                <h1 className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-white">
                                    NOMINATION FORM
                                </h1>
                                <p className="text-slate-300 mt-4 max-w-lg text-sm md:text-base">
                                    Recognize. Celebrate. Inspire Excellence. Nominate the best organizations and
                                    individuals who are shaping the future of metrology, measurement, inspection
                                    and quality excellence.
                                </p>
                                <div className="flex gap-4 mt-6">
                                    <button className="bg-gold-600 hover:bg-gold-500 text-navy-950 font-semibold px-5 py-2.5 rounded-md text-sm transition-colors">
                                        START NOMINATION →
                                    </button>
                                    <button className="border border-gold-600/60 text-gold-500 hover:bg-gold-600/10 font-semibold px-5 py-2.5 rounded-md text-sm transition-colors">
                                        ⬇ DOWNLOAD GUIDELINES
                                    </button>
                                </div>
                            </div>
                            <Trophy className="w-36 h-52 hidden md:flex" />
                            <EventBar />
                        </div>
                    </div>
                </section>

                {/* Step progress */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
                    <div className="flex items-center">
                        {steps.map((label, i) => (
                            <div key={label} className="flex items-center flex-1 last:flex-none">
                                <div className="flex flex-col items-center gap-2">
                                    <div
                                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 ${i === active
                                                ? "bg-gold-600 border-gold-600 text-navy-950"
                                                : "border-navy-600 text-slate-400"
                                            }`}
                                    >
                                        {i + 1}
                                    </div>
                                    <span className={`text-xs whitespace-nowrap ${i === active ? "text-gold-500 font-semibold" : "text-slate-500"}`}>
                                        {label}
                                    </span>
                                </div>
                                {i < steps.length - 1 && (
                                    <span className="flex-1 h-px bg-navy-600 mx-2 mb-5" />
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Form + sidebar */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid lg:grid-cols-[1fr_340px] gap-8">
                    <form className="rounded-xl border border-gold-600/20 bg-navy-850 p-6 md:p-8">
                        <h2 className="text-gold-500 font-display font-bold text-base mb-4">1. NOMINATOR DETAILS</h2>
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

                        <h2 className="text-gold-500 font-display font-bold text-base mt-8 mb-4">2. NOMINEE DETAILS</h2>
                        <div className="grid md:grid-cols-2 gap-5">
                            <Field label="Name of Nominee (Organization / Individual)" required className="md:col-span-2">
                                <TextInput placeholder="Enter nominee name" />
                            </Field>

                            <div className="md:col-span-2 flex items-center gap-6 text-sm text-slate-200">
                                <span className="font-medium">
                                    Type of Nominee <span className="text-gold-500">*</span>
                                </span>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="nomineeType" defaultChecked className="accent-gold-600" />
                                    Organization
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="nomineeType" className="accent-gold-600" />
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

                        <h2 className="text-gold-500 font-display font-bold text-base mt-8 mb-4">3. CATEGORY SELECTION</h2>
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

                        <div className="flex items-center justify-between gap-4 mt-5 rounded-lg border border-navy-600 bg-navy-800 p-4">
                            <div className="flex items-center gap-3">
                                <span className="text-gold-500 text-xl">🏆</span>
                                <p className="text-slate-300 text-sm">
                                    Not sure which category to choose?
                                </p>
                            </div>
                            <button className="text-xs font-semibold text-gold-500 border border-gold-600/50 rounded-md px-3 py-2 hover:bg-gold-600/10 transition-colors whitespace-nowrap">
                                VIEW CATEGORIES & GUIDELINES ⟶
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="mt-8 inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-navy-950 font-semibold px-6 py-3 rounded-md transition-colors"
                        >
                            SAVE & CONTINUE →
                        </button>
                    </form>

                    {/* Sidebar */}
                    <aside className="flex flex-col gap-6">
                        <SideCard title="ABOUT GMEA AWARDS" icon={undefined}>
                            <p className="text-slate-300 text-sm mb-3">
                                The Global Metrology Excellence Awards (GMEA) honor outstanding achievements,
                                innovation, and leadership in the field of metrology, measurement, inspection
                                and quality assurance.
                            </p>
                            <button className="text-sm font-semibold text-gold-500 hover:underline">
                                ABOUT THE AWARDS →
                            </button>
                        </SideCard>

                        <SideCard title="WHY NOMINATE?" icon={undefined}>
                            <ul>
                                <CheckItem>Gain global recognition</CheckItem>
                                <CheckItem>Enhance brand reputation</CheckItem>
                                <CheckItem>Showcase innovation & excellence</CheckItem>
                                <CheckItem>Benchmark against industry leaders</CheckItem>
                                <CheckItem>Expand business opportunities</CheckItem>
                            </ul>
                        </SideCard>

                        <SideCard title="IMPORTANT DATES" icon="📅">
                            <DateItem label="Nominations Open" date="01 November 2026" last={undefined} />
                            <DateItem label="Last Date to Nominate" date="31 January 2027" last={undefined} />
                            <DateItem label="Finalists Announcement" date="15 March 2027" last={undefined} />
                            <DateItem label="Awards Ceremony" date="23 April 2027" last />
                        </SideCard>

                        <SideCard title="NEED HELP?" icon="🎧">
                            <p className="text-slate-300 text-sm mb-3">
                                Our team is here to assist you with your nomination.
                            </p>
                            <p className="text-sm text-slate-200">📞 +91 80 4127 0101</p>
                            <p className="text-sm text-slate-200">✉️ awards@indiamet.com</p>
                            <p className="text-sm text-slate-200">🌐 www.indiamet.com/awards</p>
                        </SideCard>
                    </aside>
                </section>

                <div className="max-w-7xl mx-auto px-6 md:px-12 pb-10">
                    <TrustStrip
                        items={[
                            { icon: "🔒", label: "Secure & Confidential — All nominations are treated with the utmost confidentiality" },
                            { icon: "📄", label: "Easy Nomination Process — Simple 5-step process to submit securely online" },
                            { icon: "🏅", label: "Celebrate Excellence — Join us at the GMEA Awards Night" },
                        ]}
                    />
                </div>
            </main>
        </div>
    );
};

export default NominatePage;