const partners = [
  "Match × Access",
  "AI-Powered Face Recognition",
  "Instant Event Check-In",
  "No QR Codes Required",
  "Fraud-Free Entry",
  "Privacy First Technology",
  "By Unifesto",
  "Coming Soon",
];

// Duplicate for seamless loop
const marqueeItems = [...partners, ...partners];

const Separator = () => (
  <span className="mx-6 text-black/30 font-thin text-lg select-none" aria-hidden="true">
    |
  </span>
);

export default function MarqueeBar() {
  return (
    <section
      aria-label="MxA.ai features"
      className="relative overflow-hidden py-0 mt-18"
    >
      {/* Top bleed */}
      <div className="w-full relative overflow-hidden" style={{ background: "linear-gradient(135deg, #bdadff, #8666fa)" }}>
        {/* Shimmer overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
          aria-hidden="true"
        />

        {/* Scrolling content */}
        <div className="flex overflow-hidden" style={{ willChange: "transform" }}>
          <div className="animate-marquee flex items-center pb-3 pt-4">
            {marqueeItems.map((partner, i) => (
              <span key={`${partner}-${i}`} className="inline-flex items-center">
                <span className="text-xl md:text-2xl font-normal text-black tracking-wide whitespace-nowrap">
                  {partner}
                </span>
                <Separator />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
