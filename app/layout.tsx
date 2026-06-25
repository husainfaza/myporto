import type { Metadata } from "next";
import { InlineScript } from "@/components/inline-script";
import {
  Schibsted_Grotesk,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const title = `${site.name} — ${site.role}`;
const description =
  "Full-stack developer building reliable web products end to end — from database schema to pixel-perfect UI. Available for roles and select freelance work.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description:
      "Full-stack developer building reliable web products end to end.",
    type: "website",
    url: site.url,
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Full-stack developer building reliable web products end to end.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${schibsted.variable} ${instrument.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <InlineScript
          html={`(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})();`}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
