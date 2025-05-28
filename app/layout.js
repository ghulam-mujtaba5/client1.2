import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aim Secure Group | Professional Security Services UK",
  description:
    "Accredited, SIA-licensed security for retail, corporate, events, logistics, and more. Trusted by leading brands across the UK and Europe.",
  keywords:
    "security, SIA, guards, corporate, retail, event, logistics, UK, protection, safety",
  openGraph: {
    title: "Aim Secure Group",
    description: "Professional, accredited security services for every sector.",
    url: "https://www.aimsecuregroup.uk",
    siteName: "Aim Secure Group",
    images: [
      {
        url: "/logo.svg",
        width: 400,
        height: 400,
        alt: "Aim Secure Group Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a237e" />
        <link rel="icon" href="/favicon.ico" />
        {/* SEO and accessibility meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Aim Secure Group" />
      </Head>
      <body
        style={{
          fontFamily: "var(--font-geist-sans, Arial, sans-serif)",
          background: "#f4f8fc",
          color: "var(--gray-dark)",
          margin: 0,
        }}
      >
        <a
          href="#main-content"
          className="skip-link"
          style={{
            position: "absolute",
            left: "-999px",
            top: "auto",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            zIndex: 1000,
            background: "#fff",
            color: "#1a237e",
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          Skip to main content
        </a>
        <div id="main-content" role="main" tabIndex={-1}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
