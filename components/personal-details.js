import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
const PersonalDetails = () => {
  return (
    <div className="font-poppins grid grid-cols-3 gap-1 w-full md:grid-cols-1 text-l">
      <RoughNotationGroup show={true} >
        <div className="ml-40 col-span-2 md:mx-8">
          <h1 className="text-2xl leading-8">
            Hi! I’m Vikas, a{" "}
            <RoughNotation
              type="highlight"
              color="#E7CEFF"
              animationDuration={900}
              animationDelay={300}
            >
              developer
            </RoughNotation>{" "}
            based in <br className="md:hidden"/> New Delhi.
          </h1>
          <h3 className="text-dimgray font-normal text-lg leading-9">
            I enjoy creating{" "}
            <RoughNotation
              type="highlight"
              color="#FDC8E9"
              animationDuration={700}
            >
              user-friendly,
            </RoughNotation>{" "}
            simple, and{" "}
            <RoughNotation
              type="highlight"
              color="#F9E58B"
              animationDuration={700}
              multiline
            >
              pleasant websites.
            </RoughNotation>
          </h3>
          <h3 className="text-dimgray font-normal text-lg leading-7">
            {" "}
            I'm a recent graduate specializing in{" "}
            <RoughNotation
              type="highlight"
              color="#FEC6D0"
              animationDuration={700}
              multiline
            >
              front-end development
            </RoughNotation>
            . I've learned current web technology <br /> and{" "}
            <RoughNotation
              type="highlight"
              color="#F9E58B"
              animationDuration={700}
              multiline
            >
              design principles
            </RoughNotation>{" "}
            through my college years. My portfolio demonstrates my dedication to
            user-centric <br />
            design as well as my technical expertise in developing{" "}
            <RoughNotation
              type="highlight"
              color="#E7CEFF"
              animationDuration={700}
              multiline
            >
              visually appealing
            </RoughNotation>{" "}
            user interfaces.
          </h3>
          <br />
          <h3 className="text-dimgray font-normal text-lg">
            I am currently looking for a new role as a developer,&nbsp;&nbsp;  
            <strong>
              <RoughNotation
                type="circle"
                color="#FEC6D0"
                strokeWidth={2}
                animationDuration={900}
                padding={[8, 8]}
                multiline
                animationDelay={500}
                iterations={3}
              >
                Hire me?
              </RoughNotation>
            </strong>
          </h3>
          <div className="my-5 flex gap-6 flex-wrap">
            <button
              type="button"
              className="py-[11px] px-[37px] font-poppins text-lg bg-darkslateblue text-white rounded-md cursor-pointer top-0 right-0 hover:-top-1 hover:-right-1 transition-all relative ease-in-out"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/vikas-chauhan-232182136/",
                  "_blank"
                )
              }
            >
              View Linkedin
            </button>
            <button
              type="button"
              className=" bg-white py-[9px] px-[40px] font-poppins text-lg border-darkslateblue border-2 rounded-md cursor-pointer top-0 right-0 hover:-top-1 hover:-right-1 transition-all relative ease-in-out"
              onClick={() =>
                window.open("https://github.com/A-4-Atom", "_blank")
              }
            >
              View Github
            </button>
          </div>
        </div>
      </RoughNotationGroup>
      <img
        src="/myphoto@2x.png"
        alt="My photo"
        className="w-3/4 md:hidden my-5 shadow-2xl rounded-md"
      />
    </div>
  );
};

export default PersonalDetails;
