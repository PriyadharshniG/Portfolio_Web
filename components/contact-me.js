import { motion } from "framer-motion";
import { Kanit } from "next/font/google";
import localFont from "next/font/local";

const newYork = localFont({ src: "../public/newYork.otf" });
const kanit = Kanit({ weight: ["500", "200"], subsets: ["latin"] });

const ContactMe = () => {
  return (
    <footer
      id="contact"
      className="w-full flex justify-center items-center flex-col bg-[#0955A3] mt-7"
    >

      <h3
        className={`${kanit.className} text-[130px] text-white mt-0 md:text-[45px] md:mb-0 font-bold`}
      >
        LET'S&nbsp;
        <span className={`${newYork.className} font-light`}>CONNECT</span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-[2px] bg-white"
        ></motion.div>
      </h3>

      <div
        className={`${kanit.className} text-white flex w-full justify-between flex-wrap`}
      >
        <div className="ml-8 md:mt-6 font-bold md:ml-5">
          <h3>FIND ME HERE</h3>
          <h4
            className="m-0"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/vikas-chauhan-232182136/",
                "_blank"
              )
            }
          >
            LINKEDIN
          </h4>
          <h4
            onClick={() => window.open("https://github.com/A-4-Atom", "_blank")}
            className="m-0"
          >
            GITHUB
          </h4>
          <h4
            onClick={() =>
              window.open("https://www.instagram.com/a.4.atom/", "_blank")
            }
            className="m-0"
          >
            INSTAGRAM
          </h4>
        </div>

        <div className="w-3/5 md:ml-5 md:mt-6 md:w-full">
          <h3>REACH OUT</h3>
          <h3 className="tracking-wide md:w-full">
            Liked what you've seen? I'm just starting my career journey and
            eager to explore opportunities. Let's chat about team dynamics,
            projects, or anything that sparks creativity. Best case, we make a
            great professional connection; worst case, I'll leave you with a
            smile. Shoot me an email, and let's kickstart this journey together!
          </h3>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-full flex items-center justify-center mr-8 mt-6 h-28 px-5 border-2 border-white border-solid md:ml-8 md:rounded-none md:p-0 md:w-full md:h-14 mb-5"
        >
          <a
            href="mailto:vikaschauhan2626@gmail.com"
            target="_blank"
            className="font-normal text-white no-underline"
          >
            EMAIL ME
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactMe;
