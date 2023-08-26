const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <h1 className="heading text-2xl font-poppins text-darkslateblue font-medium mx-5 cursor-default">
        VIKAS CHAUHAN
      </h1>
      <div className="flex justify-center items-center gap-10 mx-5 font-poppins text-darkslateblue font-normal md:hidden">
        <a href="#projects" className="nav">
          Projects
        </a>
        <a href="#contact" className="nav">
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1UcrpCaZagYpq3QJrMmkUOlt_rjZL-BoV/view?usp=sharing"
          className="nav"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
