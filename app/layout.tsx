import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ReactQueryProvider from "./providers";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

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
        <ReactQueryProvider>
          <Header />
          {children}
          <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            className={cn(
              "fixed -z-10 [mask-image:linear-gradient(to_bottom,white,transparent,transparent)] lg:[mask-image:linear-gradient(to_bottom_right,white,white,white,transparent,transparent,transparent,transparent)]",
            )}
          />
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
