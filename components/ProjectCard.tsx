'use client'

import { useRef, useState } from 'react'
import { ExternalLink, GitFork, Star, FolderGit2 } from 'lucide-react'

export interface GitHubRepo {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics?: string[]
}

const languageColors: Record<string, string> = {
  TypeScript: '#6c63ff',
  JavaScript: '#f7df1e',
  CSS: '#7c3aed',
  HTML: '#ff6b6b',
  Python: '#00d4aa',
  PHP: '#8b5cf6',
  Java: '#f97316',
  Go: '#22d3ee',
  Rust: '#fb923c'
}

export default function ProjectCard({ repo }: { repo: GitHubRepo }) {
  const cardRef = useRef<HTMLAnchorElement | null>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  const onMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const rotateY = ((x / rect.width) - 0.5) * 10
    const rotateX = -((y / rect.height) - 0.5) * 10

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    })
  }

  const onLeave = () => {
    setStyle({
      transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
    })
  }

  const color = repo.language
    ? languageColors[repo.language] || '#00d4aa'
    : '#6c63ff'

  const badges = repo.topics && repo.topics.length > 0
    ? repo.topics.slice(0, 3)
    : [repo.language || 'Open Source']

  return (
    <a
      ref={cardRef}
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
      className="group glass block min-h-[280px] rounded-[2rem] p-6 transition duration-300 will-change-transform hover:border-primary/50 hover:shadow-glow"
    >
      <div className="flex items-start justify-between">
        <div className="grid h-13 w-13 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-primary transition group-hover:scale-110 group-hover:text-accent">
          <FolderGit2 size={26} />
        </div>

        <ExternalLink
          size={20}
          className="text-soft-muted transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
        />
      </div>

      <h3 className="mt-8 font-mono text-xl font-bold text-soft-white">
        {repo.name}
      </h3>

      <p className="mt-4 line-clamp-2 min-h-[56px] leading-7 text-soft-muted">
        {repo.description || 'A carefully crafted repository waiting for a better description.'}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-soft-muted"
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
        <div className="flex items-center gap-2 font-mono text-sm text-soft-muted">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: color }}
          />
          {repo.language || 'Unknown'}
        </div>

        <div className="flex items-center gap-4 font-mono text-sm text-soft-muted">
          <span className="inline-flex items-center gap-1">
            <Star size={15} />
            {repo.stargazers_count}
          </span>
          <span className="inline-flex items-center gap-1">
            <GitFork size={15} />
            {repo.forks_count}
          </span>
        </div>
      </div>
    </a>
  )
}