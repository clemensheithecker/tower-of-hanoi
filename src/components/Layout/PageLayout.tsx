import React from "react";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto flex max-w-screen-lg flex-col px-6 py-12 sm:justify-center">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
