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
    image: "/images/sectors/robot.png",
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
    "CMMs, vision measuring systems, laser scanners, optical measurement, gauges, coordinate measuring technologies, and precision inspection equipment.",
  mainDescription: `As manufacturing tolerances continue to become tighter across automotive, aerospace, electronics, medical devices, engineering, and precision manufacturing, advanced metrology has become an essential part of modern production and quality assurance. The Metrology & Precision Measurement Systems sector at INDIAMET brings together leading manufacturers and solution providers of coordinate measuring machines, optical and laser measurement systems, precision gauges, dimensional inspection equipment, and advanced metrology technologies.

From incoming inspection and first-piece verification to in-process measurement and final quality inspection, exhibitors showcase technologies designed to deliver accuracy, repeatability, traceability, and faster inspection cycles. Visitors can explore contact and non-contact measurement systems, portable and automated inspection solutions, and advanced metrology software that converts measurement data into actionable quality insights.`,
  heroImage: "/images/sectors/metrology.jpg",
  stats: { visitors: "10,000+", exhibitors: "150+", countries: "12+" },
  whyExhibit: [
    {
      title: "Connect with Quality & Manufacturing Engineers",
      icon: "🎯",
      description:
        "Engage with quality managers, metrology engineers, production professionals, and decision-makers evaluating advanced measurement technologies.",
    },
    {
      title: "Showcase Measurement Innovation",
      icon: "📐",
      description:
        "Demonstrate CMMs, optical systems, laser scanners, gauges, inspection equipment, and metrology software to a focused industrial audience.",
    },
    {
      title: "Tap into Rising Precision Demand",
      icon: "📈",
      description:
        "As Indian manufacturing moves toward tighter tolerances and higher quality standards, demand for accurate and traceable measurement continues to grow.",
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
        "CMM manufacturers, dimensional measurement equipment suppliers, precision instrument manufacturers, inspection solution providers, and metrology software companies.",
    },
    {
      question: "Who visits this sector?",
      answer:
        "Quality managers, metrology engineers, inspection professionals, production heads, R&D engineers, and procurement teams.",
    },
    {
      question: "What are the key trends?",
      answer:
        "Automated inspection, in-line measurement, non-contact scanning, connected metrology, and software-driven dimensional analytics.",
    },
  ],
},

"cmm-gauging": {
  title: "Coordinate Measuring Machines (CMM) & Gauging",
  description:
    "Bridge, gantry, horizontal arm, portable CMMs, precision gauges, probing systems, and dimensional inspection technologies for high-accuracy measurement.",
  mainDescription: `Coordinate Measuring Machines and precision gauging systems form a critical part of dimensional inspection in modern manufacturing. The CMM & Gauging sector at INDIAMET brings together manufacturers and technology providers offering bridge, gantry, horizontal-arm, and portable CMMs along with probing systems, fixtures, gauges, and inspection software.

Exhibitors showcase high-accuracy measurement solutions designed for tool rooms, quality laboratories, production floors, automotive components, aerospace parts, precision engineering, and other demanding applications. Visitors can compare measurement accuracy, inspection speed, automation capabilities, software integration, and repeatability across different CMM and gauging technologies.`,
  heroImage: "/images/cmm.jpg",
  stats: { visitors: "10,000+", exhibitors: "150+", countries: "12+" },
  whyExhibit: [
    {
      title: "Reach CMM Buyers Directly",
      icon: "🤝",
      description:
        "Meet quality managers, metrology engineers, toolroom heads, and manufacturing professionals evaluating CMM and gauging solutions.",
    },
    {
      title: "Demonstrate Measurement Accuracy",
      icon: "🔍",
      description:
        "Show live probing, scanning, gauging, and dimensional inspection capabilities to an audience focused on accuracy and repeatability.",
    },
    {
      title: "Support Production-Floor Adoption",
      icon: "🏭",
      description:
        "Present robust CMM and gauging technologies designed for laboratories, tool rooms, and demanding production environments.",
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
        "CMM manufacturers, probing system suppliers, precision gauging manufacturers, inspection equipment providers, and dimensional metrology software companies.",
    },
    {
      question: "Who visits this sector?",
      answer:
        "Quality engineers, metrology engineers, toolroom managers, inspection professionals, and laboratory technicians.",
    },
    {
      question: "What are the key trends?",
      answer:
        "Automated CMM inspection, portable measurement, faster probing cycles, scanning technologies, and integrated CAD-to-part comparison.",
    },
  ],
},

