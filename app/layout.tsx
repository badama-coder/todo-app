import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Little List — A little focus, a lot of possibility",
  description: "A calm space for your everyday tasks. Plan, organize, and celebrate the little things with Little List.",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-[#EAF0EB] font-[Arial,Helvetica,sans-serif] text-[#213d35] flex w-screen h-screen justify-center items-center p-5">{children}</body>
    </html>
  );
};

export default RootLayout;
