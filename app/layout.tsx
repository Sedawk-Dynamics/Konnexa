import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.brand} — ${site.tagline}`,
    template: `%s — ${site.brand}`,
  },
  description: site.description,
  keywords: [
    "Konnexa Innovations",
    "HR services",
    "recruitment",
    "staffing",
    "payroll",
    "digital marketing",
    "software training",
    "skill development",
    "placements",
    "Jagtial",
    "Telangana",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    title: `${site.brand} — ${site.tagline}`,
    description: site.description,
    siteName: site.brand,
    type: "website",
    locale: "en_IN",
  },
  icons: { icon: "/favicon.ico" },
};

// Set the theme class before paint to avoid a flash. Defaults to light theme;
// only uses dark when the user has explicitly chosen it.
const themeScript = `
(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t==='dark');}catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
