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
import UpdateEntity from './Components/UpdateEntity';
import MovieDB from './Components/MovieDB';
import Login from './Components/Login';
import Logout from './Components/Logout';
import RegisterForm from './Components/Register';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entities" element={<Entity />} />
        <Route path="/movies" element={<MovieDB />} />
        <Route path="/add-entity" element={<AddEntityPage />} />
        <Route path='/update/:id' element={<UpdateEntity />} />
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
      </Routes>
    </>
  );
}

export default App;
