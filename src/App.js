import logo from './logo.svg'
import './App.css'
import { Button } from 'reactstrap'

// TODO install bootstrap
// TODO create components
const TesterButton = () => {
  const clickAlert = () => alert('Congratulations, you just clicked a button!  Click another one!')
  return <Button onClick={clickAlert}>No Added Styles</Button>
}

const LargePrimary = () => {
  const clickAlert = () => alert('Congratulations, you clicked a big blue button!  Click another one!')
  return <Button color='primary' size='large' onClick={clickAlert}>Large Primary</Button>
}

const SmallOutlineSuccess = () => {
  const clickAlert = () => alert('Congratulations, you clicked a little green button!  Click another one!')
  return <Button color='success' size='sm' outline onClick={clickAlert}>Small Success</Button>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TesterButton />
        <LargePrimary />
        <SmallOutlineSuccess />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
