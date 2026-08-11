"use client";
import Head from "next/head";
import type { NextPage } from "next";
import Trophy from "@/components/Trophy";
import EventBar from "@/components/EventBar";
import Link from "next/link";

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
    ["Dr. Klaus Weckenmann", "Chairman", "President Emeritus, PTB, Germany"],
    ["Dr. Gail Peters", "International Expert", "CEO, Peters Research, USA"],
    ["Mr. Ramesh Kaul", "Industry Leader", "Managing Director, Hexagon Manufacturing Intelligence"],
    ["Prof. Chris Wang", "Academic Expert", "Director, Precision Engineering, Tsinghua University, China"],
];

const evaluation: [string, number][] = [
    ["Innovation", 35],
    ["Technical Excellence", 25],
    ["Industry Impact", 20],
    ["Business Growth", 10],
    ["Sustainability", 10],
];

const supporters = [
    ["Platinum Partner", "HEXAGON"],
    ["Gold Partner", "Mitutoyo"],
    ["Silver Partner", "ZEISS"],
    ["Supporting Partner", "RENISHAW"],
    ["Knowledge Partner", "NPL"],
    ["Media Partner", "TOOLING TRENDS"],
];

// TODO: replace with the real destination URLs for these two CTAs.
const SPONSOR_URL = "#sponsor";
const NOMINATE_URL = "#nominate";

interface RingProps {
    percent: number;
    label: string;
}

function Ring({ percent, label }: RingProps) {
    const r = 34;
    const c = 2 * Math.PI * r;
    const offset = c - (percent / 100) * c;
    return (
        <div className="flex flex-col items-center gap-2 w-28">
            <svg width="90" height="90" viewBox="0 0 90 90">
                <circle cx="45" cy="45" r={r} stroke="#182a47" strokeWidth="8" fill="none" />
                <circle
                    cx="45"
                    cy="45"
                    r={r}
                    stroke="#eab84a"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={c}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 45 45)"
                />
                <text x="45" y="50" textAnchor="middle" className="fill-white font-bold text-sm">
                    {percent}%
                </text>
            </svg>
            <p className="text-xs text-slate-300 tracking-wide uppercase text-center">{label}</p>
        </div>
    );
}

