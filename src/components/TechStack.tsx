import {
  FaHtml5,
  FaJsSquare,
  FaGitAlt,
  FaReact,
  FaPhp,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTypescript, SiExpress, SiMysql } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function TechStack() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-bold text-xl ">Skills</h2>
      <div className="grid lg:grid-cols-6 grid-cols-4 sm:grid-rows-2 md:grid-row-2 w-full gap-2 text-xs md:text-md">
        <div className="gap-1 border-[1px] border-white rounded-md p-2 bg-transparent items-center flex flex-col w-26">
          <FaHtml5 size={25} />
          <span className="font-semibold">HTML</span>
        </div>
        <div className="gap-1 border-[1px] border-white rounded-md p-2 bg-transparent items-center flex flex-col w-26">
          <IoLogoCss3 size={25} />
          <span className="font-semibold">CSS</span>
        </div>
        <div className="gap-1 border-[1px] border-white rounded-md p-2 bg-transparent items-center flex flex-col w-26">
          <FaJsSquare size={25} />
          <span className="font-semibold">JavaScript</span>
        </div>
        <div className="gap-1 border-[1px] border-white rounded-md p-2 bg-transparent items-center flex flex-col w-26">
          <SiTypescript size={25} />
          <span className="font-semibold">TypeScript</span>
        </div>
        <div className="gap-1 border-[1px] border-white rounded-md p-2 bg-transparent items-center flex flex-col w-26">
          <FaReact size={25} />
          <span className="font-semibold">ReactJS</span>
        </div>
        <div className="gap-1 border-[1px] border-white rounded-md p-2 bg-transparent items-center flex flex-col w-26">
          <RiNextjsFill size={25} />
          <span className="font-semibold">Next.Js</span>
        </div>
        <div className="gap-1 border-[1px] border-white rounded-md p-2 bg-transparent items-center flex flex-col w-26">
          <SiExpress size={25} />
          <span className="font-semibold">ExpressJS</span>
        </div>
        <div className="gap-1 border-[1px] border-white rounded-md p-2 bg-transparent items-center flex flex-col w-26">
          <SiMysql size={25} />
          <span className="font-semibold">MySQL</span>
        </div>
        <div className="gap-1 border-[1px] border-white rounded-md p-2 bg-transparent items-center flex flex-col w-26">
          <FaGitAlt size={25} />
          <span className="font-semibold">git</span>
        </div>
        <div className="gap-1 border-[1px] border-white rounded-md p-2 bg-transparent items-center flex flex-col w-26">
          <FaPhp size={25} />
          <span className="font-semibold">php</span>
        </div>
        <div className="gap-1 border-[1px] border-white rounded-md p-2 bg-transparent items-center flex flex-col w-26">
          <FaNodeJs size={25} />
          <span className="font-semibold">NodeJs</span>
        </div>
        <div className="gap-1 border-[1px] border-white rounded-md p-2 bg-transparent items-center flex flex-col w-26">
          <RiTailwindCssFill size={25} />
          <span className="font-semibold">TailwindCSS</span>
        </div>
        
      </div>
    </div>
  );
}
