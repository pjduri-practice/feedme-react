// import logo from './logo.svg'
import './App.css'
import { Button } from 'reactstrap'
import FeedMeNow from './components/FeedMeNow/FeedMeNow'

// TODO install bootstrap
// TODO create components
// TODO set up data layer for development.
const TesterButton = () => {
  const clickAlert = () => alert('Congratulations, you just clicked a button!  Click another one!')
  return <Button className='col col-4' onClick={clickAlert}>No Added Styles</Button>
}

const LargePrimary = () => {
  const clickAlert = () => alert('Congratulations, you clicked a big blue button!  Click another one!')
  return <Button className='col col-4' color='primary' size='large' onClick={clickAlert}>Large Primary</Button>
}

const SmallOutlineSuccess = () => {
  const clickAlert = () => alert('Congratulations, you clicked a little green button!  Click another one!')
  return <Button className='col col-4' color='success' size='sm' outline onClick={clickAlert}>Small Success</Button>
}

function App() {
  return (
    <div className="App">
      <header>
        <div className='row'>
          <TesterButton />
          <LargePrimary />
          <SmallOutlineSuccess />
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
