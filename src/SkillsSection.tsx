const SkillsSection = () => {
  const skillsList = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT JS",
    "REACT NATIVE",
    "TYPESCRIPT",
    "TAILWINDCSS",
    "EXPRESS JS",
    "NODE JS",
    "FIGMA",
    "GITHUB",
    "MONGODB",
    "JAVA",
    "DOCKER",
  ];
  return (
    <section id="SkillsSection" className="mt-10 xl:mt-4">
      <h3 className="font-bold xl:text-3xl text-2xl xl:mt-3 xl:p-3 text-[#fb6f92] ">
        Skills
      </h3>
      <div>
        <ul className="flex gap-6 xl:p-6 p-3 flex-wrap">
          {skillsList.map((skill, index) => (
            <li
              className="text-white border border-white font-bold rounded-xl p-2 bg-linear-to-r from-[#448cd0] to-[#b6a0f9] hover:scale-110 hover:transition hover:duration-300 hover:ease-in-out cursor-pointer"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;
