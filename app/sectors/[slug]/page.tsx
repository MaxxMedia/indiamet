import { notFound } from "next/navigation";
import { sectorDatabase, allSectorSlugs } from "../data";
import SectionContainer from "@/components/UI/SectionContainer";
import QuickNavigation from "@/components/QuickNavigation";
import PartnersSection from "@/components/section/PartnersSection";
import Link from "next/link";
import WhyExhibitCard from "../components/WhyExhibitCard";
import ServiceCard from "../components/ServiceCard";
import FAQCard from "../components/FAQCard";
import BackToTop from "@/app/exhibitor-resource-center/component/BackToTop";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Complete mapping function to convert URL slug to database key
function getDatabaseKeyFromSlug(slug: string): string {
  const slugToKeyMap: Record<string, string> = {
    
    // INDIAMET Sectors - Map to existing INDIAMET sectors in database
    'die-mould-manufacturing': 'die & mould manufacturing',
    'tooling-tool-rom-technologies': 'tooling & cutting tools',
    'cnc-machines': 'machine tools & advanced machining',
    'automation-industry': 'automation & robotics',
    'precision-moulds': 'precision-moulds',
    'tooling-mould-base': 'tooling-mould-base',
    'machining-finishing': 'machining-finishing',
    'cad-cam': 'cad-cam',
    'tool-steel': 'tool-steel',
    'surface-treatment': 'surface-treatment',
    'materials-steels-alloys': 'materials-steels-alloys',
    'die-casting': 'die-casting',
  };
  
  return slugToKeyMap[slug] || slug;
}

