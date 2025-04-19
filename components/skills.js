import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faRProject } from '@fortawesome/free-brands-svg-icons';  // Brand icons
import { faCogs, faDatabase, faChartLine, faArrowRight } from '@fortawesome/free-solid-svg-icons';  // Solid icons

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-start gap-4 items-center">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faJs} size="lg" />
        JavaScript
      </div>

      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faPython} size="lg" />
        Python
      </div>

      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faCogs} size="lg" />
        Scikit-learn
      </div>

      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faDatabase} size="lg" />
        Anaconda
      </div>

      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faChartLine} size="lg" />
        Orange
      </div>

      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faArrowRight} size="lg" />
        Glueviz
      </div>

      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faRProject} size="lg" />
        TensorFlow
      </div>

      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faArrowRight} size="lg" />
        R
      </div>
    </div>
  );
};

export default Skills;
