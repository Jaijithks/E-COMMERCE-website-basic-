import { useContext } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Auth from './components/Auth'
import Icon from './assets/hero.png'
import About from './components/About'
import Signup from './components/Signup'
import { AuthContext } from './Context/AuthContext'

function App() {
  const { user, logOut } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <nav className='navBar'>
        <img src={Icon} className='icon' />
        <nav className='navBar1'>
          <Link to="/">Home</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/About">About</Link>
        </nav>
        <nav className='navBar2'>
          {user ? (
            <>
              <span style={{ color: 'var(--text-h)', marginRight: 12 }}>Welcome, {user.name}</span>
              <button onClick={() => { logOut(); window.location.href = '/'; }} style={{ background: 'transparent', color: 'var(--accent)', border: 'none', fontWeight: 700, cursor: 'pointer' }}>Logout</button>
            </>
          ) : (
            <Link to="/Auth">Login</Link>
          )}
        </nav>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/Auth' element={<Auth />} />
          <Route path='/About' element={<About />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
