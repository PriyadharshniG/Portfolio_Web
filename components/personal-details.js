import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import {motion} from 'framer-motion'
const PersonalDetails = () => {
  return (
    <div className="font-poppins grid grid-cols-3 gap-1 w-full md:grid-cols-1 text-l">
      <RoughNotationGroup show={true} >
        <div className="ml-40 col-span-2 md:mx-8">
          <h1 className="text-2xl leading-8 md:leading-10">
            Hi! I’m Vikas, a{" "}
            <RoughNotation
              type="highlight"
              color="#E7CEFF"
              animationDuration={900}
              animationDelay={400}
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
                animationDuration={1200}
                padding={[10, 10]}
                multiline
                animationDelay={500}
                iterations={3}
              >
                Hire me?
              </RoughNotation>
            </strong>
          </h3>
          <div className="my-5 flex gap-6 flex-wrap md:gap-5">
            <motion.button
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              type="button"
              className="py-[11px] px-[37px] font-poppins text-lg bg-darkslateblue text-white rounded-md cursor-pointer md:px-[10px]"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/vikas-chauhan-232182136/",
                  "_blank"
                )
              }
            >
              View Linkedin
            </motion.button>
            <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
              type="button"
              className=" bg-white py-[9px] px-[40px] font-poppins text-lg border-darkslateblue border-2 rounded-md cursor-pointer md:px-[10px]"
              onClick={() =>
                window.open("https://github.com/A-4-Atom", "_blank")
              }
            >
              View Github
            </motion.button>
          </div>
        </div>
      </RoughNotationGroup>
      <motion.img
        src="/myphoto@2x.png"
        alt="My photo"
        className="w-3/4 md:hidden my-5 shadow-2xl rounded-md"
        initial={{x: 100}}
        animate={{x: 0}}
        transition={{ duration: 0.4, type: "spring", stiffness: 121, damping: 17 }}
      />
    </div>
  );
};

export default PersonalDetails;
