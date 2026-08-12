"use client";
import Head from "next/head";
import type { NextPage } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Trophy from "@/components/Trophy";
import SideCard, { CheckItem, DateItem } from "@/components/SideCard";
import TrustStrip from "@/components/TrustStrip";
import { Field, TextInput, TextArea, Select, RadioCard } from "@/components/FormFields";
import SectionContainer from "@/components/UI/SectionContainer";
import { motion } from 'framer-motion';
import Link from "next/link";

const packages = [
    { title: "PLATINUM PARTNER", price: "₹12,00,000 + GST", note: "3 Complimentary Stalls" },
    { title: "GOLD PARTNER", price: "₹8,00,000 + GST", note: "2 Complimentary Stalls" },
    { title: "SILVER PARTNER", price: "₹5,00,000 + GST", note: "1 Complimentary Stall" },
    { title: "ASSOCIATE PARTNER", price: "₹2,50,000 + GST", note: "Logo Branding" },
    { title: "SUPPORTING PARTNER", price: "₹1,25,000 + GST", note: "Logo Branding" },
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

const SponsorPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Award Sponsor Partnership Form | GMEA 2027</title>
            </Head>

            <main className="bg-white overflow-hidden">
                {/* ================= HERO SECTION ================= */}
                <section className="relative min-h-[620px] lg:min-h-[660px] overflow-hidden pt-[190px] lg:pt-[195px]">

                    {/* BASE BACKGROUND */}
                    <div className="absolute inset-0 bg-[#01163A]" />

                    {/* HERO BACKGROUND IMAGE */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img
                            src="https://media.istockphoto.com/id/2023122586/vector/golden-star-trophy-with-light-effects.jpg?s=2048x2048&w=is&k=20&c=klnmaesjpdPhxhm-U6hRkkwK-pSqdZ2QGgPeKu69AoQ="
                            alt="GMEA awards trophy"
                            className="absolute inset-0 h-full w-full object-cover object-right"
                        />
                    </div>

                    {/* SUBTLE DARK OVERLAY */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#01163A]/80 via-[#01163A]/35 to-transparent" />

                    {/* SUBTLE PATTERN */}
                    <div
                        className="absolute inset-0 z-10 opacity-[0.04]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />

                    <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-10 relative z-20">
                        <div className="relative flex items-start pb-[100px] lg:pb-[130px]">
                            <div className="max-w-7xl text-white">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span className="inline-block text-[10px] tracking-widest text-[#FF6A00] border border-[#FF6A00]/40 rounded-full px-3 py-1 mb-4">
                                        GLOBAL METROLOGY EXCELLENCE AWARDS (GMEA)
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="font-parabolica text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold"
                                >
                                    AWARD SPONSOR
                                    <br />
                                    <span className="text-[#FF6A00]">PARTNERSHIP FORM</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="mt-4 text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl"
                                >
                                    Partner with the most prestigious recognition platform in the metrology
                                    industry and showcase your brand to global leaders, innovators and decision
                                    makers.
                                </motion.p>

                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={staggerContainer}
                                    className="grid grid-cols-3 gap-4 mt-6 max-w-md"
                                >
                                    {[
                                        ["🌐", "Global Visibility", "High brand exposure across platforms"],
                                        ["🏆", "Industry Recognition", "Associate your brand with excellence"],
                                        ["🤝", "Lead Generation", "Connect with top industry professionals"],
                                    ].map(([icon, title, desc]) => (
                                        <motion.div
                                            key={title}
                                            variants={scaleIn}
                                            className="text-xs text-white/80"
                                        >
                                            <span className="text-[#FF6A00] text-lg">{icon}</span>
                                            <p className="text-[#FF6A00] font-semibold mt-1">{title}</p>
                                            <p className="text-white/60">{desc}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="flex flex-wrap gap-4 mt-6"
                                >
                                    <Link
                                        href="#form"
                                        className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors text-center"
                                    >
                                        START SPONSORSHIP →
                                    </Link>
                                    <Link
                                        href="/sponsor-guidelines"
                                        className="border border-white/40 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-full text-sm transition-colors text-center"
                                    >
                                        ⬇ VIEW PACKAGES
                                    </Link>
                                </motion.div> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= BREADCRUMB ================= */}
  

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
                                <h2 className="text-[#FF6A00] font-bold text-lg mb-1">SPONSOR INFORMATION</h2>
                                <p className="text-gray-500 text-sm mb-6">
                                    Please complete the form below and our team will get in touch with you.
                                </p>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <Field label="Company Name" required>
                                        <TextInput placeholder="Enter company name" />
                                    </Field>
                                    <Field label="Contact Person" required>
                                        <TextInput placeholder="Enter full name" />
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
                                    <Field label="Phone Number">
                                        <TextInput prefix="+91" placeholder="Enter phone number" />
                                    </Field>
                                    <Field label="Website">
                                        <TextInput placeholder="Enter website" />
                                    </Field>
                                    <Field label="Address" required className="md:col-span-2">
                                        <TextArea placeholder="Enter complete address" rows={2} />
                                    </Field>
                                    <Field label="City" required>
                                        <TextInput placeholder="Enter city" />
                                    </Field>
                                    <Field label="State" required>
                                        <Select placeholder="Select state" options={["Maharashtra", "Karnataka", "Gujarat", "Delhi"]} />
                                    </Field>
                                    <Field label="Country" required>
                                        <Select placeholder="Select country" options={["India", "USA", "Germany", "China"]} />
                                    </Field>
                                    <Field label="ZIP / Pin Code" required>
                                        <TextInput placeholder="Enter PIN / ZIP code" />
                                    </Field>
                                    <Field label="Company Type" required>
                                        <Select placeholder="Select company type" options={["Manufacturer", "Distributor", "Service Provider", "Other"]} />
                                    </Field>
                                    <Field label="Annual Turnover" required>
                                        <Select placeholder="Select turnover range" options={["< ₹5 Cr", "₹5–25 Cr", "₹25–100 Cr", "> ₹100 Cr"]} />
                                    </Field>
                                    <Field label="Number of Employees" required>
                                        <Select placeholder="Select no. of employees" options={["1–50", "51–200", "201–500", "500+"]} />
                                    </Field>
                                </div>

                                <h2 className="text-[#FF6A00] font-bold text-lg mt-8 mb-4">SPONSORSHIP INTEREST</h2>
                                <p className="text-gray-700 text-sm font-medium mb-3">
                                    Sponsorship Package Interested In <span className="text-[#FF6A00]">*</span>
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                    {packages.map((p, i) => (
                                        <RadioCard key={p.title} name="package" {...p} defaultChecked={i === 0} />
                                    ))}
                                </div>

                                <label className="flex items-start gap-2 mt-4 text-sm text-gray-700 cursor-pointer">
                                    <input type="radio" name="package" className="mt-1 accent-[#FF6A00]" />
                                    <span>
                                        Yes, I am interested in a custom package
                                        <br />
                                        <span className="text-gray-500 text-xs">Please specify your requirements</span>
                                    </span>
                                </label>
                                <Field label="Other (Custom Package / Proposal)" className="mt-2">
                                    <TextInput placeholder="" />
                                </Field>

                                <div className="grid md:grid-cols-2 gap-5 mt-5">
                                    <Field label="How did you hear about GMEA Awards?" required>
                                        <Select placeholder="Select an option" options={["Email", "Social Media", "Referral", "Website", "Event"]} />
                                    </Field>
                                    <Field label="Additional Comments / Message">
                                        <TextInput placeholder="Enter your message" />
                                    </Field>
                                </div>

                                <label className="flex items-center gap-2 mt-6 text-sm text-gray-700">
                                    <input type="checkbox" className="accent-[#FF6A00]" />
                                    <span>
                                        I agree to the <a className="text-[#FF6A00] underline">terms & conditions</a> and{" "}
                                        <a className="text-[#FF6A00] underline">privacy policy</a>.
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    className="mt-6 inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                                >
                                    SUBMIT ENQUIRY →
                                </button>
                            </motion.div>

                            {/* SIDEBAR */}
                            <aside className="flex flex-col gap-6">
                                <SideCard title="WHY SPONSOR GMEA AWARDS?" icon={undefined} >
                                    <ul className="space-y-2">
                                        <CheckItem>Position your brand among industry leaders</CheckItem>
                                        <CheckItem>Gain unmatched visibility before, during and after the event</CheckItem>
                                        <CheckItem>Generate qualified leads and business opportunities</CheckItem>
                                        <CheckItem>Strengthen your brand image and credibility</CheckItem>
                                        <CheckItem>Network with top decision makers and innovators</CheckItem>
                                    </ul>
                                </SideCard>

                                <SideCard title="SPONSORSHIP PACKAGES" icon={undefined} >
                                    <p className="text-gray-600 text-sm mb-4">
                                        Choose a package that aligns with your marketing and branding goals.
                                    </p>
                                    <button className="text-sm font-semibold text-[#FF6A00] border border-[#FF6A00]/50 rounded-md px-4 py-2 hover:bg-[#FF6A00]/10 transition-colors">
                                        VIEW SPONSORSHIP BENEFITS →
                                    </button>
                                </SideCard>

                                <SideCard title="IMPORTANT DATES" icon="📅">
                                    <DateItem label="Sponsorship Bookings Open" date="01 November 2026" last={undefined} />
                                    <DateItem label="Last Date to Confirm Sponsorship" date="28 February 2027" last={undefined} />
                                    <DateItem label="Marketing Collateral Deadline" date="15 March 2027" last={undefined} />
                                    <DateItem label="Awards Ceremony" date="23 April 2027" last />
                                </SideCard>

                                <SideCard title="NEED HELP?" icon="🎧">
                                    <p className="text-gray-600 text-sm mb-3">
                                        Our team is here to help you create the perfect partnership.
                                    </p>
                                    <p className="text-sm text-gray-700">📞 +91 80 4127 0101</p>
                                    <p className="text-sm text-gray-700">✉️ awards@indiamet.com</p>
                                    <p className="text-sm text-gray-700">🌐 www.indiamet.com/awards</p>
                                </SideCard>
                            </aside>
                        </div>
                    </SectionContainer>
                </section>

                {/* ================= TRUST STRIP ================= */}
                <section className="py-8 bg-gray-50">
                    <SectionContainer>
                        <TrustStrip
                            items={[
                                { icon: "👤", label: "Dedicated Account Manager" },
                                { icon: "🛡️", label: "Customized Branding Opportunities" },
                                { icon: "🔗", label: "Exclusive Networking Access" },
                                { icon: "📣", label: "Pre & Post Event Promotions" },
                            ]}
                        />
                    </SectionContainer>
                </section>
            </main>
        </>
    );
};

export default SponsorPage;