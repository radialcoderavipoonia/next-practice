import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-[1140px] px-3 mx-auto">
          <div className="flex justify-between items-center py-4">
            <div>
              <Link href="/" className="text-black font-bold text-[24px]">
                Home
              </Link>
            </div>
            <div className="flex gap-4">
              <Link href="/about" className="bg-red-500 p-3 rounded-md">
                About
              </Link>
              <Link href="/services" className="bg-red-500 p-3 rounded-md">
                services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
