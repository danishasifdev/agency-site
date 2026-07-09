import "./globals.css";
import { AGENCY } from "@/lib/config";

export const metadata = {
  title: `${AGENCY.name} - ${AGENCY.tagline}`,
  description: AGENCY.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
