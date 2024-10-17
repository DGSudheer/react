import './App.css'
import { Title } from './Title.jsx'

function Description(){
  return <p>This is to announce that I'm lazy!</p>
}

function App() {
  return (
    <div>
      <Description />
      <h1>Apple!</h1>
      <Title />
    </div>
  );
}

export default App
