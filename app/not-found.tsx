import React from "react";
import Navbar from "@/components/ui/navbar";

export default function NotFound() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="flex justify-center w-full h-[90vh] flex-col items-center">
        <h1 className="text-9xl text-primary-1">404</h1>
        <p className="text-primary-1">Not Found !</p>
      </div>
    </div>
  );
}