"vision-inspection": {
  title: "Optical, Vision & Laser Inspection Systems",
  description:
    "Machine vision, optical metrology, laser scanners, 3D measurement systems, industrial microscopes, profile projectors, and non-contact inspection technologies.",
  mainDescription: `Non-contact measurement and inspection technologies are increasingly important for complex, delicate, reflective, miniature, and high-volume components. The Optical, Vision & Laser Inspection Systems sector at INDIAMET showcases machine vision systems, optical measurement equipment, laser scanners, 3D measurement technologies, profile projectors, microscopes, and advanced non-contact inspection solutions.

Exhibitors demonstrate how optical and laser technologies can capture dimensional and surface information quickly and accurately, supporting automated inspection and high-throughput manufacturing. Visitors can explore solutions for component measurement, defect detection, surface inspection, reverse engineering, and automated quality verification.`,
  heroImage: "/images/vision.jpg",
  stats: { visitors: "10,000+", exhibitors: "150+", countries: "12+" },
  whyExhibit: [
    {
      title: "Engage Automation-Ready Buyers",
      icon: "👁️",
      description:
        "Connect with manufacturers integrating optical, vision, and non-contact inspection into automated production environments.",
    },
    {
      title: "Demonstrate Speed & Coverage",
      icon: "⚡",
      description:
        "Showcase fast measurement, scanning, image processing, and inspection capabilities for high-volume manufacturing.",
    },
    {
      title: "Address Complex Geometry Challenges",
      icon: "🔬",
      description:
        "Present non-contact solutions for miniature, delicate, reflective, complex, and difficult-to-measure components.",
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
        "Machine vision manufacturers, optical measurement companies, laser scanning specialists, microscope manufacturers, and non-contact inspection solution providers.",
    },
    {
      question: "Who visits this sector?",
      answer:
        "Quality engineers, production engineers, automation specialists, inspection teams, R&D professionals, and manufacturing decision-makers.",
    },
    {
      question: "What are the key trends?",
      answer:
        "AI-assisted vision inspection, high-speed 3D scanning, automated defect detection, and inline optical measurement.",
    },
  ],
},

"calibration-testing": {
  title: "Calibration & Testing Equipment",
  description:
    "Calibration laboratories, dimensional standards, pressure, temperature, torque, electrical, force, mass, and industrial calibration solutions.",
  mainDescription: `Reliable and traceable calibration is fundamental to every measurement and quality assurance process. The Calibration & Testing Equipment sector at INDIAMET brings together calibration laboratories, equipment manufacturers, reference standard suppliers, and testing technology providers covering dimensional, pressure, temperature, torque, electrical, force, mass, and other industrial measurement parameters.

Exhibitors showcase calibration instruments, reference standards, laboratory equipment, software, and documentation solutions that help organizations maintain measurement accuracy and traceability. Visitors can evaluate solutions for in-house calibration laboratories as well as professional calibration and testing services supporting quality management systems and industrial compliance.`,
  heroImage: "/images/sectors/calibration.jpg",
  stats: { visitors: "10,000+", exhibitors: "150+", countries: "12+" },
  whyExhibit: [
    {
      title: "Connect with Calibration Decision-Makers",
      icon: "🤝",
      description:
        "Meet quality managers, calibration laboratory heads, technicians, and engineering professionals responsible for measurement traceability.",
    },
    {
      title: "Showcase Traceable Standards",
      icon: "✅",
      description:
        "Present calibration equipment, reference standards, laboratory systems, and accredited calibration services to a quality-focused audience.",
    },
    {
      title: "Support Audit & Compliance Requirements",
      icon: "📋",
      description:
        "Demonstrate solutions that simplify calibration records, certificates, traceability, documentation, and quality-system requirements.",
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
        "Calibration laboratories, calibration equipment manufacturers, reference standard suppliers, testing laboratories, and metrology service providers.",
    },
    {
      question: "Who visits this sector?",
      answer:
        "Quality managers, calibration laboratory heads, calibration technicians, metrology engineers, and compliance professionals.",
    },
    {
      question: "What are the key trends?",
      answer:
        "Digital calibration certificates, automated calibration management, connected laboratories, improved traceability, and advanced calibration software.",
    },
  ],
},

