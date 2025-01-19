import { Link } from "react-router";
import { IoIosMail } from "react-icons/io";
import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

export default function Contact() {
  return (
    <div className=" relative border-[1px] border-white md:w-[75%] m-auto">
      <h1 className="absolute -top-4 left-2 text-white text-xl bg-black">
        Information
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 p-5 w-full justify-items-center items-center content-center">
        <div className="shine">
          <Link to="mailto:harisbaraja56@gmail.com" className="flex flex-col gap-2 items-center p-3 " target="_blank">
            <IoIosMail size={50} />
            <span className="text-xl">Email</span>
          </Link>
        </div>
        <div className="shine">
          <Link to="https://github.com/ArctyZ" className="flex flex-col gap-2 items-center p-3" target="_blank">
            <FiGithub size={50} />
            <span className="text-xl">Github</span>
          </Link>
        </div>
        <div className="shine">
          <Link target="_blank" to="https://www.linkedin.com/in/muhammad-harits-b01b91218/" className="flex flex-col gap-2 items-center p-3">
            <FiLinkedin size={50} />
            <span className="text-xl">LinkedIn</span>
          </Link>
        </div>
        <div className="shine">
          <Link target="_blank" to="https://drive.google.com/file/d/1u03c4U4Of1aqPioWhuTZmWG5f2Rl6Lwi/view?usp=drive_link" className="flex flex-col gap-2 items-center p-3">
            <FiFileText size={50} />
            <span className="text-xl">Resume</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
