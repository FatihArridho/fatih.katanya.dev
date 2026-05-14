'use client'

import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

interface Repo {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
}

/**
 * Projects section fetches the latest repositories from the specified
 * GitHub username using the public REST API. It displays six cards and
 * includes skeleton placeholders and error handling for rate limits or
 * network failures.
 */
export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'fatiharridho'

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
          {
            headers: {
              Accept: 'application/vnd.github+json',
            },
          }
        )
        if (!res.ok) {
          const text = await res.text()
          throw new Error(`Error fetching repos: ${res.status} ${res.statusText}\n${text}`)
        }
        const data: Repo[] = await res.json()
        setRepos(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [username])

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="terminal-divider">
        <span>{String.raw`>_`}</span>
      </div>
      <h2 className="text-3xl font-mono text-neon mb-6">GitHub Projects</h2>
      {error && (
        <div className="border border-red-500 bg-red-950 p-4 rounded-lg text-red-300 font-mono mb-6">
          {error}
        </div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="border border-gray-700 rounded-lg p-4 bg-gray-900 animate-pulse"
              >
                <div className="h-4 bg-gray-800 rounded mb-3 w-3/4"></div>
                <div className="h-3 bg-gray-800 rounded mb-2 w-full"></div>
                <div className="h-3 bg-gray-800 rounded mb-2 w-5/6"></div>
                <div className="h-3 bg-gray-800 rounded mb-2 w-2/3"></div>
                <div className="h-4 bg-gray-800 rounded w-1/3 mt-4"></div>
              </div>
            ))
          : repos.map((repo) => <ProjectCard key={repo.id} repo={repo} />)}
      </div>
      <div className="mt-8 text-center">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-neon text-neon px-6 py-2 rounded font-mono hover:bg-neon hover:text-background transition-colors"
        >
          [Lihat Semua di GitHub →]
        </a>
      </div>
    </section>
  )
}