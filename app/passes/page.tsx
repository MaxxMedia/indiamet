'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Check,
  Download,
  Lightbulb,
  Lock,
  MapPin,
  MessageSquare,
  QrCode,
  Shield,
  Smartphone,
  Zap
} from 'lucide-react';
import { getBackendUrl } from '@/lib/api/backendUrl';
import VisitorPassCard from '@/components/passes/VisitorPassCard';

const API = getBackendUrl();
const COUNTRIES = [
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: '+1', flag: '🇺🇸', name: 'USA' },
  { code: '+44', flag: '🇬🇧', name: 'UK' },
  { code: '+65', flag: '🇸🇬', name: 'Singapore' }
];
const INTERESTS = [
  'Metrology & CMM',
  'Calibration & Testing',
  'Quality Control',
  'Machine Vision',
  'NDT & Inspection',
  'Precision Engineering',
  'Industrial Automation',
  'Software & Industry 4.0'
];
const SOURCES = [
  'Google Search',
  'Social Media',
  'Email Invitation',
  'Colleague / Friend',
  'Exhibitor Invitation',
  'Print / Outdoor',
  'Other'
];

type Channel = 'sms' | 'whatsapp';
type Step = 'phone' | 'register' | 'success';

export default function PassesPage() {
  const [step, setStep] = useState<Step>('phone');
  const [channel, setChannel] = useState<Channel>('whatsapp');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [otpOpen, setOtpOpen] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [devOtp, setDevOtp] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [verificationToken, setVerificationToken] = useState('');
  const [pass, setPass] = useState<any>(null);
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);

  const [form, setForm] = useState({
    name: '',
    company: '',
    pinCode: '',
    area: '',
    city: '',
    state: '',
    country: 'India',
    source: '',
    interests: [] as string[]
  });

  useEffect(() => {
    if (!otpOpen || secondsLeft <= 0) return;
    const timer = window.setTimeout(() => setSecondsLeft((value) => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [otpOpen, secondsLeft]);

  useEffect(() => {
    const pin = form.pinCode.replace(/\D/g, '');
    if (pin.length !== 6) return;
    const timer = window.setTimeout(async () => {
      try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
        const payload = await response.json();
        const office = payload?.[0]?.PostOffice?.[0];
        if (office) {
          setForm((current) => ({
            ...current,
            area: office.Name || current.area,
            city: office.District || current.city,
            state: office.State || current.state,
            country: 'India'
          }));
        }
      } catch {
        // keep manual entry available
      }
    }, 400);
    return () => window.clearTimeout(timer);
  }, [form.pinCode]);

  const displayPhone = `${countryCode}${phone}`;

  const sendOtp = async () => {
    setError('');
    setLoading(true);
    try {
      const response = await fetch(`${API}/api/passes/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, countryCode, channel })
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || 'Failed to send OTP');
      setDevOtp(payload.devOtp || '');
      setOtp(['', '', '', '']);
      setSecondsLeft(60);
      setOtpOpen(true);
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (code = otp.join('')) => {
    if (code.length !== 4) {
      setError('Enter the 4-digit OTP');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const response = await fetch(`${API}/api/passes/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, countryCode, otp: code })
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || 'Invalid OTP');
      setVerificationToken(payload.data.verificationToken);
      setOtpOpen(false);
      setStep('register');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);
    if (digit && index < 3) otpRefs.current[index + 1]?.focus();
    if (next.every(Boolean)) verifyOtp(next.join(''));
  };

  const handleOtpPaste = (event: React.ClipboardEvent) => {
    const pasted = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
    if (!pasted) return;
    event.preventDefault();
    const next = ['', '', '', ''].map((_, index) => pasted[index] || '');
    setOtp(next);
    if (pasted.length === 4) verifyOtp(pasted);
  };

  const completeRegistration = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await fetch(`${API}/api/passes/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ verificationToken, ...form })
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || 'Failed to complete registration');
      setPass(payload.data);
      setStep('success');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleInterest = (interest: string) => {
    setForm((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest]
    }));
  };

  return (
    <div className="bg-white">
      {step === 'phone' && (
        <>
          <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#F8E7EC,transparent_28%),radial-gradient(circle_at_80%_20%,#E8F6FC,transparent_32%),linear-gradient(#ffffff,#F3F8FC)]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:44px_44px]" />
            <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
              <div>
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  • INDIAMET 2027 open for registration
                </span>
                <h1 className="mt-5 text-4xl font-bold leading-tight text-[#191C1C] md:text-5xl">
                  Your <span className="bg-gradient-to-r from-[#00857C] to-[#0092D7] bg-clip-text text-transparent">Digital Visitor Badge</span> In Seconds
                </h1>
                <p className="mt-4 max-w-xl text-slate-600">
                  Register for INDIAMET, receive your <strong>QR-coded visitor pass</strong> instantly via WhatsApp or SMS, and walk into the exhibition hassle-free.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-medium">
                  <span className="rounded-full bg-white px-3 py-1 shadow-sm">1 Register</span>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                  <span className="rounded-full bg-[#00857C]/10 px-3 py-1 text-[#00857C]">2 Get Badge</span>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">3 Walk In</span>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#register" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00857C] to-[#0092D7] px-5 py-3 text-sm font-semibold text-white shadow-lg">
                    <QrCode className="h-4 w-4" /> Register Now <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#register" className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
                    Learn How It Works
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-5 text-xs font-medium text-slate-500">
                  <span className="inline-flex items-center gap-1"><Shield className="h-4 w-4 text-[#0092D7]" /> Secure & Private</span>
                  <span className="inline-flex items-center gap-1"><Zap className="h-4 w-4 text-[#00857C]" /> Instant Badge</span>
                  <span className="inline-flex items-center gap-1"><Check className="h-4 w-4 text-emerald-600" /> Free Registration</span>
                </div>
              </div>
              <VisitorPassCard
                pass={{
                  registrationNumber: 'REG-IM-PREVIEW',
                  qrToken: 'indiamet-preview',
                  passUrl: 'https://indiamet.in/passes',
                  name: 'Your Name',
                  company: 'Company / Organization',
                  event: { name: 'INDIAMET 2027', dates: '23–25 April 2027', venue: 'Auto Cluster Exhibition Centre, Pune' }
                }}
              />
            </div>
          </section>

          <section id="register" className="bg-[#191C1C] px-4 py-10 text-white">
            <div className="mx-auto max-w-6xl">
              <a href="/" className="inline-flex rounded-full border border-white/30 px-4 py-1.5 text-sm">← Back to Home</a>
              <span className="ml-3 inline-flex rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold">Registration Open</span>
              <h2 className="mt-6 text-3xl font-bold">INDIAMET 2027</h2>
              <div className="mt-4 max-w-3xl rounded-2xl border border-white/15 p-4 text-sm text-white/80">
                <p className="font-semibold text-white">About This Event</p>
                <p className="mt-2">India’s first dedicated exhibition for metrology, measurement technology, quality assurance, inspection, calibration, testing, and precision engineering. 23–25 April 2027 at Auto Cluster Exhibition Centre, Pune.</p>
              </div>
            </div>
          </section>

          <section className="bg-[#F3F8FC] px-4 py-10">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[280px_1fr]">
              <div className="h-fit space-y-5 rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-[#191C1C]">Event Details</h3>
                <div className="flex gap-3 text-sm text-slate-600">
                  <Calendar className="mt-0.5 h-5 w-5 text-[#0092D7]" />
                  <div>
                    <p className="font-medium text-[#191C1C]">Event Dates</p>
                    <p>23–25 April 2027</p>
                  </div>
                </div>
                <div className="flex gap-3 text-sm text-slate-600">
                  <MapPin className="mt-0.5 h-5 w-5 text-[#00857C]" />
                  <div>
                    <p className="font-medium text-[#191C1C]">Venue</p>
                    <p>Auto Cluster Exhibition Centre, Pune, India</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-xs font-bold tracking-widest text-[#0092D7]">INDIAMET 2027</p>
                <h3 className="mt-2 text-2xl font-bold text-[#191C1C]">Choose Verification Method</h3>
                <p className="mt-1 text-sm text-slate-500">Select how you’d like to receive your one-time password</p>

                <div className="mt-5 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
                  {(['sms', 'whatsapp'] as Channel[]).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setChannel(item)}
                      className={`rounded-lg py-2.5 text-sm font-semibold capitalize ${channel === item ? 'bg-white text-[#191C1C] shadow-sm' : 'text-slate-500'}`}
                    >
                      {item === 'sms' ? 'SMS' : 'WhatsApp'}
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex items-start gap-2 rounded-xl bg-[#E8F6FC] px-4 py-3 text-sm text-[#0F4C6B]">
                  <MessageSquare className="mt-0.5 h-4 w-4 shrink-0" />
                  OTP will be sent via {channel === 'sms' ? 'SMS' : 'WhatsApp'} to your phone number
                </div>

                <label className="mt-5 block text-sm font-medium text-[#191C1C]">Mobile Number *</label>
                <div className="mt-2 flex overflow-hidden rounded-xl border border-slate-200">
                  <select
                    value={countryCode}
                    onChange={(event) => setCountryCode(event.target.value)}
                    className="bg-slate-50 px-3 text-sm outline-none"
                  >
                    {COUNTRIES.map((item) => (
                      <option key={item.code} value={item.code}>{item.flag} {item.code}</option>
                    ))}
                  </select>
                  <input
                    value={phone}
                    onChange={(event) => setPhone(event.target.value.replace(/\D/g, '').slice(0, 12))}
                    placeholder="Enter mobile number"
                    className="w-full px-3 py-3 text-sm outline-none"
                  />
                </div>
                <p className="mt-2 text-xs text-slate-400">Select your country code and enter your mobile number</p>
                {error && !otpOpen && <p className="mt-3 text-sm text-red-600">{error}</p>}

                <button
                  type="button"
                  onClick={sendOtp}
                  disabled={loading}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#191C1C] px-4 py-3 text-sm font-semibold text-white disabled:opacity-60"
                >
                  <Smartphone className="h-4 w-4" />
                  {loading ? 'Sending OTP...' : `Send OTP via ${channel === 'sms' ? 'SMS' : 'WhatsApp'}`}
                </button>
                <p className="mt-3 text-center text-xs text-slate-400">
                  {channel === 'sms' ? 'SMS' : 'WhatsApp'} OTP from INDIAMET • Expires in 10 minutes
                </p>
              </div>
            </div>
            <p className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
              <Lock className="h-3.5 w-3.5" /> Your data is encrypted and secure
            </p>
          </section>
        </>
      )}

      {step === 'register' && (
        <section className="bg-[#F3F8FC] px-4 py-10">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[260px_1fr]">
            <div className="h-fit space-y-5 rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-[#191C1C]">Event Details</h3>
              <p className="flex gap-2 text-sm text-slate-600"><Calendar className="h-4 w-4 text-[#0092D7]" /> 23–25 April 2027</p>
              <p className="flex gap-2 text-sm text-slate-600"><MapPin className="h-4 w-4 text-[#00857C]" /> Auto Cluster Exhibition Centre, Pune</p>
            </div>
            <form onSubmit={completeRegistration} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#191C1C]">Complete Registration</h2>
                  <p className="text-sm text-slate-500">Fill in your details to complete registration</p>
                </div>
                <button type="button" onClick={() => setStep('phone')} className="text-sm font-semibold text-[#0092D7]">Change Number</button>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="Full Name *" value={form.name} onChange={(value) => setForm({ ...form, name: value })} />
                <Field label="Company Or Firm Name *" value={form.company} onChange={(value) => setForm({ ...form, company: value })} />
                <div>
                  <label className="mb-1 block text-sm font-medium">Phone No. *</label>
                  <div className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-3 text-sm">
                    <span>{displayPhone}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-semibold text-white"><Lock className="h-3 w-3" /> Verified</span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-emerald-700">This number was verified via OTP</p>
                </div>
                <Field label="Search By Area / Pin Code *" value={form.pinCode} onChange={(value) => setForm({ ...form, pinCode: value.replace(/\D/g, '').slice(0, 6) })} hint="Auto-fills area, city & state" />
                <Field label="Area / Locality" value={form.area} onChange={(value) => setForm({ ...form, area: value })} locked />
                <Field label="City *" value={form.city} onChange={(value) => setForm({ ...form, city: value })} locked />
                <Field label="State *" value={form.state} onChange={(value) => setForm({ ...form, state: value })} locked />
                <Field label="Country *" value={form.country} onChange={(value) => setForm({ ...form, country: value })} locked hint="Country set based on your phone number" />
                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-medium">How Did You Find Us *</label>
                  <select
                    required
                    value={form.source}
                    onChange={(event) => setForm({ ...form, source: event.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none"
                  >
                    <option value="">Select an option</option>
                    {SOURCES.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-[#191C1C]">What are you looking for?</h3>
                <p className="mt-2 rounded-xl bg-[#E8F6FC] px-4 py-3 text-sm text-[#0F4C6B]">Please select at least one interest to continue with your registration.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {INTERESTS.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`rounded-xl border px-3 py-2 text-sm ${form.interests.includes(interest) ? 'border-[#0092D7] bg-[#0092D7] text-white' : 'border-slate-200 bg-white text-[#0092D7]'}`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
              <button type="submit" disabled={loading} className="mt-6 w-full rounded-xl bg-[#191C1C] py-3 font-semibold text-white disabled:opacity-60">
                {loading ? 'Creating your pass...' : 'Complete Registration'}
              </button>
              <p className="mt-3 text-center text-xs text-slate-400">By registering, you agree to our terms and conditions</p>
            </form>
          </div>
        </section>
      )}

      {step === 'success' && pass && (
        <section className="bg-[#F3F8FC] px-4 py-12">
          <div className="mx-auto max-w-lg text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Check className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-[#191C1C]">Registration Successful!</h2>
            <p className="mt-2 text-sm text-slate-500">Your visitor pass has been sent via {pass.channel === 'sms' ? 'SMS' : 'WhatsApp'}.</p>
            <div className="mt-8">
              <VisitorPassCard pass={pass} />
            </div>
            <div className="mt-6 rounded-2xl bg-[#E8F6FC] p-4 text-left text-sm text-[#0F4C6B]">
              <p className="font-semibold">Next step</p>
              <p className="mt-1">Show this screen or download the badge at the entrance. Registration number:</p>
              <p className="mt-2 font-mono text-lg font-bold">{pass.registrationNumber}</p>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0092D7] py-3 font-semibold text-white"
            >
              <Download className="h-4 w-4" /> Download Full Badge
            </button>
            <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
              <StatusCard title="Check Your WhatsApp / SMS" body={pass.delivered ? 'Confirmation sent' : 'Pass is ready on this page'} />
              <StatusCard title="Badge Ready" body="Download above" />
              <StatusCard title="Event Reminder" body="We'll remind you" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a href="/" className="rounded-xl bg-[#191C1C] py-3 text-sm font-semibold text-white">Back to Home</a>
              <button type="button" onClick={() => window.location.reload()} className="rounded-xl border border-[#0092D7] py-3 text-sm font-semibold text-[#0092D7]">Another Registration</button>
            </div>
          </div>
        </section>
      )}

      {otpOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[#00857C]">INDIAMET</p>
              <button type="button" onClick={() => setOtpOpen(false)} className="text-slate-400">✕</button>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-[#191C1C]">Verify Your Phone Number</h3>
            <p className="mt-2 text-sm text-slate-500">
              We’ve sent a 4-digit verification code to <strong>{displayPhone}</strong>
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-amber-700">
              <Lightbulb className="h-4 w-4" /> Tip: Copy the OTP and paste it here to auto-fill
            </p>
            {devOtp && (
              <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
                Development OTP: <strong>{devOtp}</strong> (also printed in the backend console)
              </p>
            )}
            <div className="mt-5 flex justify-center gap-3" onPaste={handleOtpPaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(node) => { otpRefs.current[index] = node; }}
                  value={digit}
                  onChange={(event) => handleOtpChange(index, event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Backspace' && !otp[index] && index > 0) otpRefs.current[index - 1]?.focus();
                  }}
                  inputMode="numeric"
                  maxLength={1}
                  className="h-14 w-12 rounded-xl border-2 border-slate-200 text-center text-xl font-bold outline-none focus:border-[#0092D7]"
                />
              ))}
            </div>
            {error && <p className="mt-3 text-center text-sm text-red-600">{error}</p>}
            <p className="mt-4 text-center text-sm text-slate-500">
              {secondsLeft > 0 ? (
                <>Resend code in <span className="font-semibold text-[#0092D7]">{secondsLeft}s</span></>
              ) : (
                <button type="button" className="font-semibold text-[#0092D7]" onClick={sendOtp}>Resend code</button>
              )}
            </p>
            <p className="mt-2 text-center text-xs text-slate-400">
              {channel === 'whatsapp' ? 'WhatsApp usually arrives within a few seconds.' : 'SMS usually arrives within a few seconds.'}
            </p>
            <div className="mt-5 border-t pt-4 text-center text-xs text-slate-400">
              <Lock className="mr-1 inline h-3 w-3 text-amber-600" /> Your phone number is securely verified and will not be shared.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  hint,
  locked = false
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  hint?: string;
  locked?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}</label>
      <div className="relative">
        <input
          required={label.includes('*')}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none"
        />
        {locked && value && <Lock className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-600" />}
      </div>
      {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
    </div>
  );
}

function StatusCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-sm">
      <p className="font-semibold text-[#191C1C]">{title}</p>
      <p className="mt-1 text-slate-500">{body}</p>
    </div>
  );
}
