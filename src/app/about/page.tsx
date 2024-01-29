import About from "@/components/About";
import NavBar from "@/components/NavBar";
import React from "react";

const Page = () => {
  const myName = "Ravi";
  const rollNumber = 168;
  const presence = true;
  const mainHeading = "About";

  return (
    <>
      <div className="h-[80vh]">
        <NavBar />
        <About
          name={myName}
          rollNo={rollNumber}
          present={presence}
          mainHeading={mainHeading}
        />
      </div>
    </>
  );
};

export default Page;
