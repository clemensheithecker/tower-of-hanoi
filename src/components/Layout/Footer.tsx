import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8">
      <p className="text-center text-gray-800">
        Made with ❤️ by{" "}
        <a className="font-semibold" href="https://clemensheithecker.com/">
          Clemens&nbsp;Heithecker
        </a>
        .
      </p>
      <p className="mt-1 text-center text-gray-800">
        Checkout the{" "}
        <a
          className="font-semibold"
          href="https://github.com/clemensheithecker/tower-of-hanoi"
        >
          project's repository on GitHub
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
