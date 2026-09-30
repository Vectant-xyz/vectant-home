export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M4 12l6 6L20 6" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Chevron Seal mark — matches vectant-brand-kit/svg/vectant-mark-color.svg */
export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" role="img">
      <rect x="4" y="4" width="40" height="40" rx="11" stroke="#0E6B57" strokeWidth="2.4" />
      <path
        d="M14 16 L24 33 L34 16"
        stroke="#0E6B57"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="13.5" r="2.5" fill="#9A7B3F" />
    </svg>
  );
}
