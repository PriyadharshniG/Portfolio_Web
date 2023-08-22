const Header = () => {
  return (
    <div className="self-stretch overflow-hidden shrink-0 flex flex-row py-[23px] pr-[22px] pl-[26px] items-center justify-between text-left text-13xl text-darkslateblue font-poppins">
      <div className="relative font-medium md:text-5xl">
        <span>VIKAS</span>
        <span className="text-gray">{` `}</span>
        <span>CHAUHAN</span>
      </div>
      <div className="w-[472px] flex flex-row items-center justify-start text-center text-9xl">
        <div className="flex-1 flex flex-row items-center justify-center gap-[31px] md:hidden">
          <div className="relative inline-block w-[136.67px] shrink-0">
            Projects
          </div>
          <div className="relative inline-block w-[136.67px] shrink-0">
            Contact
          </div>
          <div className="relative inline-block w-[136.67px] shrink-0">
            Resume
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
