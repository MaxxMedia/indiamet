'use client';

import { use, useEffect, useState } from 'react';
import VisitorPassCard from '@/components/passes/VisitorPassCard';
import { getBackendUrl } from '@/lib/api/backendUrl';

export default function PassBadgePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = use(params);
  const [pass, setPass] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) return;
    fetch(`${getBackendUrl()}/api/passes/badge/${token}`)
      .then(async (response) => {
        const payload = await response.json();
        if (!response.ok) throw new Error(payload.error || 'Pass not found');
        setPass(payload.data);
      })
      .catch((err) => setError(err.message));
  }, [token]);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F3F8FC] p-6 text-center">
        <p className="text-slate-600">{error}</p>
      </div>
    );
  }

  if (!pass) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F3F8FC] p-6 text-slate-500">
        Loading visitor pass...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F8FC] px-4 py-10">
      <VisitorPassCard pass={pass} />
      <p className="mt-6 text-center text-xs text-slate-400">Show this screen at the INDIAMET 2027 entrance.</p>
    </div>
  );
}
