"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, } from "lucide-react"
import Button from "./UI/Button"
import Image from "next/image"

type NavItem = {
  title: string
  shortTitle?: string
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

  {
    title: "SUMMIT",
    dropdown: true,
    links: [
      { text: "SUMMIT AGENDA", href: "/summit" },
      { text: "DELEGATE", href: "/became-delegate" },
      { text: "SPONSOR", href: "/become-partner" },
    ],
  },
  {
    title: "GMEA AWARDS",
    shortTitle: "AWARDS",
    dropdown: true,
    links: [
      { text: "AWARD CATEGORIES", href: "/awards" },
      { text: "NOMINATE", href: "/Nominate" },
      { text: "SPONSOR", href: "/Sponsor" },
    ],
  },
  { title: "CONTACT US", shortTitle: "CONTACT", dropdown: false, href: "/contact-us" },
]

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

  // Measured height of the mobile/tablet header block, used to position the
  // dropdown menu directly beneath it instead of a hardcoded pixel value.
  const mobileHeaderRef = useRef<HTMLDivElement>(null)
  const [mobileHeaderHeight, setMobileHeaderHeight] = useState(112)

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
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  /* ================= MEASURE MOBILE HEADER HEIGHT ================= */
  useEffect(() => {
    const measure = () => {
      if (mobileHeaderRef.current) {
        setMobileHeaderHeight(mobileHeaderRef.current.offsetHeight)
      }
    }
    measure()
    window.addEventListener("resize", measure)
    // Re-measure shortly after mount in case fonts/images shift layout
    const t = setTimeout(measure, 150)
    return () => {
      window.removeEventListener("resize", measure)
      clearTimeout(t)
    }
  }, [])

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-[999] font-parabolica">
        <div className={`px-2 sm:px-4 md:px-6 lg:px-8 transition-all duration-300 ${scrolled ? "pt-1.5 sm:pt-2" : "pt-2 sm:pt-3 md:pt-4"}`}>
          <div className="mx-auto max-w-[1800px]">
            {/* ================= MOBILE / TABLET NAVBAR =================
                Covers everything below xl (1280px): phones through tablets
                and small laptops. Sizing now scales through sm -> md so
                tablets get noticeably larger type/controls instead of
                reusing phone-sized values all the way up to 1280px.
                NOTE: this file previously used `xs:` classes, which is not
                a default Tailwind breakpoint. Unless a custom `xs` screen
                is defined in tailwind.config, those classes are silently
                ignored by the JIT compiler and do nothing. Replaced with
                the arbitrary variant `xs:` below, which works
                out of the box with no config changes required. */}
            <div
              ref={mobileHeaderRef}
              className="xl:hidden w-full absolute top-0 left-0 right-0 z-50"
            >
              <div className="bg-[#01163A] text-white w-full">
                {/* HEADER */}
                <div className="relative flex items-center justify-between gap-2 w-full px-3 xs:px-4 sm:px-6 md:px-8 py-2.5 xs:py-3 sm:py-4 md:py-5 min-h-[64px] xs:min-h-[72px] sm:min-h-[84px] md:min-h-[96px]">
                  {/* LOGO — flex-1 + min-w-0 lets this shrink to whatever
                      space is left after the LOGIN button and menu icon
                      (which must never shrink) take their fixed width.
                      The previous w-[38vw] + min-w-[130px] combo was a
                      rigid width that, added to the fixed-size right side,
                      could exceed the viewport on narrow phones — which is
                      exactly what was forcing the side-scroll. */}
                  <Link
                    href="/"
                    className="relative flex-1 min-w-0 max-w-[220px] sm:max-w-[260px] md:max-w-[300px] h-[42px] xs:h-[50px] sm:h-[64px] md:h-[72px]"
                  >
                    <Image
                      src="/images/indiamet_logo.png"
                      alt="INDIAMET 2027 Logo"
                      fill
                      className="object-contain object-left"
                      sizes="(max-width: 360px) 130px, (max-width: 480px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 260px, 300px"
                      priority
                    />
                  </Link>

                  {/* RIGHT SIDE ACTIONS */}
                  <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
                    {/* EXHIBITOR LOGIN */}
                    <Link
                      href="/login"
                      className="flex items-center justify-center gap-1 rounded-full bg-[#FF6A00] text-white px-2.5 xs:px-3 sm:px-4 md:px-5 py-1.5 xs:py-2 sm:py-2.5 md:py-3 text-[10px] xs:text-[11px] sm:text-[13px] md:text-[14px] font-bold whitespace-nowrap shadow-md active:scale-95 transition-all"
                    >
                      <span>LOGIN</span>
                    </Link>

                    {/* MENU BUTTON */}
                    <button
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      className="flex items-center justify-center w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all flex-shrink-0"
                      aria-label="Toggle menu"
                    >
                      {mobileMenuOpen ? (
                        <X className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6" />
                      ) : (
                        <Menu className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6" />
                      )}
                    </button>
                  </div>
                </div>

                {/* EVENT INFO */}
                <div className="px-3 xs:px-4 sm:px-6 md:px-8 pb-2.5 xs:pb-3 md:pb-4 overflow-hidden">
                  <div className="text-[9.5px] xs:text-[11px] sm:text-[13px] md:text-[15px] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                    Auto Cluster Exhibition Center
                  </div>

                  <div className="mt-1 text-[9px] xs:text-[10px] sm:text-[12px] md:text-[13px] text-white whitespace-nowrap overflow-hidden text-ellipsis">
                    PUNE, INDIA
                  </div>
                </div>
              </div>
            </div>

            {/* ================= DESKTOP NAVBAR =================
                Only takes over at xl (1280px) and up, where the full
                row of logo + date + 6 nav items + 2 CTA buttons has room
                to breathe. */}
            <div className="hidden xl:block rounded-xl sm:rounded-2xl lg:rounded-3xl bg-[#01163A] text-white shadow-xl">
              <div className="flex items-center justify-between gap-2 xl:gap-5 2xl:gap-6 px-3 xl:px-6 2xl:px-8 py-3 xl:py-4 2xl:py-5 min-h-[104px] xl:min-h-[120px] 2xl:min-h-[128px]">
                {/* ================= LEFT SECTION: LOGO + EVENT INFO ================= */}
                <div className="flex items-center gap-1 sm:gap-8.5 md:gap-10 flex-shrink-0 min-w-0">
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                    <div className="relative w-[clamp(80px,7vw,135px)] h-[clamp(54px,5vw,88px)] flex-shrink-0">
                      <Image
                        src="/images/indiamet_logo.png"
                        alt="INDIAMET 2027 Logo"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1279px) 100px, 135px"
                        priority
                      />
                    </div>

                    <span className="hidden md:block h-5 lg:h-6 xl:h-8 w-px bg-white/70 mx-1"></span>
                  </div>

                  {/* Event Info with fluid typography */}
                  <div className="md:flex flex-col font-parabolica min-w-0 ml-1 lg:ml-2">
                    <span className="text-[clamp(12px,1vw,18px)] leading-tight whitespace-nowrap truncate max-w-[clamp(100px,13vw,240px)]">
                      22 - 24 APRIL 2027
                    </span>

                    <span className="text-[clamp(11px,0.9vw,18px)] leading-tight whitespace-normal block">
                      Auto Cluster Exhibition Center
                      <br />
                      Pune India
                    </span>
                  </div>
                </div>


                {/* ================= CENTER: NAVIGATION ================= */}
                <nav className="hidden xl:flex items-center gap-[clamp(4px,0.6vw,14px)] font-parabolica flex-shrink min-w-0">
                  {navItems.map((item, i) =>
                    item.dropdown ? (
                      <div
                        key={i}
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown(i)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <button className="flex items-center gap-0.5 lg:gap-0.5 xl:gap-1 hover:text-gray-200 relative whitespace-nowrap transition-colors px-0.5 lg:px-1">
                          <span className={`relative font-medium text-[clamp(14px,0.9vw,17px)]`}>
                            {/* shortTitle (when present) shows at xl, the
                                full title takes over at 2xl once there's
                                more horizontal room. */}
                            {item.shortTitle ? (
                              <>
                                <span className="2xl:hidden">{item.shortTitle}</span>
                                <span className="hidden 2xl:inline">{item.title}</span>
                              </>
                            ) : (
                              item.title
                            )}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] lg:h-[2px] bg-[#FF6A00] group-hover:w-full transition-all duration-300"></span>
                          </span>

                          <ChevronDown
                            className={`h-2 w-2 lg:h-2.5 lg:w-2.5 xl:h-3 xl:w-3 transition-transform duration-300 ${activeDropdown === i ? "rotate-180" : ""
                              }`}
                          />
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
                        <span className={`relative font-medium text-[clamp(14px,0.9vw,17px)]`}>
                          {item.shortTitle ? (
                            <>
                              <span className="2xl:hidden">{item.shortTitle}</span>
                              <span className="hidden 2xl:inline">{item.title}</span>
                            </>
                          ) : (
                            item.title
                          )}
                          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] lg:h-[2px] bg-[#FF6A00] group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </Link>
                    )
                  )}
                </nav>


                {/* ================= RIGHT: CTA BUTTONS ================= */}
                <div className="hidden xl:flex items-center gap-[clamp(3px,0.4vw,12px)] flex-shrink-0">
                  <Button
                    href="/exhibiting-enquiry"
                    className="bg-[#FF6A00] hover:bg-[#FF6A00] px-[clamp(6px,0.6vw,16px)] py-[clamp(4px,0.5vw,10px)] whitespace-nowrap transition-all text-[clamp(7px,0.55vw,13px)] font-bold rounded-full"
                  >

                    EXHIBITOR REG
                  </Button>
                  <Button
                    href="/visitor-registration"
                    className="bg-[#FF6A00] hover:bg-[#FF6A00] px-[clamp(6px,0.6vw,16px)] py-[clamp(4px,0.5vw,10px)] whitespace-nowrap transition-all text-[clamp(7px,0.55vw,13px)] font-bold rounded-full"
                  >
                    VISITOR REG
                  </Button>
                </div>
              </div>
            </div>

            {/* ================= COUNTDOWN + LOGIN (desktop) ================= */}
            {!scrolled && (
              <div className="hidden xl:flex justify-end w-full pr-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-4 rounded-b-xl bg-[#01163A] px-4 py-1 text-[clamp(11px,0.7vw,14px)] text-white shadow-md">
                    <span className="font-medium">{isMounted ? timeLeft.days : "--"} Days</span>
                    <span className="font-medium">{isMounted ? timeLeft.hours : "--"} Hours</span>
                    <span className="font-medium">{isMounted ? timeLeft.minutes : "--"} Mins</span>
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
            className="xl:hidden fixed inset-0 bg-black/30 z-[998]"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Dropdown Menu — positioned using the measured header height
              instead of a hardcoded pixel value, so it lines up correctly
              on every screen size. Width now scales up a bit more for
              tablets instead of capping out at 600px right away. */}
          <div
            className="xl:hidden fixed left-0 right-0 z-[9999] mt-2 bg-white text-gray-900 shadow-xl rounded-xl mx-2 sm:mx-4 md:mx-6 max-w-[600px] md:max-w-[720px] sm:mx-auto max-h-[calc(100vh-96px)] overflow-y-auto overscroll-contain"
            style={{ top: mobileHeaderHeight, animation: "slideDown 0.25s ease-out" }}
          >
            {/* Dropdown Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 border-b border-gray-200">
              <span className="text-base sm:text-lg md:text-xl font-semibold">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full p-1.5 hover:bg-gray-100 active:scale-95"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-gray-700" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="px-4 sm:px-6 md:px-8 py-4">
              <div className="space-y-1 md:grid md:grid-cols-2 md:gap-x-8 md:space-y-0">
                {navItems.map((item, i) =>
                  item.dropdown && item.links ? (
                    <div key={i} className="border-b border-gray-200 last:border-0 md:border-0">
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === i ? null : i)
                        }
                        className="w-full flex items-center justify-between text-sm sm:text-base md:text-lg font-semibold py-3"
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
                              className="block py-2 text-sm sm:text-base text-gray-600 hover:text-blue-600"
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
                      className="block text-sm sm:text-base md:text-lg font-semibold py-3 border-b border-gray-200 last:border-0 md:border-0"
                    >
                      {item.title}
                    </Link>
                  )
                )}
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 space-y-3 sm:flex sm:space-y-0 sm:gap-3">
                <Button
                  href="/exhibiting-enquiry"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#FF6A00] text-white text-sm sm:text-base py-3 font-semibold rounded-md w-full"
                >
                  EXHIBITOR REGISTRATION
                </Button>
                <Button
                  href="/visitor-registration"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#FF6A00] text-white text-sm sm:text-base py-3 font-semibold rounded-md w-full"
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