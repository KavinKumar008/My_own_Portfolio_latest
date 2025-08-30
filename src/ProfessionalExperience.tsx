const ProfessionalExperience = () => {
  return (
    <section>
      <h3 className="text-[#fb6f92] font-bold xl:text-3xl xl:mt-3 p-3 text-2xl mt-4">
        Professional Experience
      </h3>
      <div className="text-white p-3 text-xl">
        <span className="text-2xl font-semibold">
          MERN Stack Developer Intern
        </span>
        - Kovaion Consulting India Private Limited (Jan 2025 to April 2025)
        <p className="mt-4 xl:indent-8 p-2 text-xl">
          Developed features for managing employee leave, including earned leave
          balance updates and auto-approval logic.Implemented cron-based updates
          to increment earned leaves monthly and automated approval status
          changes.Ensured accurate and timely leave status updates using
          date-based filters
        </p>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
