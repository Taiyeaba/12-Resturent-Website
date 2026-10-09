import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  User,
  Phone,
  Mail,
  Calendar,
  Clock,
  Users,
  MessageCircle,
  MessageSquare,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { restaurantConfig } from '../data/restaurantData';

import tableReqImg from '../assets/images/table-req.jpg';

gsap.registerPlugin(ScrollTrigger);

/* ---------- shared field styles ---------- */
const inputCls =
  'w-full bg-[#0B0B0A]/70 border border-[#C5A46D]/20 hover:border-[#C5A46D]/40 focus:border-[#C5A46D] text-[#F4F0E8] placeholder:text-[#A8A39A]/60 pl-10 pr-3 py-3 text-[13px] font-sans font-light outline-none transition-colors duration-300 rounded-none';

const iconCls =
  'absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5A46D]/70 pointer-events-none';

function Label({ icon: Icon, children }) {
  return (
    <label className="flex items-center gap-2 mb-2 text-[12px] text-[#F4F0E8]/80 font-sans font-light">
      <Icon className="w-3.5 h-3.5 text-[#C5A46D]/80" strokeWidth={1.5} />
      {children}
    </label>
  );
}

export default function ReservationSection() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: restaurantConfig.reservationOptions.times[3],
    guests: '2',
    specialRequest: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.animate-form'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateMessageText = () => {
    return `Hello LUMIÈRE,

I'd like to request a table.

Name: ${formData.name || 'Not specified'}
Date: ${formData.date || 'Not specified'}
Preferred Time: ${formData.time}
Guests: ${formData.guests}
Phone: ${formData.phone || 'Not specified'}
Email: ${formData.email || 'Not specified'}
Special Request: ${formData.specialRequest || 'None'}`;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(generateMessageText());
    const waUrl = `https://wa.me/${restaurantConfig.contact.whatsappNumber}?text=${text}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Table Request — ${restaurantConfig.name}`);
    const body = encodeURIComponent(generateMessageText());
    const mailtoUrl = `mailto:${restaurantConfig.contact.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleWhatsApp(e);
  };

  return (
    <section
      id="reservation"
      ref={sectionRef}
      className="relative bg-[#0B0B0A] text-[#F4F0E8] overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr]">
        {/* ============ LEFT — FULL BLEED IMAGE ============ */}
        <div className="relative hidden lg:flex items-center overflow-hidden">
          <img
            src={tableReqImg}
            alt="Restaurant table setting"
            className="absolute top-0 left-[16%] h-full w-auto max-w-none"
            style={{
              /* image melts into black on its left edge, so it sits in the MIDDLE and the text stays on dark */
              maskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
            }}
          />

          {/* Soft dark behind the text (left) and a fade into the form side (right) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(11,11,10,0.55) 0%, rgba(11,11,10,0.2) 35%, rgba(11,11,10,0) 55%, rgba(11,11,10,0) 86%, #0B0B0A 100%)',
            }}
          />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0B0B0A]/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0B0A]/70 to-transparent" />

          {/* Text */}
          <div className="relative z-10 w-full px-12 xl:px-20 py-20">
            <div className="max-w-md">
              {/* Eyebrow */}
              <div className="animate-form flex items-center gap-3 mb-9">
                <span className="w-1.5 h-1.5 rotate-45 bg-[#C5A46D]" />
                <span className="h-px w-8 bg-[#C5A46D]/70" />
                <span className="text-[11px] uppercase tracking-[0.45em] text-[#C5A46D] font-sans font-light">
                  Reservation
                </span>
              </div>

              {/* Heading */}
              <h2
                className="animate-form font-serif text-5xl xl:text-6xl 2xl:text-7xl font-light uppercase tracking-[0.04em] text-[#F4F0E8] leading-[1.02] mb-8"
                style={{ textShadow: '0 4px 24px rgba(0,0,0,0.7)' }}
              >
                Request
                <br />
                A Table
              </h2>

              {/* Quote */}
              <p className="animate-form font-serif italic text-base xl:text-lg text-[#F4F0E8]/85 font-light leading-relaxed mb-9 max-w-sm">
                Tell us when you'd like to visit and we'll get back to you to confirm your reservation.
              </p>

              {/* Booking badge */}
              <div className="animate-form inline-flex items-center gap-3 border border-[#C5A46D]/70 px-5 py-2.5 rounded-full">
                <span className="w-1 h-1 rotate-45 bg-[#C5A46D]" />
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#F4F0E8]/90 font-sans">
                  Booking request only · No instant prepayment
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ============ RIGHT — FORM ============ */}
        <div className="relative flex items-center bg-[#0B0B0A] px-6 md:px-12 lg:pl-4 lg:pr-10 xl:pr-[5%] py-16 lg:py-12">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#C5A46D]/[0.05] blur-[130px]" />
          </div>

          <div className="relative z-10 w-full">
            {/* Mobile heading */}
            <div className="lg:hidden mb-10 animate-form">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-1.5 h-1.5 rotate-45 bg-[#C5A46D]" />
                <span className="h-px w-8 bg-[#C5A46D]/70" />
                <span className="text-[10px] uppercase tracking-[0.45em] text-[#C5A46D] font-sans font-light">
                  Reservation
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-light uppercase tracking-[0.04em] text-[#F4F0E8] mb-4 leading-[1.05]">
                Request
                <br />A Table
              </h2>
              <p className="font-serif italic text-sm text-[#A8A39A] max-w-sm">
                Tell us when you'd like to visit and we'll get back to you to confirm your reservation.
              </p>
            </div>

            {/* Form panel */}
            <div className="relative border border-[#C5A46D]/20 bg-[#0B0B0A]/60 p-6 sm:p-7 animate-form">
              {submitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="mx-auto w-16 h-16 border border-[#C5A46D]/40 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#C5A46D]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light uppercase tracking-[0.08em] text-[#F4F0E8]">
                    Request <span className="italic normal-case tracking-normal text-[#C5A46D]">Generated</span>
                  </h3>
                  <p className="text-xs text-[#A8A39A] font-sans font-light max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="text-[#C5A46D]">{formData.name}</span>. Your reservation details have been prepared. Our host team will review availability and confirm shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-7 py-3 border border-[#C5A46D]/60 text-[10px] uppercase tracking-[0.3em] text-[#C5A46D] hover:bg-[#C5A46D] hover:text-[#0B0B0A] transition-colors duration-500 cursor-pointer"
                  >
                    Edit Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name / Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                    <div>
                      <Label icon={User}>Full Name *</Label>
                      <div className="relative">
                        <User className={iconCls} strokeWidth={1.5} />
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div>
                      <Label icon={Phone}>Phone Number *</Label>
                      <div className="relative">
                        <Phone className={iconCls} strokeWidth={1.5} />
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email / Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                    <div>
                      <Label icon={Mail}>Email Address *</Label>
                      <div className="relative">
                        <Mail className={iconCls} strokeWidth={1.5} />
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div>
                      <Label icon={Calendar}>Date</Label>
                      <div className="relative">
                        <Calendar className={iconCls} strokeWidth={1.5} />
                        <input
                          type="date"
                          name="date"
                          required
                          placeholder="Select date"
                          value={formData.date}
                          onChange={handleChange}
                          className={`${inputCls} cursor-pointer [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Time / Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                    <div>
                      <Label icon={Clock}>Time</Label>
                      <div className="relative">
                        <Clock className={iconCls} strokeWidth={1.5} />
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`${inputCls} appearance-none cursor-pointer pr-9`}
                        >
                          {restaurantConfig.reservationOptions.times.map((t) => (
                            <option key={t} value={t} className="bg-[#151513] text-[#F4F0E8]">
                              {t}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#C5A46D]/70 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" strokeWidth={1.5} />
                      </div>
                    </div>

                    <div>
                      <Label icon={Users}>Guests</Label>
                      <div className="relative">
                        <Users className={iconCls} strokeWidth={1.5} />
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className={`${inputCls} appearance-none cursor-pointer pr-9`}
                        >
                          {restaurantConfig.reservationOptions.guests.map((g) => (
                            <option key={g} value={g} className="bg-[#151513] text-[#F4F0E8]">
                              {g}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#C5A46D]/70 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Special Request */}
                  <div>
                    <Label icon={MessageCircle}>Special Request (Optional)</Label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3.5 top-3.5 w-4 h-4 text-[#C5A46D]/70 pointer-events-none" strokeWidth={1.5} />
                      <textarea
                        name="specialRequest"
                        rows={2}
                        placeholder="Any special request..."
                        value={formData.specialRequest}
                        onChange={handleChange}
                        className={`${inputCls} resize-none`}
                      />
                    </div>
                  </div>

                  {/* Submit + sign-off */}
                  <div className="flex items-center justify-between gap-6 pt-3">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-8 px-8 py-3.5 border border-[#C5A46D] text-[#F4F0E8] hover:bg-[#C5A46D] hover:text-[#0B0B0A] text-[11px] uppercase tracking-[0.3em] font-sans transition-colors duration-500 cursor-pointer"
                    >
                      Send Request
                      <ArrowRight className="w-4 h-4 text-[#C5A46D] group-hover:text-[#0B0B0A] group-hover:translate-x-1 transition-all duration-500" />
                    </button>

                    <div className="hidden sm:flex items-center gap-4">
                      <span className="h-px w-14 bg-[#C5A46D]/40" />
                      <span className="font-serif italic text-xs text-[#A8A39A] leading-snug">
                        We look forward to
                        <br />
                        welcoming you.
                      </span>
                    </div>
                  </div>

                  {/* Direct options */}
                  <div className="pt-5 mt-1 border-t border-[#C5A46D]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#A8A39A] font-sans">
                      Or request directly via
                    </span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        className="inline-flex items-center gap-2 border border-[#C5A46D]/25 hover:border-[#25D366] hover:text-[#25D366] text-[#A8A39A] px-4 py-2 text-[10px] uppercase tracking-[0.22em] font-sans transition-colors duration-300 cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" strokeWidth={1.5} />
                        WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={handleEmail}
                        className="inline-flex items-center gap-2 border border-[#C5A46D]/25 hover:border-[#C5A46D] hover:text-[#C5A46D] text-[#A8A39A] px-4 py-2 text-[10px] uppercase tracking-[0.22em] font-sans transition-colors duration-300 cursor-pointer"
                      >
                        <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                        Email
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}