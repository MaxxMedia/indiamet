'use client';

import { useEffect, useMemo, useState } from 'react';
import { BellIcon, Bars3Icon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { getExhibitorData, logout } from '@/lib/exhibitorAuth';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [company, setCompany] = useState('Exhibitor');

  useEffect(() => {
    const exhibitor = getExhibitorData();
    if (exhibitor) {
      setCompany(exhibitor.company || exhibitor.name || 'Exhibitor');
    }
  }, []);

  const initials = useMemo(() => {
    return company
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('') || 'EX';
  }, [company]);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            onClick={onMenuClick}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900">Exhibitor Dashboard</p>
            <p className="hidden truncate text-xs text-slate-500 sm:block">Welcome back, {company}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button type="button" className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100">
            <BellIcon className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#B80A26]" />
          </button>

          <button
            type="button"
            onClick={logout}
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 sm:flex"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            Logout
          </button>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B80A26] text-xs font-semibold text-white">
            {initials}
          </div>
        </div>
      </div>
    </header>
  );
}
