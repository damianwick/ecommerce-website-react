
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'
import Products from './components/Products'
import Checkout from './components/Checkout'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'

function App() {
  return (
   <>
    <Header />
    <Routes>
      <Route path='/' element={<Products />}/>
      <Route path='/checkout' element={<Checkout />}/>
      <Route path='/product' element={<ProductPage />}/>
    </Routes>
    <Footer />
   </>
  )
}

export default App
