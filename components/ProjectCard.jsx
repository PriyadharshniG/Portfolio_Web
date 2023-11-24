import { motion } from "framer-motion";

export default function ProjectCard(props) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 12,
        mass: 1,
        duration: 0.4,
      }}
      className="w-full grid-wrapper"
    >
      <div
        className={`${
          props.reversed ? "content" : "content-reversed"
        } bg-[#57b1ff]`}
      >
        <h2 className="text-white tracking-wide mb-0">{props.skills.join(" - ")}</h2>
        <h1 className="m-0 text-[#0955a3] text-[2rem] md:text-[1.5rem]">
          {props.name}
        </h1>
        <p className="m-0 text-white">{props.description}</p>
        <div className="flex gap-10 flex-wrap mt-2 md:gap-5">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open(props.liveLink, "_blank")}
            type="button"
            className="text-xl font-bold p-2 border-2 border-white border-solid bg-inherit cursor-pointer text-white"
          >
            LIVE SITE
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => window.open(props.sourceCode, "_blank")}
            type="button"
            className="text-xl font-bold p-2 border-2 border-white border-solid bg-inherit cursor-pointer text-white"
          >
            Github Repo
          </motion.button>
        </div>
      </div>
      <div className={`${props.reversed ? "photo" : "photo-reversed"}`}>
        <img src={props.imageURL} alt="" className="w-full" />
      </div>
    </motion.div>
  );
}
