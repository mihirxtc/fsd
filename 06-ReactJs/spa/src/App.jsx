import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import About from './pages/About'
import Contact from './pages/Contract.'
import Project from './pages/Project'
import Error from './pages/Error'

function App() {
  return (
    <>
      <nav className='navbar'>
        <div className="header">
          <Link className="logo" to={'/'}>xtc</Link>
          <div className='links'>
            <Link className="link" to={'/about'}>About Me</Link>
            <Link className="link" to={'/contact'}>Contact Me</Link>
            <Link className="link" to={'/project'}>Project</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </>
  )
}

export default App
