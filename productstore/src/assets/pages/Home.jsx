import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/products"
      )
      setProducts(response.data.products)
    } catch (error) {
      console.error("Failed to load products", error)
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      await getProducts()
    }

    fetchProducts()
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-semibold text-slate-900">Products</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            {(item.thumbnail || item.images?.[0]) && (
              <div className="h-56 overflow-hidden bg-slate-100">
                <img
                  src={item.thumbnail || item.images[0]}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="p-5">
              <h2 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h2>
              {item.description ? (
                <p className="mb-3 text-sm leading-6 text-slate-600">{item.description}</p>
              ) : null}
              {item.price ? (
                <div className="text-sm font-medium text-emerald-600">${item.price}</div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;