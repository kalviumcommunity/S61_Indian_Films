// import './App.css';
// import Home from './Components/Home';
// import Entity from './Components/Entity';
// import {Routes,Route} from 'react-router-dom';
// import data from '../data.json';
// import AddEntityPage from './Components/AddEntity';
// import Navbar from './Components/Navbar';

// function App() {

//   return (
//     <>
//       {/* <Route path="/" element={<Home />} /> */}
//       {/* <Entity {...data} /> */}
//       {/* <AddEntityPage/> */}
//       <Navbar/>
//     </>
//   )
// };

// export default App;

import './App.css';
import Home from './Components/Home';
import Entity from './Components/Entity';
import AddEntityPage from './Components/AddEntity';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entities" element={<Entity />} />
        <Route path="/add-entity" element={<AddEntityPage />} />
      </Routes>
    </>
  );
}

export default App;
