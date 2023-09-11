import './App.css'
import FeedMeNow from './pages/FeedMeNow/FeedMeNow'
import NavBar from './layout/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <header>
        <div className='row'>
          <NavBar />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path='/feedmenow' element={<FeedMeNow id={5}/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App;
