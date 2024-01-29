import NavBar from "@/components/NavBar";
import Service from "@/components/Service";
import React from "react";

const page = () => {
  const myData = {
    heading: "This is my heading",
    service: {
      title: "Service Title",
      description: "Service Description",
      bio: "Service Bio",
    },
  };
  return (
    <>
      <div className="h-[80vh]">
        <NavBar />
        <Service data={myData} />
      </div>
    </>
  );
};

export default page;
