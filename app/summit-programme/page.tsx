import ConferenceIntro from "@/components/section/SummitIntro"
import ConferenceOverview from "@/components/section/SummitOverview"
import ConferenceStats from "@/components/section/SummitStats"
import KeyTopics from "@/components/section/KeyTopics"
import PartnersSection from "@/components/section/PartnersSection"
import BackToTop from "../exhibitor-resource-center/component/BackToTop"

export default function ConferenceProgrammePage() {
  return (
    <>
      <ConferenceIntro />
      <ConferenceOverview />
      <ConferenceStats />
      <KeyTopics />
      <PartnersSection/>
      <BackToTop/>
    </>
  )
}
