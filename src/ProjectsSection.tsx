import ecommerceimg from "./assets/ecommerceapp_image.png";
import pixabayimg from "./assets/pixabayclone_image.png";
import todoappfilterimg from "./assets/todoappfilter_image.png";
import weatherappimg from "./assets/weatherapp_image.png";

const ProjectsSection = () => {
  return (
    <section className="mt-14 flex flex-col gap-10">
      <div className="flex p-10 border-2 border-yellow-400">
        <div className="w-[35%]">
          <img
            src={ecommerceimg}
            alt=""
            className="h-[200px] w-[400px] rounded-md hover:rounded-full transition-all duration-300"
          />
        </div>
        <div className="ml-10 w-[65%]">
          <h3 className="text-white underline text-xl">Ecommerce App</h3>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi illo
            ab tenetur modi, asperiores facilis autem, repudiandae culpa a
            dolore consequuntur, alias dolorum ex animi id voluptas! Ipsam quam,
            doloremque repellat nostrum rerum deserunt a! Sapiente rerum sint
            minima doloribus.
          </p>
          <p className="text-white">Technologies Used :</p>
          <div className="mt-6 flex gap-6">
            <button
              type="button"
              // className="text-white cursor-pointer border border-white p-3 rounded-md text-[20px] font-bold"
              className="btn-primary"
              onClick={() => {
                window.open(
                  "https://fanciful-malabi-f32b54.netlify.app/",
                  "_blank"
                );
              }}
            >
              Project Link
            </button>
            <button
              type="button"
              // className="text-white cursor-pointer border border-white p-3 rounded-md text-[20px] font-bold"
              className="btn-primary"
              onClick={() => {
                window.open(
                  "https://github.com/KavinKumar008/Ecommerce-App",
                  "_blank"
                );
              }}
            >
              Github Link
            </button>
          </div>
        </div>
      </div>
      <div className="flex p-10 border-2 border-yellow-400">
        <div className="ml-10 w-[65%]">
          <h3 className="text-white underline text-xl">Pixabay Clone App</h3>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi illo
            ab tenetur modi, asperiores facilis autem, repudiandae culpa a
            dolore consequuntur, alias dolorum ex animi id voluptas! Ipsam quam,
            doloremque repellat nostrum rerum deserunt a! Sapiente rerum sint
            minima doloribus.
          </p>
          <p className="text-white">Technologies Used :</p>
          <div className="mt-6 flex gap-6">
            <button
              type="button"
              // className="text-white cursor-pointer border border-white p-3 rounded-md text-[20px] font-bold"
              className="btn-primary"
              onClick={() => {
                window.open(
                  "https://elaborate-nougat-0c1ab9.netlify.app/",
                  "_blank"
                );
              }}
            >
              Project Link
            </button>
            <button
              type="button"
              // className="text-white cursor-pointer border border-white p-3 rounded-md text-[20px] font-bold"
              className="btn-primary"
              onClick={() => {
                window.open(
                  "https://github.com/KavinKumar008/pixabay-clone",
                  "_blank"
                );
              }}
            >
              Github Link
            </button>
          </div>
        </div>
        <div className="w-[35%]">
          <img
            src={pixabayimg}
            alt=""
            className="h-[200px] w-[400px] rounded-md"
          />
        </div>
      </div>
      <div className="flex p-10 border-2 border-yellow-400">
        <div className="w-[35%]">
          <img
            src={todoappfilterimg}
            alt=""
            className="h-[200px] w-[400px] rounded-md"
          />
        </div>
        <div className="ml-10 w-[65%]">
          <h3 className="text-white underline text-xl">Todo App With Filter</h3>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi illo
            ab tenetur modi, asperiores facilis autem, repudiandae culpa a
            dolore consequuntur, alias dolorum ex animi id voluptas! Ipsam quam,
            doloremque repellat nostrum rerum deserunt a! Sapiente rerum sint
            minima doloribus.
          </p>
          <p className="text-white">Technologies Used :</p>
          <div className="mt-6 flex gap-6">
            <button
              type="button"
              // className="text-white cursor-pointer border border-white p-3 rounded-md text-[20px] font-bold"
              className="btn-primary"
              onClick={() => {
                window.open(
                  "https://statuesque-alfajores-9b8d83.netlify.app/",
                  "_blank"
                );
              }}
            >
              Project Link
            </button>
            <button
              type="button"
              // className="text-white cursor-pointer border border-white p-3 rounded-md text-[20px] font-bold"
              className="btn-primary"
              onClick={() => {
                window.open("https://github.com/KavinKumar008/todo-tasks");
              }}
            >
              Github Link
            </button>
          </div>
        </div>
      </div>
      <div className="flex p-10 border-2 border-yellow-400">
        <div className="ml-10 w-[65%]">
          <h3 className="text-white underline text-xl">Weather App</h3>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi illo
            ab tenetur modi, asperiores facilis autem, repudiandae culpa a
            dolore consequuntur, alias dolorum ex animi id voluptas! Ipsam quam,
            doloremque repellat nostrum rerum deserunt a! Sapiente rerum sint
            minima doloribus.
          </p>
          <p className="text-white">Technologies Used :</p>
          <div className="mt-6 flex gap-6">
            <button
              type="button"
              // className="text-white cursor-pointer border border-white p-3 rounded-md text-[20px] font-bold"
              className="btn-primary"
              onClick={() => {
                window.open(
                  "https://roaring-lolly-f859c2.netlify.app/",
                  "_blank"
                );
              }}
            >
              Project Link
            </button>
            <button
              type="button"
              // className="text-white cursor-pointer border border-white p-3 rounded-md text-[20px] font-bold"
              className="btn-primary"
              onClick={() => {
                window.open(
                  "https://github.com/KavinKumar008/Weather-app-now",
                  "_blank"
                );
              }}
            >
              Github Link
            </button>
          </div>
        </div>
        <div className="w-[35%]">
          <img
            src={weatherappimg}
            alt=""
            className="h-[200px] w-[400px] rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
