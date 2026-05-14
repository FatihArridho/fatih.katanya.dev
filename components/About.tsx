import TerminalWindow from './TerminalWindow'

/**
 * About section describing the developer. It leverages the TerminalWindow
 * component to present the information as if it were a JSON or markdown
 * document opened in a code editor. Technical skills are displayed as
 * coloured tags reminiscent of syntax highlighting.
 */
export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="terminal-divider">
        <span>{String.raw`/* —————————————— */`}</span>
      </div>
      <h2 className="text-3xl font-mono text-neon mb-6">About Me</h2>
      <TerminalWindow title="about.json">
        {String.raw`{
  "name": "Fatih Arridho",
  "role": "Full‑Stack Developer",
  "location": "Jakarta, Indonesia",
  "passion": "Building open source and crafting code with aesthetics",
  "philosophy": "Code is an art that solves problems elegantly."
}`}
      </TerminalWindow>
      <p className="mt-6 text-gray-300 font-sans leading-relaxed">
        Hai! Saya Fatih Arridho, seorang developer yang gemar bereksperimen dengan
        teknologi web modern. Saya percaya bahwa open source adalah katalis
        inovasi dan bahwa estetika terminal memiliki daya tarik tersendiri.
        Ketika tidak menulis kode, saya menyelami dokumentasi, berkontribusi
        pada proyek komunitas, atau menikmati secangkir kopi sambil mengerjakan
        side project berikutnya.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Git'].map(
          (skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full border border-neon text-neon font-mono text-xs hover:bg-neon hover:text-background transition-colors"
            >
              {`[${skill}]`}
            </span>
          )
        )}
      </div>
    </section>
  )
}