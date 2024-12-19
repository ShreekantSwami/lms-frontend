import React from "react";

const PageNotFound = () => {
  return (
    <div className="w-full h-screen bg-purple-600 flex flex-col justify-center items-center">
      <h1 className="text-[5rem] font-secondFont text-white tracking-widest">
        The page you are looking is not valid...
      </h1>
      <br />
      <h4 className="text-[3rem] font-medium font-secondFont text-white text-center">
        <span className="text-2xl font-bold">404 Error</span>
        <br /> Source not found!
      </h4>
    </div>
  );
};

export default PageNotFound;
