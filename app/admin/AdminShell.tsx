"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Bell,
  BookOpen,
  Briefcase,
  Building2,
  Cable,
  ChevronDown,
  CreditCard,
  Droplet,
  FileText,
  Globe,
  LayoutDashboard,
  LogOut,
  Menu,
  Monitor,
  Package,
  PieChart,
  Power,
  ServerCrash,
  ShieldCheck,
  Sofa,
  Sparkles,
  User,
  X,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";

type NavItem = {
  name: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
};

const navigation: NavItem[] = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  {
    name: "Exhibition",
    icon: Building2,
    children: [
      { name: "Exhibitors", href: "/admin/exhibition/exhibitors", icon: Briefcase },
      { name: "Floor Plans", href: "/admin/exhibition/booths", icon: Globe },
      { name: "Manuals", href: "/admin/exhibition/manuals", icon: BookOpen },
    ],
  },
  {
    name: "Financial",
    icon: CreditCard,
    children: [
      { name: "Payments", href: "/admin/financial/payments", icon: CreditCard },
      { name: "Invoices", href: "/admin/financial/invoices", icon: FileText },
      { name: "Revenue", href: "/admin/financial/revenue", icon: PieChart },
    ],
  },
  {
    name: "Requirements",
    icon: Package,
    children: [
      { name: "Received", href: "/admin/received", icon: Package },
      { name: "Furniture", href: "/admin/furniture", icon: Sofa },
      { name: "AV & IT Rentals", href: "/admin/rental-items", icon: Monitor },
      { name: "Electrical Load", href: "/admin/electrical-rates", icon: Power },
      { name: "Hostess Rates", href: "/admin/hostess-rates", icon: Sparkles },
      { name: "Compressed Air", href: "/admin/compressed-air", icon: Cable },
      { name: "Water Connection", href: "/admin/water", icon: Droplet },
      { name: "Security Guard", href: "/admin/security-guard", icon: ShieldCheck },
      { name: "Housekeeping", href: "/admin/housekeeping", icon: Sparkles },
      { name: "Security Deposit", href: "/admin/security-deposit", icon: ServerCrash },
    ],
  },
];

function collectOpenMenus(pathname: string) {
  const open = new Set<string>();
  for (const item of navigation) {
    if (item.children?.some((child) => child.href && pathname.startsWith(child.href))) {
      open.add(item.name);
    }
  }
  return open;
}

function NavList({
  pathname,
  onNavigate,
  openMenus,
  toggleMenu,
}: {
  pathname: string;
  onNavigate: (href: string) => void;
  openMenus: Set<string>;
  toggleMenu: (name: string) => void;
}) {
  return (
    <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
      {navigation.map((item) => {
        const isActive = item.href === pathname;
        const hasChildren = Boolean(item.children?.length);
        const isOpen = openMenus.has(item.name);
        const childActive = item.children?.some(
          (child) => child.href && pathname.startsWith(child.href)
        );

        if (hasChildren) {
          return (
            <div key={item.name}>
              <button
                type="button"
                onClick={() => toggleMenu(item.name)}
                className={`flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium ${
                  childActive
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon className="mr-3 h-4 w-4 shrink-0" />
                <span className="flex-1 text-left">{item.name}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="mt-1 ml-4 space-y-1 border-l border-white/10 pl-3">
                  {item.children!.map((child) => {
                    const active = child.href === pathname;
                    return (
                      <button
                        key={child.href}
                        type="button"
                        onClick={() => child.href && onNavigate(child.href)}
                        className={`flex w-full items-center rounded-lg px-3 py-2 text-sm ${
                          active
                            ? "bg-[#B80A26] text-white"
                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <child.icon className="mr-3 h-4 w-4 shrink-0" />
                        {child.name}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        }

        return (
          <button
            key={item.name}
            type="button"
            onClick={() => item.href && onNavigate(item.href)}
            className={`flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium ${
              isActive
                ? "bg-[#B80A26] text-white"
                : "text-slate-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            <item.icon className="mr-3 h-4 w-4 shrink-0" />
            {item.name}
          </button>
        );
      })}
    </nav>
  );
}

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const { user, logout, isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<Set<string>>(() => collectOpenMenus(pathname));

  useEffect(() => {
    setOpenMenus(collectOpenMenus(pathname));
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!loading && !isAuthenticated && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [loading, isAuthenticated, pathname, router]);

  const pageTitle = useMemo(() => {
    const flat = navigation.flatMap((item) => [item, ...(item.children || [])]);
    return flat.find((item) => item.href === pathname)?.name || "Dashboard";
  }, [pathname]);

  const toggleMenu = (name: string) => {
    setOpenMenus((current) => {
      const next = new Set(current);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out");
    router.push("/admin/login");
  };

  const handleNavigate = (href: string) => {
    router.push(href);
    setMobileOpen(false);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F3F8FC]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#0092D7]/20 border-t-[#B80A26]" />
      </div>
    );
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (!isAuthenticated) {
    return null;
  }

  const sidebar = (
    <div className="flex h-full w-72 shrink-0 flex-col bg-[#171A1B] text-white">
      <div className="flex h-16 items-center gap-3 border-b border-white/10 px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B80A26]">
          <LayoutDashboard className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold leading-none">IndiaMet</p>
          <p className="mt-1 text-xs text-slate-400">Admin Console</p>
        </div>
      </div>

      <NavList
        pathname={pathname}
        onNavigate={handleNavigate}
        openMenus={openMenus}
        toggleMenu={toggleMenu}
      />

      <div className="border-t border-white/10 p-4">
        <div className="mb-3 flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B80A26]">
            <User className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{user?.name || "Administrator"}</p>
            <p className="truncate text-xs text-slate-400">{user?.email}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#B80A26] px-3 py-2 text-sm text-white hover:bg-[#0074D9]"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#F3F8FC]">
      <Toaster position="top-right" />

      <aside className="sticky top-0 hidden h-screen lg:flex">{sidebar}</aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          />
          <div className="relative h-full w-72 shadow-2xl">{sidebar}</div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div>
              <p className="text-sm font-semibold text-slate-900">{pageTitle}</p>
              <p className="hidden text-xs text-slate-500 sm:block">
                Welcome back, {user?.name || "Administrator"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button type="button" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
              <Bell className="h-5 w-5" />
            </button>
            <div className="relative">
              <button
                type="button"
                onClick={() => setUserMenuOpen((open) => !open)}
                className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-slate-100"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B80A26] text-white">
                  <User className="h-4 w-4" />
                </div>
                <span className="hidden text-sm font-medium text-slate-700 sm:inline">
                  {user?.name || "Admin"}
                </span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
