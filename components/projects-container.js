import projectData from "../lib/projectData.js";
import { Kanit } from "next/font/google";
import ProjectCard from "./ProjectCard.jsx";


const kanit = Kanit({
  weight: ["500", "200", "300", "400", "600", "700"],
  subsets: ["latin"],
});

const ProjectsContainer = () => {
  return (
    <section
      className={`w-full flex flex-col ${kanit.className} gap-5`}
      id="projects"
    >
      <h1 className="ml-48 md:ml-5 text-[#0955A3] font-semibold text-[55px] md:text-[40px] mb-5 items-start">
        Projects
      </h1>

      {projectData.map((item) => <ProjectCard {...item} key={item.id}/>)}

    </section>
  );
};

export default ProjectsContainer;
