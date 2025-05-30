const Hero = () => {
  return (
    <section className="custom-container my-20 px-12">
      <div className="flex justify-between items-end mb-12">
        <h1 className="font-fira-code text-9xl/23 font-semibold">Frontend</h1>
        <div className="flex gap-4 items-end">
          <a
            href="#projects"
            className="bg-light-100 text-dark-100 text-xl italic font-medium rounded-full h-14 px-30 flex items-center"
          >
            Projects
          </a>
          <a
            href="#projects"
            className="text-2xl aspect-square bg-light-100 text-dark-100 rounded-full size-14 flex items-center justify-center"
          >
            &rarr;
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center gap-48">
        <p className="text-gray-100 text-xl pl-4">
          My goal is to write maintainable, clean and understandable code to
          process development was enjoyable.
        </p>
        <h1 className="font-fira-code text-9xl/23 font-semibold">Developer</h1>
      </div>
    </section>
  );
};

export default Hero;
