import React from "react";

const Header = () => {
  return (
    <header className="py-8 flex justify-between items-center mb-20">
      <h1 className=" text-white inline-flex items-center">
        <i className="ri-router-line mr-2 text-2xl"></i>
        <span className="capitalize text-xl font-bold">lo-fi</span>
      </h1>
      <ul className="text-3xl">
        <li>
          <a href="">
            <i className="ri-github-fill"></i>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
