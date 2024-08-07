import Image from "next/image";
import React from "react";
import NumberTicker from "@/components/magicui/number-ticker";

const Hero = () => {
  return (
    <div className="hero">
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-xl xl:text-2xl text-primary-1 dark:text-white">
            Crafting Tommorrow's Tech, Today! 
            </h1>
            <h1 className="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-8xl 2xl:text-9xl text-black dark:text-white">
  MSIC LABS
</h1>

            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-1 hover:bg-primary-2 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            <div className="mt-10 bg-gray-100 p-4 rounded-2xl">
              <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                  <NumberTicker value={20} />+
                  </dt>
                  <dd className="font-light text-gray-500 dark:text-gray-400">
                    Projects
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    <NumberTicker value={20} />+
                  </dt>
                  <dd className="font-light text-gray-500 dark:text-gray-400">
                    Clients
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                  <NumberTicker value={5} />
                  </dt>
                  <dd className="font-light text-gray-500 dark:text-gray-400">
                    Developers
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <Image src="/hero.png" alt="msic labs" width={500} height={500} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
