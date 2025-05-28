import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aim Secure Group | UK Security Services",
  description: "Accredited, professional security services for businesses, events, and individuals across the UK. SIA-licensed guards, corporate, event, retail, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Aim Secure Group | UK Security Services</title>
        <meta name="description" content="Accredited, professional security services for businesses, events, and individuals across the UK. SIA-licensed guards, corporate, event, retail, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Aim Secure Group | UK Security Services" />
        <meta property="og:description" content="Accredited, professional security services for businesses, events, and individuals across the UK. SIA-licensed guards, corporate, event, retail, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aimsecuregroup.uk" />
        <meta property="og:image" content="/hero-bg.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aim Secure Group | UK Security Services" />
        <meta name="twitter:description" content="Accredited, professional security services for businesses, events, and individuals across the UK. SIA-licensed guards, corporate, event, retail, and more." />
        <meta name="twitter:image" content="/hero-bg.jpg" />
        <link rel="canonical" href="https://aimsecuregroup.uk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
