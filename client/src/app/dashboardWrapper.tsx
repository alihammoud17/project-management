"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import StoreProvider, { useAppSelector } from "./redux";
import AuthProvider from "./AuthProvider";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${isSidebarCollapsed ? "" : "md:pl-64"}`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: Props) => {
  return (
    <StoreProvider>
      <AuthProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </AuthProvider>
    </StoreProvider>
  );
};

export default DashboardWrapper;
