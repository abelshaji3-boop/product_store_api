const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Product Store</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              A modern shopping UI with curated collections, fast browsing, and a polished product display.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Quick links</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><a href="#" className="transition hover:text-white">Home</a></li>
              <li><a href="#collections" className="transition hover:text-white">Collections</a></li>
              <li><a href="#about" className="transition hover:text-white">About us</a></li>
              <li><a href="#" className="transition hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Stay updated</h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Join our newsletter for the latest product drops, offers, and insider shopping tips.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200 outline-none transition focus:border-emerald-500"
              />
              <button className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 Product Store. All rights reserved.</p>
          <p>Built with React, Tailwind, and Axios.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
