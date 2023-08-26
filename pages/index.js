import Header from "../components/header";
import PersonalDetails from "../components/personal-details";
import Skills from "../components/skills";
import ProjectsContainer from "../components/projects-container";
import ContactMe from "../components/contact-me";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="relative bg-white w-full flex flex-col items-center justify-start gap-[12px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <PersonalDetails />
      <Skills />
      <ProjectsContainer />
      <ContactMe />
      <motion.div
        className="cursor"
        style={{ x: mousePosition.x - 50, y: mousePosition.y - 90 }}
        transition={{ ease: "easeInOut", duration: 0.2, delay: 0.5 }}
      ></motion.div>
    </motion.div>
  );
};

export default Portfolio;
