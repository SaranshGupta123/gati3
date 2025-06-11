import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AiEnsured | AI Tools Dashboard",
  description: "Explore powerful AI tools and dashboards to enhance productivity, automate tasks, and gain insights with AiEnsured.",
  keywords: [
    "AI tools", "AI dashboard", "machine learning", "artificial intelligence",
    "data analysis", "AI automation", "LLM tools", "productivity tools",
    "AiEnsured", "NLP", "computer vision", "AI-powered tools", "AI insights"
  ],
  metadataBase: new URL("https://aiensured.com"), // update with your domain
  robots: "index, follow",
  openGraph: {
    title: "AiEnsured - AI Tools Dashboard",
    description: "Discover the best AI tools for your business with AiEnsured.",
    url: "https://aiensured.com",
    siteName: "AiEnsured",
    images: [
      {
        url: "/og-image.png", // store this in public directory
        width: 1200,
        height: 630,
        alt: "AiEnsured - AI Tools Dashboard"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiEnsured - AI Tools Dashboard",
    description: "Explore AI tools to automate, analyze, and improve workflows.",
    images: ["/og-image.png"],
    creator: "@aiensured", // replace with your handle
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
       <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{height:"100vh",width:"100vw",overflowX:"hidden",overflowY:"auto",boxSizing:"border-box"}}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
