import Contact from "../components/Contact";

export default function About() {
  return (
     <div className="flex flex-col gap-5  my-5">
          <h1 className="text-3xl text-center">About Me</h1>
          <div className="text-center text-xl mb-3">
            Hi, I'm Haris Baraja, a passionate and dedicated Full-Stack Web Developer who loves turning ideas into functional, user-friendly digital experiences.
            <br/><br />
            While I may not have formal work experience yet, I have developed a strong foundation in web development trhough self-learning and hands-on projects.
            My skills include front-end technologies like HTML, CSS, JavaScript, ReactJs, and back-end frameworks like NodeJs, Express and MySQL.
            <br /> <br />
            I'm exited to connect with others in the tech community and contribute to impactful projects. Lets build something amazing together! 
            <br /><br />
          </div>
          <div>
           <Contact />
          </div>
        </div>
  )
}
