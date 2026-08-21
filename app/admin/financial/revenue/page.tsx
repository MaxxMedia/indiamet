"use client";

import { useCallback, useEffect, useState } from 'react';
import { TrendingUp, DollarSign, Users, Package, Download, Calendar, Loader2, RefreshCw } from 'lucide-react';
import { getBackendUrl } from '@/lib/api/backendUrl';

interface RevenueData {
  month: string;
  revenue: number;
  exhibitors: number;
  growth: number;
}

interface RevenueSource {
  category: string;
  amount: number;
  percentage: number;
  color: string;
}

const API_BASE_URL = getBackendUrl();

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(Number(amount) || 0);

export default function RevenuePage() {
  const currentYear = String(new Date().getFullYear());
  const [timeRange, setTimeRange] = useState('year');
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [years, setYears] = useState<string[]>([currentYear, String(Number(currentYear) - 1)]);
  const [revenueData, setRevenueData] = useState<RevenueData[]>([]);
  const [revenueSources, setRevenueSources] = useState<RevenueSource[]>([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [avgRevenue, setAvgRevenue] = useState(0);
  const [growthRate, setGrowthRate] = useState(0);
  const [exhibitorCount, setExhibitorCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getAuthToken = () => localStorage.getItem('admin_token') || localStorage.getItem('token');

  const fetchRevenue = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const token = getAuthToken();
      if (!token) {
        window.location.href = '/admin/login';
        return;
      }

      const params = new URLSearchParams({ timeRange, year: selectedYear });
      const response = await fetch(`${API_BASE_URL}/api/revenue/analytics?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.status === 401) {
        window.location.href = '/admin/login';
        return;
      }

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.error || payload.message || 'Failed to load revenue');
      }

      const data = payload.data || {};
      setRevenueData(Array.isArray(data.monthly) ? data.monthly : []);
      setRevenueSources(Array.isArray(data.sources) ? data.sources : []);
      setTotalRevenue(Number(data.totalRevenue) || 0);
      setAvgRevenue(Number(data.avgMonthlyRevenue) || 0);
      setGrowthRate(Number(data.growthRate) || 0);
      setExhibitorCount(Number(data.exhibitorCount) || 0);
      if (Array.isArray(data.years) && data.years.length) {
        setYears(data.years.map((year: number) => String(year)));
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load revenue');
      setRevenueData([]);
      setRevenueSources([]);
      setTotalRevenue(0);
      setAvgRevenue(0);
      setGrowthRate(0);
    } finally {
      setLoading(false);
    }
  }, [timeRange, selectedYear]);

  useEffect(() => {
    fetchRevenue();
  }, [fetchRevenue]);

  const maxRevenue = Math.max(...revenueData.map((month) => month.revenue), 0);
  const highestSource = revenueSources[0];

  const handleExport = () => {
    const rows = [
      ['Month', 'Revenue', 'Exhibitors', 'Growth %'],
      ...revenueData.map((month) => [
        `${month.month} ${selectedYear}`,
        String(month.revenue),
        String(month.exhibitors),
        String(month.growth)
      ])
    ];
    const csv = rows.map((row) => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `revenue-${selectedYear}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Revenue Analytics</h1>
          <p className="text-gray-600">Live totals from paid invoices and completed payments</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={fetchRevenue}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </button>
          <button
            onClick={handleExport}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
                <option value="all">All Time</option>
              </select>
            </div>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">{error}</div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-16 text-gray-500">
          <Loader2 className="h-6 w-6 animate-spin mr-2" />
          Loading live revenue...
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-md p-3 bg-blue-100">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                  <p className="text-2xl font-semibold text-gray-900">{formatCurrency(totalRevenue)}</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-md p-3 bg-green-100">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500">Growth Rate</p>
                  <p className="text-2xl font-semibold text-gray-900">{growthRate.toFixed(1)}%</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-md p-3 bg-purple-100">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500">Exhibitors</p>
                  <p className="text-2xl font-semibold text-gray-900">{exhibitorCount}</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-md p-3 bg-yellow-100">
                  <Package className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500">Avg Revenue/Month</p>
                  <p className="text-2xl font-semibold text-gray-900">{formatCurrency(avgRevenue)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-6">Monthly Revenue Trend</h3>
                {maxRevenue <= 0 ? (
                  <p className="text-sm text-gray-500 py-16 text-center">
                    No paid invoices or completed payments for this period yet.
                  </p>
                ) : (
                  <div className="h-64 flex items-end space-x-2">
                    {revenueData.map((month) => {
                      const height = maxRevenue > 0 ? (month.revenue / maxRevenue) * 100 : 0;
                      return (
                        <div key={month.month} className="flex-1 flex flex-col items-center">
                          <div className="relative w-full">
                            <div
                              className="w-full bg-blue-500 rounded-t-lg"
                              style={{ height: `${Math.max(height, month.revenue > 0 ? 8 : 2)}%` }}
                            >
                              {month.revenue > 0 && (
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 whitespace-nowrap">
                                  {formatCurrency(month.revenue)}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="mt-2 text-xs text-gray-500">{month.month}</div>
                          <div className="text-xs text-gray-400 mt-1">{month.exhibitors} exhibitors</div>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Total: {formatCurrency(totalRevenue)}</span>
                    <span>Growth: {growthRate >= 0 ? '+' : ''}{growthRate.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-6">Revenue by Source</h3>
                {revenueSources.length === 0 ? (
                  <p className="text-sm text-gray-500 py-16 text-center">
                    Sources will appear after completed payments or paid invoices are recorded.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {revenueSources.map((source) => (
                      <div key={source.category} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-900">{source.category}</span>
                          <span className="font-medium">
                            {formatCurrency(source.amount)} ({source.percentage}%)
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${source.color}`}
                            style={{ width: `${source.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Highest Source</p>
                      <p className="text-lg font-semibold text-gray-900">{highestSource?.category || '—'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Sources</p>
                      <p className="text-lg font-semibold text-gray-900">{revenueSources.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Monthly Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exhibitors</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg/Exhibitor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {revenueData.map((month) => (
                      <tr key={month.month}>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{month.month} {selectedYear}</div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm font-semibold text-gray-900">{formatCurrency(month.revenue)}</div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{month.exhibitors}</div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className={`text-sm font-medium ${month.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {month.growth >= 0 ? '+' : ''}{month.growth}%
                          </div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {month.exhibitors > 0 ? formatCurrency(month.revenue / month.exhibitors) : formatCurrency(0)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