// Function to get display name from slug
function getDisplayNameFromSlug(slug: string): string {
  const displayNameMap: Record<string, string> = {
          
    // INDIAMET
    'die-mould-manufacturing': 'Die & Mould',
    'tooling-tool-rom-technologies': 'Tooling',
    'cnc-machines': 'Machine Tools',
    'automation-industry': 'Automation',
    'precision-moulds': 'Precision Moulds',
    'tooling-mould-base': 'Tooling Components',
    'machining-finishing': 'Machining',
    'cad-cam': 'CAD/CAM',
    'tool-steel': 'Tool Steel',
    'surface-treatment': 'Surface Treatment',
    'materials-steels-alloys': 'Materials',
    'die-casting': 'Die Casting',
  };
  
  return displayNameMap[slug] || slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

// Default content for sectors that don't have specific data
function getDefaultSectorContent(slug: string, displayName: string) {
  return {
    title: `${displayName} Solutions`,
    description: `Comprehensive ${displayName.toLowerCase()} solutions for modern logistics and supply chain operations.`,
    mainDescription: `The ${displayName} sector at INDIAMET showcases the latest innovations and solutions in ${displayName.toLowerCase()}. This sector brings together industry leaders, technology providers, and service specialists who are shaping the future of logistics and supply chain management.

Visitors can explore cutting-edge measurement systems, inspection technologies, calibration solutions, and quality assurance innovations while connecting with industry experts and leading brands. From precision instruments and machine vision systems to metrology software and smart inspection technologies, this sector represents the complete ecosystem of modern industrial metrology. ${displayName.toLowerCase()} solutions.

Whether you're looking to improve product quality, enhance manufacturing accuracy, adopt advanced inspection technologies, or build new business partnerships, the ${displayName} sector provides direct access to the latest innovations shaping the future of manufacturing and quality engineering.`,
    heroImage: '/images/precision.jpg',
    stats: {
      visitors: '10,000+',
      exhibitors: '150+',
      countries: '12+'
    },

    whyExhibit: [
      {
        title: "Connect with Industry Leaders",
        icon: "🤝",
        description: `Engage with key decision-makers and professionals in the ${displayName.toLowerCase()} sector.`
      },
      {
        title: "Showcase Your Solutions",
        icon: "🚀",
        description: `Present your ${displayName.toLowerCase()} solutions to a targeted audience of industry professionals.`
      },
      {
        title: "Expand Your Network",
        icon: "🌍",
        description: `Build valuable connections with partners, suppliers, and customers from around the world.`
      }
    ],
    services: [
      "Consulting & Advisory Services",
      "Technology Solutions",
      "Equipment & Machinery",
      "Software & Digital Tools",
      "Training & Support",
      "Maintenance & Repair",
      "Spare Parts & Consumables",
      "Project Management",
      "Quality Assurance",
      "Regulatory Compliance"
    ],
    faqs: [
      {
        question: "What types of companies exhibit in this sector?",
        answer: `Service providers, manufacturers, technology companies, and consultants specializing in ${displayName.toLowerCase()}.`
      },
      {
        question: "Who visits this sector?",
        answer: "Logistics managers, supply chain professionals, operations directors, and procurement specialists."
      },
      {
        question: "What are the key trends?",
        answer: "Digital transformation, sustainability, automation, and integrated supply chain solutions."
      }
    ]
  };
}

export default async function SectorPage({ params }: PageProps) {
  // Await the params Promise
  const { slug } = await params;
  
  // Get the correct database key for this slug
  const databaseKey = getDatabaseKeyFromSlug(slug);
  
  // Get display name for the sector
  const displayName = getDisplayNameFromSlug(slug);
  
  // Try to get the sector data using the mapped key
  let sectorData = sectorDatabase[databaseKey as keyof typeof sectorDatabase];

  // If no data found, use default content
  if (!sectorData) {
    console.log(`No data found for slug: ${slug}, databaseKey: ${databaseKey}, using default content`);
    sectorData = getDefaultSectorContent(slug, displayName);
  }

  return (
    <>
      <main className="bg-white">
        {/* HERO SECTION */}
        <section className="pt-40 pb-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[40px] md:text-[52px] font-bold text-black mt-10">
              {sectorData.title}
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              {sectorData.description}
            </p>

            <div className="mt-10 relative w-full h-[420px] rounded-lg overflow-hidden">
              <img
                src={sectorData.heroImage}
                alt={sectorData.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Drive Excellence with {displayName} Solutions
              </h2>

              <div className="space-y-6 text-gray-700 text-[17px]">
                {sectorData.mainDescription
                  ?.split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>

              {/* STATS */}
              <div className="flex gap-14 mt-14">
                <div>
                  <p className="text-4xl font-bold text-gray-500">
                    {sectorData.stats.visitors}
                  </p>
                  <p className="text-gray-600">Visitors</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gray-500">
                    {sectorData.stats.exhibitors}
                  </p>
                  <p className="text-gray-600">Exhibitors</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gray-500">
                    {sectorData.stats.countries}
                  </p>
                  <p className="text-gray-600">Countries</p>
                </div>
              </div>
            </div>

            <div>
              <img
                src={sectorData.heroImage}
                alt={sectorData.title}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </section>

        {/* WHY EXHIBIT */}
        <section className="py-16 bg-gray-50">
          <SectionContainer>
            <h2 className="text-4xl font-bold text-center mb-16">
              Why Exhibit in {displayName} Sector?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {sectorData.whyExhibit.map((item, index) => (
                <WhyExhibitCard key={index} item={item} index={index} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/exhibiting-enquiry">
                <button className="px-8 py-4 bg-[#F37021] text-white rounded-full">
                  Enquire to Exhibit
                </button>
              </Link>
            </div>
          </SectionContainer>
        </section>

        {/* SERVICES */}
        <section className="py-16 bg-gray-50">
          <SectionContainer>
            <h2 className="text-4xl font-bold text-center mb-16">
              Key Services on Display
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {sectorData.services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </SectionContainer>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <SectionContainer>
            <h2 className="text-4xl font-bold text-center mb-16">
              FAQs for {displayName}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {sectorData.faqs.map((faq, index) => (
                <FAQCard
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                />
              ))}
            </div>
          </SectionContainer>
        </section>

        <QuickNavigation />
        <PartnersSection />
      </main>

      <BackToTop />
    </>
  );
}

export function generateStaticParams() {
  return allSectorSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the params Promise
  const { slug } = await params;
  const databaseKey = getDatabaseKeyFromSlug(slug);
  const displayName = getDisplayNameFromSlug(slug);
  const sectorData = sectorDatabase[databaseKey as keyof typeof sectorDatabase];

  if (!sectorData) {
    return {
      title: `${displayName} | INDIAMET 2027`,
      description: `Explore ${displayName.toLowerCase()} solutions at INDIAMET 2027. Connect with industry leaders and discover innovative solutions.`,
    };
  }

  return {
    title: `${sectorData.title} | INDIAMET 2027`,
    description: sectorData.description,
    openGraph: {
      title: `${sectorData.title} | INDIAMET 2027`,
      description: sectorData.description,
      images: [sectorData.heroImage],
    },
  };
}