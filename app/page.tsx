import { Metadata } from 'next'
import HomeContent from './home-content'

export const metadata: Metadata = {
  title: "Group of Companies | OCI, TCI, WDS",
  description: "Your Trusted Partner For Speciality Technology And Process since 1996. House of OCI, TCI, and WDS Synthetic Polymers.",
  keywords: ["Oriental Chemical Industries", "Textile Chemical Industries", "WDS Synthetic Polymer", "Chemicals Pakistan"],
  alternates: {
    canonical: "https://your-domain.com",
  },
}

export default function Home() {
  return (
    <>
      <HomeContent />
    </>
  )
}