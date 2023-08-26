import ProjectDetails from "./project-details";
import projectData from "../lib/projectData.js";
const ProjectsContainer = () => {
  const projectElements = projectData.map((x) => <ProjectDetails {...x} key={x.id}/>);

  return (
    <div className="w-full flex flex-col font-poppins max-h-max">
      <div className="heading text-darkslateblue text-[32px] font-semibold max-w-fit cursor-default ml-8 md:ml-2" id="projects">
        Projects
      </div>
      <p className="text-dimgray text-lg max-w-fit font-medium my-2 ml-8 md:ml-2">
        I've created a variety of projects over the course of my web development
        career by utilising a wide range of Skills, Tools, and Technologies.
      </p>
      <div className="w-full flex flex-col items-center gap-10">{projectElements}</div>
    </div>
  );
};

export default ProjectsContainer;
