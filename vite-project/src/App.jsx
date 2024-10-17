import './App.css'
import { Title } from './Title.jsx'
import ProductList from './ProductList.jsx'

function Description(){
  return <p>This is to announce that I'm lazy!</p>
}

function App() {
  return (
    // <div>
    //   <Description />
    //   <h1>Apple!</h1>
    //   <Title />
    // </div>
    <>
      <ProductList />
    </>
  );
}

export default App
