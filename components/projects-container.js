import projectData from "../lib/projectData.js";
import ProjectCard from "./ProjectCard.jsx";

const ProjectsContainer = () => {
  return (
    <section
      className={`w-full flex flex-col font-kanit gap-5`}
      id="projects"
    >
      <h1 className="ml-48 md:ml-5 text-[#0955A3] font-semibold text-[55px] md:text-[40px] mb-5 items-start">
        Projects
      </h1>

      {projectData.map((item) => <ProjectCard {...item} key={item.id} />)}
    </section>
  );
};

export default ProjectsContainer;
