// data.ts — single source of truth for INDIAMET sectors

export interface SectorSummary {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
}

export interface SectorWhyExhibit {
  title: string;
  icon: string;
  description: string;
}

export interface SectorFAQ {
  question: string;
  answer: string;
}

export interface SectorDetail {
  title: string;
  description: string;
  mainDescription: string;
  heroImage: string;
  stats: {
    visitors: string;
    exhibitors: string;
    countries: string;
  };
  whyExhibit: SectorWhyExhibit[];
  services: string[];
  faqs: SectorFAQ[];
}

// ---------------------------------------------------------------------------
// MAIN SECTOR LIST — used by /sectors/page.tsx grid AND homepage SectorsSection.
// This is the ONLY place summary sector data should be defined.
// ---------------------------------------------------------------------------
export const indiametSectors: SectorSummary[] = [
  {
    id: 1,
    title: "Metrology & Precision Measurement Systems",
    slug: "metrology-precision-measurement",
    image: "/images/sectors/metrology.jpg",
    description:
      "CMMs, vision measuring systems, laser scanners, gauges, coordinate measuring technologies, and precision inspection equipment.",
  },
  {
    id: 2,
    title: "Coordinate Measuring Machines (CMM) & Gauging",
    slug: "cmm-gauging",
    // NOTE: sourced from /sectors/page.tsx ("/images/cmm.jpg") — different path
    // convention than the /images/sectors/ files above. Verify this file exists;
    // do not assume it's the same asset as metrology.jpg.
    image: "/images/cmm.jpg",
    description:
      "Bridge, gantry, horizontal arm, portable CMMs, precision gauges, probing systems, and dimensional inspection technologies for high-accuracy measurements.",
  },
  {
    id: 3,
    title: "Optical, Vision & Laser Inspection Systems",
    slug: "vision-inspection",
    // NOTE: sourced from /sectors/page.tsx ("/images/vision.jpg") — verify exists.
    image: "/images/vision.jpg",
    description:
      "Machine vision, optical metrology, laser scanners, 3D measurement systems, industrial microscopes, profile projectors, and non-contact inspection technologies.",
  },
  {
    id: 4,
    title: "Calibration & Testing Equipment",
    slug: "calibration-testing",
    image: "/images/sectors/calibration.jpg",
    description:
      "Calibration laboratories, dimensional standards, pressure, temperature, torque, electrical and mass calibration solutions.",
  },
  {
    id: 5,
    title: "Quality Control & Inspection",
    slug: "quality-control-inspection",
    image: "/images/sectors/quality.jpg",
    description:
      "Industrial inspection systems, quality assurance solutions, SPC software, gauges, measuring instruments, and testing equipment.",
  },
  {
    id: 6,
    title: "Non-Destructive Testing (NDT)",
    slug: "ndt",
    image: "/images/sectors/ndt.jpg",
    description:
      "Ultrasonic, radiography, eddy current, magnetic particle, dye penetrant, and advanced NDT technologies.",
  },
  {
    id: 7,
    title: "Automation, Robotics & Industry 4.0",
    slug: "automation-robotics",
    image: "/images/sectors/automation.jpg",
    description:
      "Industrial robots, cobots, smart factories, IoT-enabled manufacturing, AI, digital transformation, and factory automation.",
  },
  {
    id: 8,
    title: "Sensors & Industrial Instrumentation",
    slug: "sensors-instrumentation",
    image: "/images/sectors/sensors.jpg",
    description:
      "Industrial sensors, transmitters, data acquisition systems, monitoring devices, and process instrumentation.",
  },
  {
    id: 9,
    title: "Precision Instruments & Measuring Accessories",
    slug: "precision-instruments",
    // NOTE: sourced from /sectors/page.tsx ("/images/instruments.jpg") — verify exists.
    image: "/images/instruments.jpg",
    description:
      "Micrometers, calipers, dial gauges, bore gauges, height gauges, and precision measuring accessories for accurate hand and bench-level inspection.",
  },
  {
    id: 10,
    title: "Surface Measurement & Material Testing",
    slug: "surface-material-testing",
    image: "/images/sectors/material-testing.jpg",
    description:
      "Surface roughness testers, hardness testers, tensile testing machines, material analysis, and laboratory instruments.",
  },
  {
    id: 11,
    title: "CAD/CAM, Metrology Software & Digital Manufacturing",
    slug: "cad-cam-software",
    image: "/images/sectors/software.jpg",
    description:
      "CAD/CAM, reverse engineering, digital twins, metrology software, inspection software, simulation, and manufacturing analytics.",
  },
];

