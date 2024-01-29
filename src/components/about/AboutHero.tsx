import React from "react";
interface Iprops {
  name: string;
  rollNo: number;
  present: boolean;
  mainHeading: string;
}

const About = (props: Iprops) => {
  const { name, rollNo, present, mainHeading } = props;
  return (
    <>
      <div className="max-w-[640px] px-3 mx-auto flex justify-center items-center h-full flex-col">
        <h2 className="text-[48px] font-bold">{mainHeading}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita
          facere voluptate aspernatur enim porro repellat recusandae molestiae
          rem ullam veritatis dolores totam quis pariatur ea sunt, minus
          provident blanditiis!
        </p>
        <p className="text-center pt-5">About Data</p>
        <div className="p-8 border-white border-[3px] my-5 w-full flex justify-center flex-col items-center">
          <p>Name : {name}</p>
          <p>Roll-No : {rollNo}</p>
          <p className={` ${present === true ? "text-white" : "text-red-500"}`}>
            Attendence : {present === true ? "present" : "absent"}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
