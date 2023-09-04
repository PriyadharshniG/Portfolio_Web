import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, type: "spring", stiffness: 121, damping: 17 },
  },
};

const ContactMe = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function isEmpty(name, email, message) {
    name = name.trim();
    email = email.trim();
    message = message.trim();
    if (name == "" || email == "" || message == "") {
      return true;
    }
    return false;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(isEmpty) {
      return
    }

    emailjs
      .sendForm(
        "service_hsy3aw3",
        "template_jgxza5s",
        form.current,
        "Re0W3hXb6jKgcQloI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <motion.div
      className="w-full flex flex-col"
      variants={variants}
      initial="hidden"
      animate="visible"
      id="contact"
    >
      <motion.h1
        className="font-poppins ml-8 md:ml-3 heading max-w-fit"
        id="contact"
      >
        Let's Connect
      </motion.h1>
      <motion.p className="text-dimgray text-lg font-medium ml-8 md:ml-3 -mt-3 font-poppins overflow-hidden">
        I would love to hear from you and discuss any potential opportunities or
        collaborations.
      </motion.p>
      <form
        ref={form}
        className="w-1/2 ml-8 md:ml-3 flex flex-row flex-wrap gap-6 md:w-[20rem]"
        id="contact-form"
      >
        <input
          name="user_name"
          type="text"
          placeholder="Name"
          className="border-2 border-solid border-[rgb(161, 175, 194/1)] focus:border-darkslateblue rounded-2xl px-5 py-4 font-poppins text-lg outline-none transition-all md:w-64"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="user_email"
          type="text"
          placeholder="Email"
          className="border-2 border-solid border-[rgb(161, 175, 194/1)] focus:border-darkslateblue rounded-2xl px-5 py-4 font-poppins text-lg outline-none transition-all md:w-64"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          className="w-full border-2 border-solid border-[rgb(161, 175, 194/1)] focus:border-darkslateblue rounded-2xl font-poppins pt-3 pl-3 text-lg outline-none transition-all"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          className="text-lg font-poppins rounded-3xl px-5 py-2 text-darkslateblue bg-white border-2 border-solid border-darkslateblue flex flex-row items-center"
          onClick={handleSubmit}
        >
          Send
          {loading && (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-2"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 14,
                delay: 0.5,
              }}
            >
              <path
                transition={{ duration: 2 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </motion.svg>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactMe;
