import SectionContainer from '@/components/UI/SectionContainer';
import Link from 'next/link';

export default function ExploreOpportunities() {
  return (
    <section className="py-16">
      <SectionContainer>
        <div className="flex flex-col gap-8">
          <h2 className="title-72 text-black">Explore Opportunities</h2>
          <p className="max-w-6xl whitespace-pre-line text-lg">
            As a participant at INDIAMET 2027, you'll have access to a range of opportunities designed to maximize your exhibition experience. Whether you're exhibiting or visiting, our team is here to help you connect with the right audience, showcase your innovations, discover new technologies, and build valuable business relationships before, during, and after the exhibition.
          </p>
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            {/* <button className="flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#C8102E] px-10 py-3 font-jakarta text-[16px] font-semibold text-white transition-all duration-300 hover:bg-mainColor4">
              Download Guide
            </button> */}
          </Link>
        </div>
      </SectionContainer>
    </section>
  );
}