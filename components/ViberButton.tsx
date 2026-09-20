export default function ViberButton() {
  return (
    <a
      href="viber://chat?number=%2B959669966124"
      aria-label="Chat with Letyar on Viber"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 animate-[riseIn_0.6s_cubic-bezier(0.16,1,0.3,1)_1.2s_both,pulseRingViber_2.6s_ease-out_infinite_1.8s] items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: "#7360F2" }}
    >
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-sm bg-ink px-2.5 py-1.5 font-mono text-xs text-paper opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
        Chat on Viber
      </span>
      {/* Official Viber glyph, viewBox 0 0 48 48 */}
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
        <path
          fill="#F7FAFC"
          d="M9 4.5a1.88 1.88 0 00-1.92 1.88v30.07A1.88 1.88 0 009 38.33h1.88v5.17l10.34-5.17H39a1.88 1.88 0 001.88-1.88V6.38A1.88 1.88 0 0039 4.5Zm4.7 6.58h5.6a1 1 0 01.94.94 10.06 10.06 0 00.63 3.76 1.85 1.85 0 01-.63 2.35l-2 2a17.94 17.94 0 003.38 4.6 18.94 18.94 0 004.61 3.39l2-2a1.85 1.85 0 012.35-.63 10.06 10.06 0 003.76.63 1 1 0 01.94.94v5.64a1 1 0 01-.94.94A22.53 22.53 0 0112.72 12a1 1 0 01.94-.92Z"
        />
      </svg>
    </a>
  );
}
