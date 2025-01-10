import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

async function screenshotApiUrl (url: string) {
  // const apiUrl = `https://api.screenshotapi.net/screenshot?token=${process.env.NEXT_PUBLIC_SNAPSHOT_API_KEY}&url=${url}&width=1200&height=630`;
  const apiUrl = await fetch(`https://api.screenshotapi.com/take?url=${url}&apiKey=${process.env.NEXT_PUBLIC_SNAPSHOT_API_KEY}&viewportWidth=1600&viewportHeight=900&waitUntil=domcontentloaded`);
  const data = await apiUrl.json();

  // console.log(data.outputUrl);

  return data.outputUrl;
  // Log the URL to the console
  // console.log("Generated Screenshot API URL:", apiUrl);
  
  return apiUrl;
};

export const metadata: Metadata = {
  title: "Parth Solanki | Software Engineer Portfolio",
  description: "Showcasing my work in software development, cloud computing, and more!",
  openGraph: {
    title: "Parth Solanki | Software Engineer Portfolio",
    description: "Check out my portfolio showcasing my projects, skills, and experience!",
    images: [
      {
        url: "", // Use the API URL to fetch the screenshot
        width: 1200,
        height: 630,
        alt: "Parth Solanki Portfolio Thumbnail",
      },
    ],
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const screenshotUrl = await screenshotApiUrl("https://parthsolanki.tech"); // Fetch the screenshot URL dynamically

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Showcasing my work in software development, cloud computing, and more!" />

        {/* Open Graph (OG) Meta Tags for LinkedIn/Facebook */}
        <meta property="og:title" content="Parth Solanki | Software Engineer Portfolio" />
        <meta property="og:description" content="Check out my portfolio showcasing my projects, skills, and experience!" />
        <meta property="og:image" content={screenshotUrl} />
        <meta property="og:url" content="https://parthsolanki.tech" />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
