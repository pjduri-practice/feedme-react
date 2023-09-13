import './App.css'
import FeedMeNow from './pages/FeedMeNow'
import FeedMeLater from './pages/FeedMeLater'
import NavBar from './layout/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
      <header className='container-fluid'>
        <div className='row'>
          <NavBar />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/feedmenow'
              element={
                <FeedMeNow />} />
            <Route path='/feedmelater' element={<FeedMeLater />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App;
