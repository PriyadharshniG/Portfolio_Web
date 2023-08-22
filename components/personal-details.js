const PersonalDetails = () => {
  return (
    <div className="self-stretch overflow-hidden shrink-0 flex flex-row py-7 px-[30px] items-center justify-start gap-[30px] text-left text-5xl text-dimgray font-poppins">
      <div className="w-[891px] flex flex-col items-start justify-center gap-[16px] md:w-[700px]">
        <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
          <b className="self-stretch relative text-21xl text-black md:w-[781px]">{`Hi! I’m Vikas, a developer based in New Delhi. `}</b>
          <div className="self-stretch relative">
            I enjoy creating user-friendly, simple, and pleasant websites.
          </div>
          <div className="self-stretch relative">
            <p className="m-0">
              I'm a recent graduate specializing in front-end development. I've
              learned current web technology and design principles through my
              college years. My portfolio demonstrates my dedication to
              user-centric design as well as my technical expertise in
              developing visually appealing user interfaces.
            </p>
          </div>
          <div className="self-stretch relative">
            <span>{`I currently looking for a new role as a developer, `}</span>
            <span className="font-semibold">Hire me?</span>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[45px] text-white">
          <div className="rounded-8xs bg-darkslateblue overflow-hidden flex flex-row py-[11px] px-[37px] items-center justify-center">
            <div className="relative">View Linkedin</div>
          </div>
          <div className="rounded-8xs bg-darkslateblue overflow-hidden flex flex-row py-[11px] px-[37px] items-center justify-center">
            <div className="relative">View Github</div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch flex-1 relative rounded-mini max-w-full overflow-hidden max-h-full object-cover md:hidden md:w-[431px]"
        alt=""
        src="/myphoto@2x.png"
      />
    </div>
  );
};

export default PersonalDetails;
