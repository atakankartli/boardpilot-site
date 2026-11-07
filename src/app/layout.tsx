import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { Footer, Nav } from "@/components/site";
import { Reveal } from "@/components/reveal";
import { BASE_PATH, SITE_ORIGIN } from "@/lib/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const description =
  "Board Pilot is an iPhone app and a server for your Windows PC. Chat with a design lead that reads, checks and edits your KiCad boards with your own Claude account.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN), // Next adds the base path to image URLs
  title: { default: "Board Pilot: your PCB design lead, in your pocket", template: "%s · Board Pilot" },
  description,
  openGraph: {
    type: "website",
    siteName: "Board Pilot",
    title: "Board Pilot: your PCB design lead, in your pocket",
    description,
    url: `${BASE_PATH}/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Board Pilot: your PCB design lead, in your pocket",
    description,
  },
};

export const viewport: Viewport = { themeColor: "#0E1A33" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${instrument.variable}`}>
      <head>
        {/* Hide reveal items only when JS runs; set before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-dvh font-sans antialiased">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-cream px-4 py-2 text-navy focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
