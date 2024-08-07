import Image from "next/image";
import React from "react";
import Stack from "@/components/animation/tech";

const Customer = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        {/* <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">You’ll be in good company</h2> */}
        <Stack />
      </div>
    </section>
  );
};

export default Customer;
