import React from "react";

import E404 from "../assets/error-404.png"
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-5 py-16 min-h-[70vh]">
      <img src={E404} alt="" className="max-w-[400px] mb-5" />

      <h2 className="text-2xl  text-slate-800 mb-2 font-bold">
        Oops, page not found!
      </h2>

      <p className="text-slate-500 mb-5">
        The page you are looking for is not available.
      </p>

      <Link
        to="/"
        className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  px-5 text-white py-2  text-sm font-medium no-underline w-53 text-center h-10 rounded-md"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default Error404;
