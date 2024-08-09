"use client";
import React, { useState, FormEvent } from "react";

export default function Contact() {
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); // New state for tracking submission

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "2c98bd27-c356-475c-b22f-38f9405ea12f");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Your message has been sent successfully!");
        setMessageType("success");
        setIsSubmitted(true); 
      } else {
        console.error(result);
        setMessage("Sorry, there was an error sending your message.");
        setMessageType("error");
      }
    } catch (error) {
      console.error(error);
      setMessage("An unexpected error occurred. Please try again later.");
      setMessageType("error");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            E mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="your Email"
            required
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="subject"
            name="first_name"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="sm:col-span-2 my-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a message..."
            required
          ></textarea>
        </div>
        {!isSubmitted && ( 
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-800 sm:w-fit hover:bg-primary-1 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary-1 dark:hover:bg-primary-1 dark:focus:ring-blue-800"
          >
            Send message
          </button>
        )}
        {message && (
          <div
            className={`mt-4 p-4 text-sm rounded-lg ${
              messageType === 'success'
                ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-300'
                : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-300'
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </>
  );
}