"quality-control-inspection": {
  title: "Quality Control & Inspection",
  description:
    "Industrial inspection systems, quality assurance solutions, SPC software, gauges, measuring instruments, and testing equipment for modern manufacturing.",
  mainDescription: `Quality control is evolving from final inspection toward continuous, data-driven verification throughout the manufacturing process. The Quality Control & Inspection sector at INDIAMET showcases inspection systems, SPC software, gauges, measuring instruments, testing equipment, and quality management solutions that help manufacturers monitor and improve product and process quality.

Visitors can explore integrated quality solutions that connect shop-floor inspection with production data, reporting, statistical process control, and quality management systems. Exhibitors demonstrate technologies designed to identify deviations early, reduce defects, improve process capability, and support continuous manufacturing improvement.`,
  heroImage: "/images/sectors/quality.jpg",
  stats: { visitors: "10,000+", exhibitors: "150+", countries: "12+" },
  whyExhibit: [
    {
      title: "Reach Quality Decision-Makers",
      icon: "🤝",
      description:
        "Connect with quality managers, inspection heads, production engineers, and manufacturing professionals evaluating quality solutions.",
    },
    {
      title: "Demonstrate End-to-End Quality Solutions",
      icon: "📊",
      description:
        "Showcase inspection hardware, gauges, measuring instruments, SPC platforms, and software-driven quality management solutions.",
    },
    {
      title: "Support Continuous Improvement",
      icon: "🔄",
      description:
        "Demonstrate how your solutions help manufacturers identify process variations, reduce defects, and improve product consistency.",
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
        "Inspection system manufacturers, quality software providers, SPC solution companies, gauge manufacturers, and industrial measuring equipment suppliers.",
    },
    {
      question: "Who visits this sector?",
      answer:
        "Quality assurance managers, inspection engineers, production supervisors, process engineers, and manufacturing decision-makers.",
    },
    {
      question: "What are the key trends?",
      answer:
        "Real-time SPC, connected quality data, automated inspection, predictive quality analytics, and integrated quality management.",
    },
  ],
},

