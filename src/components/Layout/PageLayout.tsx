import React from "react";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 sm:justify-center">
      <div className="mx-auto max-w-screen-lg px-6 py-12">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
