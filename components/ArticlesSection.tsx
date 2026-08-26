// components/ArticlesSection.tsx - RESPONSIVE VERSION
import SectionContainer from './UI/SectionContainer'

export default function ArticlesSection() {
  const articles = [
  {
  title: 'The Future of Industrial Metrology: Driving Smart Manufacturing',
  slug: 'future-of-industrial-metrology-driving-smart-manufacturing',
  excerpt: 'Discover how precision measurement, AI-powered inspection, and advanced metrology technologies are transforming modern manufacturing across automotive, aerospace, electronics, and medical devices.',
  image: '/images/industry_metrology.png',
  date: 'August 05, 2026',
},
{
  title: 'Why Precision Measurement is Critical for Next-Generation Manufacturing',
  slug: 'why-precision-measurement-is-critical-for-next-generation-manufacturing',
  excerpt: 'Explore how CMMs, optical metrology, machine vision, and calibration technologies are helping manufacturers improve quality, reduce defects, and achieve global standards.',
  image: '/images/cmm.jpg',
  date: 'August 20, 2026',
},
{
  title: 'Industrial Metrology Trends Shaping the Future of Manufacturing',
  slug: 'future-trends-in-industrial-metrology-and-quality-engineering',
  excerpt: 'From 3D scanning and digital inspection to AI-driven quality control and smart factories, explore the technologies redefining precision manufacturing.',
  image: '/images/3dscanner.png',
  date: 'August 25, 2026',
},
  ]

  return (
    <section className="bg-[#F4F4F4] py-16 sm:py-20 lg:py-24 xl:py-32">
      <SectionContainer>
        {/* HEADER */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight text-black">
            Insights & Industry Trends
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
            <p className="max-w-3xl text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
              Stay informed with the latest developments in industrial metrology, precision measurement, quality engineering, inspection technologies, and smart manufacturing.
            </p>

            <a href="/articles">
              <button className="rounded-full bg-[#B80A26] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white hover:bg-[#0A66C2] transition">
                View all articles
              </button>
            </a>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 xl:grid-cols-[60%_40%] gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* LEFT FEATURED */}
          <div>
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="h-[250px] sm:h-[300px] lg:h-[350px] xl:h-[420px] w-full rounded-xl sm:rounded-2xl object-cover"
            />

            <span className="mt-4 sm:mt-6 block text-xs sm:text-sm font-medium text-[#0054A6]">
              {articles[0].date}
            </span>

            <a href={`/articles/${articles[0].slug}`}>
              <h3 className="mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold leading-tight text-black hover:text-[#0054A6] transition">
                {articles[0].title}
              </h3>
            </a>

            <p className="mt-3 sm:mt-4 max-w-[680px] text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 line-clamp-2">
              {articles[0].excerpt}
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 max-w-[520px]">
            {articles.slice(1).map((article, index) => (
              <div key={index} className="flex gap-4 sm:gap-6 items-start">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-[120px] sm:h-[150px] lg:h-[180px] xl:h-[200px] w-[140px] sm:w-[180px] lg:w-[220px] xl:w-[250px] rounded-lg sm:rounded-xl object-cover flex-shrink-0"
                />

                <div>
                  <span className="block text-xs sm:text-sm font-medium text-[#0054A6]">
                    {article.date}
                  </span>

                  <a href={`/articles/${article.slug}`}>
                    <h4 className="mt-1 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold leading-snug text-black hover:text-[#0054A6] transition">
                      {article.title}
                    </h4>
                  </a>

                  <p className="mt-2 text-xs sm:text-sm lg:text-base leading-relaxed text-gray-700 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}