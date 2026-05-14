'use client'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-soft-muted md:flex-row md:text-left">
        <p>
          © 2025 Fatih Arridho — Built with Next.js & Tailwind CSS — Deployed on
          ▲ Vercel
        </p>

        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition hover:border-primary/60 hover:text-soft-white"
        >
          Back to top
        </button>
      </div>
    </footer>
  )
}