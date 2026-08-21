'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  UserIcon,
  MapIcon,
  ShoppingCartIcon,
  DocumentTextIcon,
  BookOpenIcon,
  CogIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { getExhibitorData, logout } from '@/lib/exhibitorAuth';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Profile', href: '/dashboard/exhibitor', icon: UserIcon },
  { name: 'Invoices', href: '/dashboard/invoice', icon: DocumentTextIcon },
  { name: 'Layout', href: '/dashboard/layout', icon: MapIcon },
  { name: 'Stall Booked', href: '/dashboard/stall', icon: ShoppingCartIcon },
  { name: 'Exhibitor Manual', href: '/dashboard/manual', icon: BookOpenIcon },
  { name: 'Extra Requirements', href: '/dashboard/requirements', icon: CogIcon },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [company, setCompany] = useState('Exhibitor');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const exhibitor = getExhibitorData();
    if (exhibitor) {
      setCompany(exhibitor.company || exhibitor.name || 'Exhibitor');
      setEmail(exhibitor.email || '');
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

  const nav = (
    <div className="flex h-full w-72 shrink-0 flex-col bg-[#171A1B] text-white">
      <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
        <div>
          <p className="text-sm font-semibold leading-none">IndiaMet</p>
          <p className="mt-1 text-xs text-slate-400">Exhibitor Portal</p>
        </div>
        <button type="button" onClick={onClose} className="rounded-lg p-1 text-slate-400 hover:bg-white/10 lg:hidden">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {navigation.map((item) => {
          const isActive =
            item.href === '/dashboard'
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={`group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[#B80A26] text-white'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="mb-3 flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B80A26] text-xs font-semibold">
            {initials}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{company}</p>
            <p className="truncate text-xs text-slate-400">{email || 'View profile'}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={logout}
          className="w-full rounded-lg bg-[#B80A26] px-3 py-2 text-sm font-medium text-white hover:bg-[#0074D9]"
        >
          Sign out
        </button>
      </div>
    </div>
  );

  return (
    <>
      <aside className="sticky top-0 hidden h-screen lg:flex">{nav}</aside>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            aria-label="Close menu"
          />
          <div className="relative h-full w-72 shadow-2xl">{nav}</div>
        </div>
      )}
    </>
  );
}
