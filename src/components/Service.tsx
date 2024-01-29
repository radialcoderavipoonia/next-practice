import React from "react";
interface Iprops {
  data: {
    heading: string;
    service: {
      title: string;
      description: string;
      bio: string;
    };
  };
}
const Service = (props: Iprops) => {
  const { heading, service } = props.data;
  const { title, description, bio } = service;
  return (
    <>
      <div className="max-w-[640px] px-3 mx-auto flex justify-center items-center h-full flex-col">
        <h2 className="text-[48px] font-bold">Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita
          facere voluptate aspernatur enim porro repellat recusandae molestiae
          rem ullam veritatis dolores totam quis pariatur ea sunt, minus
          provident blanditiis!
        </p>
        <p className="text-center pt-5">About Data</p>
        <div className="p-8 border-white border-[3px] my-5 w-full flex justify-center flex-col items-center">
          <p>{heading}</p>
          <div className="border-white border-[2px] flex justify-center items-center flex-col w-full mt-5 py-5">
            <p className="text-[30px] font-semibold"> This is Object</p>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>Bio: {bio}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
