const About = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-linear-to-r from-emerald-600 via-slate-900 to-slate-800 p-10 text-white shadow-xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-emerald-200">About Product Store</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Modern shopping experience for everyday products
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-emerald-100">
              We bring curated products, fast browsing, and beautiful visuals into one storefront. Explore collections, discover trending items, and shop with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="rounded-3xl bg-white/10 p-6 text-slate-100 shadow-lg backdrop-blur-md">
                <p className="text-3xl font-semibold">250+</p>
                <p className="mt-2 text-sm text-slate-200">Curated product items</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-6 text-slate-100 shadow-lg backdrop-blur-md">
                <p className="text-3xl font-semibold">24/7</p>
                <p className="mt-2 text-sm text-slate-200">Support for shoppers</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-slate-100">
            <div className="rounded-3xl bg-white/10 p-8 shadow-xl">
              <h3 className="text-xl font-semibold">Fast delivery</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Get your order quickly with reliable shipping and tracking, so you can enjoy your purchase sooner.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-8 shadow-xl">
              <h3 className="text-xl font-semibold">Trusted quality</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Every product is selected for quality and value, making it easy to find what you really need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
