import Hero from "./components/Hero"
import TechStack from "./components/TechStack"
import ProjectsBox from "./components/ProjectsBox"

function App() {
 

  return(
    <div className="flex flex-col gap-4">
      <Hero/>
      <TechStack/>
      <ProjectsBox/>
    </div>
  )
}

export default App
