"use client";
import Head from "next/head";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SideCard, { CheckItem, DateItem } from "@/components/SideCard";
import TrustStrip from "@/components/TrustStrip";
import { Field, TextInput, TextArea, Select, RadioCard } from "@/components/FormFields";
import SectionContainer from "@/components/UI/SectionContainer";
import { motion } from 'framer-motion';

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
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Award Sponsor Partnership Form | GMEA 2027</title>
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
                    <div className="relative z-10 flex items-center min-h-[70vh] lg:min-h-[80vh] pt-30 lg:pt-34 xl:pt-38">
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
                                    className="font-parabolica text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
                                >
                                    AWARD SPONSOR
                                    <br />
                                    <span className="text-[#FF6A00]">PARTNERSHIP FORM</span>
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
                            </div>
                        </SectionContainer>
                    </div>
                </section>

                {/* ================= BREADCRUMB ================= */}
                <section className="py-4 bg-gray-50 border-b border-gray-100">
                    <SectionContainer>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-[#FF6A00] transition-colors">Home</Link>
                            <span className="text-gray-400">/</span>
                            <Link href="/awards" className="hover:text-[#FF6A00] transition-colors">GMEA Awards</Link>
                            <span className="text-gray-400">/</span>
                            <span className="text-[#FF6A00] font-medium">Sponsor Partnership</span>
                        </div>
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
                                {/* Back Button */}
                                <button
                                    onClick={() => router.back()}
                                    className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FF6A00] transition-colors mb-6"
                                >
                                    ← BACK
                                </button>

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
                                <SideCard title="WHY SPONSOR GMEA AWARDS?" icon={undefined}>
                                    <ul className="space-y-2">
                                        <CheckItem>Position your brand among industry leaders</CheckItem>
                                        <CheckItem>Gain unmatched visibility before, during and after the event</CheckItem>
                                        <CheckItem>Generate qualified leads and business opportunities</CheckItem>
                                        <CheckItem>Strengthen your brand image and credibility</CheckItem>
                                        <CheckItem>Network with top decision makers and innovators</CheckItem>
                                    </ul>
                                </SideCard>

                                <SideCard title="SPONSORSHIP PACKAGES" icon={undefined}>
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