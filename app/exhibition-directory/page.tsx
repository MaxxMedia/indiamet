import CompanyDirectory from "./company-directory"

export const metadata = {
  title: 'Exhibitor Directory - INDIAMET Exhibition',
  description: 'Browse participating companies in the INDIAMET 2027 exhibition',
}

export default function Home() {
  return <CompanyDirectory />
}