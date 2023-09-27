"use client";

import React, { useState, useEffect, useMemo } from "react";
import "./globals.css";

import Wallet from "./components/wallet";
import TimeButton from "./components/timeButton";
import useBackgroundColorChanger from "../../hooks/useBackgroundColorChanger";
import MaxNumber from "./components/maxnumber";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const bgColor = useBackgroundColorChanger();

  //use to prevent hydration problem in next js
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient)
    return (
      <div className="h-screen transition duration-500 min-h-screen justify-center items-center animate-pulse flex flex-col gap-5 justify">
        <p className="font-extrabold text-lg animate-bounce ">Loading.....</p>
      </div>
    );
  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
      }}
      className="h-screen transition cursor-crosshair duration-500 min-h-screen flex flex-col gap-5 "
    >
      <div className="flex flex-col md:flex-row lg:flex-row w-full">
        <Wallet />
        <TimeButton />
        <MaxNumber />
      </div>
    </div>
  );
}
