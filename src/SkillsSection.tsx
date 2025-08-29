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
    <section id="SkillsSection">
      <h3 className="font-bold text-3xl mt-3 p-3 text-[#fb6f92] ">Skills</h3>
      <div>
        <ul className="flex gap-6 p-6 flex-wrap">
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
