"use client";
import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SideCard, { CheckItem, DateItem } from "@/components/SideCard";
import TrustStrip from "@/components/TrustStrip";
import { Field, TextInput, TextArea, Select, RadioCard } from "@/components/FormFields";
import SectionContainer from "@/components/UI/SectionContainer";
import { motion, AnimatePresence } from 'framer-motion';

type SponsorPackage = {
    title: string;
    price: string;
    note: string;
    benefits: string[];
};

const packages: SponsorPackage[] = [
    {
        title: "PLATINUM PARTNER",
        price: "₹12,00,000 + GST",
        note: "3 Complimentary Stalls",
        benefits: [
            "3 complimentary exhibition stalls at prime locations",
            "Title branding on all event collaterals, banners & backdrop",
            "Logo on homepage of event website with hyperlink",
            "10 complimentary delegate passes",
            "Dedicated speaking slot at the main stage",
            "Full-page ad in the event brochure",
            "Prominent logo placement on award trophies",
            "Social media promotion across all GMEA channels",
        ],
    },
    {
        title: "GOLD PARTNER",
        price: "₹8,00,000 + GST",
        note: "2 Complimentary Stalls",
        benefits: [
            "2 complimentary exhibition stalls",
            "Logo branding on event banners & backdrop",
            "Logo on event website",
            "6 complimentary delegate passes",
            "Half-page ad in the event brochure",
            "Mention during opening & closing ceremony",
            "Social media promotion",
        ],
    },
    {
        title: "SILVER PARTNER",
        price: "₹5,00,000 + GST",
        note: "1 Complimentary Stall",
        benefits: [
            "1 complimentary exhibition stall",
            "Logo branding on select event collaterals",
            "Logo on event website",
            "4 complimentary delegate passes",
            "Quarter-page ad in the event brochure",
            "Social media mention",
        ],
    },
    {
        title: "ASSOCIATE PARTNER",
        price: "₹2,50,000 + GST",
        note: "Logo Branding",
        benefits: [
            "Logo branding at the venue",
            "Logo on event website",
            "2 complimentary delegate passes",
            "Listing in the event brochure",
        ],
    },
    {
        title: "SUPPORTING PARTNER",
        price: "₹1,25,000 + GST",
        note: "Logo Branding",
        benefits: [
            "Logo branding at the venue",
            "Logo on event website",
            "1 complimentary delegate pass",
        ],
    },
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
    const router = useRouter();

    // Tracks which package is selected (stays selected even after the modal closes)
    const [selectedPackage, setSelectedPackage] = useState<SponsorPackage>(packages[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePackageSelect = (pkg: SponsorPackage) => {
        setSelectedPackage(pkg);
        setIsModalOpen(true);
    };

    return (
        <>
            <Head>
                <title>Award Sponsor Partnership Form | GMEA 2027</title>
            </Head>

            <main className="bg-white overflow-hidden">
                {/* ================= HERO SECTION ================= */}
                <section className="relative min-h-[60vh] lg:min-h-[70vh] w-full overflow-hidden">
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
                    <div className="absolute inset-0 bg-gradient-to-r from-[#333839d]/95 via-[#333839d]/80 to-[#333839d]/40" />

                    {/* Content */}
                    <div className="relative z-10 flex items-center min-h-[60vh] lg:min-h-[70vh] pt-[130px] sm:pt-[140px] lg:pt-[100px]">
                        <SectionContainer>
                            <div className="max-w-4xl text-white">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span className="inline-block text-[17px] tracking-widest text-[#b80a26] border border-[#b80a26]/40 rounded-full px-3 py-1 mb-4">
                                        GLOBAL METROLOGY EXCELLENCE AWARDS (GMEA)
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="font-parabolica text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
                                >
                                    AWARD SPONSOR
                                    <br />
                                    <span className="text-[#b80a26]">PARTNERSHIP FORM</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="mt-4 text-sm sm:text-base lg:text-lg text-white/90 max-w-7xl"
                                >
                                    Partner with the most prestigious recognition platform in the metrology
                                    industry and showcase your brand to global leaders, innovators and decision
                                    makers.
                                </motion.p>

                            </div>
                        </SectionContainer>
                    </div>
                </section>

                {/* ================= BREADCRUMB ================= */}
                <section className="py-4 bg-gray-50 border-b border-gray-100">
                    <SectionContainer>
                        <div className="flex items-center gap-2 text-sm text-black">
                            <Link href="/" className="hover:text-[#b80a26] transition-colors">Home</Link>
                            <span className="text-black">/</span>
                            <Link href="/awards" className="hover:text-[#b80a26] transition-colors">GMEA Awards</Link>
                            <span className="text-black">/</span>
                            <span className="text-[#b80a26] font-medium">Sponsor Partnership</span>
                        </div>
                    </SectionContainer>
                </section>

                {/* ================= FORM + SIDEBAR ================= */}
                <section className="py-10 lg:py-16" id="form">
                    <SectionContainer>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* FORM */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm"
                            >
                                {/* Back Button */}
                                <button
                                    onClick={() => router.back()}
                                    className="inline-flex items-center gap-2 text-black hover:text-[#b80a26] transition-colors mb-6"
                                >
                                    ← BACK
                                </button>

                                <h2 className="text-[#b80a26] font-bold text-lg mb-1">SPONSOR INFORMATION</h2>
                                <p className="text-black text-sm mb-6">
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
                                </div>

                                <h2 className="text-[#b80a26] font-bold text-lg mt-8 mb-4">SPONSORSHIP INTEREST</h2>
                                <p className="text-black text-sm font-medium mb-3">
                                    Sponsorship Package Interested In <span className="text-[#b80a26]">*</span>
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                    {packages.map((p, i) => (
                                        <div key={p.title} onClick={() => handlePackageSelect(p)} className="cursor-pointer">
                                            <RadioCard
                                                name="package"
                                                title={p.title}
                                                price={p.price}
                                                note={p.note}
                                                defaultChecked={i === 0}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <label className="flex items-start gap-2 mt-4 text-sm text-black cursor-pointer">
                                    <input type="radio" name="package" className="mt-1 accent-[#b80a26]" />
                                    <span>
                                        Yes, I am interested in a custom package
                                        <br />
                                        <span className="text-black text-xs">Please specify your requirements</span>
                                    </span>
                                </label>

                                <div className="grid md:grid-cols-1 gap-5 mt-5">
                                    <Field label="How did you hear about GMEA Awards?" required>
                                        <Select placeholder="Select an option" options={["Email", "Social Media", "Referral", "Website", "Event"]} />
                                    </Field>
                                </div>

                                <label className="flex items-center gap-2 mt-6 text-sm text-black">
                                    <input type="checkbox" className="accent-[#b80a26]" />
                                    <span>
                                        I agree to the <a className="text-[#b80a26] underline">terms & conditions</a> and{" "}
                                        <a className="text-[#b80a26] underline">privacy policy</a>.
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    className="mt-6 inline-flex items-center gap-2 bg-[#b80a26] hover:bg-[#b80a26]/90 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                                >
                                    SUBMIT ENQUIRY →
                                </button>
                            </motion.div>

                            {/* SIDEBAR */}
                            <aside className="flex flex-col gap-6 text-black">
                                <SideCard
                                    title="WHY SPONSOR GMEA AWARDS?"
                                    icon={undefined}
                                    className="text-black"
                                >
                                    <ul className="space-y-2 text-black text-sm">
                                        <CheckItem>Position your brand among industry leaders</CheckItem>
                                        <CheckItem>Gain unmatched visibility before, during and after the event</CheckItem>
                                        <CheckItem>Generate qualified leads and business opportunities</CheckItem>
                                        <CheckItem>Strengthen your brand image and credibility</CheckItem>
                                        <CheckItem>Network with top decision makers and innovators</CheckItem>
                                    </ul>
                                </SideCard>

                                <SideCard
                                    title="SPONSORSHIP PACKAGES"
                                    icon={undefined}
                                    className="text-black"
                                >
                                    <p className="text-black text-sm mb-4">
                                        Choose a package that aligns with your marketing and branding goals.
                                    </p>
                                    <Link href={"/awards"}>
                                        <button className="text-sm font-semibold text-[#b80a26] border border-[#b80a26]/50 rounded-md px-4 py-2 hover:bg-[#b80a26]/10 transition-colors">
                                            VIEW SPONSORSHIP BENEFITS →
                                        </button>
                                    </Link>
                                   
                                </SideCard>

                                <SideCard
                                    title="IMPORTANT DATES"
                                    icon="📅"
                                    className="text-black"
                                >
                                    <DateItem label="Sponsorship Bookings Open" date="01 November 2026" last={undefined} />
                                    <DateItem label="Last Date to Confirm Sponsorship" date="28 February 2027" last={undefined} />
                                    <DateItem label="Marketing Collateral Deadline" date="15 March 2027" last={undefined} />
                                    <DateItem label="Awards Ceremony" date="23 April 2027" last />
                                </SideCard>

                                <SideCard
                                    title="NEED HELP?"
                                    icon="🎧"
                                    className="text-black"
                                >
                                    <p className="text-black text-sm mb-3">
                                        Our team is here to help you create the perfect partnership.
                                    </p>
                                    <p className="text-sm text-black">📞 +91 80 4127 0101</p>
                                    <p className="text-sm text-black">✉️ awards@indiamet.com</p>
                                    <p className="text-sm text-black">🌐 www.indiamet.com/awards</p>
                                </SideCard>
                            </aside>
                        </div>
                    </SectionContainer>
                </section>

                {/* ================= TRUST STRIP ================= */}
                <section className="py-8 bg-gray-50">
                    <SectionContainer>
                        <div className="text-black">
                            <TrustStrip
                                items={[
                                    { icon: "👤", label: "Dedicated Account Manager" },
                                    { icon: "🛡️", label: "Customized Branding Opportunities" },
                                    { icon: "🔗", label: "Exclusive Networking Access" },
                                    { icon: "📣", label: "Pre & Post Event Promotions" },
                                ]}
                            />
                        </div>
                    </SectionContainer>
                </section>

                {/* ================= PACKAGE DETAILS MODAL ================= */}
                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                transition={{ duration: 0.2 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative w-full max-w-lg rounded-xl bg-white shadow-xl max-h-[85vh] overflow-y-auto"
                            >
                                {/* Close button */}
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    aria-label="Close"
                                    className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-black hover:bg-gray-100 transition-colors"
                                >
                                    ✕
                                </button>

                                <div className="p-6 md:p-8">
                                    <span className="inline-block text-xs font-semibold tracking-widest text-[#b80a26] border border-[#b80a26]/40 rounded-full px-3 py-1 mb-3">
                                        {selectedPackage.title}
                                    </span>
                                    <h3 className="text-2xl font-bold text-black">{selectedPackage.price}</h3>
                                    <p className="text-black text-sm mt-1 mb-5">{selectedPackage.note}</p>

                                    <h4 className="text-[#b80a26] font-bold text-sm mb-3">WHAT YOU GET</h4>
                                    <ul className="space-y-2 mb-6">
                                        {selectedPackage.benefits.map((b) => (
                                            <li key={b} className="flex items-start gap-2 text-sm text-black">
                                                <span className="text-[#b80a26] mt-0.5">✓</span>
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="w-full inline-flex items-center justify-center gap-2 bg-[#b80a26] hover:bg-[#b80a26]/90 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                                    >
                                        CONTINUE WITH {selectedPackage.title}
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </>
    );
};

export default SponsorPage;