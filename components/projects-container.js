import projectData from "../lib/projectData.js";
import { motion } from "framer-motion";
import { Kanit } from "next/font/google";
import ProjectCard from "./ProjectCard.jsx";

const kanit = Kanit({
  weight: ["500", "200", "300", "400", "600", "700"],
  subsets: ["latin"],
});

const ProjectsContainer = () => {
  const projectElements = projectData.map((x, i) => {
    let reversed = false;
    i % 2 == 0 ? (reversed = true) : (reversed = false);
    return <ProjectCard {...x} key={x.id} reversed={reversed} />;
  });

  return (
    <section className={`w-full flex flex-col items-center ${kanit.className}`} id="projects">
      <h1 className="m-0 text-[#0955A3] font-semibold text-[30px] w-[97%] md:text-[30px] md:mb-2 text-center">
        Projects
      </h1>
      <h1 className="m-0 text-center text-[#0955A3] font-semibold text-[55px] md:text-[40px] mb-5">
        Curious What I've <br /> Done?
      </h1>
      <div className="w-3/5 flex flex-col gap-7 items-center md:w-5/6">
        {projectElements}
      </div>
    </section>
  );
};

export default ProjectsContainer;
