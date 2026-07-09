export default function WorkThumbnail({ project, className = "" }) {
  const [from, to] = project.image;
  const gradId = `grad-${project.slug}`;

  return (
    <div className={`overflow-hidden rounded-2xl border border-black/8 bg-white ${className}`}>
      {/* Fake browser chrome so the placeholder reads as a "screenshot" */}
      <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#f5f3ef] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
      <svg viewBox="0 0 400 260" className="h-full w-full">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill={`url(#${gradId})`} />
        <circle cx="80" cy="70" r="34" fill="#ffffff" opacity="0.15" />
        <rect x="40" y="130" width="180" height="14" rx="7" fill="#ffffff" opacity="0.35" />
        <rect x="40" y="154" width="130" height="10" rx="5" fill="#ffffff" opacity="0.2" />
        <rect x="40" y="185" width="90" height="28" rx="14" fill="#ffffff" opacity="0.9" />
        <circle cx="330" cy="200" r="60" fill="#ffffff" opacity="0.08" />
      </svg>
    </div>
  );
}
