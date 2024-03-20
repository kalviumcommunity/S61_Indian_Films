import './App.css';
import Home from './Components/Home';
import Entity from './Components/Entity';
// import {Routes,Route} from 'react-router-dom';
import data from '../data.json';

function App() {

  return (
    <>
      {/* <Route path="/" element={<Home />} /> */}
      <Entity {...data} />
    </>
  )
};

export default App;