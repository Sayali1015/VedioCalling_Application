import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import VedioRoom from './VedioRoom'
import ZegoCloud from './ZegoCloud'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ZegoCloud />}/>
      <Route path='/room/:id' element={<VedioRoom />}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
