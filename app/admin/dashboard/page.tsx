'use client';

import {
  Users,
  Building2,
  IndianRupee,
  Clock3,
  RefreshCw,
  ArrowUpRight,
  CalendarDays,
  Activity,
  FileText,
  CreditCard,
  BookOpen,
  LayoutGrid,
  PieChart as PieIcon,
} from 'lucide-react';
import { useDashboard } from '@/hooks/useDashboard';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';
import Link from 'next/link';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const BRAND = {
  primary: '#B80A26',
  cyan: '#0092D7',
  navy: '#171A1B',
  grid: '#D7E6F0',
  text: '#5B6B7A',
};

const PIE_COLORS = ['#B80A26', '#0092D7', '#171A1B', '#33A8DF', '#0074D9', '#040d1f'];

function formatNumber(value?: number) {
  return (value ?? 0).toLocaleString('en-IN');
}

function formatCurrency(value?: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value ?? 0);
}

function formatGaDate(dateStr: string) {
  if (!dateStr || dateStr.length < 8) return dateStr;
  const date = new Date(
    `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`
  );
  return date.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric' });
}

export default function DashboardPage() {
  const { summary, isLoading, error, refresh } = useDashboard();
  const { user } = useAuth();

  const handleRefresh = () => {
    refresh();
    toast.success('Dashboard refreshed');
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-20 rounded-2xl bg-white border border-slate-200 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 rounded-2xl bg-white border border-slate-200 animate-pulse" />
          ))}
        </div>
        <div className="h-80 rounded-2xl bg-white border border-slate-200 animate-pulse" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-lg mx-auto mt-16 bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-xl">
          !
        </div>
        <h2 className="text-lg font-semibold text-slate-900 mb-2">Could not load dashboard</h2>
        <p className="text-sm text-slate-500 mb-6">{error}</p>
        <button
          onClick={handleRefresh}
          className="inline-flex items-center gap-2 bg-[#B80A26] text-white px-5 py-2.5 rounded-xl hover:bg-[#0074D9] transition"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </button>
      </div>
    );
  }

  const visitors = summary?.visitors;
  const exhibitors = summary?.exhibitors;
  const revenue = summary?.revenue;
  const users = summary?.users;
  const activities = summary?.activities || [];
  const last7Days = visitors?.last7Days || [];
  const topPages = visitors?.pages || [];

  const chartData = last7Days.map((day) => ({
    name: formatGaDate(day.date),
    visitors: day.count,
  }));

  const exhibitorBreakdown = [
    { name: 'Active', value: exhibitors?.active || 0 },
    { name: 'Pending', value: exhibitors?.pending || 0 },
    { name: 'Approved', value: exhibitors?.approved || 0 },
    { name: 'Rejected', value: exhibitors?.rejected || 0 },
  ].filter((item) => item.value > 0);

  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const kpiCards = [
    {
      title: 'Exhibitors',
      value: formatNumber(exhibitors?.total),
      hint: `${exhibitors?.pending || 0} pending approval`,
      icon: Building2,
      href: '/admin/exhibition/exhibitors',
    },
    {
      title: 'Visitors',
      value: formatNumber(visitors?.total),
      hint: `${formatNumber(visitors?.today)} today`,
      icon: Users,
      href: '/admin/analytics',
    },
    {
      title: 'Revenue',
      value: formatCurrency(revenue?.totalRevenue),
      hint: `${formatCurrency(revenue?.pendingAmount)} pending`,
      icon: IndianRupee,
      href: '/admin/financial/revenue',
    },
    {
      title: 'This week',
      value: formatNumber(visitors?.week),
      hint: `${formatNumber(users?.total)} admin users`,
      icon: Clock3,
      href: '/admin/analytics',
    },
  ];

  const quickLinks = [
    { name: 'Exhibitors', href: '/admin/exhibition/exhibitors', icon: Building2 },
    { name: 'Floor Plans', href: '/admin/exhibition/booths', icon: LayoutGrid },
    { name: 'Invoices', href: '/admin/financial/invoices', icon: FileText },
    { name: 'Payments', href: '/admin/financial/payments', icon: CreditCard },
    { name: 'Manuals', href: '/admin/exhibition/manuals', icon: BookOpen },
    { name: 'Requirements', href: '/admin/received', icon: Activity },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">{today}</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Overview
          </h1>
          <p className="text-slate-500 mt-1">
            Exhibition operations for {user?.name || 'Admin'}.
          </p>
        </div>
        <button
          onClick={handleRefresh}
          className="inline-flex items-center gap-2 self-start px-4 py-2.5 bg-[#B80A26] rounded-xl text-white hover:bg-[#0074D9]"
        >
          <RefreshCw className="h-4 w-4" />
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpiCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group bg-white rounded-2xl border border-[#D7E6F0] p-5 shadow-sm hover:shadow-md hover:border-[#B80A26]/40 transition"
          >
            <div className="flex items-start justify-between">
              <div className="h-11 w-11 rounded-xl bg-[#B80A26]/10 text-[#B80A26] flex items-center justify-center">
                <card.icon className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-[#B80A26] transition" />
            </div>
            <p className="mt-4 text-sm text-slate-500">{card.title}</p>
            <p className="text-2xl font-bold text-slate-900 tracking-tight">{card.value}</p>
            <p className="mt-1 text-xs text-slate-400">{card.hint}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Visitor trend</h2>
              <p className="text-sm text-slate-500">Last 7 days</p>
            </div>
            <CalendarDays className="h-5 w-5 text-[#B80A26]" />
          </div>

          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="visitorFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={BRAND.primary} stopOpacity={0.25} />
                    <stop offset="95%" stopColor={BRAND.primary} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={BRAND.grid} />
                <XAxis dataKey="name" tick={{ fill: BRAND.text, fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: BRAND.text, fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: '1px solid #E2E8F0' }}
                />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  stroke={BRAND.primary}
                  strokeWidth={3}
                  fill="url(#visitorFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[280px] flex items-center justify-center text-sm text-slate-400">
              No visitor data yet
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Exhibitor status</h2>
              <p className="text-sm text-slate-500">Current pipeline</p>
            </div>
            <PieIcon className="h-5 w-5 text-[#B80A26]" />
          </div>

          {exhibitorBreakdown.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={exhibitorBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={48}
                    outerRadius={72}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {exhibitorBreakdown.map((entry, index) => (
                      <Cell key={entry.name} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-2">
                {exhibitorBreakdown.map((item, index) => (
                  <div key={item.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: PIE_COLORS[index % PIE_COLORS.length] }}
                      />
                      <span className="text-slate-600">{item.name}</span>
                    </div>
                    <span className="font-semibold text-slate-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="h-[220px] flex items-center justify-center text-sm text-slate-400">
              No exhibitor records yet
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold text-slate-900">Top pages</h2>
            <Link href="/admin/analytics" className="text-sm text-[#0092D7] hover:text-[#B80A26]">
              View analytics
            </Link>
          </div>

          {topPages.length > 0 ? (
            <div className="space-y-4">
              {topPages.slice(0, 6).map((page, index) => {
                const max = topPages[0]?.views || 1;
                const width = Math.max(6, (page.views / max) * 100);
                return (
                  <div key={`${page.page}-${index}`}>
                    <div className="flex items-center justify-between mb-1.5 text-sm">
                      <span className="text-slate-700 truncate pr-3">
                        {page.page === '/' ? 'Homepage' : page.page}
                      </span>
                      <span className="font-semibold text-slate-900">{formatNumber(page.views)}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#B80A26] to-[#0092D7]"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={[{ name: 'Today', visitors: visitors?.today || 0 }, { name: 'Week', visitors: visitors?.week || 0 }, { name: 'Month', visitors: visitors?.month || 0 }]}>
                <CartesianGrid strokeDasharray="3 3" stroke={BRAND.grid} />
                <XAxis dataKey="name" tick={{ fill: BRAND.text, fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: BRAND.text, fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="visitors" fill={BRAND.primary} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex flex-col items-start gap-2 rounded-xl border border-[#D7E6F0] p-3 hover:border-[#B80A26] hover:bg-[#F3F8FC] transition"
                >
                  <link.icon className="h-4 w-4 text-[#B80A26]" />
                  <span className="text-sm font-medium text-slate-800">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-[#171A1B] text-white rounded-2xl p-5 sm:p-6">
            <h2 className="text-lg font-semibold mb-4">Recent activity</h2>
            {activities.length > 0 ? (
              <div className="space-y-3">
                {activities.slice(0, 5).map((item) => (
                  <div key={item.id} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <p className="text-sm font-medium">{item.action}</p>
                    <p className="text-xs text-white/60 mt-0.5">
                      {item.user} · {item.time}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-white/70">No recent activity logged yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
