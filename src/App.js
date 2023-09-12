import './App.css'
import { useState } from 'react'
import FeedMeNow from './pages/FeedMeNow/FeedMeNow'
import FeedMeLater from './pages/FeedMeLater/FeedMeLater'
import NavBar from './layout/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import choiceListGroups from './components/data/list-layouts.json'
import Home from './pages/Home'

function App() {
  const [layoutId, setLayoutId] = useState(choiceListGroups[0].id)

  return (
    <div className="App">
      <header className='container-fluid'>
        <div className='row'>
          <NavBar setLayoutId={setLayoutId} />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/feedmenow'
              element={
                <FeedMeNow
                  id={layoutId} setLayoutId={setLayoutId} />} />
            <Route path='/feedmelater' element={<FeedMeLater />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App;
