import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { ThemeProvider } from '@/components/theme-provider';

import "./globals.css";
import TopNavigation from "@/components/TopNavigation";
import FooterMenu from "@/components/FooterMenu";
import BottomNavigation from "@/components/BottomNavigation";

const BeVietnamPro = Be_Vietnam_Pro({ 
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'] 
});

export const metadata: Metadata = {
  title: "Spotengfy",
  description: "App for music experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={BeVietnamPro.className}>{children}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <TopNavigation />
          {/* <BottomNavigation /> */}
          <FooterMenu />
          </ThemeProvider>
      </body>
    </html>
  );
}