export const allSectorSlugs: string[] = indiametSectors.map((s) => s.slug);

// ---------------------------------------------------------------------------
// DETAILED SECTOR DATA — keyed EXACTLY by the slugs above. Used by
// /sectors/[slug]/page.tsx. All Die & Mould / tooling / machine-tools content
// from the previous file has been removed — it belonged to a different,
// unrelated sector structure and does not apply to INDIAMET metrology sectors.
// ---------------------------------------------------------------------------
export const sectorDatabase: Record<string, SectorDetail> = {
  "metrology-precision-measurement": {
    title: "Metrology & Precision Measurement Systems",
    description:
      "CMMs, vision measuring systems, laser scanners, gauges, coordinate measuring technologies, and precision inspection equipment.",
    mainDescription: `As manufacturing tolerances tighten across automotive, aerospace, electronics, and medical device production, dimensional metrology has become a strategic capability rather than a back-office function. The Metrology & Precision Measurement Systems sector at INDIAMET brings together manufacturers and solution providers of coordinate measuring machines, laser and optical measurement systems, gauging technology, and dimensional inspection equipment used across the full production cycle.

From incoming inspection to in-process verification and final quality sign-off, exhibitors showcase measurement technologies that reduce cycle time while improving traceability and accuracy. Visitors can explore contact and non-contact measurement approaches, portable and fixed systems, and the software platforms that turn raw measurement data into actionable quality decisions — connecting directly with the specialists shaping how modern manufacturing verifies precision.`,
    heroImage: "/images/sectors/metrology.jpg",
    stats: { visitors: "10,000+", exhibitors: "150+", countries: "5+" },
    whyExhibit: [
      {
        title: "Connect with Quality & Manufacturing Engineers",
        icon: "🎯",
        description:
          "Engage directly with the professionals who specify and purchase dimensional measurement equipment.",
      },
      {
        title: "Showcase Measurement Innovation",
        icon: "📐",
        description:
          "Demonstrate CMMs, laser scanners, and gauging systems to an audience actively evaluating new capability.",
      },
      {
        title: "Tap into Rising Precision Demand",
        icon: "📈",
        description:
          "As tolerances tighten across industries, demand for accurate, traceable measurement continues to grow.",
      },
    ],
    services: [
      "Coordinate Measuring Machines",
      "Laser & Optical Measurement Systems",
      "Precision Gauging Equipment",
      "Portable Measurement Arms",
      "Dimensional Inspection Software",
      "Measurement Data Management",
    ],
    faqs: [
      {
        question: "What types of companies exhibit in this sector?",
        answer:
          "Manufacturers of CMMs, measurement instrument suppliers, and metrology software providers.",
      },
      {
        question: "Who visits this sector?",
        answer:
          "Quality managers, metrology engineers, production heads, and inspection department leads.",
      },
      {
        question: "What are the key trends?",
        answer:
          "In-line measurement integration, non-contact scanning, and software-driven dimensional analytics.",
      },
    ],
  },

  "cmm-gauging": {
    title: "Coordinate Measuring Machines (CMM) & Gauging",
    description:
      "Bridge, gantry, horizontal arm, portable CMMs, precision gauges, probing systems, and dimensional inspection technologies for high-accuracy measurements.",
    mainDescription: `Coordinate measuring machines remain the backbone of high-accuracy dimensional inspection, and this sector at INDIAMET is dedicated to the full range of CMM architectures and the gauging technology that supports them. Exhibitors present bridge, gantry, horizontal-arm, and portable CMMs alongside probing systems, fixturing, and precision gauges used for repeatable, traceable measurement.

Visitors can compare measurement volume, throughput, and accuracy across systems suited to toolrooms, production floors, and dedicated metrology labs, while exploring how modern probing and software advances have shortened inspection cycles without compromising precision.`,
    heroImage: "/images/cmm.jpg",
    stats: { visitors: "10,000+", exhibitors: "150+", countries: "5+" },
    whyExhibit: [
      {
        title: "Reach CMM Buyers Directly",
        icon: "🤝",
        description:
          "Meet toolroom managers and quality leads actively comparing CMM architectures and probing systems.",
      },
      {
        title: "Demonstrate Measurement Accuracy",
        icon: "🔍",
        description:
          "Show live probing and gauging performance to an audience evaluating precision and repeatability.",
      },
      {
        title: "Support Production-Floor Adoption",
        icon: "🏭",
        description:
          "Present shop-floor-hardened CMM and gauging solutions suited to production environments.",
      },
    ],
    services: [
      "Bridge & Gantry CMMs",
      "Horizontal Arm CMMs",
      "Portable CMMs",
      "Probing Systems",
      "Precision Gauges",
      "CMM Software & Programming Tools",
    ],
    faqs: [
      {
        question: "What types of companies exhibit in this sector?",
        answer:
          "CMM manufacturers, probe and gauging suppliers, and dimensional inspection software providers.",
      },
      {
        question: "Who visits this sector?",
        answer:
          "Toolroom managers, quality engineers, and metrology lab technicians.",
      },
      {
        question: "What are the key trends?",
        answer:
          "Portable CMM adoption, faster probing cycles, and tighter CAD-to-part comparison workflows.",
      },
    ],
  },

  "vision-inspection": {
    title: "Optical, Vision & Laser Inspection Systems",
    description:
      "Machine vision, optical metrology, laser scanners, 3D measurement systems, industrial microscopes, profile projectors, and non-contact inspection technologies.",
    mainDescription: `Non-contact measurement has become essential for delicate, complex, or high-volume parts where physical probing is impractical. The Optical, Vision & Laser Inspection Systems sector at INDIAMET showcases machine vision platforms, laser scanners, 3D measurement systems, profile projectors, and industrial microscopes used for fast, repeatable dimensional and surface inspection.

Exhibitors demonstrate how optical and laser-based systems capture full-surface data in seconds, enabling 100% inspection on production lines where sampling was once the only practical option. Visitors can explore image-processing-driven defect detection alongside precision optical measurement suited to micro-scale components.`,
    heroImage: "/images/vision.jpg",
    stats: { visitors: "10,000+", exhibitors: "150+", countries: "5+" },
    whyExhibit: [
      {
        title: "Engage Automation-Ready Buyers",
        icon: "👁️",
        description:
          "Connect with manufacturers integrating non-contact inspection into automated production lines.",
      },
      {
        title: "Demonstrate Speed & Coverage",
        icon: "⚡",
        description:
          "Show how vision and laser systems achieve full-part inspection at production-line speed.",
      },
      {
        title: "Address Complex Geometry Challenges",
        icon: "🔬",
        description:
          "Present solutions for delicate, reflective, or micro-scale parts unsuited to contact probing.",
      },
    ],
    services: [
      "Machine Vision Systems",
      "Laser Scanners",
      "3D Optical Measurement Systems",
      "Industrial Microscopes",
      "Profile Projectors",
      "Image-Processing Inspection Software",
    ],
    faqs: [
      {
        question: "What types of companies exhibit in this sector?",
        answer:
          "Machine vision manufacturers, laser scanning specialists, and optical instrument suppliers.",
      },
      {
        question: "Who visits this sector?",
        answer:
          "Production engineers, automation specialists, and quality assurance teams.",
      },
      {
        question: "What are the key trends?",
        answer:
          "AI-assisted defect detection, faster 3D scanning, and inline vision integration.",
      },
    ],
  },

  "calibration-testing": {
    title: "Calibration & Testing Equipment",
    description:
      "Calibration laboratories, dimensional standards, pressure, temperature, torque, electrical and mass calibration solutions.",
    mainDescription: `Traceable calibration underpins every measurement decision made on a production floor. The Calibration & Testing Equipment sector at INDIAMET brings together accredited calibration laboratories and equipment manufacturers covering dimensional standards, pressure, temperature, torque, electrical, and mass calibration.

Exhibitors present the reference standards and calibration instruments that keep measurement systems traceable and audit-ready, while visitors can evaluate laboratory services, in-house calibration equipment, and the documentation and certification processes that quality systems depend on.`,
    heroImage: "/images/sectors/calibration.jpg",
    stats: { visitors: "10,000+", exhibitors: "150+", countries: "5+" },
    whyExhibit: [
      {
        title: "Connect with Calibration Decision-Makers",
        icon: "🤝",
        description:
          "Meet quality managers and lab technicians responsible for calibration program compliance.",
      },
      {
        title: "Showcase Traceable Standards",
        icon: "✅",
        description:
          "Present accredited calibration services and reference-grade equipment to a compliance-focused audience.",
      },
      {
        title: "Support Audit-Readiness",
        icon: "📋",
        description:
          "Demonstrate how your solutions simplify certification and documentation requirements.",
      },
    ],
    services: [
      "Dimensional Calibration Standards",
      "Pressure & Temperature Calibration",
      "Torque Calibration Equipment",
      "Electrical Calibration Instruments",
      "Mass & Force Calibration",
      "Accredited Laboratory Services",
    ],
    faqs: [
      {
        question: "What types of companies exhibit in this sector?",
        answer:
          "Accredited calibration laboratories, calibration equipment manufacturers, and reference standard suppliers.",
      },
      {
        question: "Who visits this sector?",
        answer:
          "Quality managers, calibration technicians, and compliance officers.",
      },
      {
        question: "What are the key trends?",
        answer:
          "Digital calibration certificates, remote calibration monitoring, and expanded NABL accreditation.",
      },
    ],
  },

  "quality-control-inspection": {
    title: "Quality Control & Inspection",
    description:
      "Industrial inspection systems, quality assurance solutions, SPC software, gauges, measuring instruments, and testing equipment.",
    mainDescription: `Quality control has moved from end-of-line sampling to continuous, data-driven verification throughout the production process. The Quality Control & Inspection sector at INDIAMET showcases inspection systems, SPC software, gauging, and testing equipment that give manufacturers real-time visibility into process and product quality.

Visitors can explore integrated quality management platforms that connect shop-floor measurement to enterprise reporting, alongside the physical inspection instruments and gauges that remain essential for hands-on verification.`,
    heroImage: "/images/sectors/quality.jpg",
    stats: { visitors: "10,000+", exhibitors: "150+", countries: "5+" },
    whyExhibit: [
      {
        title: "Reach Quality Decision-Makers",
        icon: "🤝",
        description:
          "Connect with quality managers evaluating inspection systems and SPC platforms.",
      },
      {
        title: "Demonstrate End-to-End Quality Solutions",
        icon: "📊",
        description:
          "Present inspection hardware alongside software that turns measurement data into process insight.",
      },
      {
        title: "Support Continuous Improvement",
        icon: "🔄",
        description:
          "Show how your solutions help manufacturers catch and correct issues before they scale.",
      },
    ],
    services: [
      "Industrial Inspection Systems",
      "SPC Software",
      "Quality Assurance Platforms",
      "Precision Gauges",
      "Measuring Instruments",
      "Testing Equipment",
    ],
    faqs: [
      {
        question: "What types of companies exhibit in this sector?",
        answer:
          "Inspection system manufacturers, SPC software providers, and quality instrument suppliers.",
      },
      {
        question: "Who visits this sector?",
        answer:
          "Quality assurance managers, production supervisors, and process engineers.",
      },
      {
        question: "What are the key trends?",
        answer:
          "Real-time SPC dashboards, integrated quality data, and predictive defect analytics.",
      },
    ],
  },

  ndt: {
    title: "Non-Destructive Testing (NDT)",
    description:
      "Ultrasonic, radiography, eddy current, magnetic particle, dye penetrant, and advanced NDT technologies.",
    mainDescription: `Non-destructive testing lets manufacturers verify internal and surface integrity without compromising the part being tested — critical for safety-driven industries like aerospace, energy, and heavy fabrication. The NDT sector at INDIAMET brings together equipment providers and service specialists covering ultrasonic, radiographic, eddy current, magnetic particle, and dye penetrant testing.

Exhibitors demonstrate portable and fixed NDT systems suited to field inspection and production environments, while visitors can evaluate testing approaches matched to specific material types, defect classes, and regulatory requirements.`,
    heroImage: "/images/sectors/ndt.jpg",
    stats: { visitors: "10,000+", exhibitors: "150+", countries: "5+" },
    whyExhibit: [
      {
        title: "Connect with Safety-Critical Industries",
        icon: "🛡️",
        description:
          "Engage buyers from aerospace, energy, and heavy fabrication who rely on rigorous NDT protocols.",
      },
      {
        title: "Showcase Testing Precision",
        icon: "🔎",
        description:
          "Demonstrate ultrasonic, radiographic, and eddy current systems to a technically demanding audience.",
      },
      {
        title: "Support Regulatory Compliance",
        icon: "📋",
        description:
          "Present NDT solutions that help manufacturers meet industry certification standards.",
      },
    ],
    services: [
      "Ultrasonic Testing Equipment",
      "Radiography Systems",
      "Eddy Current Testing",
      "Magnetic Particle Inspection",
      "Dye Penetrant Testing",
      "Portable NDT Instruments",
    ],
    faqs: [
      {
        question: "What types of companies exhibit in this sector?",
        answer:
          "NDT equipment manufacturers, testing service providers, and inspection instrument suppliers.",
      },
      {
        question: "Who visits this sector?",
        answer:
          "Quality engineers, inspection technicians, and safety compliance officers.",
      },
      {
        question: "What are the key trends?",
        answer:
          "Portable digital NDT devices, phased-array ultrasonics, and automated defect classification.",
      },
    ],
  },

  "automation-robotics": {
    title: "Automation, Robotics & Industry 4.0",
    description:
      "Industrial robots, cobots, smart factories, IoT-enabled manufacturing, AI, digital transformation, and factory automation.",
    mainDescription: `As manufacturers pursue higher throughput and consistency, automation has moved from a competitive advantage to a baseline expectation. The Automation, Robotics & Industry 4.0 sector at INDIAMET showcases industrial robots, collaborative robots, IoT-enabled production systems, and the AI-driven platforms powering the connected factory.

Exhibitors present automated measurement and inspection cells, robotic material handling, and the digital infrastructure that ties production and quality data together. Visitors can explore scalable automation paths suited to both high-volume lines and smaller precision manufacturing operations.`,
    heroImage: "/images/sectors/automation.jpg",
    stats: { visitors: "10,000+", exhibitors: "150+", countries: "5+" },
    whyExhibit: [
      {
        title: "Engage Digital Transformation Leaders",
        icon: "🤖",
        description:
          "Connect with manufacturers investing in robotics and smart factory upgrades.",
      },
      {
        title: "Demonstrate Automated Quality Integration",
        icon: "🔗",
        description:
          "Show how robotics and automation connect directly to measurement and inspection workflows.",
      },
      {
        title: "Position for Industry 4.0 Growth",
        icon: "🌐",
        description:
          "Reach buyers actively building connected, data-driven production environments.",
      },
    ],
    services: [
      "Industrial Robots & Cobots",
      "Automated Inspection Cells",
      "IoT-Enabled Production Systems",
      "AI-Based Process Monitoring",
      "Robotic Material Handling",
      "Smart Factory Integration Platforms",
    ],
    faqs: [
      {
        question: "What types of companies exhibit in this sector?",
        answer:
          "Robotics manufacturers, automation integrators, and Industry 4.0 software providers.",
      },
      {
        question: "Who visits this sector?",
        answer:
          "Plant managers, automation engineers, and digital transformation leads.",
      },
      {
        question: "What are the key trends?",
        answer:
          "Collaborative robotics, AI-driven process analytics, and connected production data.",
      },
    ],
  },

  "sensors-instrumentation": {
    title: "Sensors & Industrial Instrumentation",
    description:
      "Industrial sensors, transmitters, data acquisition systems, monitoring devices, and process instrumentation.",
    mainDescription: `Reliable process data starts at the sensor level, and this sector at INDIAMET is dedicated to the industrial sensors, transmitters, and instrumentation that feed every measurement and control system in modern manufacturing. Exhibitors present monitoring devices, data acquisition systems, and process instrumentation used across production, quality, and facility environments.

Visitors can explore sensing technologies suited to temperature, pressure, force, position, and vibration monitoring, along with the acquisition hardware that turns raw sensor signals into usable process data.`,
    heroImage: "/images/sectors/sensors.jpg",
    stats: { visitors: "10,000+", exhibitors: "150+", countries: "5+" },
    whyExhibit: [
      {
        title: "Connect with Instrumentation Engineers",
        icon: "🔌",
        description:
          "Reach process and controls engineers specifying sensors and instrumentation for new and upgraded lines.",
      },
      {
        title: "Showcase Data Acquisition Capability",
        icon: "📡",
        description:
          "Demonstrate how your sensors and DAQ systems deliver reliable, real-time process data.",
      },
      {
        title: "Support Process Monitoring Upgrades",
        icon: "📈",
        description:
          "Present solutions that improve visibility into critical process parameters.",
      },
    ],
    services: [
      "Industrial Sensors",
      "Transmitters",
      "Data Acquisition Systems",
      "Process Monitoring Devices",
      "Vibration & Position Sensors",
      "Instrumentation Software",
    ],
    faqs: [
      {
        question: "What types of companies exhibit in this sector?",
        answer:
          "Sensor manufacturers, instrumentation suppliers, and data acquisition system providers.",
      },
      {
        question: "Who visits this sector?",
        answer:
          "Process engineers, controls engineers, and instrumentation technicians.",
      },
      {
        question: "What are the key trends?",
        answer:
          "Wireless sensor networks, edge-based data processing, and predictive condition monitoring.",
      },
    ],
  },

  "precision-instruments": {
    title: "Precision Instruments & Measuring Accessories",
    description:
      "Micrometers, calipers, dial gauges, bore gauges, height gauges, and precision measuring accessories for accurate hand and bench-level inspection.",
    mainDescription: `Alongside large-scale measurement systems, hand-held and bench-level precision instruments remain the everyday tools of dimensional inspection on shop floors worldwide. This sector at INDIAMET showcases micrometers, calipers, dial gauges, bore gauges, height gauges, and the full range of precision measuring accessories used for fast, reliable verification at the point of production.

Exhibitors present instrument ranges suited to both general workshop use and specialized high-precision applications, while visitors can compare accuracy classes, ergonomics, and digital readout options across leading manufacturers.`,
    heroImage: "/images/instruments.jpg",
    stats: { visitors: "10,000+", exhibitors: "150+", countries: "5+" },
    whyExhibit: [
      {
        title: "Reach Shop-Floor Buyers Directly",
        icon: "📏",
        description:
          "Connect with production and quality teams who purchase precision hand instruments regularly.",
      },
      {
        title: "Showcase Instrument Range & Accuracy",
        icon: "🎯",
        description:
          "Present your full catalogue of micrometers, gauges, and measuring accessories.",
      },
      {
        title: "Build Repeat Distribution Relationships",
        icon: "🔁",
        description:
          "Precision instruments are recurring purchases — establish long-term supplier relationships.",
      },
    ],
    services: [
      "Micrometers",
      "Calipers",
      "Dial & Bore Gauges",
      "Height Gauges",
      "Digital Measuring Accessories",
      "Instrument Calibration Accessories",
    ],
    faqs: [
      {
        question: "What types of companies exhibit in this sector?",
        answer:
          "Precision instrument manufacturers and measuring accessory suppliers.",
      },
      {
        question: "Who visits this sector?",
        answer:
          "Machinists, quality inspectors, and shop-floor supervisors.",
      },
      {
        question: "What are the key trends?",
        answer:
          "Digital readouts, wireless data output, and expanded accuracy classes for micro-scale work.",
      },
    ],
  },

  "surface-material-testing": {
    title: "Surface Measurement & Material Testing",
    description:
      "Surface roughness testers, hardness testers, tensile testing machines, material analysis, and laboratory instruments.",
    mainDescription: `Beyond dimensional accuracy, manufacturers must verify surface finish and material properties to ensure parts perform as designed. The Surface Measurement & Material Testing sector at INDIAMET brings together surface roughness testers, hardness testers, tensile testing machines, and material analysis instruments used across quality and materials engineering labs.

Exhibitors demonstrate laboratory and portable testing equipment suited to verifying mechanical properties and surface characteristics, while visitors can explore solutions for both incoming material verification and finished-part quality checks.`,
    heroImage: "/images/sectors/material-testing.jpg",
    stats: { visitors: "10,000+", exhibitors: "150+", countries: "5+" },
    whyExhibit: [
      {
        title: "Connect with Materials Engineering Teams",
        icon: "🧪",
        description:
          "Reach material scientists and quality engineers responsible for property verification.",
      },
      {
        title: "Showcase Testing Accuracy",
        icon: "📊",
        description:
          "Demonstrate hardness, tensile, and surface roughness testing to a technically focused audience.",
      },
      {
        title: "Support Material Compliance Needs",
        icon: "✅",
        description:
          "Present solutions that help manufacturers verify material specifications and standards.",
      },
    ],
    services: [
      "Surface Roughness Testers",
      "Hardness Testers",
      "Tensile Testing Machines",
      "Material Analysis Instruments",
      "Laboratory Testing Equipment",
      "Portable Material Testing Devices",
    ],
    faqs: [
      {
        question: "What types of companies exhibit in this sector?",
        answer:
          "Testing equipment manufacturers and material analysis instrument suppliers.",
      },
      {
        question: "Who visits this sector?",
        answer:
          "Materials engineers, quality lab technicians, and R&D teams.",
      },
      {
        question: "What are the key trends?",
        answer:
          "Portable hardness testing, automated tensile analysis, and digital surface profiling.",
      },
    ],
  },

  "cad-cam-software": {
    title: "CAD/CAM, Metrology Software & Digital Manufacturing",
    description:
      "CAD/CAM, reverse engineering, digital twins, metrology software, inspection software, simulation, and manufacturing analytics.",
    mainDescription: `Digital tools now connect every stage of the measurement and manufacturing workflow, from initial design through inspection and analytics. The CAD/CAM, Metrology Software & Digital Manufacturing sector at INDIAMET showcases software platforms for reverse engineering, digital twins, inspection reporting, and manufacturing analytics.

Exhibitors demonstrate how integrated CAD/CAM and metrology software workflows reduce inspection time, improve CAD-to-part comparison accuracy, and turn measurement data into actionable manufacturing insight. Visitors can explore simulation and analytics platforms that connect design intent directly to production and quality verification.`,
    heroImage: "/images/sectors/software.jpg",
    stats: { visitors: "10,000+", exhibitors: "150+", countries: "5+" },
    whyExhibit: [
      {
        title: "Connect with Digital Manufacturing Teams",
        icon: "💻",
        description:
          "Reach engineers and quality teams adopting integrated CAD/CAM and metrology software workflows.",
      },
      {
        title: "Showcase Software Integration",
        icon: "🔄",
        description:
          "Demonstrate reverse engineering, digital twin, and inspection reporting capabilities.",
      },
      {
        title: "Support Data-Driven Manufacturing",
        icon: "🚀",
        description:
          "Present analytics platforms that turn measurement data into manufacturing decisions.",
      },
    ],
    services: [
      "CAD/CAM Software",
      "Reverse Engineering Solutions",
      "Digital Twin Platforms",
      "Metrology & Inspection Software",
      "Manufacturing Simulation Tools",
      "Measurement Data Analytics",
    ],
    faqs: [
      {
        question: "What types of companies exhibit in this sector?",
        answer:
          "CAD/CAM software developers, metrology software providers, and digital manufacturing platforms.",
      },
      {
        question: "Who visits this sector?",
        answer:
          "Design engineers, metrology software users, and manufacturing IT leads.",
      },
      {
        question: "What are the key trends?",
        answer:
          "Cloud-based metrology software, AI-assisted CAD comparison, and digital twin adoption.",
      },
    ],
  },
};