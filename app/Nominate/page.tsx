"use client";
import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";
import { Field, TextInput, TextArea, Select } from "@/components/FormFields";
import SectionContainer from "@/components/UI/SectionContainer";
import { motion } from 'framer-motion';

// Step labels — each one matches the section header actually rendered
// for that step ("1. NOMINATOR DETAILS", "2. NOMINEE DETAILS", etc).
const steps = ["Nominator Details", "Nominee Details", "Category Selection", "Supporting Details", "Review & Submit"];

const categoryOptions = [
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
];

const countryOptions = ["India", "USA", "Germany", "China"];

type FormData = {
    // Step 1 — Nominator Details
    nominatorName: string;
    contactPerson: string;
    designation: string;
    email: string;
    mobile: string;
    nominatorCountry: string;
    // Step 2 — Nominee Details
    nomineeName: string;
    nomineeType: "Organization" | "Individual";
    website: string;
    address: string;
    city: string;
    state: string;
    nomineeCountry: string;
    pinCode: string;
    nomineeEmail: string;
    nomineePhone: string;
    // Step 3 — Category Selection
    category: string;
    // Step 4 — Supporting Details
    achievements: string;
    supportingLinks: string;
    additionalComments: string;
};

const initialFormData: FormData = {
    nominatorName: "",
    contactPerson: "",
    designation: "",
    email: "",
    mobile: "",
    nominatorCountry: "",
    nomineeName: "",
    nomineeType: "Organization",
    website: "",
    address: "",
    city: "",
    state: "",
    nomineeCountry: "",
    pinCode: "",
    nomineeEmail: "",
    nomineePhone: "",
    category: "",
    achievements: "",
    supportingLinks: "",
    additionalComments: "",
};

