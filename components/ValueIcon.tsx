// Simple line icons for the values cards.
export default function ValueIcon({ name }: { name: string }) {
  const common = { width: 44, height: 44, viewBox: "0 0 44 44", fill: "none", stroke: "currentColor", strokeWidth: 1.2, "aria-hidden": true } as const;
  if (name === "eye")
    return (
      <svg {...common}>
        <circle cx="22" cy="22" r="21" />
        <path d="M8 22c4-6 9-9 14-9s10 3 14 9c-4 6-9 9-14 9s-10-3-14-9z" />
        <circle cx="22" cy="22" r="4.5" />
      </svg>
    );
  if (name === "lens")
    return (
      <svg {...common}>
        <circle cx="22" cy="22" r="21" />
        <circle cx="22" cy="22" r="14" />
        <circle cx="22" cy="22" r="7" />
        <path d="M22 8v6M22 30v6M8 22h6M30 22h6" />
      </svg>
    );
  return (
    <svg {...common}>
      <circle cx="22" cy="22" r="21" />
      <path d="M11 15v-4h4M29 11h4v4M33 29v4h-4M15 33h-4v-4" />
      <rect x="16" y="17" width="12" height="10" />
    </svg>
  );
}
