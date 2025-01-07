import TechStack from "../components/TechStack"
import { FaCircle } from "react-icons/fa";
export default function About() {
  return (
    <div>
      {/* Title */}
      <div className="flex justify-center items-center text-center text-4xl font-bold my-5 text-white">
        <h1>About Myself</h1>
      </div>
      {/* Description */}
      <div>
        <p className="text-center text-white">
          I am a Web Developer with a passion for creating beautiful and functional
          websites. I have a strong foundation in HTML, CSS and JavaScript, and
          have experience working with frameworks such as React and Next.js. I am
          also experienced in working with databases such as MongoDB and MySQL.
          Currently I am learning Php and Laravel and I am also learning computer science to better understand how a computer works.
        </p>
      </div>
      <div className="text-white my-5">
        <h2>Some of the things that I can do:</h2>
        <ul>
          <li className="flex flex-row items-center gap-1"><FaCircle/><span>Create a company profile website</span></li>
          <li className="flex flex-row items-center gap-1"><FaCircle/><span>Create an E-Commerce website</span></li>
          <li className="flex flex-row items-center gap-1"><FaCircle/><span>Web Scraping</span></li>
          <li className="flex flex-row items-center gap-1"><FaCircle/><span>Web Scraping</span></li>
        </ul>
      </div>
      <div className="mt-5">
        <TechStack/>
      </div>
    </div>
  )
}
