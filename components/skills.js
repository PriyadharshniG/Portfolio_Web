import { motion } from "framer-motion";
const Skills = () => {
  return (
    <motion.div className="w-full flex font-poppins flex-col justify-items-start"
      initial={{x:-100}}
      animate={{x: 0}}
      transition={{duration: 1, bounce: 0.18, type: 'spring'}}
    >
      <h1 className="heading mx-8 text-darkslateblue font-semibold max-w-fit cursor-default">
        Skills & Tools
      </h1>
      <h1 className="text-dimgray text-lg mx-8 max-w-fit font-medium">
        The Tools and Technologies that i use to bring&nbsp; products to life.
      </h1>

      <div className="grid grid-cols-5 grid-rows-2 md:grid-cols-3 w-3/5 md:w-full md:-ml-1 ml-8 justify-items-center">
        <div className="flex flex-col justify-center items-center max-w-fit">
          <img src="/icons8html-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">HTML</p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-fit">
          <img src="/icons8css-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-fit">
          <img src="/icons8javascript-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">JavaScript</p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-fit">
          <img src="/icons8react-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">React.JS</p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-fit">
          <img src="/icons8nextjs-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">Next.JS</p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-fit">
          <img src="/icons8git-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">Git</p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-fit">
          <img src="/icons8github-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">Github</p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-fit">
          <img
            src="/icons8visualstudio-1.svg"
            alt=""
            className="w-20 md:w-14"
          />
          <p className="font-poppins text-lg font-normal">VS Code</p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-fit">
          <img src="/icons8sass-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">SASS</p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-fit">
          <img src="/icons8tailwindcss-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal text-center">
            Tailwind <br /> CSS
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
