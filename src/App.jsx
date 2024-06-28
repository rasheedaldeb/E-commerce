import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './assets/Pages/Home'
import About from './assets/Pages/About'
import Contact from './assets/Pages/Contact'
import ProductsCart from './assets/Pages/ProductsCart'
import Footer from './Components/Footer/Footer'
import ShoppContext from './assets/Context/ShoppContext'
function App() {
  return (
    <>
    <ShoppContext>
      <Navbar logo="/images/logo.png" menu={[{link:"Home", path: "/"},
      {link:"About", path:"/about"}, 
        {link:"Contact Us", path: "/contact"}, {link:"Products Cart" , path: "/cart"},]}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<ProductsCart/>}/>
      </Routes>
      <Footer />
      </ShoppContext>
    </>
  )
}

export default App
