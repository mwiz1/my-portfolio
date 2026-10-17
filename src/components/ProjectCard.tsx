import { ExternalLink, Github, Layers } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  isHero?: boolean;
}

export default function ProjectCard({
  title,
  category,
  description,
  tags,
  demoUrl,
  githubUrl,
  isHero = false,
}: ProjectCardProps) {
  return (
    <div
      className={`group relative rounded-2xl bg-[#0f172a]/70 border border-slate-800 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between ${
        isHero ? "md:col-span-2 bg-gradient-to-br from-[#0f172a] to-[#131d31]" : ""
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            {category}
          </span>
          <div className="flex items-center gap-3">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h4>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}