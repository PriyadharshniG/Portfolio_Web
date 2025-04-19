import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { motion } from "framer-motion";
import Skills from "./skills";

const PersonalDetails = () => {
  return (
    <div className={`font-poppins grid grid-cols-3 gap-1 w-full md:grid-cols-1 text-l`}>
      <RoughNotationGroup show={true}>
        <div className="ml-48 col-span-2 md:mx-8">
          <h1 className="text-2xl leading-8 md:leading-10">
            Hi! I’m Dheena S, a{" "}
            <RoughNotation
              type="highlight"
              color="#E7CEFF"
              animationDuration={900}
              animationDelay={400}
            >
              Machine Learning Engineer
            </RoughNotation>{" "}
            based in Tamil Nadu.
          </h1>
          <h3 className="text-dimgray font-normal text-lg leading-9">
            I enjoy building{" "}
            <RoughNotation
              type="highlight"
              color="#FDC8E9"
              animationDuration={700}
            >
              intelligent,
            </RoughNotation>{" "}
            efficient, and{" "}
            <RoughNotation
              type="highlight"
              color="#F9E58B"
              animationDuration={700}
              multiline
            >
              data-driven solutions.
            </RoughNotation>
          </h3>
          <h3 className="text-dimgray font-normal text-lg leading-7">
            {" "}
            I'm a pre-final year student specializing in{" "}
            <RoughNotation
              type="highlight"
              color="#FEC6D0"
              animationDuration={700}
              multiline
            >
              machine learning and data science
            </RoughNotation>
            . I've learned to work with real-world datasets <br /> and{" "}
            <RoughNotation
              type="highlight"
              color="#F9E58B"
              animationDuration={700}
              multiline
            >
              predictive modeling techniques
            </RoughNotation>{" "}
            through my college projects. My portfolio showcases my ability to turn data into{" "}
            <RoughNotation
              type="highlight"
              color="#E7CEFF"
              animationDuration={700}
              multiline
            >
              actionable insights
            </RoughNotation>{" "}
            using code and curiosity.
          </h3>
          <h3 className="text-dimgray font-normal text-lg">
            I am currently looking for a new role as a Machine Learning Engineer,&nbsp;&nbsp;
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

          <div className="flex items-center gap-2 max-w-max flex-wrap">
            <h3 className="text-dimgray font-normal text-lg">Tech I </h3>
            <svg
              viewBox="0 0 20 20"
              height="24"
              width="24"
              aria-hidden="true"
              focusable="false"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="text-orange-500"
            >
              <path d="M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0L10 5.197 8.864 4.155c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246L10 17l7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z"></path>
            </svg>
            <h3 className="text-dimgray font-normal text-lg">:</h3>
            <Skills />
          </div>

          <div className="my-5 flex gap-6 flex-wrap md:gap-5">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className={`py-[11px] px-[37px] font-poppins text-lg bg-darkslateblue text-white rounded-md cursor-pointer md:px-[10px]`}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/dheena-krishna-s/",
                  "_blank"
                )
              }
            >
              View Linkedin
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className={`bg-white py-[9px] px-[40px] font-poppins text-lg border-darkslateblue border-2 rounded-md cursor-pointer md:px-[10px]`}
              onClick={() =>
                window.open("https://github.com/Dheenack", "_blank")
              }
            >
              View Github
            </motion.button>
          </div>
        </div>
      </RoughNotationGroup>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 121,
          damping: 17,
        }}
      >
        {/* You can insert the blob/photo/svg here if needed */}
      </motion.div>
    </div>
  );
};

export default PersonalDetails;
