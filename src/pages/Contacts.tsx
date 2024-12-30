import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import Navbar from "@/components/ui/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import { Typewriter } from "@/components/ui/TypeWriter";
// import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
    <div id="contacts" className="relative min-h-screen  w-full">
      <GridBackgroundDemo />
      <div className="relative z-10 w-full  text-[#B2B5AD] flex items-center justify-center">
        <Spotlight />
        <div className="home-container h-full w-full mx-4 xl:mx-60">
          {/* <Navbar /> */}

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

                  {/* <div className="relative">
                    <input
                      type="text"
                      id="user_name"
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-black appearance-none dark:text-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="user_name"
                      className="absolute text-sm text-gray-500 dark:text-blac duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-white bg-black  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Name
                    </label>
                  </div> */}
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
                  {/* <input
                    type="submit"
                    value="Send"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-black dark:text-white cursor-pointer dark:hover:bg-opacity-80"
                  /> */}

                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center w-full overflow-hidden rounded bg-white dark:bg-black px-8 py-3 text-black dark:text-white focus:outline-none focus:ring active:bg-gray-700"
                  >
                    <span className="absolute -end-full transition-all group-hover:end-4">
                      <svg
                        className="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>

                    <span className="text-sm font-medium transition-all group-hover:me-1">
                      Send{" "}
                    </span>
                  </button>
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

                <h1 className="dark:text-black text-white text-center">
                  Shot me a message up here on my accounts!
                </h1>

                <div className="dark:bg-white w-full h-auto py-8 flex items-center justify-center gap-2 flex-wrap">
                  {/* Facebook Icon Button */}
                  <a
                    href="https://www.facebook.com/profile.php?id=100094149589311"
                    className="p-2 rounded-lg flex items-center border bg-white border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 71 72"
                      fill="none"
                    >
                      <path
                        d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z"
                        fill="#111827"
                      />
                    </svg>
                  </a>

                  {/* LinkedIn Icon Button */}
                  <a
                    href="https://www.linkedin.com/in/jether-omictin-a997351b6/"
                    className="p-2 rounded-lg flex items-center border bg-white border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 72 72"
                      fill="none"
                    >
                      <path
                        d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                        fill="#111827"
                      />
                    </svg>
                  </a>

                  {/* Instagram Icon Button */}
                  <a
                    href="https://www.instagram.com/jethvrdio/"
                    className="p-2 rounded-lg flex items-center border bg-white border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 71 72"
                      fill="none"
                    >
                      <path
                        d="M27.3762 35.7808C27.3762 31.1786 31.1083 27.4468 35.7132 27.4468C40.3182 27.4468 44.0522 31.1786 44.0522 35.7808C44.0522 40.383 40.3182 44.1148 35.7132 44.1148C31.1083 44.1148 27.3762 40.383 27.3762 35.7808ZM22.8683 35.7808C22.8683 42.8708 28.619 48.618 35.7132 48.618C42.8075 48.618 48.5581 42.8708 48.5581 35.7808C48.5581 28.6908 42.8075 22.9436 35.7132 22.9436C28.619 22.9436 22.8683 28.6908 22.8683 35.7808Z"
                        fill="#111827"
                      />
                    </svg>
                  </a>
                </div>

                {/* <Link
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
                </Link> */}

                <div className="footer-div  flex justify-center mt-20">
                  <p className="text-sm dark:text-black justify-center text-center text-white ">
                    Copyright © 2024 JETHRR. All rights reserved. <br /> {""}{" "}
                    Build with ❤️ using React, Typescript, Tailwind and Motion
                    and Vercel for hosting.
                  </p>
                </div>
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
