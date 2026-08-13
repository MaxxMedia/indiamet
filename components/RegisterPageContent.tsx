'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import INDIAMETTabbedFormWrapper from '@/components/INDIAMETTabbedFormWrapper';
import PartnersSlider from '@/components/section/PartnersSection';
import SectionContainer from '@/components/UI/SectionContainer';
import BackToTop from '@/app/exhibitor-resource-center/component/BackToTop';
import {
    REGISTRATION_HERO,
    RegistrationTab,
    buildRegisterUrl,
    isValidRegistrationTab,
} from '@/lib/registrationRoutes';

export default function RegisterPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState<RegistrationTab>('enquiry');

    useEffect(() => {
        const tab = searchParams.get('t');

        if (!isValidRegistrationTab(tab)) {
            router.replace(buildRegisterUrl('enquiry', searchParams.toString()));
            setActiveTab('enquiry');
            return;
        }

        setActiveTab(tab);
    }, [searchParams, router]);

    const hero = useMemo(() => REGISTRATION_HERO[activeTab], [activeTab]);

    return (
        <main className="bg-white font-parabolica">
            <section
                className="
                    relative bg-[#F4FAFF] overflow-hidden
                    pt-[100px] xs:pt-[110px] sm:pt-[120px] md:pt-[100px] lg:pt-0
                    min-h-[45vh] xs:min-h-[48vh] sm:min-h-[52vh] md:min-h-[56vh] lg:min-h-[60vh] xl:min-h-[70vh]
                "
            >
                <SectionContainer>
                    <div
                        className="
                            relative z-10 flex items-end
                            min-h-[calc(45vh-100px)] xs:min-h-[calc(48vh-110px)] sm:min-h-[calc(52vh-120px)] md:min-h-[calc(56vh-100px)] lg:min-h-[60vh] xl:min-h-[70vh]
                            pb-10 sm:pb-12 md:pb-14 lg:pb-14 xl:pb-16
                        "
                    >
                        <div>
                            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                                {hero.title}
                            </h1>
                            <p className="mt-3 sm:mt-4 max-w-7xl text-sm sm:text-base md:text-lg text-gray-600">
                                {hero.subtitle}
                            </p>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            <section className="py-10 sm:py-16">
                <SectionContainer>
                    <div className="max-w-6xl mx-auto">
                        <INDIAMETTabbedFormWrapper defaultTab={activeTab} useRegisterRouting />
                    </div>
                </SectionContainer>
            </section>

            {activeTab === 'brochure' && (
                <section className="py-12 sm:py-20 bg-gray-50">
                    <SectionContainer>
                        <PartnersSlider />
                    </SectionContainer>
                </section>
            )}

            <BackToTop />
        </main>
    );
}