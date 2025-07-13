import React from "react";
import scroll from "./assets/scrollimgsamsung3.jpeg";

const NavBar = () => {
  return (
    <main className="flex justify-between items-center p-3">
      <div className="w-[20%]">
        <img
          src={scroll}
          alt=""
          className="rounded-full w-[80px] h-[80px] cursor-pointer"
        />
      </div>
      <div className="w-[80%] flex justify-around">
        <h4 className="text-white border border-white p-3 rounded-xl w-[150px] text-center text-lg font-bold cursor-pointer hover:bg-blue-300 hover:text-black">
          Name
        </h4>
        <h4 className="text-white border border-white p-3 rounded-xl w-[150px] text-center text-lg font-bold cursor-pointer hover:bg-blue-300 hover:text-black">
          Projects
        </h4>
        <h4 className="text-white border border-white p-3 rounded-xl w-[150px] text-center text-lg font-bold cursor-pointer hover:bg-blue-300 hover:text-black">
          Skills
        </h4>
        <h4 className="text-white border border-white p-3 rounded-xl w-[150px] text-center text-lg font-bold cursor-pointer hover:bg-blue-300 hover:text-black">
          Contact
        </h4>
      </div>
    </main>
  );
};

export default NavBar;
