import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "템플릿 빌더 프로토타입",
  description: "페이지 빌더 시스템 프로토타입",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
