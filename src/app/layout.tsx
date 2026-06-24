import type { Metadata } from "next";
import "./globals.css"; 
export  const metadata: Metadata = {
  title: "Ritik Aryan | Full-Stack Software Engineer",
  description: "Specializing in building high-throughput web applications, performance systems, and scalable web architectures.",
  keywords: ["Software Engineer", "Full-Stack Developer", "Next.js Portfolio", "Web Optimization"],
  authors: [{ name: "Ritik Aryan" }],
  creator: "Ritik Aryan",
  openGraph: {
    title: "Ritik Aryan | Full-Stack Software Engineer",
    description: "Explore engineering case studies, specialized project repositories, and technical consulting architectures.",
    url: "https://yourportfolio.com", // Swap with your real domain later
    siteName: "Ritik Aryan Portfolio",
    images: [
      {
        url: "/og-image.png", // Image shown when shared on social media
        width: 1200,
        height: 630,
        alt: "Ritik Aryan Engineering Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Aryan | Full-Stack Software Engineer",
    description: "Building high-performance, system-optimized web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}