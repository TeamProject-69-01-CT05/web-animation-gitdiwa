import type { Metadata } from "next";
import localFont from "next/font/local"; 
import "./globals.css";

const pixelFont = localFont({ 
  src: "./fonts/TA-8-bit.ttf", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Git Di Waa",
  description: "เกมจำลองการเรียนรู้คำสั่ง Git สุดป่วน",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      {/*บังคับใช้ฟอนต์พิกเซลกับทุกตัวอักษรในเกม */}
      <body className={pixelFont.className}>
        {children}
      </body>
    </html>
  );
}