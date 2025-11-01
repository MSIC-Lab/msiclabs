import React from "react";

const Project: React.FC = () => (
    <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 ">
            {/* Mockup Section */}
            <div className="relative bg-red-300 mr-4 md:mr-0 md:order-last">
                {/* iMac Mockup */}
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[294px] max-w-[512px]">
                    <div className="rounded-xl overflow-hidden h-[262px]">
                        <img
                            src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png"
                            className="dark:hidden h-full w-full object-cover"
                            alt="iMac mockup light"
                        />
                        <img
                            src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png"
                            className="hidden dark:block h-full w-full object-cover"
                            alt="iMac mockup dark"
                        />
                    </div>
                </div>
                <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[42px] max-w-[512px]"></div>
                <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[95px] max-w-[142px]"></div>

                {/* Phone Mockup (Overlay) */}
                <div className="absolute right-[-40px] bottom-[20px] z-10 w-[150px] h-[300px] border-[10px] border-gray-800 bg-gray-800 rounded-[2rem] shadow-xl hidden md:block">
                    <div className="w-[74px] h-[10px] bg-gray-800 top-0 rounded-b-lg left-1/2 -translate-x-1/2 absolute"></div>
                    <div className="h-[24px] w-[2px] bg-gray-800 absolute -start-[10px] top-[62px] rounded-s-lg"></div>
                    <div className="h-[24px] w-[2px] bg-gray-800 absolute -start-[10px] top-[89px] rounded-s-lg"></div>
                    <div className="h-[32px] w-[2px] bg-gray-800 absolute -end-[10px] top-[75px] rounded-e-lg"></div>
                    <div className="rounded-[1.5rem] overflow-hidden w-[132px] h-[280px] bg-white dark:bg-gray-800">
                        <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
                            className="dark:hidden w-full h-full object-cover"
                            alt="Phone mockup light"
                        />
                        <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
                            className="hidden dark:block w-full h-full object-cover"
                            alt="Phone mockup dark"
                        />
                    </div>
                </div>
            </div>

            {/* Text Content */}
            <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    MSIC POS – Smart Retail, Smarter Sales
                </h2>
                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                    MSIC POS is a powerful point-of-sale and inventory management system designed for modern retail businesses. It helps you manage sales, track stock, generate invoices and reports, and streamline operations with real-time data and barcode integrations.
                </p>
                <a
                    href="#"
                    className="inline-flex items-center text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
                >
                    Request a demo
                    <svg
                        className="ml-2 -mr-1 w-5 h-5"
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
            </div>
        </div>
    </section>
);

export default Project;
