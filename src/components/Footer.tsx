import { FaGithub } from "react-icons/fa"
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="mb-5 p-2">
        {/* Contacts */}
        <div className="flex flex-row items-center gap-4">
            <Link to={"https://github.com/ArctyZ"}><div className="flex gap-2 items-center text-slate-400 font-medium"><FaGithub size={20}/><span>Github</span></div></Link>
            <Link to={"mailto:harisbaraja56@gmail.com"}><div className="flex gap-2 items-center text-slate-400 font-medium"><IoIosMail size={20}/><span>Contact</span></div>  </Link>  
        </div>
    </div>
  )
}
