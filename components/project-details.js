const ProjectDetails = ({ itemCode }) => {
  return (
    <div className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-start gap-[39px] text-left text-xl text-darkslateblue font-poppins">
      <img
        className="self-stretch relative max-h-full w-[421px] object-cover md:hidden"
        alt=""
        src="/rectangle-1@2x.png"
      />
      <div className="self-stretch flex-1 flex flex-col py-0 px-3.5 items-start justify-center gap-[10px]">
        <div className="relative text-13xl font-medium">
          Digital Retail Website
        </div>
        <div className="self-stretch relative text-dimgray">
          Developed an e-commerce platform utilizing Next.js as the frontend
          framework, Stripe for secure payments, and Sanity as the headless CMS.
          The primary focus of this project was the sale of electrical products.
          By leveraging Sanity, the website owner can effortlessly manage and
          update the content, ensuring seamless content management for the
          website.
        </div>
        <div className="self-stretch h-20 flex flex-row flex-wrap items-center justify-center gap-[25px] text-black">
          <div className="rounded-md overflow-hidden flex flex-row py-[3px] px-[15px] items-center justify-start border-[2px] border-solid border-darkslateblue">
            <div className="relative">HTML</div>
          </div>
          <div className="rounded-md overflow-hidden flex flex-row py-[3px] px-[15px] items-center justify-start border-[2px] border-solid border-darkslateblue">
            <div className="relative">CSS</div>
          </div>
          <div className="rounded-md overflow-hidden flex flex-row py-[3px] px-[15px] items-center justify-start border-[2px] border-solid border-darkslateblue">
            <div className="relative">JavaScript</div>
          </div>
          <div className="rounded-md overflow-hidden flex flex-row py-[3px] px-[15px] items-center justify-start border-[2px] border-solid border-darkslateblue">
            <div className="relative">Next.js</div>
          </div>
          <div className="rounded-md overflow-hidden flex flex-row py-[3px] px-[15px] items-center justify-start border-[2px] border-solid border-darkslateblue">
            <div className="relative">Sanity CMS</div>
          </div>
          <div className="rounded-md overflow-hidden flex flex-row py-[3px] px-[15px] items-center justify-start border-[2px] border-solid border-darkslateblue">
            <div className="relative">Stripe API</div>
          </div>
        </div>
        <div className="flex flex-row py-[7px] px-[29px] items-center justify-start gap-[10px] text-lg text-white">
          <div className="rounded-8xs bg-darkslateblue flex flex-row py-0.5 px-[9px] items-center justify-center gap-[4px]">
            <div className="relative">Live Demo</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/frame.svg"
            />
          </div>
          <div className="rounded-8xs bg-darkslateblue flex flex-row py-0 px-[9px] items-center justify-center gap-[4px]">
            <div className="relative">View Source Code</div>
            <img
              className="relative w-[33px] h-[33px] overflow-hidden shrink-0"
              alt=""
              src={itemCode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