ndt: {
  title: "Non-Destructive Testing (NDT)",
  description:
    "Ultrasonic, radiography, eddy current, magnetic particle, dye penetrant, visual inspection, and advanced NDT technologies.",
  mainDescription: `Non-Destructive Testing enables manufacturers and engineering organizations to evaluate material integrity and detect defects without damaging the component being tested. The NDT sector at INDIAMET brings together manufacturers, technology providers, laboratories, and service specialists covering ultrasonic testing, radiography, eddy current, magnetic particle, dye penetrant, visual inspection, and advanced NDT technologies.

Exhibitors showcase portable and fixed inspection systems for applications across aerospace, automotive, power generation, oil & gas, infrastructure, heavy engineering, fabrication, and other safety-critical industries. Visitors can compare testing technologies based on material type, component geometry, defect characteristics, inspection requirements, and applicable standards.`,
  heroImage: "/images/sectors/ndt.jpg",
  stats: { visitors: "10,000+", exhibitors: "150+", countries: "12+" },
  whyExhibit: [
    {
      title: "Connect with Safety-Critical Industries",
      icon: "🛡️",
      description:
        "Engage professionals from aerospace, automotive, energy, fabrication, infrastructure, and heavy engineering sectors.",
    },
    {
      title: "Showcase Advanced Testing Technologies",
      icon: "🔎",
      description:
        "Demonstrate ultrasonic, radiographic, eddy current, magnetic particle, penetrant, and advanced digital NDT systems.",
    },
    {
      title: "Support Quality & Compliance",
      icon: "📋",
      description:
        "Present NDT solutions that help manufacturers improve inspection reliability and meet applicable quality and industry standards.",
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
        "NDT equipment manufacturers, inspection service providers, testing laboratories, and specialized NDT technology suppliers.",
    },
    {
      question: "Who visits this sector?",
      answer:
        "Quality engineers, NDT inspectors, inspection technicians, maintenance professionals, and compliance specialists.",
    },
    {
      question: "What are the key trends?",
      answer:
        "Digital NDT equipment, phased-array ultrasonics, automated inspection, advanced imaging, and data-driven defect analysis.",
    },
  ],
},

"automation-robotics": {
  title: "Automation, Robotics & Industry 4.0",
  description:
    "Industrial robots, cobots, smart factories, IoT-enabled manufacturing, AI, digital transformation, automated inspection, and factory automation.",
  mainDescription: `Automation and connected manufacturing are transforming how inspection, measurement, and quality processes are performed. The Automation, Robotics & Industry 4.0 sector at INDIAMET showcases industrial robots, collaborative robots, automated inspection cells, IoT-enabled manufacturing systems, AI-based monitoring, and digital technologies supporting smart production and quality operations.

Exhibitors demonstrate how robotics and automation can integrate measurement and inspection directly into production workflows. Visitors can explore automated quality inspection, robotic handling, connected equipment, real-time production monitoring, and digital platforms that link manufacturing data with quality information.`,
  heroImage: "/images/sectors/automation.jpg",
  stats: { visitors: "10,000+", exhibitors: "150+", countries: "12+" },
  whyExhibit: [
    {
      title: "Engage Digital Transformation Leaders",
      icon: "🤖",
      description:
        "Connect with manufacturers investing in automation, robotics, connected inspection, and smart factory technologies.",
    },
    {
      title: "Demonstrate Automated Quality Integration",
      icon: "🔗",
      description:
        "Show how robotics, sensors, vision systems, and inspection technologies integrate into automated production environments.",
    },
    {
      title: "Position for Industry 4.0 Growth",
      icon: "🌐",
      description:
        "Reach decision-makers building connected, data-driven manufacturing and quality ecosystems.",
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
        "Robotics manufacturers, automation integrators, machine vision companies, Industry 4.0 solution providers, and smart manufacturing technology companies.",
    },
    {
      question: "Who visits this sector?",
      answer:
        "Plant managers, automation engineers, production engineers, quality professionals, controls engineers, and digital transformation leaders.",
    },
    {
      question: "What are the key trends?",
      answer:
        "Collaborative robotics, AI-driven process monitoring, automated inspection, connected production systems, and integrated manufacturing data.",
    },
  ],
},

