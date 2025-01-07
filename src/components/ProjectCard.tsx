import { Link } from "react-router";

interface CardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  demo,
}: CardProps) {
  return (
    <div className="card card-compact mt-5 hover:scale-105 transition ease-in-out duration-500">
      {/* Image Thumbnail */}
      <figure>
        <img src={image} alt={title} />
      </figure>
      {/* Details */}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex gap-2 flex-wrap">
          {tech.map((item, index) => (
            <div key={index} className="badge badge-outline hidden md:flex items-center">
              {item}
            </div>
          ))}
        </div>
        <p>{description}</p>
        <div className="card-actions justify-end gap-2">
          <button className="btn btn-ghost">
            <Link to={github}>Repository</Link>
          </button>
          <button className="btn btn-ghost">
            <Link to={demo}>Live Demo</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
