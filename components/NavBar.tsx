"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import Button from "./UI/Button"
import Image from "next/image"

type NavItem = {
  title: string
  dropdown: boolean
  href?: string
  links?: { text: string; href: string }[]
}

const navItems: NavItem[] = [
  {
    title: "EXHIBIT",
    dropdown: true,
    links: [
      { text: "WHY EXHIBIT", href: "/why-exhibit" },
      { text: "BECOME AN EXHIBITOR", href: "/exhibiting-enquiry" },
      { text: "EVENT SECTORS", href: "/sectors" },
      { text: "EXHIBITOR LIST", href: "/exhibition-directory" },
      {
        text: "EXHIBITOR RESOURCES",
        href: "/exhibitor-resource-center",
      },
      { text: "EXHIBITOR PROMOTIONS", href: "/free-promo" },
      { text: "FLOOR PLAN", href: "/layout" },
      { text: "PLAN YOUR TRAVEL", href: "/plan-your-travel" },
    ],
  },
  {
    title: "VISIT",
    dropdown: true,
    links: [
      { text: "WHY VISIT", href: "/why-visit" },
      { text: "EVENT SECTORS", href: "/sectors" },
      { text: "EXHIBITOR LIST", href: "/exhibition-directory" },
      { text: "DOWNLOAD EVENT BROCHURE", href: "/event-brochure" },
    ],
  },
  {
    title: "ABOUT",
    dropdown: true,
    links: [
      { text: "ABOUT INDIAMET", href: "/about-indiamet" },
      { text: "ABOUT THE ORGANIZER", href: "/about-organizer" },
      { text: "PARTNERS & SPONSORS", href: "/partners-and-sponsors" },
    ],
  },

  { title: "SUMMIT", dropdown: false, href: "/summit" },
  {
    title: "GMEA AWARDS",
    dropdown: true,
    links: [
      {text: "AWARD CATEGORIES", href: "/awards"},
      { text: "NOMINATE", href: "/Nominate" },
      { text: "SPONSOR", href: "/Sponsor" },
    ],
  },
  { title: "CONTACT US", dropdown: false, href: "/contact-us" },
];

