import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ability English - 비대면 화상 영어의 새로운 기준",
  description: "대면 수업을 뛰어넘는 효과적인 비대면 화상 영어 교육. 편리함과 효율성을 동시에 경험하세요.",
  keywords: ["화상영어", "비대면영어", "온라인영어", "영어회화", "Ability English"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
