import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NCC | Anna University",
  description: "Official NCC Website of Anna University, Chennai",
  keywords:
    "NCC, Anna University, NCC Anna University, NCC AU, National Cadet Corps Anna University, National Cadet Corps AU, NCC College of Engineering Guindy, NCC CEG, NCC ACTech, 1 TN CTC NCC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(plusJakartaSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
