import React from "react";

function Footer() {
  return (
    <footer className="max-w-md mx-auto mb-4 bg-blue-50 bg-opacity-10 p-3 rounded-xl border-2 border-blue-300">
      <h1 className="text-center flex justify-center items-center gap-2">
        Made with <i className="ri-heart-2-fill"></i> by
        <a href="https://lourvens.vercel.app" target={"_blank"} className="text-blue-400">
          Lourvens Luxamar
        </a>
      </h1>
    </footer>
  );
}

export default Footer;
