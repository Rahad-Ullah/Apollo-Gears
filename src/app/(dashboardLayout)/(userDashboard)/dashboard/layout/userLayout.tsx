"use client";

import { NavbarWrapper } from "@/app/(dashboardLayout)/components/navbar/navbar";
import { SidebarWrapper } from "@/app/(dashboardLayout)/components/sidebar/userSidebar";

interface Props {
  children: React.ReactNode;
}

export const UserLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <SidebarWrapper></SidebarWrapper>

      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};