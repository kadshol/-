import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({ subsets: ["hebrew", "latin"] });

export const metadata: Metadata = {
  title: "פעוטון סאנשיין | חממה של אהבה וצמיחה בירושלים",
  description: "פעוטון סאנשיין בירושלים. שילוב של מונטסורי, אינטליגנציה רגשית וסביבה דו-לשונית.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={assistant.className}>{children}</body>
    </html>
  );
}
