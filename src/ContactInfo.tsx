const ContactInfo = () => {
  return (
    <section
      className="xl:flex items-center justify-center xl:gap-16 bg-[#1b263b] p-5 lg:flex lg:gap-14 md:flex md:gap-14 sm:flex sm:gap-8"
      id="Contact"
    >
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="text-white text-2xl font-bold">Contact</h3>
        </div>
        <div>
          <p className="text-white text-xl font-semibold">+91 8248939636</p>
          <p className="text-white text-xl font-semibold">
            kavikumarsraja@gmail.com
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-white xl:text-2xl lg:text-xl md:text-xl sm:text-[16px] font-bold">
          Made with Love and Javascript🧡
        </p>
      </div>
    </section>
  );
};

export default ContactInfo;
