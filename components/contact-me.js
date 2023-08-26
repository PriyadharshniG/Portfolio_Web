const ContactMe = () => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="font-poppins ml-8 md:ml-3 heading max-w-fit" id="contact">
        Contact Me
      </h1>
      <button
        type="button"
        className="cursor-pointer max-w-fit ml-8 md:ml-3 h-14 mb-10 rounded-full px-4 text-lg font-poppins bg-white border border-darkslateblue hover:text-white hover:bg-darkslateblue transition-all top-0 right-0 hover:-top-1 hover:-right-1 relative"
        onClick={() => {
          window.open("mailto:vikaschauhanbca009@gmail.com", "_blank")
        }}
      >
        Send a Message
      </button>
    </div>
  );
};

export default ContactMe;
