import React from "react";

const Dashboard = () => {
  return (
    <div className="max-w-screen-2x1 container mx-auto x1:px-24 px-24">
      <div className="from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="flex flex-col items-center justify-center">
          {/* content */}
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Hello<span className="text-green"> Prajwal Mulik!</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
