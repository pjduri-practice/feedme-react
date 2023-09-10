import './App.css'
import FeedMeNow from './pages/FeedMeNow/FeedMeNow'
import NavBar from './layout/NavBar'

// TODO ChoiceListGroup 
// TODO Navigation

function App() {

  return (
    <div className="App">
      <header>
        <div className='row'>
          <NavBar />
        </div>
      </header>
      <main style={{ marginTop: 85 }}>
        <div className='row'>
          <div className='col col-3' >
            <FeedMeNow id='1' />
          </div>
          <div className='col col-3' >
            <FeedMeNow id='2' />
          </div>
          <div className='col col-3' >
            <FeedMeNow id='3' />
          </div>
          <div className='col col-3' >
            <FeedMeNow id='4' />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;
