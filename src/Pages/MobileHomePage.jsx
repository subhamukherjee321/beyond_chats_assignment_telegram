import React from "react";
import Tabs from "../components/MobileView/Tabs";
import MobileNavbar from "../components/MobileView/MobileNavbar";

const MobileHomePage = () => {
  return (
    <section className="sm: block md:hidden">
      <header>
        <MobileNavbar />
        <Tabs />
      </header>
    </section>
  );
};

export default MobileHomePage;
