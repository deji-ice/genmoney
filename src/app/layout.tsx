import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "GENMONEY",
  description: "Build Wealth. Own your Future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` font-family-open-sauce antialiased max-w-[1700px] xl:mx-auto`}>
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
