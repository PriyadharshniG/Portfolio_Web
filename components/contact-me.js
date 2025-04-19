const ContactMe = () => {
  return (
    <footer
      id="contact-me"
      className={`w-full bg-gradient-to-r from-[#d0eaff] to-[#e3f8ff] font-poppins font-light`}
    >
      <div className="mx-48 md:mx-5 mt-10">
        <h2 className="text-[30px] my-2 font-medium">Like What you See??</h2>
        <h2 className="text-[30px] my-2 font-medium">
          View my{" "}
          <a
            href="https://www.canva.com/design/DAGlDkeYcCY/p1LXpp-d1S5IXPMqrRuPvQ/edit?utm_content=DAGlDkeYcCY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            className="text-darkslateblue no-underline"
          >
            résumé
          </a>
          , get in touch 👇
        </h2>
        <p className="text-xl flex gap-4">
          <a
            href="mailto:dheenakrishna2020@outlook.com"
            className="no-underline text-black"
          >
            Email 📩
          </a>
          <span> | </span>
          <a
            href="https://www.linkedin.com/in/dheena-krishna-s/"
            target="_blank"
            className="no-underline text-black"
            rel="noreferrer noopener"
          >
            LinkedIn 💼
          </a>
        </p>
        <p className="mt-10 mb-6">
          Designed and Handcoded with <span className="text-red-600">♥</span> by
          Dheena S
        </p>
      </div>
    </footer>
  );
};

export default ContactMe;
