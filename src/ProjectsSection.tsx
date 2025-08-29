import ecommerceimg from "./assets/ecommerceapp_image.png";
import pixabayimg from "./assets/pixabayclone_image.png";
import todoappfilterimg from "./assets/todoappfilter_image.png";
import weatherappimg from "./assets/weatherapp_image.png";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import employeedetailsimg from "./assets/employeedetails_image.png";

const ProjectsSection = () => {
  return (
    <section className="mt-14" id="ProjectsSection">
      <div className="flex p-10 border-2 bg-[#002855]">
        <div className="w-[45%]">
          <img
            src={ecommerceimg}
            alt=""
            className="h-[300px] w-[500px] rounded-md hover:rounded-full transition-all duration-300"
          />
        </div>
        <div className="ml-10 w-[55%] flex flex-col gap-5">
          <h3 className="text-white text-4xl font-bold">Ecommerce App</h3>
          <p className="text-blue-600 text-xl font-medium">
            {`</>`} Reactjs,Tailwind-CSS, Expressjs, MongoDB
          </p>
          <p className="text-white text-xl font-semibold">
            Built with ReactJS, Express, and MongoDB, this is a mini eCommerce
            application featuring cart management, Google OAuth authentication,
            and Razorpay payment integration. Includes a clean UI with
            TailwindCSS.
          </p>

          <div className="mt-6 flex gap-6">
            <button
              type="button"
              className="text-white cursor-pointer border border-white p-3 rounded-full text-[20px] font-bold hover:bg-[#3a0ca3] hover:transition hover:duration-300 hover:ease-in-out"
              onClick={() => {
                window.open(
                  "https://fanciful-malabi-f32b54.netlify.app/",
                  "_blank"
                );
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">View Site</span>
                <FaLink className="text-xl font-bold" />
              </div>
            </button>
            <button
              type="button"
              className="hover:text-white hover:transition hover:duration-300 hover:ease-in-out text-black bg-white cursor-pointer border border-white p-3 rounded-full text-[20px] font-bold hover:bg-[#3a0ca3]"
              onClick={() => {
                window.open(
                  "https://github.com/KavinKumar008/Ecommerce-App",
                  "_blank"
                );
              }}
            >
              <div className="flex items-center gap-2">
                <span>GitHub</span>
                <FaGithub className="text-xl" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex p-10 border-2 bg-[#023e7d]">
        <div className="ml-10 w-[55%] flex flex-col gap-5">
          <h3 className="text-white text-4xl font-bold">Pixabay Clone App</h3>
          <p className="text-blue-600 text-xl font-semibold">
            {`</>`} Reactjs,Tailwind-CSS,Typescript
          </p>
          <p className="text-white font-semibold text-xl">
            Built with ReactJS and Pixabay API, this is a responsive image
            gallery application that allows users to search and explore
            high-quality photos. Includes clean UI with TailwindCSS.
          </p>

          <div className="mt-6 flex gap-6">
            <button
              type="button"
              className="text-white cursor-pointer border border-white p-3 rounded-full text-[20px] font-bold hover:bg-[#3a0ca3] hover:transition hover:duration-300 hover:ease-in-out"
              onClick={() => {
                window.open(
                  "https://elaborate-nougat-0c1ab9.netlify.app/",
                  "_blank"
                );
              }}
            >
              <div className="flex items-center gap-2">
                View Site
                <FaLink className="text-2xl font-bold" />
              </div>
            </button>
            <button
              type="button"
              className="hover:text-white hover:transition hover:duration-300 hover:ease-in-out text-black bg-white cursor-pointer border border-white p-3 rounded-full text-[20px] font-bold hover:bg-[#3a0ca3]"
              onClick={() => {
                window.open(
                  "https://github.com/KavinKumar008/pixabay-clone",
                  "_blank"
                );
              }}
            >
              <div className="flex items-center gap-2">
                <span>GitHub</span>
                <FaGithub className="text-xl" />
              </div>
            </button>
          </div>
        </div>
        <div className="w-[45%]">
          <img
            src={pixabayimg}
            alt=""
            className="h-[300px] w-[500px] rounded-md"
          />
        </div>
      </div>
      <div className="flex p-10 border-2 bg-[#001845]">
        <div className="w-[45%]">
          <img
            src={todoappfilterimg}
            alt=""
            className="h-[300px] w-500px] rounded-md animate-pulse"
          />
        </div>
        <div className="ml-10 w-[55%] flex flex-col gap-5">
          <h3 className="text-white text-4xl font-bold">Todo Remainder App</h3>
          <p className="text-blue-600 text-xl font-medium">
            {" "}
            <span className="">{`</>`}</span> ReactJS, Javascript,Tailwind-CSS
          </p>
          <p className="text-white text-xl font-semibold">
            Built with ReactJS using tailwindCSS, this is a minimal looking
            task-tracking application . Includes theme toggle and responsive
            design.
          </p>

          <div className="mt-6 flex gap-6">
            <button
              type="button"
              className="text-white cursor-pointer border border-white p-3 rounded-full text-[20px] font-bold hover:bg-[#3a0ca3] hover:transition hover:duration-300 hover:ease-in-out"
              onClick={() => {
                window.open(
                  "https://statuesque-alfajores-9b8d83.netlify.app/",
                  "_blank"
                );
              }}
            >
              <div className="flex items-center gap-2">
                View Site
                <FaLink className="text-2xl font-bold" />
              </div>
            </button>
            <button
              type="button"
              className="hover:text-white hover:transition hover:duration-300 hover:ease-in-out text-black bg-white cursor-pointer border border-white p-3 rounded-full text-[20px] font-bold hover:bg-[#3a0ca3]"
              onClick={() => {
                window.open("https://github.com/KavinKumar008/todo-tasks");
              }}
            >
              <div className="flex items-center gap-2">
                <span>GitHub</span>
                <FaGithub className="text-xl" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex p-10 border-2 bg-[#33415c]">
        <div className="ml-10 w-[55%] flex flex-col gap-5">
          <h3 className="text-white text-4xl font-bold">Weather App</h3>
          <p className="text-blue-600 text-xl font-medium">
            {`</>`} Reactjs,Javascript
          </p>
          <p className="text-white text-xl font-semibold">
            Built with ReactJS and OpenWeather API, this application provides
            real-time weather updates with search functionality. Designed with a
            simple and responsive UI using CSS.
          </p>

          <div className="mt-6 flex gap-6">
            <button
              type="button"
              className="text-white cursor-pointer border border-white p-3 rounded-full text-[20px] font-bold hover:bg-[#3a0ca3] hover:transition hover:duration-300 hover:ease-in-out"
              onClick={() => {
                window.open(
                  "https://roaring-lolly-f859c2.netlify.app/",
                  "_blank"
                );
              }}
            >
              <div className="flex items-center gap-2">
                View Site
                <FaLink className="text-2xl font-bold" />
              </div>
            </button>
            <button
              type="button"
              className="hover:text-white hover:transition hover:duration-300 hover:ease-in-out text-black bg-white cursor-pointer border border-white p-3 rounded-full text-[20px] font-bold hover:bg-[#3a0ca3]"
              onClick={() => {
                window.open(
                  "https://github.com/KavinKumar008/Weather-app-now",
                  "_blank"
                );
              }}
            >
              <div className="flex items-center gap-2">
                <span>GitHub</span>
                <FaGithub className="text-xl" />
              </div>
            </button>
          </div>
        </div>
        <div className="w-[45%]">
          <img
            src={weatherappimg}
            alt=""
            className="h-[300px] w-[500px] rounded-md"
          />
        </div>
      </div>
      <div className="flex p-10 border-2 bg-[#001233]">
        <div className="w-[45%]">
          <img
            src={employeedetailsimg}
            alt=""
            className="h-[300px] w-[500px] rounded-md"
          />
        </div>
        <div className="ml-10 w-[55%] flex flex-col gap-5">
          <h3 className="text-white text-4xl font-bold">
            Employee Details App
          </h3>
          <p className="text-blue-600 text-xl font-medium">
            <span>{`</>`}</span> ReactJS, Typescriprt
          </p>
          <p className="text-white text-xl font-semibold">
            Built with ReactJS using typescript, this is a simple emplyoee CRUD
            application.
          </p>

          <div className="mt-6 flex gap-6">
            <button
              type="button"
              className="text-white cursor-pointer border border-white p-3 rounded-full text-[20px] font-bold hover:bg-[#3a0ca3] hover:transition hover:duration-300 hover:ease-in-out"
              onClick={() => {
                window.open(
                  "https://elegant-madeleine-811792.netlify.app/",
                  "_blank"
                );
              }}
            >
              <div className="flex items-center gap-2">
                View Site
                <FaLink className="text-2xl font-bold" />
              </div>
            </button>
            <button
              type="button"
              className="hover:text-white hover:transition hover:duration-300 hover:ease-in-out text-black bg-white cursor-pointer border border-white p-3 rounded-full text-[20px] font-bold hover:bg-[#3a0ca3]"
              onClick={() => {
                window.open(
                  "https://github.com/KavinKumar008/table-project",
                  "_blank"
                );
              }}
            >
              <div className="flex items-center gap-2">
                <span>GitHub</span>
                <FaGithub className="text-xl" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
