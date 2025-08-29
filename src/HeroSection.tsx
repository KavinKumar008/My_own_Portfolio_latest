import myPhoto from "./assets/myphoto(3)-2025.png";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center" id="HeroSection">
      <div className="flex items-center justify-center mt-10">
        <img
          src={myPhoto}
          alt=""
          className="rounded-full w-[250px] h-[250px]"
        />
      </div>

      <main className="mx-auto w-[80%] h-[300px] text-white rounded-md mt-16 flex flex-col gap-5">
        <p className="text-center p-5 text-8xl font-bold">
          I'm <span className="text-8xl text-[#3a86ff]">Kavin Kumar</span>
        </p>
        <p className="text-center font-semibold text-2xl">
          Software Developer <span>{`</>`}</span>
        </p>
        <div className="flex justify-center gap-5">
          <FaLinkedin
            className="text-white text-3xl cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/kavin-kumar-s-r-564b0b2b8/",
                "_blank"
              )
            }
          />
          <FaGithub
            className="text-white text-3xl cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() =>
              window.open("https://github.com/KavinKumar008", "_blank")
            }
          />
          <FaInstagram className="text-white text-3xl cursor-pointer transition-transform duration-300 hover:scale-110" />
          <CiMail
            className="text-white text-3xl cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() =>
              window.open("mailto:kavikumarsraja@gmail.com", "_blank")
            }
          />
        </div>
        {/* <p>I am passionate mern stack developer with hands on experience.</p> */}
      </main>
    </div>
  );
};

export default HeroSection;
