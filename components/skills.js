const Skills = () => {
  return (
    <div className="self-stretch overflow-hidden shrink-0 flex flex-col py-9 px-[38px] items-start justify-start gap-[13px] text-left text-17xl text-darkslateblue font-poppins">
      <div className="relative font-semibold">{`Skills & Tools`}</div>
      <div className="relative text-5xl font-medium text-dimgray">
        The Tools and Technologies that i use to bring products to life.
      </div>
      <div className="w-[747px] flex flex-row flex-wrap py-[26px] px-0 box-border items-center justify-center gap-[40px] text-center text-base text-black">
        <div className="flex-1 h-[95px] flex flex-col items-center justify-start text-xl">
          <img
            className="relative w-[65px] h-[65px] overflow-hidden shrink-0"
            alt=""
            src="/icons8html-1.svg"
          />
          <div className="self-stretch flex-1 relative">HTML</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start text-xl">
          <img
            className="relative w-[62px] h-[62px] overflow-hidden shrink-0"
            alt=""
            src="/icons8css-1.svg"
          />
          <div className="self-stretch relative">CSS</div>
        </div>
        <div className="flex-1 h-[83px] flex flex-col items-center justify-start text-mini">
          <img
            className="relative w-[52px] h-[52px] overflow-hidden shrink-0"
            alt=""
            src="/icons8javascript-1.svg"
          />
          <div className="relative">JavaScript</div>
        </div>
        <div className="flex-1 h-[74px] flex flex-col items-end justify-start text-mini">
          <img
            className="relative w-14 h-14 overflow-hidden shrink-0"
            alt=""
            src="/icons8react-1.svg"
          />
          <div className="self-stretch flex-1 relative">React</div>
        </div>
        <div className="flex-1 h-[77px] flex flex-col items-center justify-start text-mini">
          <img
            className="relative w-[58px] h-[58px] overflow-hidden shrink-0"
            alt=""
            src="/icons8nextjs-1.svg"
          />
          <div className="relative">NextJS</div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            className="relative w-[51px] h-[51px] overflow-hidden shrink-0"
            alt=""
            src="/icons8git-1.svg"
          />
          <div className="relative">Git</div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
            alt=""
            src="/icons8github-1.svg"
          />
          <div className="relative">Github</div>
        </div>
        <div className="flex-1 h-[79px] flex flex-col items-center justify-start">
          <img
            className="relative w-[26.63px] h-[35px]"
            alt=""
            src="/group-1.svg"
          />
          <div className="relative inline-block w-[62px] h-[60px] shrink-0">
            <p className="m-0">Sanity</p>
            <p className="m-0">CMS</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            className="relative w-[51px] h-[51px] overflow-hidden shrink-0"
            alt=""
            src="/icons8visualstudio-1.svg"
          />
          <div className="relative">
            <p className="m-0">Visual Studio</p>
            <p className="m-0">Code</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            className="relative w-[55px] h-[55px] overflow-hidden shrink-0"
            alt=""
            src="/icons8sass-1.svg"
          />
          <div className="relative">SASS</div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            className="relative w-12 h-12 overflow-hidden shrink-0"
            alt=""
            src="/icons8tailwindcss-1.svg"
          />
          <div className="relative">Tailwind</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
