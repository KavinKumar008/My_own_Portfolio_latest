import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ProfessionalExperience = () => {
  return (
    <section>
      <h3 className="text-red-500 font-bold text-xl underline mt-3 p-3">
        Professional Experience
      </h3>
      <p className="text-white p-3 text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quod velit
        sed eum, unde dicta similique? Ex soluta vitae saepe iure placeat dolore
        officiis et quod, aperiam magnam quasi repellendus fugiat eius illo sunt
        hic similique voluptatum culpa exercitationem consequatur!
      </p>
      <FaLinkedin className="text-white bg-blue-300 rounded-full text-2xl" />
      <FaInstagram />
    </section>
  );
};

export default ProfessionalExperience;
