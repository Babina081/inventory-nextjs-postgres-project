import React, { ReactNode } from "react";
import Navbar from "./(components)/Navbar";
import Sidebar from "./(components)/Navbar/Sidebar";

type Props = {};

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`light  flex bg-gray-50 text-gray-900 min-h-screen w-full`}>
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24 `}
      >
        <Navbar></Navbar>
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
