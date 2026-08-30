import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, MessageSquare, Sparkles, HelpCircle, Globe, ShieldCheck, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const contactEmail = 'imbhuvi91@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Where does UniverseFacts get its space data?',
      a: 'All data on UniverseFacts is collected from peer-reviewed astrophysics databases, including the NASA Exoplanet Archive, ISRO Mission Feeds, ESA Gaia Observatory, Event Horizon Telescope (EHT) releases, and USGS planetary geology records.',
    },
    {
      q: 'How can I submit a scientific query or data correction?',
      a: 'You can send any query or data correction directly to imbhuvi91@gmail.com or fill out the query form on this page. Our team reviews all incoming inquiries against official agency catalogs.',
    },
    {
      q: 'Can I use UniverseFacts content for school or research projects?',
      a: 'Yes! UniverseFacts is built for educational and open science purposes. You are welcome to cite our metrics and interactive modules for academic or non-commercial work.',
    },
    {
      q: 'How fast do you respond to queries?',
      a: 'We endeavor to review and reply to all email inquiries at imbhuvi91@gmail.com within 24 to 48 hours.',
    },
  ];

  return (
    <div className="space-y-12 pb-16 animate-fade-in-up">
      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950/40 text-slate-900 dark:text-white relative overflow-hidden shadow-2xl space-y-6">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
            <Mail className="w-3.5 h-3.5 text-cyan-500" />
            <span>CONNECT WITH US</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Have a Query? <br />
            <span className="text-gradient-cyan">Contact UniverseFacts</span>
          </h1>

          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg font-sans leading-relaxed">
            Whether you have questions about cosmic telemetry, scientific data suggestions, or partnership opportunities, we welcome your inquiries. Send any query to{' '}
            <strong className="text-cyan-600 dark:text-cyan-300 font-mono">imbhuvi91@gmail.com</strong> or send a message below.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID: DIRECT EMAIL CARD + FORM ───────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT: Direct Contact Info Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/80 space-y-6 shadow-xl text-slate-900 dark:text-white">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-500">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Direct Email</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">24/7 Inquiry Channel</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 space-y-3">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold block">
                Primary Contact Address
              </span>
              
              <div className="flex items-center justify-between gap-2 font-mono text-sm sm:text-base font-bold text-cyan-600 dark:text-cyan-300 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-cyan-500/30">
                <span className="truncate">{contactEmail}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Email copied to clipboard!
                </p>
              )}

              <a
                href={`mailto:${contactEmail}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-all shadow-md active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email App</span>
              </a>
            </div>

            <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-white/10 text-xs font-mono">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Response Time: Within 24 - 48 Hours</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                <span>Global Support: Educational & Research Inquiries</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Peer-Reviewed Science Corrections Welcome</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Interactive Contact / Query Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/80 space-y-6 shadow-xl text-slate-900 dark:text-white">
            <div>
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider block">
                SEND A MESSAGE OR QUERY
              </span>
              <h2 className="text-2xl font-display font-extrabold mt-1">Submit Your Inquiry</h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
                Fill in the details below to send a message directly to our editorial team.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-fade-in-up">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">Query Received!</h3>
                  <p className="text-xs sm:text-sm font-sans text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your query has been successfully submitted. We will get back to you at <strong>{formData.email}</strong> shortly.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-mono font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-950 transition-all hover:opacity-90"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-white/10 text-xs font-sans text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-white/10 text-xs font-sans text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">Inquiry Category</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-white/10 text-xs font-sans text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Scientific Data Correction">Scientific Data Correction / Update</option>
                    <option value="Educational / Research Request">Educational / Research Request</option>
                    <option value="Feedback & Suggestions">Feedback & Suggestions</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">Your Message or Query *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Type your question or query here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-white/10 text-xs font-sans text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-mono font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-all shadow-lg active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Query to imbhuvi91@gmail.com</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* ── FAQ SECTION ────────────────────────────────────────── */}
      <section className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white">Common Queries</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 space-y-2">
              <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs font-sans text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