"sensors-instrumentation": {
  title: "Sensors & Industrial Instrumentation",
  description:
    "Industrial sensors, transmitters, data acquisition systems, monitoring devices, precision instrumentation, and process measurement technologies.",
  mainDescription: `Accurate measurement begins with reliable sensing and instrumentation. The Sensors & Industrial Instrumentation sector at INDIAMET focuses on the technologies used to capture, monitor, transmit, and analyze critical industrial parameters. Exhibitors present sensors, transmitters, data acquisition systems, monitoring devices, and instrumentation technologies used across manufacturing, quality, process control, and testing environments.

Visitors can explore sensing solutions for temperature, pressure, force, displacement, vibration, position, flow, and other critical parameters, together with data acquisition and monitoring systems that convert sensor signals into actionable information for quality and process improvement.`,
  heroImage: "/images/sectors/sensors.jpg",
  stats: { visitors: "10,000+", exhibitors: "150+", countries: "12+" },
  whyExhibit: [
    {
      title: "Connect with Instrumentation Engineers",
      icon: "🔌",
      description:
        "Reach process engineers, controls specialists, quality professionals, and instrumentation teams specifying industrial measurement solutions.",
    },
    {
      title: "Showcase Data Acquisition Capability",
      icon: "📡",
      description:
        "Demonstrate how sensors, transmitters, and data acquisition systems deliver reliable real-time measurement data.",
    },
    {
      title: "Support Process Monitoring Upgrades",
      icon: "📈",
      description:
        "Present technologies that improve visibility, monitoring, traceability, and control of critical industrial processes.",
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
        "Industrial sensor manufacturers, instrumentation suppliers, transmitter manufacturers, monitoring solution providers, and data acquisition companies.",
    },
    {
      question: "Who visits this sector?",
      answer:
        "Process engineers, controls engineers, instrumentation professionals, quality engineers, maintenance teams, and plant managers.",
    },
    {
      question: "What are the key trends?",
      answer:
        "Wireless sensing, connected instrumentation, edge-based data processing, predictive condition monitoring, and smart sensors.",
    },
  ],
},

"precision-instruments": {
  title: "Precision Instruments & Measuring Accessories",
  description:
    "Micrometers, calipers, dial gauges, bore gauges, height gauges, precision hand tools, and measuring accessories for accurate shop-floor inspection.",
  mainDescription: `Precision hand and bench instruments remain essential to everyday dimensional inspection across manufacturing environments. The Precision Instruments & Measuring Accessories sector at INDIAMET showcases micrometers, calipers, dial gauges, bore gauges, height gauges, indicators, and other precision instruments used for fast and reliable shop-floor measurement.

Exhibitors present instrument ranges for general workshop inspection as well as demanding high-accuracy applications. Visitors can compare mechanical and digital instruments, accuracy classes, measurement ranges, ergonomics, connectivity options, and accessories designed to improve measurement efficiency and traceability.`,
  heroImage: "/images/instruments.jpg",
  stats: { visitors: "10,000+", exhibitors: "150+", countries: "12+" },
  whyExhibit: [
    {
      title: "Reach Shop-Floor Buyers Directly",
      icon: "📏",
      description:
        "Connect with production engineers, quality inspectors, machinists, toolroom professionals, and supervisors purchasing precision instruments.",
    },
    {
      title: "Showcase Instrument Range & Accuracy",
      icon: "🎯",
      description:
        "Present micrometers, calipers, gauges, indicators, height gauges, and accessories across multiple accuracy and application categories.",
    },
    {
      title: "Build Long-Term Distribution Relationships",
      icon: "🔁",
      description:
        "Develop relationships with industrial distributors, dealers, manufacturing companies, and recurring users of precision measuring instruments.",
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
        "Precision measuring instrument manufacturers, industrial distributors, gauge manufacturers, and measuring accessory suppliers.",
    },
    {
      question: "Who visits this sector?",
      answer:
        "Machinists, quality inspectors, metrology technicians, production engineers, toolroom professionals, and shop-floor supervisors.",
    },
    {
      question: "What are the key trends?",
      answer:
        "Digital instruments, wireless measurement data transfer, connected measuring tools, improved ergonomics, and higher accuracy classes.",
    },
  ],
},

