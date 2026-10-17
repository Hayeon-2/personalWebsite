import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello, World!",
  description: "안녕하세요. 새로운 이야기가 시작되는 작은 웹사이트입니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
