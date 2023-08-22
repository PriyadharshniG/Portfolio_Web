import ProjectDetails from "./project-details";

const ProjectsContainer = () => {
  return (
    <div className="self-stretch overflow-hidden shrink-0 flex flex-col py-[58px] px-[62px] items-start justify-start gap-[45px] text-left text-17xl text-darkslateblue font-poppins">
      <div className="relative font-semibold">Projects</div>
      <ProjectDetails itemCode="/icons8github-2.svg" />
      <ProjectDetails itemCode="/icons8github-21.svg" />
    </div>
  );
};

export default ProjectsContainer;
