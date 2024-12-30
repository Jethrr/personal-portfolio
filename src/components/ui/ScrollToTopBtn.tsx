import React, { useEffect, useState } from "react";

const ScrollToTopBtn: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleScroll = (): void => {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        !visible ? "hidden" : ""
      } w-10 h-10 fixed bottom-5 right-5 inline-block p-3 dark:bg-black bg-white text-black dark:text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
    >
      <span>
        <i className="fa-solid fa-arrow-up fa-lg"></i>
      </span>
    </button>
  );
};

export default ScrollToTopBtn;
