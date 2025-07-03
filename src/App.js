import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Cart from './pages/CartPage/Cart'
import './App.css'

function App() {
  return (
    <div>
      <nav className="nav-bar">
        <NavLink to="/" className={'nav-link'}>
          Home
        </NavLink>{' '}
        |{' '}
        <NavLink to="/cart" className={'nav-link'}>
          Cart
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