const Awards: NextPage = () => {
    return (
        <div className="bg-[#121212] text-white">

            <Head>
                <title>Global Metrology Excellence Awards (GMEA) 2027</title>
            </Head>
            <main className="min-h-screen bg-navy-900 text-slate-200 pt-[155px]">
                {/* Hero */}
                <section className="bg-gradient-to-b from-navy-950 to-navy-900 border-b border-gold-600/20 px-6 md:px-12 pt-10 pb-12">
                    <div className="max-w-7xl mx-auto">
                        {/*
                          Desktop: 3-part row -> left ~45% / trophy ~30% / event info ~25%.
                          Mobile: single column, stacked in reading order
                          (powered-by -> title -> description -> buttons -> trophy -> event info).
                        */}
                        <div className="flex flex-col lg:grid lg:grid-cols-[45%_30%_25%] lg:items-center lg:gap-6">
                            {/* LEFT: eyebrow, title, description, CTAs */}
                            <div className="order-1 lg:pr-4">
                                <span className="inline-block text-[10px] tracking-widest text-gold-500 border border-gold-600/40 rounded-full px-3 py-1 mb-4">
                                    POWERED BY INDIAMET 2027
                                </span>
                                <h1 className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-white">
                                    GLOBAL
                                    <br />
                                    METROLOGY
                                    <br />
                                    <span className="text-gold-500">EXCELLENCE AWARDS (GMEA)</span>
                                </h1>
                                <p className="text-slate-300 mt-4 max-w-md text-sm md:text-base">
                                    Recognizing Excellence in Metrology, Measurement Technology, Quality Assurance
                                    &amp; Precision Engineering.
                                </p>
                                <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
                                    {/* Sponsor: secondary / outlined gold, appears first */}
                                    <Link
                                        href={'/Sponsor'}
                                        className="border border-gold-600/60 text-gold-500 hover:bg-gold-600/10 font-semibold px-5 py-2.5 rounded-md text-sm transition-colors text-center"
                                    >
                                        SPONSOR NOW
                                    </Link>
                                    {/* Nominate: primary / gold filled, appears second */}
                                    <Link
                                        href={'/Nominate'}
                                        className="bg-gold-600 hover:bg-gold-500 text-navy-950 font-semibold px-5 py-2.5 rounded-md text-sm transition-colors text-center"
                                    >
                                        NOMINATE NOW ↗
                                    </Link>
                                </div>
                            </div>

                            {/* CENTER: trophy / hero image */}
                            <div className="order-3 lg:order-2 flex justify-center items-center mt-10 lg:mt-0">
                                <Trophy className="w-44 h-60 md:w-52 md:h-72 lg:w-full lg:h-auto lg:max-w-[260px]" />
                            </div>

                            {/* RIGHT: event information block */}
                            <div className="order-2 lg:order-3 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                                <EventBar />
                            </div>
                        </div>
                    </div>
                </section>

                {/* About */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid md:grid-cols-[1fr_320px] gap-10 md:items-center">
                    <div>
                        <p className="text-gold-500 font-semibold tracking-widest text-sm mb-2">ABOUT GMEA</p>
                        <p className="text-slate-300 max-w-2xl">
                            The Global Metrology Excellence Awards (GMEA) honour individuals, teams and
                            organizations that demonstrate outstanding achievement, innovation and leadership
                            in metrology, measurement, inspection, calibration, quality assurance and allied
                            technologies.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 max-w-xl">
                            {stats.map(([n, l]) => (
                                <div key={l}>
                                    <p className="text-gold-500 font-display font-extrabold text-2xl">{n}</p>
                                    <p className="text-slate-400 text-xs mt-1">{l}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Trophy className="w-40 h-56 mx-auto hidden md:flex md:self-center" />
                </section>

                {/* Why participate */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 pb-14">
                    <h2 className="text-center font-display font-bold text-2xl text-white mb-8">
                        WHY PARTICIPATE?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {whyParticipate.map(([icon, title, desc]) => (
                            <div
                                key={title}
                                className="h-full flex flex-col rounded-xl border border-navy-600 bg-navy-850 p-5 hover:border-gold-600/50 transition-colors"
                            >
                                <span className="text-2xl text-gold-500">{icon}</span>
                                <p className="text-white font-semibold mt-3">{title}</p>
                                <p className="text-slate-400 text-sm mt-1">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Award categories */}
                <section className="bg-navy-950 border-y border-gold-600/20 px-6 md:px-12 py-14">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-center font-display font-bold text-2xl text-white mb-8 tracking-wide">
                            · AWARD CATEGORIES ·
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                            {categories.map(([icon, title]) => (
                                <div
                                    key={title}
                                    className="h-full rounded-lg border border-navy-600 bg-navy-850 p-4 flex flex-col items-center justify-center text-center gap-2 hover:border-gold-600/50 transition-colors"
                                >
                                    <span className="text-xl text-gold-500">{icon}</span>
                                    <p className="text-slate-200 text-xs font-medium leading-snug">{title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Awards process */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-14">
                    <h2 className="text-center font-display font-bold text-2xl text-white mb-10">
                        AWARDS PROCESS
                    </h2>
                    <div className="flex flex-col md:flex-row items-stretch md:items-start justify-between gap-8 md:gap-2">
                        {process.map(([icon, title, desc], i) => (
                            <div key={title} className="flex md:flex-1 items-start w-full md:w-auto">
                                <div className="flex flex-col items-center text-center gap-2 flex-1">
                                    <div className="w-14 h-14 rounded-full border-2 border-gold-600 flex items-center justify-center text-xl text-gold-500 bg-navy-850">
                                        {icon}
                                    </div>
                                    <p className="text-gold-500 text-xs font-bold tracking-wide">{title}</p>
                                    <p className="text-slate-400 text-xs max-w-[9rem]">{desc}</p>
                                </div>
                                {i < process.length - 1 && (
                                    <span className="hidden md:flex items-center justify-center text-gold-600/50 text-2xl mx-2 h-14">→</span>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Jury */}
                <section className="bg-navy-950 border-y border-gold-600/20 px-6 md:px-12 py-14">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-center font-display font-bold text-2xl text-white mb-8">
                            MEET THE JURY
                        </h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
                            {jury.map(([name, role, sub]) => (
                                <div
                                    key={name}
                                    className="h-full flex flex-col rounded-xl border border-navy-600 bg-navy-850 overflow-hidden"
                                >
                                    {/* Replace with existing jury member <Image> component, object-cover, fixed aspect ratio */}
                                    <div className="h-32 bg-navy-700 flex items-center justify-center text-4xl text-slate-500">
                                        👤
                                    </div>
                                    <div className="p-4 flex flex-col flex-1">
                                        <span className="inline-block text-[10px] tracking-wide text-emerald-400 border border-emerald-500/40 rounded px-2 py-0.5 mb-2 w-fit">
                                            {role.toUpperCase()}
                                        </span>
                                        <p className="text-white font-semibold text-sm">{name}</p>
                                        <p className="text-slate-400 text-xs mt-1">{sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-slate-400 text-sm mt-8 max-w-xl mx-auto">
                            Our jury comprises global experts from industry, academia and research
                            institutions.
                        </p>
                        <div className="text-center mt-4">
                            <button className="text-sm font-semibold text-gold-500 border border-gold-600/50 rounded-md px-5 py-2 hover:bg-gold-600/10 transition-colors">
                                VIEW ALL JURY
                            </button>
                        </div>
                    </div>
                </section>

                {/* Evaluation criteria */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-14">
                    <h2 className="text-center font-display font-bold text-2xl text-white mb-10">
                        EVALUATION CRITERIA
                    </h2>
                    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-start gap-8 md:gap-4">
                        {evaluation.map(([label, pct]) => (
                            <Ring key={label} percent={pct} label={label} />
                        ))}
                    </div>
                </section>

                {/* Past winners / gallery */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 pb-14 grid md:grid-cols-2 gap-8 md:items-start">
                    <div>
                        <h3 className="text-gold-500 font-display font-semibold text-sm tracking-wide mb-3">
                            🏆 PAST WINNERS
                        </h3>
                        <div className="rounded-xl border border-navy-600 bg-navy-850 overflow-hidden h-full flex flex-col">
                            {/* Replace with existing featured winner <Image> component */}
                            <div className="h-40 bg-navy-700 flex items-center justify-center text-4xl text-slate-500">
                                🏭
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <p className="text-white font-semibold text-sm">Hexagon Manufacturing Intelligence</p>
                                <p className="text-slate-400 text-xs mt-1">
                                    Winner — Outstanding Metrology Solution Award 2025, INDIAMET 2025
                                </p>
                                <button className="text-gold-500 text-xs font-semibold mt-3 hover:underline self-start">
                                    VIEW ALL WINNERS →
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-gold-500 font-display font-semibold text-sm tracking-wide mb-3">
                            📸 AWARDS NIGHT GALLERY
                        </h3>
                        {/* Replace each cell with an existing gallery <Image>, keep aspect-square for consistent aspect ratio */}
                        <div className="grid grid-cols-3 gap-2">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="aspect-square rounded-lg bg-navy-700 flex items-center justify-center text-2xl text-slate-500">
                                    🎉
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Supporters */}
                <section className="bg-navy-950 border-t border-gold-600/20 px-6 md:px-12 py-10">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-center text-gold-500 font-display font-semibold text-sm tracking-widest mb-6">
                            ⬇ OUR SUPPORTERS
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center text-center">
                            {supporters.map(([role, name]) => (
                                <div key={name} className="flex flex-col items-center gap-1">
                                    <p className="text-slate-500 text-[10px] tracking-wide uppercase">{role}</p>
                                    {/* Replace with existing partner logo <Image> component */}
                                    <p className="text-slate-200 font-display font-bold text-sm">{name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Awards;