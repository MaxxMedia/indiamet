import Head from "next/head";
import type { NextPage } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import EventBar from "@/components/EventBar";
import Trophy from "@/components/Trophy";
import SideCard, { CheckItem, DateItem } from "@/components/SideCard";
import TrustStrip from "@/components/TrustStrip";
import { Field, TextInput, TextArea, Select, RadioCard } from "@/components/FormFields";

const packages = [
    { title: "PLATINUM PARTNER", price: "₹12,00,000 + GST", note: "3 Complimentary Stalls" },
    { title: "GOLD PARTNER", price: "₹8,00,000 + GST", note: "2 Complimentary Stalls" },
    { title: "SILVER PARTNER", price: "₹5,00,000 + GST", note: "1 Complimentary Stall" },
    { title: "ASSOCIATE PARTNER", price: "₹2,50,000 + GST", note: "Logo Branding" },
    { title: "SUPPORTING PARTNER", price: "₹1,25,000 + GST", note: "Logo Branding" },
];

const SponsorPage: NextPage = () => {
    return (
        <div className="bg-[#121212] text-white">
            <Head>
                <title>Award Sponsor Partnership Form | GMEA 2027</title>
            </Head>
            <main className="min-h-screen bg-navy-900 text-slate-200 pt-[155px]">
                {/* Hero */}
                <section className="bg-gradient-to-b from-navy-950 to-navy-900 border-b border-gold-600/20 px-6 md:px-12 pt-6 pb-10">
                    <div className="max-w-7xl mx-auto">
                        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Awards" }, { label: "Sponsor" }, { label: "Award Sponsor Form" }]} />
                        <div className="grid md:grid-cols-[1fr_auto_auto] gap-8 items-center">
                            <div>
                                <p className="text-gold-500 font-semibold tracking-widest text-sm mb-2">
                                    GLOBAL METROLOGY EXCELLENCE AWARDS (GMEA)
                                </p>
                                <h1 className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-white">
                                    AWARD SPONSOR
                                    <br />
                                    <span className="text-gold-500">PARTNERSHIP FORM</span>
                                </h1>
                                <p className="text-slate-300 mt-4 max-w-lg text-sm md:text-base">
                                    Partner with the most prestigious recognition platform in the metrology
                                    industry and showcase your brand to global leaders, innovators and decision
                                    makers.
                                </p>
                                <div className="grid grid-cols-3 gap-4 mt-6 max-w-md">
                                    {[
                                        ["🌐", "Global Visibility", "High brand exposure across platforms"],
                                        ["🏆", "Industry Recognition", "Associate your brand with excellence"],
                                        ["🤝", "Lead Generation", "Connect with top industry professionals"],
                                    ].map(([icon, title, desc]) => (
                                        <div key={title} className="text-xs text-slate-300">
                                            <span className="text-gold-500 text-lg">{icon}</span>
                                            <p className="text-gold-400 font-semibold mt-1">{title}</p>
                                            <p className="text-slate-400">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Trophy className="w-36 h-52 hidden md:flex" />
                            <EventBar />
                        </div>
                    </div>
                </section>

                {/* Form + sidebar */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid lg:grid-cols-[1fr_340px] gap-8">
                    <form className="rounded-xl border border-gold-600/20 bg-navy-850 p-6 md:p-8">
                        <h2 className="text-gold-500 font-display font-bold text-lg mb-1">SPONSOR INFORMATION</h2>
                        <p className="text-slate-400 text-sm mb-6">
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

                        <h2 className="text-gold-500 font-display font-bold text-lg mt-8 mb-4">SPONSORSHIP INTEREST</h2>
                        <p className="text-slate-200 text-sm font-medium mb-3">
                            Sponsorship Package Interested In <span className="text-gold-500">*</span>
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                            {packages.map((p, i) => (
                                <RadioCard key={p.title} name="package" {...p} defaultChecked={i === 0} />
                            ))}
                        </div>

                        <label className="flex items-start gap-2 mt-4 text-sm text-slate-300 cursor-pointer">
                            <input type="radio" name="package" className="mt-1 accent-gold-600" />
                            <span>
                                Yes, I am interested in a custom package
                                <br />
                                <span className="text-slate-500 text-xs">Please specify your requirements</span>
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

                        <label className="flex items-center gap-2 mt-6 text-sm text-slate-300">
                            <input type="checkbox" className="accent-gold-600" />
                            <span>
                                I agree to the <a className="text-gold-500 underline">terms & conditions</a> and{" "}
                                <a className="text-gold-500 underline">privacy policy</a>.
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="mt-6 inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-navy-950 font-semibold px-6 py-3 rounded-md transition-colors"
                        >
                            SUBMIT ENQUIRY →
                        </button>
                    </form>

                    {/* Sidebar */}
                    <aside className="flex flex-col gap-6">
                        <SideCard title="WHY SPONSOR GMEA AWARDS?" icon={undefined}>
                            <ul>
                                <CheckItem>Position your brand among industry leaders</CheckItem>
                                <CheckItem>Gain unmatched visibility before, during and after the event</CheckItem>
                                <CheckItem>Generate qualified leads and business opportunities</CheckItem>
                                <CheckItem>Strengthen your brand image and credibility</CheckItem>
                                <CheckItem>Network with top decision makers and innovators</CheckItem>
                            </ul>
                        </SideCard>

                        <SideCard title="SPONSORSHIP PACKAGES" icon={undefined}>
                            <p className="text-slate-300 text-sm mb-4">
                                Choose a package that aligns with your marketing and branding goals.
                            </p>
                            <button className="text-sm font-semibold text-gold-500 border border-gold-600/50 rounded-md px-4 py-2 hover:bg-gold-600/10 transition-colors">
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
                            <p className="text-slate-300 text-sm mb-3">
                                Our team is here to help you create the perfect partnership.
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
                            { icon: "👤", label: "Dedicated Account Manager" },
                            { icon: "🛡️", label: "Customized Branding Opportunities" },
                            { icon: "🔗", label: "Exclusive Networking Access" },
                            { icon: "📣", label: "Pre & Post Event Promotions" },
                        ]}
                    />
                </div>
            </main>
        </div>
    );
};

export default SponsorPage;