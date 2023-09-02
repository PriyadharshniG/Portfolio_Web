import ProjectDetails from "./project-details";
import projectData from "../lib/projectData.js";
import {motion} from 'framer-motion'

const variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, type: "spring", stiffness: 121, damping: 17 },
  },
};

const ProjectsContainer = () => {
  const projectElements = projectData.map((x) => (
    <ProjectDetails {...x} key={x.id} />
  ));

  return (
    <div className="w-full flex flex-col font-poppins max-h-max">
      <div
        className="heading text-darkslateblue text-[32px] font-semibold max-w-fit cursor-default ml-8 md:ml-2"
        id="projects"
      >
        Projects
      </div>
      <p className="text-dimgray text-lg max-w-fit font-medium my-2 ml-8 md:ml-2">
        I've created a variety of projects over the course of my web development
        career by utilising a wide range of Skills, Tools, and Technologies.
      </p>
      <div className="wrapper w-full flex flex-col items-center">
        <motion.div className="conatiner w-2/3 md:w-5/6" variants={variants} initial='hidden' whileInView='visible'>
          <ul className="card-list">{projectElements}</ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
