const SkillsSection = () => {
  const skillsList = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT JS",
    "REACT NATIVE",
    "TAILWINDCSS",
    "EXPRESS JS",
    "NODE JS",
    "FIGMA",
    "GITHUB",
    "MONGODB",
    "JAVA",
  ];
  return (
    <section>
      <h3 className="font-bold text-xl underline mt-10 p-3 text-red-500">
        Skills
      </h3>
      <div>
        <ul className="flex gap-10 p-6 flex-wrap">
          {skillsList.map((skill, index) => (
            <li
              className="text-white border border-white font-bold rounded-xl p-3 bg-linear-to-r from-blue-300 to-yellow-300"
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
