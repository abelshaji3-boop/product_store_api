import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white shadow-sm">
            P
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Product Store</p>
            <h1 className="text-xl font-semibold text-slate-900">Shop smart, buy fast</h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
          <Link to="/" className="transition hover:text-slate-900">Home</Link>
          <a href="#collections" className="transition hover:text-slate-900">Collections</a>
          <Link to="/about" className="transition hover:text-slate-900">About</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50">
            Sign in
          </button>
          <button className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
            Cart (0)
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
