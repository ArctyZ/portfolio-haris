import { Link } from "react-router";
import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

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
            <span>Available for work</span>
            <span>Reach out</span>
          </div>
        </div>
        {/* Contacts icons */}
        <div className="flex gap-2">
          <div className="border-[1px] border-white rounded-full p-2 flex items-center justify-center h-10 w-10 cursor-pointer">
            <Link to="https://github.com/ArctyZ" target="_blank"><FiGithub size={25} /></Link>
          </div>
          <div className="border-[1px] border-white rounded-full p-2 flex items-center justify-center h-10 w-10 cursor-pointer">
            <Link to="https://www.linkedin.com/in/muhammad-harits-b01b91218/" target="_blank"><FiLinkedin size={25} /></Link>
          </div>
          <div className="border-[1px] border-white rounded-full p-2 flex items-center justify-center h-10 w-10 cursor-pointer">
            <Link to="https://drive.google.com/file/d/1dZVQxh5NIaw4kUcxnUgY1xL_hBR79Nge/view?usp=drive_link" target="_blank"><FiFileText size={25} /></Link>
          </div>
        </div>
      </div>
      {/* A summmary about ourself */}
      <div className="mt-10">
        <p>I am a dedicated and adaptable Fullstack developer. A motivated self-starter with a passion for continous learning. I am eager to contribute to your team and bring innovative solutions to your projects.
        </p>
      </div>
    </div>
  );
}
