import React from "react";
import Navbar from "@/components/ui/navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | MSIC Labs",
  description:
    "The page you're looking for doesn't exist. Explore MSIC Labs' software development services, projects, and solutions.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-1 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-primary-1 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-primary-1 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the home page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
              <Link
                href="/"
                className="inline-flex text-white bg-primary-1 hover:bg-primary-2 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
                Back to Homepage
              </Link>
              <Link
                href="/projects"
                className="inline-flex text-primary-1 bg-transparent border-2 border-primary-1 hover:bg-primary-1 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                View Projects
              </Link>
            </div>
            <div className="mt-8 text-left">
              <h2 className="text-xl font-bold text-primary-1 dark:text-white mb-4">
                Popular Pages
              </h2>
              <ul className="space-y-2 text-primary-1 dark:text-gray-400">
                <li>
                  <Link href="/" className="hover:underline">
                    → Home - Software Development Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:underline">
                    → Our Projects - Portfolio & Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/aboutUs" className="hover:underline">
                    → About MSIC Labs - Our Team & Mission
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
