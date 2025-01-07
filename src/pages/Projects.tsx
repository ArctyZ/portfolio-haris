import ProjectsBox from "../components/ProjectsBox";

export default function Projects() {
  return (
    <div className="flex flex-col gap-5  my-5">
      <h1 className="text-3xl text-center">Projects</h1>
      <div className="text-center text-xl mb-3">
        Some of My projects to showcase my skills.
      </div>
      <div>
        <ProjectsBox />
      </div>
    </div>
  )
}
