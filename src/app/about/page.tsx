import About from "@/components/about/Hero";

const Page = () => {
  const myName = "Ravi";
  const rollNumber = 168;
  const presence = true;
  const mainHeading = "About";

  return (
    <>
      <div className="h-[80vh]">
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
