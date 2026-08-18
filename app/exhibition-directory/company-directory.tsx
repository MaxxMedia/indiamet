'use client'

import { useState, useEffect } from 'react'
import CompanyGrid from './company-grid'
import { useRouter } from 'next/navigation'
import { Search, ChevronDown, Filter, X, Loader2 } from 'lucide-react'
import BackToTop from '../exhibitor-resource-center/component/BackToTop'
import { fetchExhibitionCompanies, ExhibitionCompany } from './api'
import SectionContainer from '@/components/UI/SectionContainer'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function CompanyDirectory() {
  const router = useRouter()
  const [companies, setCompanies] = useState<ExhibitionCompany[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [viewMode, setViewMode] = useState<'grid' | 'gallery' | 'list'>('grid')
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const companiesPerPage = 24

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Fetch companies
  useEffect(() => {
    const loadCompanies = async () => {
      setLoading(true)
      setError(null)
      try {
        const result = await fetchExhibitionCompanies(currentPage, companiesPerPage, searchQuery)
        setCompanies(result.companies)
        setTotalPages(result.totalPages)
      } catch (err) {
        setError('Failed to load exhibitors. Please try again.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    // Debounce search
    const timeoutId = setTimeout(() => {
      loadCompanies()
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [currentPage, searchQuery])

  // Filter by letter (client-side filtering)
  const filteredCompanies = selectedLetter
    ? companies.filter(company =>
      company.company?.toUpperCase().startsWith(selectedLetter)
    )
    : companies

  // In the handleProductBrochure function, update to use company name for slug
  const handleProductBrochure = (companyId: string, companyName: string) => {
    // Use the actual company name for the URL slug
    const slug = companyName.toLowerCase().replace(/\s+/g, '-')
    router.push(`/exhibition-directory/${companyId}`) // Keep using ID for now
    // Or if you want to use slug: router.push(`/exhibition-directory/${slug}`)
  }

  // Pagination range
  const getPaginationRange = () => {
    if (isMobile) {
      const start = Math.max(1, currentPage - 1)
      const end = Math.min(totalPages, start + 1)
      return Array.from({ length: end - start + 1 }, (_, i) => start + i)
    } else {
      const maxPages = 5
      let start = Math.max(1, currentPage - Math.floor(maxPages / 2))
      let end = Math.min(totalPages, start + maxPages - 1)

      if (end - start + 1 < maxPages) {
        start = Math.max(1, end - maxPages + 1)
      }

      return Array.from({ length: Math.min(maxPages, totalPages) }, (_, i) => start + i)
    }
  }

  if (loading && companies.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-slate-600 mx-auto mb-4" />
          <p className="text-slate-600">Loading exhibitors...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden pt-20 lg:pt-24 xl:pt-28">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/images/why-exhibit-header.JPG")`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

        <SectionContainer>
          <div className="relative z-10 min-h-[60vh] lg:min-h-[70vh] flex items-center pt-20 lg:pt-24 xl:pt-28">
            <div className="max-w-7xl text-white">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-parabolica text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold"
              >
                Exhibition Directory
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 text-sm sm:text-base lg:text-lg text-white/90 max-w-5xl"
              >
                Explore the leading companies and innovators in metrology, measurement technology,
                quality assurance, and precision engineering exhibiting at INDIAMET 2027.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4 mt-6"
              >
                <div className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
                  <span className="flex items-center gap-2">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-5 shrink-0 fill-[#B80A26]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path>
                    </svg>
                    150+ Exhibitors
                  </span>

                  <span className="flex items-center gap-2">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-5 shrink-0 fill-[#B80A26]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path>
                    </svg>
                    12+ Countries
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-6"
              >
                <Link href="/exhibiting-enquiry">
                  <button className="bg-[#B80A26] hover:bg-[#B80A26]/90 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors">
                    EXHIBIT AT INDIAMET 2027 →
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* ================= Top Navigation Bar ================= */}
      {/* <div className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 md:py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
              aria-label="Filter options"
            >
              <Filter size={20} />
            </button>

            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                aria-label="Grid view"
              >
                <GridIcon />
              </button>
              <button
                onClick={() => setViewMode('gallery')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'gallery'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                aria-label="Gallery view"
              >
                <GalleryIcon />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                aria-label="List view"
              >
                <ListIcon />
              </button>
            </div>

            <div className="hidden md:flex flex-1 max-w-xs ml-6">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search companies..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-3 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search companies..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* Error display */}
      {error && (
        <div className="fixed top-20 left-0 right-0 z-40 max-w-7xl mx-auto px-4">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        </div>
      )}

      <main className="pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Alphabetical Filter */}
        <div className="mb-6 md:mb-8 mt-6">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            <button
              onClick={() => {
                setSelectedLetter(null)
                setCurrentPage(1)
              }}
              className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-colors ${!selectedLetter
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                }`}
            >
              All
            </button>

            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((letter) => (
                <button
                  key={letter}
                  onClick={() => {
                    setSelectedLetter(letter)
                    setCurrentPage(1)
                  }}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded text-sm font-medium transition-colors border flex items-center justify-center ${selectedLetter === letter
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                    }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          <div className="text-sm text-slate-600 mt-4">
            Showing {filteredCompanies.length} companies {selectedLetter && `starting with "${selectedLetter}"`}
          </div>
        </div>

        {/* Companies Grid */}
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-slate-600" />
          </div>
        ) : (
          <CompanyGrid
            companies={filteredCompanies}
            viewMode={viewMode}
            onProductBrochureClick={handleProductBrochure}
          />
        )}

        {/* Pagination */}
        {!loading && filteredCompanies.length > 0 && (
          <div className="mt-8 md:mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-600">
                Page {currentPage} of {totalPages}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${currentPage === 1
                      ? 'text-slate-400 cursor-not-allowed'
                      : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  <ChevronLeft />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                <div className="flex items-center gap-1">
                  {getPaginationRange().map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm font-medium flex items-center justify-center transition-colors ${currentPage === page
                          ? 'bg-slate-900 text-white'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                        }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${currentPage === totalPages
                      ? 'text-slate-400 cursor-not-allowed'
                      : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!loading && filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No companies found</h3>
            <p className="text-slate-600 max-w-md mx-auto">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedLetter(null)
                setCurrentPage(1)
              }}
              className="mt-4 px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
      <BackToTop />
    </div>
  )
}

// Icons remain the same...
function GridIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  )
}

function GalleryIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 4h16v16H4V4zm2 4v8l6-4-6-4z" />
    </svg>
  )
}

function ListIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="2" />
      <rect x="3" y="11" width="18" height="2" />
      <rect x="3" y="18" width="18" height="2" />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}