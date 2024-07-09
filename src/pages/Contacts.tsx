import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/ui/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import { Typewriter } from "@/components/ui/TypeWriter";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { motion } from "framer-motion";

const Contacts: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_qjtm93p",
          "template_ejk2mjg",
          form.current,
          "l9UXGH9zU0x9-8cWT"
        )
        .then(
          () => {
            toast({
              title: "Your message has been sent successfully!",
              description: "I'll get back to you as soon as possible.",
            });
            console.log("SUCCESS!");
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem sending your message",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }
        );
    }
  };

  return (
    <div className="relative min-h-screen  w-full">
      <GridBackgroundDemo />
      <div className="relative z-10 w-full  text-[#B2B5AD] flex items-center justify-center">
        <Spotlight />
        <div className="home-container h-full w-full mx-4 xl:mx-60">
          <Navbar />

          <div className="home-contents  dark:white">
            <Typewriter />
            {/* Contact Form Section */}
            <motion.div
              className="contact-form p-4 max-w-lg mx-auto rounded-lg text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-white dark:text-black"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-black dark:focus:border-black dark:border-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-sm font-medium text-white dark:text-black"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_name"
                    id="from_name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-black dark:focus:border-black dark:border-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white dark:text-black"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-black dark:focus:border-black dark:border-black"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    value="Send"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-black dark:text-white cursor-pointer dark:hover:bg-opacity-80"
                  />
                </div>
              </form>

              {/* Contact Buttons Section */}
              <div className="flex flex-col items-center mt-8">
                <div className="relative w-full my-4 ">
                  <div className="absolute inset-0 flex items-center">
                    <div className="relative w-full border-t border-gray-300 dark:border-black"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-black text-white dark:text-black dark:bg-white">
                      Or
                    </span>
                  </div>
                </div>
                <Link
                  to="https://www.facebook.com/profile.php?id=100094149589311"
                  className="w-full"
                >
                  <button className="w-full flex items-center justify-center py-2 mb-3 text-white bg-blue-600 rounded hover:bg-blue-700">
                    <FaFacebook className="mr-2" />
                    Facebook
                  </button>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/jether-omictin-a997351b6/"
                  className="w-full"
                >
                  <button className="w-full flex items-center justify-center py-2 mb-3 text-white bg-red-600 rounded hover:bg-red-700">
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                  </button>
                </Link>
                <Link to="https://github.com/Jethrr" className="w-full">
                  <button className="w-full flex items-center justify-center py-2 text-black bg-gray-300 rounded hover:bg-gray-400">
                    <FaGithub className="mr-2" />
                    Github
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Contacts;
