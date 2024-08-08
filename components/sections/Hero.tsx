import Image from "next/image";
import React from "react";
import NumberTicker from "@/components/magicui/number-ticker";
import FadeIn from "../transitions/fadein";
import GetStarted from "../getStarted";
import { Suspense } from "react";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <section className="bg-white dark:bg-gray-900">
        <div className="grid justify-center items-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            {/* <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-xl xl:text-2xl text-primary-1 dark:text-white">
              Crafting Tommorrow's Tech, Today!
            </h1> */}
            <FadeIn
              text="   Crafting Tommorrow's Tech, Today!"
              className={
                "max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-xl xl:text-2xl text-primary-1 dark:text-white"
              }
            ></FadeIn>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-8xl text-black dark:text-white">
              MSIC Labs
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              At MSIC Labs, we deliver innovative CMS development, SEO
              optimization, and IT consulting solutions. We transform ideas into
              digital realities with quality and efficiency.
            </p>

            <GetStarted />

            <div className="mt-10 bg-gray-100 dark:bg-slate-700 p-4 rounded-2xl">
              <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 grid-cols-3 dark:text-white">
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
                    Trusted Clients
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    <NumberTicker value={4.5} />+
                  </dt>
                  <dd className="font-light text-gray-500 dark:text-gray-400">
                    Positive Feedbacks
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <Suspense
            fallback={
              <div className="lg:mt-0 lg:col-span-5 flex justify-center items-center">
                ...
              </div>
            }
          >
            <div className="lg:mt-0 lg:col-span-5 flex justify-center items-center">
              <Image src="/hero.png" alt="msic labs" width={500} height={500} />
            </div>
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default Hero;
