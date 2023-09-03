import { motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: {staggerChildren: 0.05, delay: 0.2} },
};
const childVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, type: "spring", stiffness: 121, damping: 17 },
  },
};

const Skills = () => {
  return (
    <motion.div className="w-full flex font-poppins flex-col justify-items-start">
      <h1 className="heading mx-8 text-darkslateblue font-semibold max-w-fit cursor-default">
        Skills & Tools
      </h1>
      <h1 className="text-dimgray text-lg mx-8 max-w-fit font-medium">
        The Tools and Technologies that i use to bring&nbsp; products to life.
      </h1>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-5 grid-rows-2 md:grid-cols-3 w-3/5 md:w-full md:-ml-1 ml-8 justify-items-center"
      >
        <motion.div
          className="flex flex-col justify-center items-center max-w-fit"
          whileHover={{ scale: 1.1 }}
          variants={childVariants}
        >
          <img src="/icons8html-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">HTML</p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center max-w-fit"
          whileHover={{ scale: 1.1 }}
          variants={childVariants}
        >
          <img src="/icons8css-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">CSS</p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center max-w-fit"
          whileHover={{ scale: 1.1 }}
          variants={childVariants}
        >
          <img src="/icons8javascript-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">JavaScript</p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center max-w-fit"
          whileHover={{ scale: 1.1 }}
          variants={childVariants}
        >
          <img src="/icons8react-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">React.JS</p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center max-w-fit"
          whileHover={{ scale: 1.1 }}
          variants={childVariants}
        >
          <img src="/icons8nextjs-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">Next.JS</p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center max-w-fit"
          whileHover={{ scale: 1.1 }}
          variants={childVariants}
        >
          <img src="/icons8git-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">Git</p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center max-w-fit"
          whileHover={{ scale: 1.1 }}
          variants={childVariants}
        >
          <img src="/icons8github-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">Github</p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center max-w-fit"
          whileHover={{ scale: 1.1 }}
          variants={childVariants}
        >
          <img
            src="/icons8visualstudio-1.svg"
            alt=""
            className="w-20 md:w-14"
          />
          <p className="font-poppins text-lg font-normal">VS Code</p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center max-w-fit"
          whileHover={{ scale: 1.1 }}
          variants={childVariants}
        >
          <img src="/icons8sass-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal">SASS</p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center max-w-fit"
          whileHover={{ scale: 1.1 }}
          variants={childVariants}
        >
          <img src="/icons8tailwindcss-1.svg" alt="" className="w-20 md:w-14" />
          <p className="font-poppins text-lg font-normal text-center">
            Tailwind <br /> CSS
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
