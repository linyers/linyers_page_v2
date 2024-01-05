import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import Providers from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ignacio Jimenez | Fullstack Developer",
  description: "By Linyers",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-[#f7f1f1] dark:bg-slate-800`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
