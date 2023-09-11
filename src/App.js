import './App.css'
import { useState } from 'react'
import FeedMeNow from './pages/FeedMeNow/FeedMeNow'
import NavBar from './layout/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import choiceListGroups from './components/data/list-layouts.json'

function App() {
  const [layoutId, setLayoutId] = useState(choiceListGroups[0].id)

  return (
    <div className="App">
      <header>
        <div className='row'>
          <NavBar setLayoutId={setLayoutId}/>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path='/feedmenow'
              element={
              <FeedMeNow
                id={layoutId} setLayoutId={setLayoutId}/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App;
