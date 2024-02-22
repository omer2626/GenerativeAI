import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { BrowserRouter, Routes,  Route,Link } from 'react-router-dom';
import Main from './components/MainPage';
import TTI from './components/TTI';
import TTS from './components/TTS';
import './components/Main.css'
import TTM from './components/TTM';
import './components/TTI.css'

function App() {

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>    
          </Route>
          <Route path='/TTI' element={<TTI />}></Route>
          <Route path='/TTM' element={<TTM/>}></Route>
          <Route path='/TTS' element={<TTS></TTS>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App


// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Main from "./components/MainPage";

// function App(){
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Main></Main>}></Route>
//         </Routes>
//       </Router>
//     </>
//   )
// }

// export default App;