import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './app/@sys/Home/Home'
import Header from './app/@sys/Header/Header';
import Login from './app/@sys/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
