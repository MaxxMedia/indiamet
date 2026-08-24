// app/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import EnhancedStatsCard, {
  EnhancedStatsCardProps,
} from "./components/EnhancedStatsCard";
import RecentActivity from "./components/RecentActivity";
import QuickActions from "./components/QuickActions";
import { dashboardAPI } from '@/lib/api/exhibitors';
import { useRouter } from 'next/navigation';

import {
  BuildingStorefrontIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  DocumentCheckIcon,
  CalendarIcon,
  SparklesIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  UserCircleIcon,
  CreditCardIcon,
  ClipboardDocumentListIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  MapIcon,
  BuildingOfficeIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

interface DashboardData {
  exhibitor: {
    id: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    boothNumber: string;
    status: string;
  };
  invoices: Array<{
    id: string;
    invoiceNumber: string;
    amount: number;
    status: string;
    dueDate?: string;
  }>;
  requirements: Array<{
    id: string;
    type: string;
    description: string;
    status: string;
  }>;
  floorPlan?: {
    name: string;
    floor: string;
  };
  event?: {
    name: string;
    venue: string;
    exhibitionDay: string;
    dismantleDay: string;
  };
}

export default function EnhancedDashboardPage() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      const token =
        localStorage.getItem('exhibitor_token') ||
        localStorage.getItem('token');

      if (!token) {
        setError('Please log in to access dashboard');
        setTimeout(() => router.push('/login'), 1500);
        return;
      }

      const data = await dashboardAPI.getLayout();
      setDashboardData(data);

    } catch (error: any) {
      console.error('❌ Dashboard error:', error);

      if (
        error.message?.includes('401') ||
        error.message?.includes('Unauthorized')
      ) {
        localStorage.removeItem('exhibitor_token');
        localStorage.removeItem('exhibitor_data');
        setError('Session expired. Please login again.');
        setTimeout(() => router.push('/login'), 1500);
      } else if (error.message?.includes('timeout')) {
        setError('Server is waking up. Please retry in a few seconds.');
      } else {
        setError(error.message || 'Failed to load dashboard');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Calculate derived stats from data
  const calculateStats = () => {
    if (!dashboardData) return [];
    
    const totalInvoices = dashboardData.invoices?.length || 0;
    const paidInvoices = dashboardData.invoices?.filter(inv => inv.status === 'paid').length || 0;
    const pendingRequirements = dashboardData.requirements?.filter(req => req.status === 'pending').length || 0;
    const totalAmount = dashboardData.invoices?.reduce((sum, inv) => sum + inv.amount, 0) || 0;
    const paidAmount = dashboardData.invoices
      ?.filter(inv => inv.status === 'paid')
      .reduce((sum, inv) => sum + inv.amount, 0) || 0;

    const stats: EnhancedStatsCardProps[] = [
      {
        title: "Company Profile",
        value: dashboardData.exhibitor.status === 'active' ? "Complete" : "Pending",
        change: dashboardData.exhibitor.status === 'active' ? "Active" : "Setup Required",
        icon: BuildingStorefrontIcon,
        color: dashboardData.exhibitor.status === 'active' ? "from-[#0092D7] to-[#0074D9]" : "from-yellow-500 to-amber-600",
        trend: dashboardData.exhibitor.status === 'active' ? "up" : "warning",
        href: "/dashboard/exhibitor",
      },
      {
        title: "Stall Location",
        value: dashboardData.exhibitor.boothNumber || "Not Assigned",
        change: dashboardData.floorPlan ? `${dashboardData.floorPlan.name} - Floor ${dashboardData.floorPlan.floor}` : "No Layout",
        icon: MapPinIcon,
        color: dashboardData.exhibitor.boothNumber ? "from-[#171A1B] to-[#2c3234]" : "from-gray-500 to-gray-600",
        trend: dashboardData.exhibitor.boothNumber ? "stable" : "warning",
        href: "/dashboard/layout",
      },
      
      {
        title: "Total Investment",
        value: `₹${totalAmount.toLocaleString()}`,
        change: paidInvoices > 0 ? `${paidInvoices}/${totalInvoices} Paid` : "No Invoices",
        icon: CurrencyDollarIcon,
        color: paidAmount >= totalAmount ? "from-[#B80A26] to-[#8f081d]" : "from-orange-500 to-[#B80A26]",
        trend: paidAmount >= totalAmount ? "up" : "warning",
        href: "/dashboard/invoice",
      },
      {
        title: "Requirements",
        value: pendingRequirements > 0 ? `${pendingRequirements} Pending` : "Complete",
        change: dashboardData.requirements ? `${dashboardData.requirements.length} Total` : "No Requirements",
        icon: DocumentCheckIcon,
        color: pendingRequirements > 0 ? "from-amber-500 to-orange-600" : "from-green-500 to-emerald-600",
        trend: pendingRequirements > 0 ? "warning" : "up",
        href: "/dashboard/requirements",
      },
    ];
    
    return stats;
  };

  // Mock event data - you can replace this with actual API data
  const upcomingEvents = dashboardData?.event ? [
    { id: 1, title: "Event Name", value: dashboardData.event.name, icon: BuildingOfficeIcon },
    { id: 2, title: "Venue", value: dashboardData.event.venue, icon: MapIcon },
    { id: 3, title: "Exhibition Day", value: dashboardData.event.exhibitionDay, icon: CalendarIcon },
    { id: 4, title: "Dismantle Day", value: dashboardData.event.dismantleDay, icon: TrashIcon },
  ] : [
    { id: 1, title: "Event Name", value: "INDIAMET 2027", icon: BuildingOfficeIcon },
    { id: 2, title: "Venue", value: "Auto Cluster Exhibition Center", icon: MapIcon },
    { id: 3, title: "Exhibition Day", value: "To be announced", icon: CalendarIcon },
    { id: 4, title: "Dismantle Day", value: "To be announced", icon: TrashIcon },
  ];

  const contactInfo = [
    { id: 1, type: "Phone", value: "+91 63649 36468", icon: PhoneIcon },
    { id: 2, type: "Email", value: "info@indiametexpo.com", icon: EnvelopeIcon },
    { id: 3, type: "Hours", value: "Mon–Fri, 9AM–6PM", icon: ClockIcon },
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-28 rounded-2xl bg-white/80 animate-pulse" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-36 rounded-2xl bg-white animate-pulse" />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="h-80 rounded-2xl bg-white lg:col-span-2 animate-pulse" />
          <div className="h-80 rounded-2xl bg-white animate-pulse" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <ExclamationTriangleIcon className="mx-auto mb-4 h-12 w-12 text-amber-500" />
        <h2 className="mb-2 text-xl font-semibold text-slate-900">Unable to load dashboard</h2>
        <p className="mb-6 text-slate-600">{error}</p>
        <div className="flex justify-center gap-3">
          <button
            onClick={fetchDashboardData}
            className="inline-flex items-center gap-2 rounded-lg bg-[#B80A26] px-4 py-2 text-sm font-medium text-white hover:bg-[#0074D9]"
          >
            <ArrowPathIcon className="h-4 w-4" />
            Retry
          </button>
          <button
            onClick={() => router.push('/login')}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <ExclamationTriangleIcon className="mx-auto mb-4 h-12 w-12 text-slate-400" />
        <h2 className="mb-2 text-xl font-semibold text-slate-900">No dashboard data</h2>
        <p className="mb-6 text-slate-600">Unable to load exhibitor dashboard data.</p>
        <button
          onClick={fetchDashboardData}
          className="rounded-lg bg-[#B80A26] px-4 py-2 text-sm font-medium text-white hover:bg-[#0074D9]"
        >
          Refresh
        </button>
      </div>
    );
  }

  const stats = calculateStats();
  const isActive = dashboardData.exhibitor.status === 'active';

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-2xl bg-[#171A1B] p-5 text-white sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-[#0092D7]">Exhibitor portal</p>
            <h1 className="mt-1 truncate text-2xl font-semibold sm:text-3xl">
              Welcome back, {dashboardData.exhibitor.company}
            </h1>
            <p className="mt-1 text-sm text-slate-300">
              Track your stall, invoices, and extra requirements in one place.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                isActive ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
              }`}
            >
              {dashboardData.exhibitor.status.charAt(0).toUpperCase() + dashboardData.exhibitor.status.slice(1)}
            </span>
            <button
              onClick={fetchDashboardData}
              className="inline-flex items-center gap-2 rounded-lg bg-[#B80A26] px-3 py-2 text-sm font-medium hover:bg-[#0074D9]"
            >
              <ArrowPathIcon className="h-4 w-4" />
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <EnhancedStatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Quick Actions</h2>
              <SparklesIcon className="h-5 w-5 text-[#0092D7]" />
            </div>
            <QuickActions />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Recent Activity</h2>
            <RecentActivity
              exhibitorName={dashboardData.exhibitor.name}
              boothNumber={dashboardData.exhibitor.boothNumber}
              invoiceCount={dashboardData.invoices?.length || 0}
              pendingRequirements={dashboardData.requirements?.filter((r) => r.status === 'pending').length || 0}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Account Summary</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                <UserCircleIcon className="h-5 w-5 text-[#0092D7]" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-900">Contact Person</p>
                  <p className="truncate text-xs text-slate-500">{dashboardData.exhibitor.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                <CreditCardIcon className="h-5 w-5 text-emerald-600" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-900">Payment Status</p>
                  <p className="text-xs text-slate-500">
                    {dashboardData.invoices?.filter((inv) => inv.status === 'paid').length || 0} of {dashboardData.invoices?.length || 0} invoices paid
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                <ClipboardDocumentListIcon className="h-5 w-5 text-[#B80A26]" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-900">Requirements Status</p>
                  <p className="text-xs text-slate-500">
                    {dashboardData.requirements?.filter((r) => r.status === 'pending').length || 0} pending requirements
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Event Details</h2>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                  <event.icon className="h-5 w-5 shrink-0 text-[#0092D7]" />
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">{event.title}</p>
                    <p className="truncate text-sm font-medium text-slate-900">{event.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#171A1B] p-5 text-white sm:p-6">
            <h3 className="font-semibold">Need Help?</h3>
            <p className="mt-1 mb-4 text-sm text-slate-300">
              Contact the IndiaMet team for stall and exhibition support.
            </p>
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <div key={contact.id} className="flex items-center gap-3">
                  <contact.icon className="h-4 w-4 text-[#0092D7]" />
                  <div>
                    <p className="text-xs text-slate-400">{contact.type}</p>
                    <p className="text-sm font-medium">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}