interface Repo {
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
}

/**
 * Maps a programming language to a small coloured dot. Unknown languages
 * default to the neon accent. The colours loosely follow GitHub's own
 * language colour palette.
 */
function languageToColor(lang: string | null): string {
  const map: Record<string, string> = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    Ruby: '#701516',
    Rust: '#dea584',
    Go: '#00ADD8',
    HTML: '#e34c26',
    CSS: '#563d7c',
    PHP: '#4F5D95',
  }
  return map[lang ?? ''] ?? '#00ff41'
}

interface Props {
  repo: Repo
}

export default function ProjectCard({ repo }: Props) {
  return (
    <div className="border border-gray-700 rounded-lg p-4 bg-gray-900 hover:border-neon transition-colors flex flex-col justify-between">
      <div>
        <h3 className="font-mono text-lg text-neon flex items-center mb-2">
          📁{' '}
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {repo.name}
          </a>
        </h3>
        <p className="text-sm text-gray-400 mb-4 min-h-[2.5rem]">
          {repo.description || <span className="text-gray-600">// No description</span>}
        </p>
      </div>
      <div className="flex items-center justify-between text-xs font-mono">
        <div className="flex items-center space-x-2">
          {repo.language && (
            <>
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: languageToColor(repo.language) }}
              ></span>
              <span className="text-gray-400">{repo.language}</span>
            </>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">★ {repo.stargazers_count}</span>
          <span className="text-gray-400">🍴 {repo.forks_count}</span>
        </div>
      </div>
    </div>
  )
}