const EVENT_DATE = new Date("2027-04-22T10:00:00").getTime()

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const [timeLeft, setTimeLeft] = useState({
    days: 35,
    hours: 0,
    minutes: 29,
  })

  /* ================= MOUNT CHECK ================= */
  useEffect(() => {
    setIsMounted(true)
  }, [])

  /* ================= TIMER ================= */
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now()
      const diff = EVENT_DATE - now

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  /* ================= SCROLL ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* ================= PREVENT BODY SCROLL WHEN MOBILE MENU OPEN ================= */
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-[999] font-parabolica">
        <div className={`px-2 sm:px-4 md:px-6 lg:px-8 transition-all duration-300 ${scrolled ? "pt-1.5 sm:pt-2" : "pt-2 sm:pt-3 md:pt-4"}`}>
          <div className="mx-auto max-w-[1800px]">
            {/* ================= MOBILE NAVBAR ================= */}
            <div className="lg:hidden w-full absolute top-0 left-0 right-0 z-50">
              <div className="bg-[#01163A] text-white w-full">

                {/* HEADER */}
                <div className="relative flex items-center justify-between w-full px-4 py-3 min-h-[72px]">

                  {/* LOGO */}
                  <Link
                    href="/"
                    className="relative flex-shrink-0 w-[325px] h-[158px]"
                  >
                    <Image
                      src="/images/indiamet_logo.png"
                      alt="INDIAMET 2027 Logo"
                      fill
                      className="object-contain object-left"
                      sizes="275px"
                      priority
                    />
                  </Link>

                  {/* RIGHT SIDE ACTIONS */}
                  <div className="flex items-center gap-2 ml-auto">

                    {/* EXHIBITOR LOGIN */}
                    <Link
                      href="/login"
                      className="flex items-center justify-center gap-1.5 rounded-full bg-[#FF6A00] text-white px-3 py-2 text-[11px] font-bold whitespace-nowrap shadow-md active:scale-95 transition-all"
                    >
                      <span>LOGIN</span>
                    </Link>

                    {/* MENU BUTTON */}
                    <button
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all flex-shrink-0"
                      aria-label="Toggle menu"
                    >
                      {mobileMenuOpen ? (
                        <X className="w-5 h-5" />
                      ) : (
                        <Menu className="w-5 h-5" />
                      )}
                    </button>

                  </div>
                </div>

                {/* EVENT INFO */}
                <div className="px-4 pb-3 overflow-hidden">
                  <div className="text-[11px] sm:text-[12px] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                    INTERNATIONAL METROLOGY EXHIBITION & SUMMIT
                  </div>

                  <div className="mt-1 text-[10px] sm:text-[11px] text-white whitespace-nowrap overflow-hidden text-ellipsis">
                    22 - 24 APRIL 2027 · PUNE,INDIA
                  </div>
                </div>

              </div>

              {/* TIME BAR
              <div className="flex items-center gap-2 pl-4 mt-0"> */}

                {/* COUNTDOWN */}
                {/* <div className="relative z-[1001]">
                  <div
                    className="flex items-center gap-1.5 rounded-b-xl bg-[#FF6A00] px-3 py-1 text-[11px] sm:text-[12px] text-white whitespace-nowrap"
                  >
                    <span className="font-medium">
                      {timeLeft.days} Days
                    </span>

                    <span className="font-medium">
                      {timeLeft.hours} Hours
                    </span>

                    <span className="font-medium">
                      {timeLeft.minutes} Mins
                    </span>
                  </div>
                </div> */}

                {/* EXHIBITOR LOGIN */}
                {/* <Link
                  href="/login"
                  className="relative z-[1001]"
                >
                  <div
                    className="flex items-center rounded-b-xl bg-[#FF6A00] border border-white/10 px-3 py-1 text-[11px] sm:text-[12px] text-white font-bold whitespace-nowrap cursor-pointer hover:bg-[#FF6A00] active:scale-95 transition-all shadow-md"
                  >
                    EXHIBITOR LOGIN
                  </div>
                </Link>

              </div>*/}
            </div> 

            {/* ================= DESKTOP NAVBAR ================= */}
            <div className="hidden lg:block rounded-xl sm:rounded-2xl lg:rounded-3xl bg-[#01163A] text-white shadow-xl">
              {/* Flex container maintaining exact same structure */}
              <div className="flex items-center justify-between gap-3 xl:gap-5 2xl:gap-6 px-4 xl:px-6 2xl:px-8 py-3 xl:py-4 2xl:py-5 min-h-[112px] xl:min-h-[120px] 2xl:min-h-[128px]">

                {/* ================= LEFT SECTION: LOGO + EVENT INFO ================= */}
                <div className="flex items-center gap-1 sm:gap-8.5 md:gap-10 flex-shrink-0 min-w-0">
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                    {/* Logo with fluid sizing */}
                    <div className="relative w-[clamp(90px,7.5vw,135px)] h-[clamp(60px,5.5vw,88px)] flex-shrink-0">
                      <Image
                        src="/images/indiamet_logo.png"
                        alt="INDIAMET 2027 Logo"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1023px) 110px, 135px"
                        priority
                      />
                    </div>

                    {/* Divider */}
                    <span className="hidden md:block h-5 lg:h-6 xl:h-8 w-px bg-white/70 mx-1"></span>
                  </div>

                  {/* Event Info with fluid typography */}
                  <div className="md:flex flex-col font-parabolica min-w-0 ml-1 lg:ml-2">
                    <span className="text-[clamp(12px,1vw,18px)] leading-tight whitespace-nowrap font-bold">
                      22 - 24 APRIL 2027
                    </span>
                    <span className="text-[clamp(11px,0.9vw,18px)] leading-tight whitespace-nowrap truncate max-w-[clamp(120px,15vw,240px)]">
                      Auto Cluster Exhibition Center, Pune, India
                    </span>
                  </div>
                </div>

                {/* ================= CENTER: NAVIGATION ================= */}
                <nav className="hidden lg:flex items-center gap-[clamp(4px,0.6vw,14px)] font-parabolica flex-shrink min-w-0">
                  {navItems.map((item, i) =>
                    item.dropdown ? (
                      <div
                        key={i}
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown(i)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <button className="flex items-center gap-0.5 lg:gap-0.5 xl:gap-1 hover:text-gray-200 relative whitespace-nowrap transition-colors px-0.5 lg:px-1">
                          <span className={`relative font-medium text-[13px]`}>
                            {item.title}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] lg:h-[2px] bg-[#FF6A00] group-hover:w-full transition-all duration-300"></span>
                          </span>
                          <ChevronDown className={`h-2 w-2 lg:h-2.5 lg:w-2.5 xl:h-3 xl:w-3 transition-transform duration-300 ${activeDropdown === i ? "rotate-180" : ""}`} />
                        </button>

                        {activeDropdown === i && item.links && (
                          <div className="absolute left-0 top-full pt-1.5 lg:pt-2 z-50">
                            <div className="min-w-[160px] lg:min-w-[170px] xl:min-w-[200px] rounded-lg bg-white py-1 lg:py-1.5 shadow-xl text-gray-800 border border-gray-100">
                              {item.links.map((link, j) => (
                                <Link
                                  key={j}
                                  href={link.href}
                                  className="block px-2 lg:px-3 xl:px-4 py-1 lg:py-1.5 xl:py-2 text-[clamp(10px,0.7vw,13px)] hover:bg-gray-100 relative group/item whitespace-nowrap transition-colors"
                                >
                                  <span className="relative">
                                    {link.text}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-blue-600 group-hover/item:w-full transition-all duration-300"></span>
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={i}
                        href={item.href!}
                        className="hover:text-gray-200 relative group whitespace-nowrap transition-colors px-0.5 lg:px-1"
                      >
                        <span className={`relative font-medium text-[13px]`}>
                          {item.title}
                          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] lg:h-[2px] bg-[#FF6A00] group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </Link>
                    )
                  )}
                </nav>

                {/* ================= RIGHT: CTA BUTTONS ================= */}
                <div className="hidden lg:flex items-center gap-[clamp(4px,0.5vw,12px)] flex-shrink-0">
                  <Button
                    href="/exhibiting-enquiry"
                    className="bg-[#FF6A00] hover:bg-[#FF6A00] px-[clamp(8px,0.7vw,16px)] py-[clamp(4px,0.5vw,10px)] whitespace-nowrap transition-all text-[clamp(8px,0.6vw,13px)] font-bold rounded-full"
                  >
                    EXHIBITOR REGISTRATION
                  </Button>
                  <Button
                    href="/visitor-registration"
                    className="bg-[#FF6A00] hover:bg-[#FF6A00] px-[clamp(8px,0.7vw,16px)] py-[clamp(4px,0.5vw,10px)] whitespace-nowrap transition-all text-[clamp(8px,0.6vw,13px)] font-bold rounded-full"
                  >
                    VISITOR REGISTRATION
                  </Button>
                </div>
              </div>
            </div>

            {/* ================= COUNTDOWN + LOGIN (desktop) ================= */}
            {!scrolled && (
              <div className="hidden lg:flex justify-end w-full pr-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-4 rounded-b-xl bg-[#01163A] px-4 py-1 text-[clamp(11px,0.7vw,14px)] text-white shadow-md">
                    <span className="font-medium">{timeLeft.days} Days</span>
                    <span className="font-medium">{timeLeft.hours} Hours</span>
                    <span className="font-medium">{timeLeft.minutes} Mins</span>
                  </div>
                  <Link href="/login">
                    <div className="flex items-center rounded-b-xl bg-[#01163A] px-3 py-1 text-[clamp(11px,0.7vw,14px)] text-white font-bold cursor-pointer hover:bg-[#FF6A00] active:scale-95 transition-all shadow-md">
                      EXHIBITOR LOGIN
                    </div>
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/30 z-[998]"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Dropdown Menu */}
          <div
            className={`lg:hidden fixed top-[64px] left-0 right-0 z-[9999] mt-2 bg-white text-gray-900 shadow-xl rounded-xl mx-2`}
            style={{ animation: "slideDown 0.25s ease-out" }}
          >
            {/* Dropdown Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <span className="text-sm font-semibold">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full p-1.5 hover:bg-gray-100 active:scale-95"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-gray-700" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="px-4 py-4">
              <div className="space-y-1">
                {navItems.map((item, i) =>
                  item.dropdown && item.links ? (
                    <div key={i} className="border-b border-gray-200 last:border-0">
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === i ? null : i)
                        }
                        className="w-full flex items-center justify-between text-sm font-semibold py-3"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${activeDropdown === i ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {activeDropdown === i && (
                        <div className="pb-3 pl-3">
                          {item.links.map((link, j) => (
                            <Link
                              key={j}
                              href={link.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                            >
                              {link.text}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={i}
                      href={item.href!}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-semibold py-3 border-b border-gray-200 last:border-0"
                    >
                      {item.title}
                    </Link>
                  )
                )}
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 space-y-3">
                <Button
                  href="/exhibiting-enquiry"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#FF6A00] text-white text-sm py-3 font-semibold rounded-md w-full"
                >
                  EXHIBITOR REGISTRATION
                </Button>
                <Button
                  href="/visitor-registration"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#FF6A00] text-white text-sm py-3 font-semibold rounded-md w-full"
                >
                  VISITOR REGISTRATION
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* CSS Animations */}
      <style jsx global>{`
  @keyframes slideDown {
    from {
      transform: translateY(-12px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`}</style>

    </>
  )
}