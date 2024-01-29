import Service from "@/components/services/Hero";

const page = () => {
  const myData = {
    heading: "This is my heading",
    mainHeading: "Services",
    service: {
      title: "Service Title",
      description: "Service Description",
      bio: "Service Bio",
    },
  };
  return (
    <>
      <div className="h-[80vh]">
        <Service data={myData} />
      </div>
    </>
  );
};

export default page;
