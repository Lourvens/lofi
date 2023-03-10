import React from "react";

const Badge = ({ title, classNameIcon }: BadgeProp) => {
  return (
    <h3 className="text-lg inline-flex gap-2 py-2 px-4 bg-white bg-opacity-5 rounded-full">
      <i className={classNameIcon}></i>
      <span className="font-medium">{title}</span>
    </h3>
  );
};

export default Badge;

type BadgeProp = { title: string; classNameIcon: string };
