import './App.css'
import FeedMeNow from './pages/FeedMeNow'
import FeedMeLater from './pages/FeedMeLater'
import NavBar from './layout/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Parallax } from 'react-scroll-parallax'

function App() {
  const bgGradient = 
    'linear-gradient(to top left, rgba(30, 240, 240, 0.5), rgba(10, 60, 60, 0.8))'
  const bsBtnClasses = 
  'btn btn-outline-info border text-black col text-nowrap overflow-hidden' +
  ' border-dark rounded-pill pt-1 pb-1 ps-2 pe-2 mt-1 mb-1' + 
  ' ms-2 me-2 bg-opacity-25 shadow '

  return (
    <div className="App bg-dark bg-opacity-25">
      <header className='container-fluid'>
        <div className='row'>
          <NavBar bgGradient={bgGradient} bsBtnClasses={bsBtnClasses} />
        </div>
        <Parallax speed={25}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home bgGradient={bgGradient} />} />
              <Route path='/feedmenow'
                element={
                  <FeedMeNow bgGradient={bgGradient} bsBtnClasses={bsBtnClasses} />} />
              <Route bgGradient={bgGradient} path='/feedmelater' element={<FeedMeLater />} />
            </Routes>
          </BrowserRouter>
        </Parallax>
      </header>
    </div>
  )
}

export default App;
