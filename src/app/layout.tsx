import { Work_Sans } from "next/font/google";

import "./globals.scss";

const work_Sans = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${work_Sans.className}`}>{children}</body>
    </html>
  );
}
