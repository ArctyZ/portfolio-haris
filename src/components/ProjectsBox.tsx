import ProjectCard from "./ProjectCard";

const projectsDb = [
  {
    title: "FileFusion",
    description: `FileFusion is a free & unlimited multimedia converter app that can convert many
formats of Images, Videos and Audios from one format to another.`,
    image: "./filefusion_thumb.png",
    tech: ["Next.js", "TailwindCSS", "Typescript", "FFMpeg", "WASM"],
    github: "https://github.com/ArctyZ/filefusion-converter",
    demo: "https://filefusion-gamma.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    description: `My own Personal Portfolio`,
    image: "./filefusion_thumb.png",
    tech: ["React", "TailwindCSS", "Typescript"],
    github: "https://github.com/ArctyZ/portfolio-haris",
    demo: "https://filefusion-gamma.vercel.app/",
  },
];

export default function ProjectsBox() {
  return (
    <div>
      <div className="grid gird-cols-1 md:grid-cols-2 gap-4">
        {projectsDb.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
