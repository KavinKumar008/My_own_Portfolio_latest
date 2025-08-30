// import myPhoto from "./assets/myphoto(3)-2025.png";

const NavBar = () => {
  return (
    <div className="xl:flex xl:justify-around p-3 hidden md:flex md:justify-around">
      <a href="#HeroSection">
        <h4 className="text-white border border-white p-3 rounded-xl w-[150px] text-center text-lg font-bold cursor-pointer hover:bg-[#9d4edd] hover:text-black hover:transition hover:duration-300 hover:ease-in-out">
          Name
        </h4>
      </a>
      <a href="#ProjectsSection">
        <h4 className="text-white border border-white p-3 rounded-xl w-[150px] text-center text-lg font-bold cursor-pointer hover:bg-[#9d4edd] hover:text-black hover:transition hover:duration-300 hover:ease-in-out">
          Projects
        </h4>
      </a>
      <a href="#SkillsSection">
        <h4 className="text-white border border-white p-3 rounded-xl w-[150px] text-center text-lg font-bold cursor-pointer hover:bg-[#9d4edd] hover:text-black hover:transition hover:duration-300 hover:ease-in-out">
          Skills
        </h4>
      </a>
      <a href="#Contact">
        <h4 className="text-white border border-white p-3 rounded-xl w-[150px] text-center text-lg font-bold cursor-pointer hover:bg-[#9d4edd] hover:text-black hover:transition hover:duration-300 hover:ease-in-out">
          Contact
        </h4>
      </a>
    </div>
  );
};

export default NavBar;
