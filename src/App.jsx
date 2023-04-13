
import './App.css'
import Header from './components/Header'
import CategoriesSelection from './components/CategoriesSelection'
import Products from './components/Products'
import Filters from './components/Filters'
// import { Button } from 'react-bootstrap'


function App() {
  return (
   <>
    <Header />
    <CategoriesSelection />
    <hr className="home-divider"/>
    <Filters />
    <Products />
   </>
  )
}

export default App
