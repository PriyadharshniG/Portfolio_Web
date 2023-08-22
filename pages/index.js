import Header from "../components/header";
import PersonalDetails from "../components/personal-details";
import Skills from "../components/skills";
import ProjectsContainer from "../components/projects-container";
import ContactMe from "../components/contact-me";

const Portfolio = () => {
  return (
    <div className="relative bg-whitesmoke w-full overflow-y-auto flex flex-col items-center justify-start gap-[12px]">
      <Header />
      <PersonalDetails />
      <Skills />
      <ProjectsContainer />
      <ContactMe />
    </div>
  );
};

export default Portfolio;
