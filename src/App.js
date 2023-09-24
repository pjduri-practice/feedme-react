import './App.css'
import FeedMeNow from './pages/FeedMeNow'
import FeedMeLater from './pages/FeedMeLater'
import NavBar from './layout/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Parallax } from 'react-scroll-parallax'

function App() {
  const bgGradient = 'linear-gradient(to top left, rgba(56, 253, 253, 0.2), rgba(10, 87, 87, 0.9))'
  const bsBtnClasses = 
  'btn btn-outline-light border text-black' +
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
