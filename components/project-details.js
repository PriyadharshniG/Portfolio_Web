import {nanoid} from 'nanoid'
const ProjectDetails = (props) => {
  return (
    <div className="w-5/6 grid grid-cols-3 md:w-full gap-10">
      <img
        src={props.imageURL}
        alt="Skewed Image"
        className="rounded-md w-full object-fit md:hidden"
      />
      <div className="md:ml-3 col-span-2 ml-30 md:col-span-3">
        <h1 className="heading max-w-fit">{props.name}</h1>
        <p>{props.description}</p>
        <div className="flex flex-wrap gap-5">
          {props.skills.map((x) => {
            return (
              <button
                type="button"
                className="h-10 min-w-min font-poppins text-lg border-2 rounded-md border-darkslateblue bg-white"
                key={nanoid()}
              >
                {x}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          className="cursor-pointer font-poppins mr-5 h-12 my-5 px-6 text-lg rounded-md bg-darkslateblue text-white hover:text-darkslateblue hover:bg-white transition-all border border-darkslateblue top-0 right-0 hover:-top-1 hover:-right-1 relative"
          onClick={() =>
            window.open(props.liveLink, "_blank")
          }
        >
          Live Demo{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </button>
        <button
          type="button"
          className="md:mt-1 cursor-pointer h-12 my-5 px-6 text-lg rounded-md bg-darkslateblue text-white hover:text-darkslateblue hover:bg-white transition-all border border-darkslateblue top-0 right-0 hover:-top-1 hover:-right-1 relative"
          onClick={() =>
            window.open(props.sourceCode, "_blank")
          }
        >
          View Source Code{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
