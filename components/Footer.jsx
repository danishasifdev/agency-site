import { AGENCY, FOOTER_COLUMNS, SOCIAL_LINKS } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="w-full bg-[#14110f] px-6 pb-8 pt-16 text-[#faf8f5]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 pb-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 font-serif text-lg font-semibold">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#faf8f5] text-xs font-sans font-bold text-[#14110f]">
                {AGENCY.shortName}
              </span>
              {AGENCY.name}
            </div>
            <p className="mt-3 max-w-56 text-sm text-[#faf8f5]/50">
              {AGENCY.tagline}
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-sm font-medium text-[#faf8f5]/50">
                {col.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {col.links.map((item, index) => {
                  if (typeof item === "string") {
                    return (
                      <li
                        key={`${col.title}-${index}`}
                        className="text-[#faf8f5]/80"
                      >
                        {item}
                      </li>
                    );
                  }

                  return (
                    <li key={`${col.title}-${item.name}`}>
                      <a
                        href={item.url}
                        className="text-[#faf8f5]/80 hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-[#faf8f5]/10 pt-6 text-xs text-[#faf8f5]/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {AGENCY.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.label} href={s.href} className="hover:underline">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
