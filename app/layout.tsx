import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Little List — A little focus, a lot of possibility",
  description: "A calm space for your everyday tasks. Plan, organize, and celebrate the little things with Little List.",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-[#EAF0EB] font-[Arial,Helvetica,sans-serif] text-[#213d35] flex w-screen justify-center pt-20 px-8">{children}</body>
    </html>
  );
};

export default RootLayout;
