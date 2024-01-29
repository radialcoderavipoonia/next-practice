import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="max-w-[640px] px-3 mx-auto">
        <div className="flex justify-between items-center py-10">
          <Link href="/" className="bg-red-500 p-3 rounded-md">
            Home
          </Link>
          <Link href="/about" className="bg-red-500 p-3 rounded-md">
            About
          </Link>
          <Link href="/services" className="bg-red-500 p-3 rounded-md">
            services
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
