import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import ProductCard from './components/ProductCard'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="pt-6">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/ProductCard' element={<ProductCard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
