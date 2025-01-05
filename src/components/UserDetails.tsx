import { Link } from "react-router";
import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";
import { FcOk } from "react-icons/fc";
import { IoIosMail } from "react-icons/io";

export default function UserDetails() {
  return (
    <div>
      {/* Photo , name and contact icons */}
      <div className="flex justify-between">
        {/* Avatar and name */}
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="rounded-full w-12 h-12">
              <img src="https://placeimg.com/192/192/people" alt="image" />
            </div>
          </div>
          <div className="">
            <h2 className="font-semibold text-lg">Haris Baraja</h2>
            < div className="flex flex-col relative w-50 h-6  overflow-hidden cursor-pointer uppp">
              <span className="flex gap-1 items-center"><FcOk size={15} />Available for work</span>
              <span className="flex gap-1 items-center"><IoIosMail size={20} /><Link  to="mailto:harisbaraja56@gmail.com">Reach out</Link></span>
            </div>
          </div>
        </div>
        {/* Contacts icons */}
        <div className="flex gap-2">
          <div className="border-[1px] border-white rounded-full p-2 flex items-center justify-center h-10 w-10 cursor-pointer hover:transform hover:scale-110 hover:rotate-3 ease-in-out duration-300 glossy relative overflow-hidden">
            <Link to="https://github.com/ArctyZ" target="_blank"><FiGithub size={20} /></Link>
          </div>
          <div className="border-[1px] border-white rounded-full p-2 flex items-center justify-center h-10 w-10 cursor-pointer hover:transform hover:scale-110 hover:rotate-3 ease-in-out duration-300 glossy relative overflow-hidden">
            <Link to="https://www.linkedin.com/in/muhammad-harits-b01b91218/" target="_blank"><FiLinkedin size={20} /></Link>
          </div>
          <div className="border-[1px] border-white rounded-full p-2 flex items-center justify-center h-10 w-10 cursor-pointer hover:transform hover:scale-110 hover:rotate-3 ease-in-out duration-300 glossy relative overflow-hidden">
            <Link to="https://drive.google.com/file/d/1dZVQxh5NIaw4kUcxnUgY1xL_hBR79Nge/view?usp=drive_link" target="_blank"><FiFileText size={20} /></Link>
          </div>
        </div>
      </div>
      {/* A summmary about ourself */}
      <div className="mt-10 tracking-wide">
        <p>I am a dedicated and adaptable Fullstack developer. A motivated self-starter with a passion for continous learning. I am eager to contribute to your team and bring innovative solutions to your projects.
        </p>
      </div>
    </div>
  );
}