// Which fields are required before you can move on from each step.
// Step index 3 (Supporting Details) and 4 (Review) aren't checked here —
// review has its own consent check instead.
const requiredByStep: (keyof FormData)[][] = [
    ["nominatorName", "contactPerson", "designation", "email", "mobile", "nominatorCountry"],
    ["nomineeName", "address", "city", "state", "nomineeCountry", "pinCode", "nomineeEmail", "nomineePhone"],
    ["category"],
    [],
    [],
];

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const NominatePage: NextPage = () => {
    const router = useRouter();
    const [active, setActive] = useState<number>(0);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [consent, setConsent] = useState(false);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBack = () => {
        if (active > 0) {
            setError("");
            setActive(active - 1);
        }
    };

    const handleNext = () => {
        const missing = requiredByStep[active].some((key) => !formData[key]);
        if (missing) {
            setError("Please fill in all required fields before continuing.");
            return;
        }
        setError("");
        if (active < steps.length - 1) {
            setActive(active + 1);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!consent) {
            setError("Please accept the terms & privacy policy to submit your nomination.");
            return;
        }
        setError("");

        // TODO: wire this up to your backend endpoint, the same way
        // DelegateForm.tsx posts to the Render backend, e.g.:
        //
        // await fetch('https://INDIAMET-backend.onrender.com/api/nominate', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ ...formData, formType: 'nomination' }),
        // });
        console.log("Nomination submitted:", formData);
        setSubmitted(true);
    };

    // Jump directly to a step by clicking its circle — only allowed for
    // steps already reached, so people can revisit/edit earlier sections
    // from the review step without losing progress.
    const goToStep = (i: number) => {
        if (i <= active) {
            setError("");
            setActive(i);
        }
    };

    return (
        <>
            <Head>
                <title>Nomination Form | GMEA 2027</title>
            </Head>

            <main className="bg-white overflow-hidden">
                {/* ================= HERO SECTION ================= */}
                <section className="relative min-h-[60vh] lg:min-h-[70vh] w-full overflow-hidden">
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

                    <div className="absolute inset-0 bg-gradient-to-r from-[#171A1B]/95 via-[#171A1B]/80 to-[#171A1B]/40" />

                    <div className="relative z-10 flex items-center min-h-[60vh] lg:min-h-[70vh] pt-[130px] sm:pt-[140px] lg:pt-[100px]">
                        <SectionContainer>
                            <div className="max-w-4xl text-white">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span className="inline-block text-[17px] tracking-widest text-[#C8102E] border border-[#C8102E]/40 rounded-full px-3 py-1 mb-4">
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

                {/* ================= BREADCRUMB ================= */}
                <section className="py-4 bg-gray-50 border-b border-gray-100">
                    <SectionContainer>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-[#C8102E] transition-colors">Home</Link>
                            <span className="text-gray-400">/</span>
                            <Link href="/awards" className="hover:text-[#C8102E] transition-colors">GMEA Awards</Link>
                            <span className="text-gray-400">/</span>
                            <span className="text-[#C8102E] font-medium">Nomination Form</span>
                        </div>
                    </SectionContainer>
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
                            {steps.map((label, i) => {
                                const isReached = i <= active;
                                return (
                                    <div key={label} className="flex items-center flex-1 last:flex-none">
                                        <div className="flex flex-col items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={() => goToStep(i)}
                                                disabled={i > active}
                                                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors duration-300 ${isReached
                                                    ? "bg-[#C8102E] border-[#C8102E] text-white cursor-pointer"
                                                    : "border-gray-300 text-gray-700 bg-white cursor-not-allowed"
                                                    }`}
                                            >
                                                {i + 1}
                                            </button>
                                            <span className={`text-xs whitespace-nowrap ${i === active ? "text-[#C8102E] font-semibold" : "text-gray-700"
                                                }`}>
                                                {label}
                                            </span>
                                        </div>
                                        {i < steps.length - 1 && (
                                            <span
                                                className={`flex-1 h-px mx-2 mb-5 transition-colors duration-300 ${i < active ? "bg-[#C8102E]" : "bg-gray-300"
                                                    }`}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </motion.div>
                    </SectionContainer>
                </section>

                {/* ================= FORM + SIDEBAR ================= */}
                <section className="py-10 lg:py-16" id="form">
                    <SectionContainer>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* FORM */}
                            <motion.form
                                onSubmit={handleSubmit}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm"
                            >
                                <button
                                    type="button"
                                    onClick={() => router.back()}
                                    className="inline-flex items-center gap-2 text-gray-600 hover:text-[#C8102E] transition-colors mb-6"
                                >
                                    ← BACK TO AWARDS
                                </button>

                                {submitted ? (
                                    <div className="py-10 text-center">
                                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C8102E]/10 text-[#C8102E] text-2xl">
                                            ✓
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-2">Nomination Submitted</h2>
                                        <p className="text-gray-600 text-sm max-w-sm mx-auto">
                                            Thank you — your nomination has been received. Our team will review it and
                                            get in touch if any further details are needed.
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        {/* STEP 1 — NOMINATOR DETAILS */}
                                        {active === 0 && (
                                            <div>
                                                <h2 className="text-[#C8102E] font-bold text-base mb-4">1. NOMINATOR DETAILS</h2>
                                                <div className="grid md:grid-cols-2 gap-5">
                                                    <Field label="Name of Nominator / Organization" required className="md:col-span-2">
                                                        <TextInput
                                                            name="nominatorName"
                                                            value={formData.nominatorName}
                                                            onChange={handleChange}
                                                            placeholder="Enter your name or organization"
                                                        />
                                                    </Field>
                                                    <Field label="Contact Person" required>
                                                        <TextInput
                                                            name="contactPerson"
                                                            value={formData.contactPerson}
                                                            onChange={handleChange}
                                                            placeholder="Enter contact person name"
                                                        />
                                                    </Field>
                                                    <Field label="Designation" required>
                                                        <TextInput
                                                            name="designation"
                                                            value={formData.designation}
                                                            onChange={handleChange}
                                                            placeholder="Enter designation"
                                                        />
                                                    </Field>
                                                    <Field label="Email Address" required>
                                                        <TextInput
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="Enter email address"
                                                        />
                                                    </Field>
                                                    <Field label="Mobile Number" required>
                                                        <TextInput
                                                            name="mobile"
                                                            value={formData.mobile}
                                                            onChange={handleChange}
                                                            prefix="+91"
                                                            placeholder="Enter mobile number"
                                                        />
                                                    </Field>
                                                    <Field label="Country" required>
                                                        <Select
                                                            name="nominatorCountry"
                                                            value={formData.nominatorCountry}
                                                            onChange={handleChange}
                                                            placeholder="Select country"
                                                            options={countryOptions}
                                                        />
                                                    </Field>
                                                </div>
                                            </div>
                                        )}

                                        {/* STEP 2 — NOMINEE DETAILS */}
                                        {active === 1 && (
                                            <div>
                                                <h2 className="text-[#C8102E] font-bold text-base mb-4">2. NOMINEE DETAILS</h2>
                                                <div className="grid md:grid-cols-2 gap-5">
                                                    <Field label="Name of Nominee (Organization / Individual)" required className="md:col-span-2">
                                                        <TextInput
                                                            name="nomineeName"
                                                            value={formData.nomineeName}
                                                            onChange={handleChange}
                                                            placeholder="Enter nominee name"
                                                        />
                                                    </Field>

                                                    <div className="md:col-span-2 flex items-center gap-6 text-sm text-gray-700">
                                                        <span className="font-medium">
                                                            Type of Nominee <span className="text-[#C8102E]">*</span>
                                                        </span>
                                                        <label className="flex items-center gap-2">
                                                            <input
                                                                type="radio"
                                                                name="nomineeType"
                                                                value="Organization"
                                                                checked={formData.nomineeType === "Organization"}
                                                                onChange={handleChange}
                                                                className="accent-[#C8102E]"
                                                            />
                                                            Organization
                                                        </label>
                                                        <label className="flex items-center gap-2">
                                                            <input
                                                                type="radio"
                                                                name="nomineeType"
                                                                value="Individual"
                                                                checked={formData.nomineeType === "Individual"}
                                                                onChange={handleChange}
                                                                className="accent-[#C8102E]"
                                                            />
                                                            Individual
                                                        </label>
                                                    </div>

                                                    <Field label="Website">
                                                        <TextInput
                                                            name="website"
                                                            value={formData.website}
                                                            onChange={handleChange}
                                                            placeholder="Enter website (if applicable)"
                                                        />
                                                    </Field>
                                                    <Field label="Address" required className="md:col-span-2">
                                                        <TextArea
                                                            name="address"
                                                            value={formData.address}
                                                            onChange={handleChange}
                                                            placeholder="Enter complete address"
                                                            rows={2}
                                                        />
                                                    </Field>
                                                    <Field label="City" required>
                                                        <TextInput
                                                            name="city"
                                                            value={formData.city}
                                                            onChange={handleChange}
                                                            placeholder="Enter city"
                                                        />
                                                    </Field>
                                                    <Field label="State / Province" required>
                                                        <TextInput
                                                            name="state"
                                                            value={formData.state}
                                                            onChange={handleChange}
                                                            placeholder="Enter state"
                                                        />
                                                    </Field>
                                                    <Field label="Country" required>
                                                        <Select
                                                            name="nomineeCountry"
                                                            value={formData.nomineeCountry}
                                                            onChange={handleChange}
                                                            placeholder="Select country"
                                                            options={countryOptions}
                                                        />
                                                    </Field>
                                                    <Field label="PIN / ZIP Code" required>
                                                        <TextInput
                                                            name="pinCode"
                                                            value={formData.pinCode}
                                                            onChange={handleChange}
                                                            placeholder="Enter PIN / ZIP"
                                                        />
                                                    </Field>
                                                    <Field label="Email" required>
                                                        <TextInput
                                                            type="email"
                                                            name="nomineeEmail"
                                                            value={formData.nomineeEmail}
                                                            onChange={handleChange}
                                                            placeholder="Enter email address"
                                                        />
                                                    </Field>
                                                    <Field label="Phone / Mobile" required>
                                                        <TextInput
                                                            name="nomineePhone"
                                                            value={formData.nomineePhone}
                                                            onChange={handleChange}
                                                            prefix="+91"
                                                            placeholder="Enter number"
                                                        />
                                                    </Field>
                                                </div>
                                            </div>
                                        )}

                                        {/* STEP 3 — CATEGORY SELECTION */}
                                        {active === 2 && (
                                            <div>
                                                <h2 className="text-[#C8102E] font-bold text-base mb-4">3. CATEGORY SELECTION</h2>
                                                <Field label="Select Award Category" required>
                                                    <Select
                                                        name="category"
                                                        value={formData.category}
                                                        onChange={handleChange}
                                                        placeholder="-- Select Award Category --"
                                                        options={categoryOptions}
                                                    />
                                                </Field>

                                                <div className="flex items-center justify-between gap-4 mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-[#C8102E] text-xl">🏆</span>
                                                        <p className="text-gray-700 text-sm">
                                                            Not sure which category to choose?
                                                        </p>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="text-xs font-semibold text-[#C8102E] border border-[#C8102E]/50 rounded-md px-3 py-2 hover:bg-[#C8102E]/10 transition-colors whitespace-nowrap"
                                                    >
                                                        VIEW CATEGORIES & GUIDELINES ⟶
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* STEP 4 — SUPPORTING DETAILS */}
                                        {active === 3 && (
                                            <div>
                                                <h2 className="text-[#C8102E] font-bold text-base mb-4">4. SUPPORTING DETAILS</h2>
                                                <div className="grid gap-5">
                                                    <Field label="Key Achievements / Notable Contributions">
                                                        <TextArea
                                                            name="achievements"
                                                            value={formData.achievements}
                                                            onChange={handleChange}
                                                            placeholder="Describe the nominee's key achievements relevant to this category"
                                                            rows={4}
                                                        />
                                                    </Field>
                                                    <Field label="Supporting Links (media coverage, case studies, etc.)">
                                                        <TextInput
                                                            name="supportingLinks"
                                                            value={formData.supportingLinks}
                                                            onChange={handleChange}
                                                            placeholder="Paste one or more links, separated by commas"
                                                        />
                                                    </Field>
                                                    <Field label="Additional Comments">
                                                        <TextArea
                                                            name="additionalComments"
                                                            value={formData.additionalComments}
                                                            onChange={handleChange}
                                                            placeholder="Anything else the jury should know"
                                                            rows={3}
                                                        />
                                                    </Field>
                                                </div>
                                            </div>
                                        )}

                                        {/* STEP 5 — REVIEW & SUBMIT */}
                                        {active === 4 && (
                                            <div>
                                                <h2 className="text-[#C8102E] font-bold text-base mb-4">5. REVIEW & SUBMIT</h2>
                                                <p className="text-gray-500 text-sm mb-6">
                                                    Please check everything below before submitting. You can jump back
                                                    to any earlier step using the numbers above.
                                                </p>

                                                <div className="space-y-6">
                                                    <ReviewSection
                                                        title="Nominator Details"
                                                        rows={[
                                                            ["Name of Nominator / Organization", formData.nominatorName],
                                                            ["Contact Person", formData.contactPerson],
                                                            ["Designation", formData.designation],
                                                            ["Email Address", formData.email],
                                                            ["Mobile Number", formData.mobile],
                                                            ["Country", formData.nominatorCountry],
                                                        ]}
                                                    />
                                                    <ReviewSection
                                                        title="Nominee Details"
                                                        rows={[
                                                            ["Name of Nominee", formData.nomineeName],
                                                            ["Type of Nominee", formData.nomineeType],
                                                            ["Website", formData.website],
                                                            ["Address", formData.address],
                                                            ["City", formData.city],
                                                            ["State / Province", formData.state],
                                                            ["Country", formData.nomineeCountry],
                                                            ["PIN / ZIP Code", formData.pinCode],
                                                            ["Email", formData.nomineeEmail],
                                                            ["Phone / Mobile", formData.nomineePhone],
                                                        ]}
                                                    />
                                                    <ReviewSection
                                                        title="Category Selection"
                                                        rows={[["Award Category", formData.category]]}
                                                    />
                                                    <ReviewSection
                                                        title="Supporting Details"
                                                        rows={[
                                                            ["Key Achievements", formData.achievements],
                                                            ["Supporting Links", formData.supportingLinks],
                                                            ["Additional Comments", formData.additionalComments],
                                                        ]}
                                                    />
                                                </div>

                                                <label className="flex items-start gap-2 mt-6 text-sm text-gray-700">
                                                    <input
                                                        type="checkbox"
                                                        checked={consent}
                                                        onChange={(e) => setConsent(e.target.checked)}
                                                        className="mt-1 accent-[#C8102E]"
                                                    />
                                                    <span>
                                                        I confirm the above details are accurate and I agree to the{" "}
                                                        <a className="text-[#C8102E] underline">terms & conditions</a> and{" "}
                                                        <a className="text-[#C8102E] underline">privacy policy</a>.
                                                    </span>
                                                </label>
                                            </div>
                                        )}

                                        {error && (
                                            <p className="mt-4 text-sm text-red-600">{error}</p>
                                        )}

                                        {/* Navigation Buttons */}
                                        <div className="flex items-center justify-between gap-4 mt-8">
                                            <button
                                                type="button"
                                                onClick={handleBack}
                                                disabled={active === 0}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors ${active === 0
                                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                                                    }`}
                                            >
                                                ← PREVIOUS STEP
                                            </button>

                                            {active === steps.length - 1 ? (
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#C8102E]/90 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                                                >
                                                    SUBMIT
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={handleNext}
                                                    className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#C8102E]/90 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                                                >
                                                    SAVE & CONTINUE →
                                                </button>
                                            )}
                                        </div>
                                    </>
                                )}
                            </motion.form>

                            {/* SIDEBAR */}
                            <aside className="flex flex-col gap-6">
                                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <h3 className="text-[#C8102E] font-bold text-base mb-3">ABOUT GMEA AWARDS</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        The Global Metrology Excellence Awards (GMEA) honor outstanding achievements,
                                        innovation, and leadership in the field of metrology, measurement, inspection
                                        and quality assurance.
                                    </p>
                                    <Link href={"/awards"}>
                                        <button className="text-sm font-semibold text-[#C8102E] hover:underline">
                                            ABOUT THE AWARDS →
                                        </button>
                                    </Link>
                                    
                                </div>

                                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <h3 className="text-[#C8102E] font-bold text-base mb-3">WHY NOMINATE?</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C8102E]">✓</span>
                                            <span>Gain global recognition</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C8102E]">✓</span>
                                            <span>Enhance brand reputation</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C8102E]">✓</span>
                                            <span>Showcase innovation & excellence</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C8102E]">✓</span>
                                            <span>Benchmark against industry leaders</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#C8102E]">✓</span>
                                            <span>Expand business opportunities</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <h3 className="text-[#C8102E] font-bold text-base mb-3">📅 IMPORTANT DATES</h3>
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
                                            <p className="text-[#C8102E] font-bold text-sm">23 April 2027</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <h3 className="text-[#C8102E] font-bold text-base mb-3">🎧 NEED HELP?</h3>
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
                <section className="py-6 sm:py-8 bg-gray-50">
                    <SectionContainer>
                        <div className="border-t border-gray-300 pt-6 sm:pt-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">

                                {/* ITEM 1 */}
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl sm:text-3xl shrink-0 leading-none">
                                        🔒
                                    </span>

                                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl font-medium leading-snug">
                                        Secure & Confidential — All nominations are treated with the utmost confidentiality
                                    </p>
                                </div>

                                {/* ITEM 2 */}
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl sm:text-3xl shrink-0 leading-none">
                                        📄
                                    </span>

                                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl font-medium leading-snug">
                                        Easy Nomination Process — Simple 5-step process to submit securely online
                                    </p>
                                </div>

                                {/* ITEM 3 */}
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl sm:text-3xl shrink-0 leading-none">
                                        🏅
                                    </span>

                                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl font-medium leading-snug">
                                        Celebrate Excellence — Join us at the GMEA Awards Night
                                    </p>
                                </div>

                            </div>
                        </div>
                    </SectionContainer>
                </section>
            </main>
        </>
    );
};

// Small helper for the review step — renders a titled block of label/value
// rows, skipping any field the user left blank.
function ReviewSection({ title, rows }: { title: string; rows: [string, string][] }) {
    const filled = rows.filter(([, value]) => value && value.trim() !== "");
    return (
        <div className="rounded-lg border border-gray-200 p-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">{title}</h4>
            {filled.length === 0 ? (
                <p className="text-xs text-gray-400 italic">Nothing entered</p>
            ) : (
                <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {filled.map(([label, value]) => (
                        <div key={label}>
                            <dt className="text-[11px] uppercase tracking-wide text-gray-400">{label}</dt>
                            <dd className="text-sm text-gray-800 break-words">{value}</dd>
                        </div>
                    ))}
                </dl>
            )}
        </div>
    );
}

export default NominatePage;