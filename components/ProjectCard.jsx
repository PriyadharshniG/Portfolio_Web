import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-row md:flex-col gap-12 md:gap-5 mx-28 md:mx-5 mb-10 bg-cyan-00 overflow-hidden font-poppins"
    >
      <div className="w-full flex items-center justify-center">
        <Image
          src={props.imageURL}  // External image URL
          alt={props.name}  // Descriptive alt text for accessibility
          width={760}  // Specify the image width
          height={494}  // Specify the image height
          className="rounded-2xl object-contain max-w-full max-h-[350px] h-auto w-auto"
          priority={props.id === 1}  // Prioritize image for the first project
        />
      </div>
      <div className="flex flex-col w-full">
        <h2 className="max-w-max text-darkslateblue text-[2rem]">{props.name}</h2>
        <div className="flex gap-2 flex-wrap text-xl">
          {props.skills.join(" - ")}
        </div>
        <p className="text-lg md:text-base">{props.description}</p>
        <div className="flex mt-1">
          <a href={props.sourceCode} target="_blank" aria-label="View Source Code on GitHub">
            <svg
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="fill-black hover:fill-darkslateblue mr-1"
              height="2rem"
              width="2rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
          </a>
          <a href={props.liveLink} target="_blank" aria-label="View Live Site">
            <svg
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="fill-black hover:fill-darkslateblue"
              height="2rem"
              width="2rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
