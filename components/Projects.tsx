'use client'

import { AlertTriangle, ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'
import ProjectCard, { GitHubRepo } from './ProjectCard'

function ProjectsSkeleton() {
  return (
    <section className="px-5 py-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <div className="mb-4 h-4 w-40 rounded-full shimmer" />
          <div className="h-16 w-80 max-w-full rounded-2xl shimmer" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="glass rounded-[2rem] p-6">
              <div className="h-12 w-12 rounded-2xl shimmer" />
              <div className="mt-8 h-6 w-2/3 rounded-xl shimmer" />
              <div className="mt-5 h-4 w-full rounded-xl shimmer" />
              <div className="mt-3 h-4 w-5/6 rounded-xl shimmer" />
              <div className="mt-8 flex gap-2">
                <div className="h-7 w-20 rounded-full shimmer" />
                <div className="h-7 w-24 rounded-full shimmer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Projects() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'fatiharridho'
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchRepos() {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
          {
            signal: controller.signal,
            headers: {
              Accept: 'application/vnd.github+json'
            }
          }
        )

        if (!response.ok) {
          throw new Error(`GitHub API returned ${response.status}`)
        }

        const data = (await response.json()) as GitHubRepo[]
        setRepos(data)
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()

    return () => controller.abort()
  }, [username])

  if (loading) {
    return <ProjectsSkeleton />
  }

  return (
    <section id="projects" className="relative px-5 py-28 md:px-8">
      <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-accent">
              02 / Projects
            </p>
            <h2 className="text-5xl font-black tracking-[-0.04em] text-soft-white md:text-7xl">
              Selected Work
            </h2>
            <div className="gradient-line mt-5" />
          </div>

          <p className="max-w-md text-lg leading-8 text-soft-muted">
            Repositories, experiments, and digital products pulled directly from
            GitHub.
          </p>
        </div>

        {error ? (
          <div className="glass rounded-[2rem] p-8 text-soft-muted">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-300">
              <AlertTriangle />
            </div>
            <h3 className="text-2xl font-bold text-soft-white">
              Failed to load projects
            </h3>
            <p className="mt-3 font-mono text-sm text-soft-muted">{error}</p>
          </div>
        ) : repos.length === 0 ? (
          <div className="glass rounded-[2rem] p-8 text-center">
            <h3 className="text-2xl font-bold text-soft-white">
              No repositories found.
            </h3>
            <p className="mt-3 text-soft-muted">
              Try changing NEXT_PUBLIC_GITHUB_USERNAME in your environment.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.03] px-7 py-4 font-bold text-soft-white backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-primary/60 hover:shadow-glow"
          >
            View All on GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}