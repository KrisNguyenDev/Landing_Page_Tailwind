import Footer from "@/pages/Footer/Footer";
import Header from "@/pages/Header";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
