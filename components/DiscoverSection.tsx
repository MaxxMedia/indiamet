// components/DiscoverSection.tsx
import SectionContainer from './UI/SectionContainer'

export default function DiscoverSection() {
  return (
    <section className="bg-[#191C1C] py-32 text-white">
      <SectionContainer>
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 lg:border-l lg:border-white/20 lg:pl-14">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.85] tracking-tight">
              Discover <span className="text-[#B80A26]">INDIAMET</span>
            </h2>

            <div className="space-y-6 mt-8 max-w-3xl">
              <p className="text-lg lg:text-xl leading-relaxed">
               Download the Event Brochure to explore India's first dedicated exhibition for metrology, measurement technology, quality assurance, inspection, calibration, testing, and precision engineering. Discover the exhibition highlights, industry sectors, exhibitor profiles, visitor demographics, Summitfeatures, sponsorship opportunities, and the business potential awaiting you at INDIAMET 2027.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed">
                Download now and start planning your success!
              </p>
            </div>

            <a href="/post-show-report" className="inline-block mt-10">
              <button className="rounded-full bg-white text-[#B80A26] px-8 lg:px-10 py-3 lg:py-4 font-semibold hover:bg-[#B80A26] hover:text-white transition-colors">
                Download Brochure
              </button>
            </a>
          </div>

          <div className="lg:col-span-5 grid place-content-center">
  <img
    src="/images/Why-Exhibit/brochure.png"
    alt="Brochure"
    className="w-full max-h-[400px] object-contain rounded-2xl bg-transparent"
  />
</div>

        </div>
      </SectionContainer>
    </section>
  );
}