"surface-material-testing": {
  title: "Surface Measurement & Material Testing",
  description:
    "Surface roughness testers, hardness testers, tensile testing machines, material analysis systems, and laboratory testing instruments.",
  mainDescription: `Dimensional accuracy is only one part of product quality. Manufacturers must also verify surface characteristics, hardness, strength, and material properties to ensure components meet engineering specifications. The Surface Measurement & Material Testing sector at INDIAMET brings together manufacturers and technology providers of surface roughness testers, hardness testers, tensile testing machines, material analysis equipment, and laboratory testing systems.

Exhibitors showcase laboratory and portable testing technologies used for incoming material inspection, process verification, research and development, and final product quality assurance. Visitors can explore solutions for evaluating mechanical properties, surface characteristics, material composition, and compliance with required specifications.`,
  heroImage: "/images/sectors/material-testing.jpg",
  stats: { visitors: "10,000+", exhibitors: "150+", countries: "12+" },
  whyExhibit: [
    {
      title: "Connect with Materials Engineering Teams",
      icon: "🧪",
      description:
        "Reach materials engineers, metallurgists, quality professionals, laboratory managers, and R&D teams responsible for material verification.",
    },
    {
      title: "Showcase Testing Accuracy",
      icon: "📊",
      description:
        "Demonstrate hardness, tensile, surface roughness, material analysis, and laboratory testing capabilities.",
    },
    {
      title: "Support Material Compliance Needs",
      icon: "✅",
      description:
        "Present testing technologies that help manufacturers verify material specifications, performance, quality, and applicable standards.",
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
        "Material testing equipment manufacturers, laboratory instrument suppliers, surface measurement companies, and material analysis solution providers.",
    },
    {
      question: "Who visits this sector?",
      answer:
        "Materials engineers, metallurgists, quality laboratory technicians, R&D teams, production engineers, and testing professionals.",
    },
    {
      question: "What are the key trends?",
      answer:
        "Portable testing equipment, automated material analysis, digital surface profiling, connected laboratory systems, and faster testing workflows.",
    },
  ],
},

"cad-cam-software": {
  title: "CAD/CAM, Metrology Software & Digital Manufacturing",
  description:
    "CAD/CAM, reverse engineering, digital twins, metrology software, inspection software, simulation, measurement data management, and manufacturing analytics.",
  mainDescription: `Digital technologies increasingly connect design, manufacturing, inspection, and quality management into a single data-driven workflow. The CAD/CAM, Metrology Software & Digital Manufacturing sector at INDIAMET showcases software platforms supporting measurement programming, inspection planning, reverse engineering, digital twins, CAD-to-part comparison, reporting, simulation, and manufacturing analytics.

Exhibitors demonstrate how integrated digital workflows can reduce inspection programming time, improve measurement consistency, simplify reporting, and connect quality data with manufacturing decisions. Visitors can explore software solutions that enable smarter inspection, better traceability, digital collaboration, and data-driven quality improvement.`,
  heroImage: "/images/sectors/software.jpg",
  stats: { visitors: "10,000+", exhibitors: "150+", countries: "12+" },
  whyExhibit: [
    {
      title: "Connect with Digital Manufacturing Teams",
      icon: "💻",
      description:
        "Reach metrology engineers, quality teams, manufacturing engineers, design professionals, and digital transformation leaders.",
    },
    {
      title: "Showcase Software Integration",
      icon: "🔄",
      description:
        "Demonstrate CAD-to-part comparison, inspection programming, reverse engineering, digital twins, reporting, and measurement data integration.",
    },
    {
      title: "Support Data-Driven Quality",
      icon: "🚀",
      description:
        "Present analytics and digital platforms that transform measurement data into actionable manufacturing and quality decisions.",
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
        "CAD/CAM software developers, metrology software providers, inspection software companies, digital manufacturing platforms, and measurement data solution providers.",
    },
    {
      question: "Who visits this sector?",
      answer:
        "Metrology engineers, quality professionals, design engineers, manufacturing engineers, inspection programmers, and manufacturing IT teams.",
    },
    {
      question: "What are the key trends?",
      answer:
        "Cloud-connected metrology, AI-assisted inspection analysis, digital twins, automated reporting, CAD-to-part comparison, and connected quality data.",
 }, 
], 
}, 
};