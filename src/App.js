// import logo from './logo.svg'
import './App.css'
import { Button } from 'reactstrap'
import FeedMeNow from './components/FeedMeNow/FeedMeNow'
import { useState } from 'react'

// TODO ChoiceListGroup 
// TODO Navigation

function App() {

  return (
    <div className="App">
      <header>
        <div className='row'>
          {/* <Navigation /> */}
        </div>
      </header>
      <main>
        <div>
          <FeedMeNow id='1' />
        </div>
      </main>
    </div>
  )
}

export default App;
