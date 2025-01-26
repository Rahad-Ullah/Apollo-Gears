import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apollo Gears",
  description: "Next Level Riding Sharing Service",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8">
      Common Navbar
      {children}
    </div>
  );
}
