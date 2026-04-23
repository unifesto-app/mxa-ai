"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <MarqueeBar />
      
      {/* Features Section */}
      <section id="features" className="relative py-20 md:py-28 px-6 bg-black border-t border-white/5">
        {/* Grid pattern background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Why Choose MxA.ai
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Everything you need for<br />
              <span style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>seamless event entry.</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
              Fast, secure, and effortless check-ins powered by AI face recognition technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Instant Check-In",
                description: "Attendees enter in seconds using face recognition",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "Fraud-Free Entry",
                description: "No ticket sharing or duplicate entries",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: "Real-Time Verification",
                description: "Accurate and fast face matching at entry points",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Seamless Experience",
                description: "No apps, no scanning. Just show your face",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-black"
                  style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)" }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#bdadff] group-hover:to-[#8666fa] transition-all">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-20 md:py-28 px-6 bg-black overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Simple by design
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            How it works
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto mb-14">
            From registration to entry — in three steps.
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+16px)] right-[calc(16.66%+16px)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

            {[
              {
                number: "01",
                title: "Register",
                description: "Sign up for the event through Unifesto",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                ),
              },
              {
                number: "02",
                title: "Upload Face",
                description: "Submit your photo during registration",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                number: "03",
                title: "Walk In",
                description: "Get recognized instantly at the entry point",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={item.number}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group"
              >
                {/* Step number */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)" }}
                >
                  <span className="text-black">{item.icon}</span>
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-600 mb-2">{item.number}</span>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative py-20 md:py-28 px-6 bg-black overflow-hidden">
        {/* Glow */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-10"
          style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Visual Demo */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
                {/* Mock face scan header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-slate-500">Face Check-In</p>
                    <p className="text-base font-bold text-white">Tech Summit 2026</p>
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full text-black"
                    style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)" }}
                  >
                    Active
                  </span>
                </div>

                {/* Mock camera preview with face detection */}
                <div className="relative aspect-[4/3] rounded-xl bg-black mb-5 overflow-hidden border border-white/10">
                  {/* Camera grid overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: "linear-gradient(rgba(189,173,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(189,173,255,0.3) 1px, transparent 1px)",
                      backgroundSize: "20px 20px"
                    }} />
                  </div>
                  
                  {/* Face detection box */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-56">
                      {/* Corner brackets with pulse animation - only during scanning (0-2.5s) */}
                      <div className="absolute top-0 left-0 w-10 h-10 border-l-[3px] border-t-[3px] rounded-tl-xl animate-bracket-pulse" style={{ borderColor: '#bdadff', animation: 'bracket-pulse 2.5s ease-in-out, fade-out 0.3s ease-out 2.5s forwards' }} />
                      <div className="absolute top-0 right-0 w-10 h-10 border-r-[3px] border-t-[3px] rounded-tr-xl animate-bracket-pulse" style={{ borderColor: '#bdadff', animation: 'bracket-pulse 2.5s ease-in-out, fade-out 0.3s ease-out 2.5s forwards' }} />
                      <div className="absolute bottom-0 left-0 w-10 h-10 border-l-[3px] border-b-[3px] rounded-bl-xl animate-bracket-pulse" style={{ borderColor: '#bdadff', animation: 'bracket-pulse 2.5s ease-in-out, fade-out 0.3s ease-out 2.5s forwards' }} />
                      <div className="absolute bottom-0 right-0 w-10 h-10 border-r-[3px] border-b-[3px] rounded-br-xl animate-bracket-pulse" style={{ borderColor: '#bdadff', animation: 'bracket-pulse 2.5s ease-in-out, fade-out 0.3s ease-out 2.5s forwards' }} />
                      
                      {/* Face icon - only during scanning (0-2.5s) */}
                      <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'fade-out 0.3s ease-out 2.5s forwards' }}>
                        <svg className="w-28 h-28 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      
                      {/* Scanning line animation - only during scanning (0-2.5s) */}
                      <div 
                        className="absolute inset-x-0 h-2"
                        style={{
                          background: "linear-gradient(to bottom, transparent, rgba(189,173,255,0.9), rgba(189,173,255,0.6), rgba(189,173,255,0.3), transparent)",
                          filter: "blur(3px)",
                          animation: 'face-scan 2.5s ease-in-out, scan-glow 2.5s ease-in-out, fade-out 0.3s ease-out 2.5s forwards'
                        }}
                      />
                      
                      {/* Processing spinner - only during processing (2.5s-3.8s) */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0" style={{ animation: 'scan-complete 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 2.5s forwards, fade-out 0.3s ease-out 3.8s forwards' }}>
                        <div className="w-20 h-20 rounded-full border-4 border-purple-500/20 border-t-purple-400 animate-processing-spin" />
                      </div>
                      
                      {/* Success checkmark - only during success (3.8s+) */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0" style={{ animation: 'scan-complete 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 3.8s forwards' }}>
                        <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center backdrop-blur-sm border-2 border-green-400/30 animate-success-glow">
                          <svg className="w-14 h-14 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={3.5} 
                              d="M5 13l4 4L19 7"
                              strokeDasharray="100"
                              strokeDashoffset="100"
                              style={{ animation: 'check-draw 0.6s cubic-bezier(0.65, 0, 0.35, 1) 4s forwards' }}
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status indicator - changes based on state */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    {/* Scanning state (0-2.5s) */}
                    <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md rounded-full px-5 py-2.5 border border-purple-500/20" style={{ animation: 'fade-out 0.3s ease-out 2.5s forwards' }}>
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                      <span className="text-xs font-semibold text-white">Scanning Face...</span>
                    </div>
                    
                    {/* Processing state (2.5s-3.8s) */}
                    <div className="absolute inset-0 flex items-center gap-2 bg-black/70 backdrop-blur-md rounded-full px-5 py-2.5 border border-purple-500/20 opacity-0" style={{ animation: 'scan-complete 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 2.5s forwards, fade-out 0.3s ease-out 3.8s forwards' }}>
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                      <span className="text-xs font-semibold text-white">Processing...</span>
                    </div>
                    
                    {/* Success state (3.8s+) */}
                    <div className="absolute inset-0 flex items-center gap-2 bg-black/70 backdrop-blur-md rounded-full px-5 py-2.5 border border-green-500/20 opacity-0" style={{ animation: 'scan-complete 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 3.8s forwards' }}>
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-xs font-semibold text-green-400">Checked In</span>
                    </div>
                  </div>

                  {/* Try Again Button - appears after success */}
                  <button
                    className="absolute top-4 right-4 opacity-0 flex items-center gap-2 bg-black/70 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:bg-black/80"
                    style={{ animation: 'scan-complete 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 4.5s forwards' }}
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.reload();
                      }
                    }}
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="text-xs font-semibold text-white">Try Again</span>
                  </button>
                </div>

                {/* Mock check-in result */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-white">Access Granted</p>
                      <p className="text-[10px] text-slate-500">Verified in 0.8s</p>
                    </div>
                  </div>

                  {/* Mock attendee info */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <p className="text-lg font-extrabold text-white">156</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Checked In</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <p className="text-lg font-extrabold text-white">98.7%</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Match Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: text */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                For organizers
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
                Why Choose<br />
                <span style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Face-Based Check-In</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Stop manual ticket scanning and long entry queues. MxA.ai gives every organizer instant, secure face recognition for seamless event access.
              </p>

              {/* Feature bullets */}
              <ul className="flex flex-col gap-3 mb-10">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    text: "Faster Entry, No Queues",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                    text: "Secure and Reliable Access Control",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    text: "Works for Large Crowds",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    ),
                    text: "Easy for Organizers and Attendees",
                  },
                ].map((f) => (
                  <li key={f.text} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-black"
                      style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)" }}
                    >
                      {f.icon}
                    </div>
                    <span className="text-sm text-slate-300">{f.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://unifesto.app/host"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(189,173,255,0.5)] hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)", color: "black" }}
              >
                Start Using MxA.ai
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="relative py-20 md:py-32 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Perfect For Every Event
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From campus events to exclusive gatherings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "College Fests",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                ),
              },
              {
                title: "Workshops",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Hackathons",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
              {
                title: "VIP Access Systems",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
            ].map((useCase, i) => (
              <div
                key={useCase.title}
                className={`animate-fade-in-up animate-delay-${i * 100} p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 text-center`}
              >
                <div className="text-white mb-4 flex justify-center">{useCase.icon}</div>
                <h3 className="text-lg font-bold text-white">{useCase.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="relative py-20 md:py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Security first
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
              Your Privacy Matters
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto">
              Security and privacy built into every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
              <div className="text-white mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Secure Storage</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                We store secure face signatures, not raw images. Your data is encrypted and used only for event access.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
              <div className="text-white mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Data Protection</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Your facial data is encrypted end-to-end and automatically deleted after the event concludes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="try-now" className="relative py-24 md:py-32 px-6 bg-black overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(189,173,255,0.08) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Ready?
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            Your next event<br />starts here.
          </h2>
          <p className="text-slate-500 text-sm md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Join thousands of organizers using MxA.ai by Unifesto for secure, instant event entry.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://unifesto.app/host"
              className="w-full sm:w-auto rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(189,173,255,0.55)] hover:-translate-y-0.5 text-center"
              style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)", color: "black" }}
            >
              Get Started with MxA.ai
            </a>
            <div
              className="w-full sm:w-auto transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(189,173,255,0.25)]"
              style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)", borderRadius: "9999px", padding: "1px" }}
            >
              <a
                href="https://unifesto.app"
                className="block w-full sm:w-auto rounded-full px-8 py-3.5 text-sm font-semibold text-center bg-black"
              >
                <span style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Explore Unifesto Platform</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MxA.ai Meaning Reveal Section */}
      <section className="relative py-20 md:py-28 px-6 bg-black overflow-hidden border-t border-white/5">
        
        {/* Radial glow background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(189,173,255,0.06) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center">
            {/* Main reveal - inline style */}
            <div className="mb-8">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight flex items-center justify-center gap-6 md:gap-8 flex-wrap">
                <span style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Match
                </span>
                
                {/* X made from divider lines */}
                <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                  {/* First diagonal line */}
                  <div 
                    className="absolute top-1/2 left-1/2 w-full h-px origin-center"
                    style={{ 
                      background: "linear-gradient(90deg, transparent, #bdadff, transparent)",
                      transform: "translate(-50%, -50%) rotate(45deg)"
                    }}
                  />
                  {/* Second diagonal line */}
                  <div 
                    className="absolute top-1/2 left-1/2 w-full h-px origin-center"
                    style={{ 
                      background: "linear-gradient(90deg, transparent, #bdadff, transparent)",
                      transform: "translate(-50%, -50%) rotate(-45deg)"
                    }}
                  />
                </div>
                
                <span style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Access
                </span>
              </h2>
            </div>

            {/* Tagline */}
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-4">
                Where <span className="text-white font-semibold">facial recognition</span> meets <span className="text-white font-semibold">instant entry</span>
              </p>
              <p className="text-sm text-slate-500">
                Powered by Unifesto. Built for seamless experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
